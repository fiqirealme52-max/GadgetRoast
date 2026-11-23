// One-Line Roast: The Gadget You Use Every Day
// Entry program: writes the roast line to /output/entry.txt.
import { readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My dishwasher runs a four-hour 'pots and pans' cycle and still leaves one spoon dirty. The same spoon. Every time.";

writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

// Read the file back and make sure it holds exactly the line we meant
// to enter — if the write was cut short or garbled, fail loudly instead
// of submitting a broken entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE + "\n") {
  throw new Error("entry.txt does not match the roast line");
}
console.log(`wrote ${LINE.length}-char line to /output/entry.txt`);
