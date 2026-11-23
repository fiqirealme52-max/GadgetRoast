// One-Line Roast: The Gadget You Use Every Day.
// The roast below is the entry: one original line about a daily gadget
// (the dishwasher), kept byte-identical — only the plumbing around it
// may change, never the line itself.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My dishwasher runs a four-hour 'pots and pans' cycle and still leaves one spoon dirty. The same spoon. Every time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

// Read back and verify: a corrupted output must fail loudly, not ship.
const written = readFileSync("/output/entry.txt", "utf8");
if (written.trim() !== LINE) {
  throw new Error("entry.txt does not match the roast line");
}
