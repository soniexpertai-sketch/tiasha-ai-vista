// Generates the printable QR code for the /connect link page.
// Run with `npm run qr`; outputs land in public/brand/.
import QRCode from "qrcode";

const URL = "https://www.tiashaaivista.com/connect?utm_source=qr";
const options = {
  errorCorrectionLevel: "H", // survives smudges, folds and small logos on top
  margin: 4,
  color: { dark: "#011c3fff", light: "#ffffffff" }, // brand navy on white
};

await QRCode.toFile("public/brand/connect-qr.svg", URL, { ...options, type: "svg" });
await QRCode.toFile("public/brand/connect-qr.png", URL, { ...options, type: "png", width: 1024 });
console.log(`QR code for ${URL} written to public/brand/connect-qr.{svg,png}`);
