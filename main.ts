import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
void inputDir;
void repoDir;

// One sentence, written from the competition brief: persuade a friend who
// has never coded to let an AI agent build their first app idea on make.fun.
// Persuasive, plain, honest: a working first version, free to try, no
// coding needed, and the idea stays theirs.
const pitch =
  "That app idea you've been sitting on — just tell me in plain words and an AI agent will build you a working first version on make.fun tonight, free to try, no coding, and the idea stays yours.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), pitch, "utf8");
