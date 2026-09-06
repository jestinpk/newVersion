"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import SubpageShell from "../components/SubpageShell";

export const dynamic = "force-static";

const DRIVE_API_URL = "https://script.google.com/macros/s/AKfycby1I2n_RGSgy8osztNv3oqOBmJXWegGe9xn3mWOG3zTGx_bOlPrNFF7QhXr8uhnIM77og/exec";
const FORMATS = ["pdf", "svg", "png"];
const EMPTY_FILES = { pdf: [], svg: [], png: [] };

function formatBytes(bytes) {
  const value = Number(bytes);
  if (!Number.isFinite(value) || value < 0) return "";
  if (value < 1024) return `${value} B`;
  const units = ["KB", "MB", "GB"];
  let size = value / 1024;
  let unit = units[0];
  for (let index = 1; index < units.length && size >= 1024; index += 1) {
    size /= 1024;
    unit = units[index];
  }
  return `${size >= 10 ? size.toFixed(1) : size.toFixed(2)} ${unit}`;
}

function displayName(fileName) {
  return String(fileName || "Untitled design")
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function validFile(file) {
  return file && /^[A-Za-z0-9_-]{10,200}$/.test(String(file.id || ""));
}

export default function DownloadsPage() {
  const [activeFormat, setActiveFormat] = useState("pdf");
  const [files, setFiles] = useState(EMPTY_FILES);
  const [status, setStatus] = useState("loading");
  const [updatedAt, setUpdatedAt] = useState(null);
  const [preview, setPreview] = useState(null);

  const loadFiles = useCallback(() => {
    const requestId = `pkLightsDrive_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    let finished = false;

    const finish = (nextStatus, payload) => {
      if (finished) return;
      finished = true;
      window.clearTimeout(timeout);
      delete window[requestId];
      script.remove();

      if (nextStatus === "ready" && payload?.ok === true && payload.files) {
        const nextFiles = Object.fromEntries(
          FORMATS.map(format => [format, (Array.isArray(payload.files[format]) ? payload.files[format] : []).filter(validFile)])
        );
        setFiles(nextFiles);
        setUpdatedAt(payload.updatedAt || new Date().toISOString());
        setStatus("ready");
      } else if (nextStatus !== "cancelled") {
        setStatus(current => current === "ready" ? "stale" : "error");
      }
    };

    window[requestId] = payload => finish("ready", payload);
    script.src = `${DRIVE_API_URL}?callback=${requestId}&_=${Date.now()}`;
    script.async = true;
    script.onerror = () => finish("error");
    document.head.appendChild(script);
    const timeout = window.setTimeout(() => finish("error"), 15000);

    return () => finish("cancelled");
  }, []);

  useEffect(() => {
    let cancelCurrent = loadFiles();
    const refresh = () => {
      cancelCurrent();
      cancelCurrent = loadFiles();
    };
    const interval = window.setInterval(refresh, 60000);
    const onVisibility = () => {
      if (document.visibilityState === "visible") refresh();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelCurrent();
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [loadFiles]);

  const visibleFiles = files[activeFormat] || [];
  const totalFiles = useMemo(() => FORMATS.reduce((total, format) => total + files[format].length, 0), [files]);

  function changeTab(format) {
    setActiveFormat(format);
    setPreview(null);
  }

  function handleTabKey(event, index) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let next = index;
    if (event.key === "ArrowLeft") next = (index - 1 + FORMATS.length) % FORMATS.length;
    if (event.key === "ArrowRight") next = (index + 1) % FORMATS.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = FORMATS.length - 1;
    changeTab(FORMATS[next]);
    document.getElementById(`download-tab-${FORMATS[next]}`)?.focus();
  }

  return (
    <SubpageShell eyebrow="Downloads" title="Design resources" intro="Preview and download available PK LIGHTS design files without leaving this website.">
      <section className="info-content downloads-content">
        <div className="resource-library">
          <div className="resource-library-head">
            <div>
              <span className="kicker">Live file library</span>
              <h2>Catalogues and editable designs</h2>
              <p>Files are loaded from the PK LIGHTS shared library and refreshed automatically.</p>
            </div>
            <div className={`resource-sync ${status}`} aria-live="polite">
              <span aria-hidden="true"></span>
              {status === "loading" && "Loading files…"}
              {status === "ready" && `${totalFiles} file${totalFiles === 1 ? "" : "s"} available`}
              {status === "stale" && "Showing saved list · refresh delayed"}
              {status === "error" && "Files could not load"}
            </div>
          </div>

          <div className="resource-tabs" role="tablist" aria-label="File formats">
            {FORMATS.map((format, index) => (
              <button
                key={format}
                id={`download-tab-${format}`}
                type="button"
                role="tab"
                aria-selected={activeFormat === format}
                aria-controls="download-files-panel"
                tabIndex={activeFormat === format ? 0 : -1}
                className={activeFormat === format ? "active" : ""}
                onClick={() => changeTab(format)}
                onKeyDown={event => handleTabKey(event, index)}
              >
                <span className={`resource-format-icon ${format}`}>{format.toUpperCase()}</span>
                <span><b>{format.toUpperCase()}</b><small>{files[format].length} available</small></span>
              </button>
            ))}
          </div>

          <div id="download-files-panel" className="resource-panel" role="tabpanel" aria-labelledby={`download-tab-${activeFormat}`}>
            {status === "loading" ? (
              <div className="resource-state"><span className="resource-spinner" aria-hidden="true"></span><h3>Loading {activeFormat.toUpperCase()} files</h3><p>Please wait a moment.</p></div>
            ) : status === "error" ? (
              <div className="resource-state error"><h3>Downloads are temporarily unavailable</h3><p>Refresh the page or contact PK LIGHTS on WhatsApp for the required file.</p><button type="button" onClick={loadFiles}>Try again</button></div>
            ) : visibleFiles.length === 0 ? (
              <div className="resource-state"><h3>No {activeFormat.toUpperCase()} files available yet</h3><p>New shared files will appear here automatically.</p></div>
            ) : (
              <div className="resource-grid">
                {visibleFiles.map(file => {
                  const isPreviewing = preview?.id === file.id;
                  return (
                    <article className="resource-card" key={file.id}>
                      <span className={`resource-file-badge ${activeFormat}`}>{activeFormat.toUpperCase()}</span>
                      <div>
                        <h3>{displayName(file.name)}</h3>
                        <p>{activeFormat.toUpperCase()}{formatBytes(file.size) ? ` · ${formatBytes(file.size)}` : ""}</p>
                        <div className="resource-actions">
                          <button type="button" aria-expanded={isPreviewing} onClick={() => setPreview(isPreviewing ? null : { ...file, format: activeFormat })}>{isPreviewing ? "Close preview" : "Preview"}</button>
                          <a href={`https://drive.google.com/uc?export=download&id=${encodeURIComponent(file.id)}`} target="_blank" rel="noopener noreferrer">Download {activeFormat.toUpperCase()}</a>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {preview && preview.format === activeFormat && (
              <section className="resource-preview" aria-label={`Preview ${displayName(preview.name)}`}>
                <div><h3>{displayName(preview.name)}</h3><button type="button" onClick={() => setPreview(null)}>Close</button></div>
                <iframe title={`Preview ${displayName(preview.name)}`} src={`https://drive.google.com/file/d/${preview.id}/preview`} loading="lazy" allow="autoplay" />
              </section>
            )}
          </div>
        </div>

        <div className="download-note">
          <b>Can’t find a product file?</b>
          <p>Send the product name or photo. We can confirm whether a catalogue, specification sheet or design is available.</p>
          <a href="/newVersion/quote.html">Ask for a product file →</a>
        </div>

        {updatedAt && <p className="resource-updated">Library last checked {new Date(updatedAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}</p>}
      </section>
    </SubpageShell>
  );
}
