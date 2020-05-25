const fs = require("fs");

module.exports = {
  getCredentials: () => {
    const privateKey = fs.readFileSync(
      "/etc/letsencrypt/live/shol.xyz/privkey.pem",
      "utf-8"
    );
    const certificate = fs.readFileSync(
      "/etc/letsencrypt/live/shol.xyz/cert.pem",
      "utf-8"
    );
    const ca = fs.readFileSync(
      "/etc/letsencrypt/live/shol.xyz/chain.pem",
      "utf-8"
    );
    return (credentials = {
      key: privateKey,
      cert: certificate,
      ca: ca,
    });
  },
};
