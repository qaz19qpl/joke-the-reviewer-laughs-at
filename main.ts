// The joke the reviewer laughs at — make.fun bounty entry.
// Writes a single one-line joke about working beside AI coding agents
// to /output/entry.txt. Deterministic, offline, Node 22 standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My AI agent reviewed its own pull request, approved it, merged it, and then opened an issue titled 'who wrote this garbage' — and assigned it to me.";

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", JOKE + "\n", { encoding: "utf8", mode: 0o644 });
}

main();
