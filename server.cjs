const http = require("http");
const next = require("next");

const port = Number.parseInt(process.env.PORT || "3000", 10);
const hostname = process.env.HOSTNAME || "0.0.0.0";

const app = next({ dev: false });
const handle = app.getRequestHandler();

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

    const server = http.createServer((req, res) => {
      const url = req.url || "/";
      const pathname = url.split("?")[0] || "/";
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
        const originalSetHeader = res.setHeader.bind(res);
        res.setHeader = (name, value) => {
          if (String(name).toLowerCase() === "cache-control") {
            originalSetHeader("Cache-Control", "no-store, max-age=0, must-revalidate");
            return;
          }
          originalSetHeader(name, value);
        };
        res.setHeader("Cache-Control", "no-store, max-age=0, must-revalidate");
      } else if (isApi) {
        res.setHeader("Cache-Control", "no-store, max-age=0, must-revalidate");
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
