import { access, rename, rm } from "node:fs/promises";
import { join } from "node:path";

const clientDir = join(process.cwd(), "dist", "client");
const prefixedDir = join(clientDir, "newVersion");
const nestedAssets = join(prefixedDir, "_next");
const publicAssets = join(clientDir, "_next");

await access(nestedAssets);
await rm(publicAssets, { recursive: true, force: true });
await rename(nestedAssets, publicAssets);
await rm(prefixedDir, { recursive: true, force: true });

console.log("GitHub Pages assets prepared for /newVersion/.");
