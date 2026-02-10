const http = require("http");
const next = require("next");

const port = Number.parseInt(process.env.PORT || "3000", 10);
const hostname = process.env.HOSTNAME || "0.0.0.0";

const app = next({ dev: false });
const handle = app.getRequestHandler();

const noStoreValue = "private, no-cache, no-store, must-revalidate, max-age=0";

app
  .prepare()
  .then(() => {
    const legacyProductImageRedirects = new Map([
      ["/images/products/Chipacitos Clasicos.jpeg", "/images/products/chipacitos-clasicos.jpeg"],
      ["/images/products/Chipá Saborizado.jpeg", "/images/products/chipa-saborizado.jpeg"],
      ["/images/products/Chipá XXL.jpeg", "/images/products/chipa-xxl.jpeg"],
      ["/images/products/Chipa Sandwich.jpeg", "/images/products/chipa-sandwich.jpeg"],
      ["/images/products/Chipánada.jpeg", "/images/products/chipanada.jpeg"],
      ["/images/products/Chipáncho.jpeg", "/images/products/chipancho.jpeg"],
    ]);

    const applyNoCacheHeaders = (res) => {
      const originalSetHeader = res.setHeader.bind(res);
      res.setHeader = (name, value) => {
        const headerName = String(name).toLowerCase();
        if (headerName === "cache-control") {
          originalSetHeader("Cache-Control", noStoreValue);
          return;
        }
        originalSetHeader(name, value);
      };

      const originalWriteHead = res.writeHead.bind(res);
      res.writeHead = (...args) => {
        const headerIndex = args.findIndex((arg) => arg && typeof arg === "object" && !Array.isArray(arg));
        if (headerIndex !== -1) {
          args[headerIndex] = { ...args[headerIndex], "Cache-Control": noStoreValue, Pragma: "no-cache", Expires: "0" };
        } else {
          res.setHeader("Cache-Control", noStoreValue);
          res.setHeader("Pragma", "no-cache");
          res.setHeader("Expires", "0");
        }
        return originalWriteHead(...args);
      };

      res.setHeader("Cache-Control", noStoreValue);
      res.setHeader("Pragma", "no-cache");
      res.setHeader("Expires", "0");
      res.setHeader("X-LiteSpeed-Cache-Control", "no-cache");
      res.setHeader("X-LiteSpeed-Cache", "no-cache");
    };

    const server = http.createServer((req, res) => {
      const url = req.url || "/";
      const pathname = url.split("?")[0] || "/";
      if (pathname === "/_next/image") {
        try {
          const fullUrl = new URL(url, `http://${hostname}:${port}`);
          const rawImageUrl = fullUrl.searchParams.get("url");
          if (rawImageUrl) {
            const decodedImageUrl = decodeURIComponent(rawImageUrl);
            const redirectedImageUrl = legacyProductImageRedirects.get(decodedImageUrl) || decodedImageUrl;
            if (redirectedImageUrl.startsWith("/")) {
              res.statusCode = 307;
              res.setHeader("Location", redirectedImageUrl);
              applyNoCacheHeaders(res);
              res.end();
              return;
            }
          }
        } catch {
          // ignore and fall through
        }
      }
      const decodedPathname = (() => {
        try {
          return decodeURIComponent(pathname);
        } catch {
          return pathname;
        }
      })();

      const legacyRedirectTarget = legacyProductImageRedirects.get(decodedPathname);
      if (legacyRedirectTarget) {
        res.statusCode = 301;
        res.setHeader("Location", legacyRedirectTarget);
        res.end();
        return;
      }

      const isNextInternal = pathname.startsWith("/_next/");
      const isApi = pathname.startsWith("/api/");
      const isPublicAsset =
        pathname.startsWith("/images/") ||
        pathname === "/favicon.ico" ||
        pathname === "/robots.txt" ||
        pathname === "/sitemap.xml" ||
        pathname.endsWith(".png") ||
        pathname.endsWith(".jpg") ||
        pathname.endsWith(".jpeg") ||
        pathname.endsWith(".webp") ||
        pathname.endsWith(".svg") ||
        pathname.endsWith(".ico") ||
        pathname.endsWith(".txt") ||
        pathname.endsWith(".xml");

      const shouldDisableCache = !isNextInternal && !isPublicAsset;

      if (shouldDisableCache) {
        applyNoCacheHeaders(res);
      } else if (isApi) {
        applyNoCacheHeaders(res);
      }

      handle(req, res);
    });
    server.listen(port, hostname, () => {
      process.stdout.write(`Ready on http://${hostname}:${port}\n`);
    });
  })
  .catch((err) => {
    process.stderr.write(`${err instanceof Error ? err.stack || err.message : String(err)}\n`);
    process.exit(1);
  });
