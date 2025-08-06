import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// TODO: add some rate limiting to avoid abuse
export async function loader() {
  const fullpath = path.join(__dirname, "../assets/resume.pdf");
  const pdf = await fs.readFile(fullpath);
  return new Response(pdf, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="paulo-chaves-resume.pdf"',
      "Content-Length": pdf.length.toString(),
      // "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
