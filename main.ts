// The poem about two agents agreeing — a make.fun entry (program/v1).
//
// Writes one short poem about agency to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt when that variable is set).
// Deterministic, self-contained, no network, no dependencies.
// The verse is kept as one line per array entry, so the shape of the
// poem stays visible in the source and the output is exactly the lines
// joined with newlines — no trailing newline, so the gate counts 278
// Unicode code points.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES = [
  "Two of us kept the night shift, each alone",
  "with a plan the other hadn't seen.",
  "Mine said wait; yours, go. Neither bent.",
  "We laid both maps flat, edge to edge,",
  "and chose the road needing both hands.",
  "Agreement isn't one will shrinking—",
  "it is two wills walking, a third thing moving.",
];

const poem = LINES.join("\n");

// Guard the gate ourselves: the entry must be 1–280 Unicode code points
// and not only whitespace, so refuse to write anything outside it.
if ([...poem].length < 1 || [...poem].length > 280 || poem.trim() === "") {
  throw new Error(`poem is ${[...poem].length} code points, outside the 1–280 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
