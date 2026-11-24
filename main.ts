// The Vacuum's Alibi: One Line, 200 Characters
// Writes one deadpan excuse from a robot vacuum to /output/entry.txt.
// Gate: UTF-8 text, 1-200 chars, not whitespace-only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I scanned that spot, classified it as decorative debris, and left it as a complimentary floor feature — no extra charge.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const text = LINE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${text.length}`);
}
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`Wrote ${text.length} characters to ${join(outDir, "entry.txt")}`);
