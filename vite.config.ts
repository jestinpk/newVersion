import { defineConfig } from "vite";
import vinext from "vinext";

const githubPagesDevRoutes = {
  name: "github-pages-dev-routes",
  configureServer(server) {
    server.middlewares.use((request, _response, next) => {
      if (!request.url?.startsWith("/newVersion/")) return next();
      const [pathname, query = ""] = request.url.split("?");
      const localPath = pathname
        .replace(/^\/newVersion/, "")
        .replace(/\.html$/, "") || "/";
      request.url = `${localPath}${query ? `?${query}` : ""}`;
      next();
    });
  },
};

export default defineConfig({
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
  },
  plugins: [githubPagesDevRoutes, vinext()],
});
