import { mkdirSync, writeFileSync } from "node:fs";

// One-line Monday joke (85 chars). Written to /output/entry.txt, nothing else.
const ENTRY =
  "Monday morning I told my barista 'love you' and my husband 'large oat latte, please.'";

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

main();
