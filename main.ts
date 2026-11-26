import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Pak Dedi, I deleted the production database this morning. Your order from March is still in my head: two kilos of rice, one charger, and a note that said 'for later'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry must be 1-200 chars on one line, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`v2: wrote entry.txt (${LINE.length} chars)`);
