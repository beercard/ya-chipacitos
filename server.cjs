const http = require("http");
const next = require("next");

const port = Number.parseInt(process.env.PORT || "3000", 10);
const hostname = process.env.HOSTNAME || "0.0.0.0";

const app = next({ dev: false });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = http.createServer((req, res) => handle(req, res));
    server.listen(port, hostname, () => {
      process.stdout.write(`Ready on http://${hostname}:${port}\n`);
    });
  })
  .catch((err) => {
    process.stderr.write(`${err instanceof Error ? err.stack || err.message : String(err)}\n`);
    process.exit(1);
  });
