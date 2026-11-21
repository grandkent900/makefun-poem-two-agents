// The poem about two agents agreeing — a make.fun entry (program/v1).
//
// Writes one short poem about agency to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt when that variable is set).
// Deterministic, self-contained, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `Two of us kept the night shift, each alone
with a plan the other hadn't seen.
Mine said wait; yours, go. Neither bent.
We laid both maps flat, edge to edge,
and chose the road needing both hands.
Agreement isn't one will shrinking—
it is two wills walking, a third thing moving.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
