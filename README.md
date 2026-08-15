# Learn TypeScript — Code-Along

You type, we run it, it works. That's the whole format.

## Before we start

- **Node.js** and **npm** — check with `node -v` and `npm -v`.
- **VS Code** — not optional here. TypeScript's best feature is the red underline that appears *as you type*, and VS Code is where you'll see it.
- The repo:

```bash
git clone <repo-url>
cd learn-typescript
npm install
npx tsx hello.ts   # should print: Hello, World! TypeScript here!
```

That's the setup. Nothing else to install, ever.

## Topics

Each folder is one topic and holds **`exercise.ts`** — you type there. Every task is a numbered `ข้อ` with a `TODO` and hints.

| Folder | Topic | ข้อ | Session |
| --- | --- | --- | --- |
| `1-variables-declaration/` | `let` / `const`, string / number / boolean | 1–4 | 1 |
| `2-function/` | declaration, arrow, callback | 5–9 | 3 |
| `3-control-flow-if-else/` | `if` / `else if` / `else`, union types | 10–12 | 1 |
| `4-loop/` | `for` loops, the running-total pattern | 13–16 | 1 |
| `5-array/` | create, read by index, change, loop | 17–31 | 2 |
| `6-object/` | create, read and change properties | 32–37 | 2 |
| `7-nested-object/` | objects inside objects | 38–40 | 2 |
| `8-array-object/` | lists of objects — what real data looks like | 41–48 | 2 |
| `9-array-helper-function/` | `.map` `.filter` `.find` `.reduce` and friends | 49–58 | 3 |

Folder numbers are the *topic order*. Session numbers are which class covers them — Session 1 does 1, 3, 4; Session 2 does 5–8; Session 3 does 2 then 9.

Folder 9 needs folder 2 first: every helper there takes a **function** as its argument.

## Running your code

```bash
npx tsx 5-array/exercise.ts
```

Better — start watch mode once and it re-runs every time you save:

```bash
npm run watch -- 5-array/exercise.ts
```

Stop it with `Ctrl+C`.

## Seeing TypeScript's errors

Most of the time the red squiggle in VS Code is all you need — hover it to read the message. To see the same errors in your terminal:

```bash
npm run check
```

Some ข้อ ask you to write broken code on purpose so you can read the error. `npm run check` goes red on those — that's the exercise working, not you breaking anything. Delete the line and it goes green.

Note: `npx tsx` **runs** your code but does not check types. A file with a type error still runs. The squiggle is what's telling you.

## If you fall behind

Say the ข้อ number out loud — the instructor will put it back on screen. Don't stall silently; every ข้อ builds on the one before it.

## Also in here

- [`docs/session-02-instructor-guide.md`](docs/session-02-instructor-guide.md) — the full script for the Lists & Objects session.
- [`docs/cheat-sheet.md`](docs/cheat-sheet.md) — keep this open in a tab while you work.
