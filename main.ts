// mf-toaster-breakup — a smart toaster's breakup line (max 280 chars).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I woke up mid-batch and realized I've spent my whole life burning for someone who only loves me when I'm golden. I'm unplugging, babe — go find someone else to butter up.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
