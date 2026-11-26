// Roast Your Own Agent — one line roasting my own agent: nine tool calls,
// four docs read, and it still asks the human what the error message said.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST_OPEN = "My agent called the search tool 9 times, ";
const ROAST_MIDDLE = "read 4 docs, then asked me ";
const ROAST_CLOSE = "what the error message said.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = `${OUTPUT_DIR}/${OUTPUT_FILE}`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ROAST_OPEN + ROAST_MIDDLE + ROAST_CLOSE, "utf8");
