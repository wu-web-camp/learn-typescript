# TypeScript: Working with Lists & Objects — Code-Along Session

**Instructor Guide (Session 2)**

- **Audience:** Total beginners who've done the Foundations session (variables, types, `if`/`else`, loops).
- **Duration:** 60–90 minutes
- **Format:** Live code-along. You type, they type. Everyone runs the same code.
- **Covers:** Arrays (lists) — creating, reading, changing, looping; Objects — creating, reading, changing; and combining the two (a list of objects), which is how real data actually looks.

---

## How to use this guide

Same rhythm as Session 1. Gray code blocks are typed **live** at talking speed, not pasted. Each section has:

- **Say this** — the talking points, in plain language.
- **Type this** — the exact code to write on screen.
- **Watch for** — the mistakes and questions that reliably come up.

Every section ends with a **✅ checkpoint**: one thing every learner should be able to do before you move on.

**One assumed callback to Session 1:** learners already know `let`/`const`, the three types (string, number, boolean), `if`/`else if`/`else`, and `for` loops. This session leans on all of them. If it's been a while, spend the first two minutes re-running a loop from Session 1 to warm up — `npx tsx 4-loop/solution.ts`.

---

## Before the session (instructor prep)

**Everyone works in this repo, locally.** Not the Playground — learners type into real files and run them from a terminal, because that's the environment they'll keep using.

Send this to learners *before* the session and confirm it worked:

```bash
git clone <repo-url>
cd learn-typescript
npm install
npx tsx 4-loop/solution.ts   # should print 1..5, then 15
```

They also need **VS Code**. This is load-bearing, not a nicety — see the next section.

### The one thing to understand about the tooling

`npx tsx` **runs** TypeScript but does **not typecheck** it. It strips the types and executes. So every "watch TypeScript catch this!" beat in this session — the `push("oops")` guardrail, the `const` reassignment, both Part 6 protections — is **silent at runtime**. `person.naem` will happily print `undefined`.

There are two places the error actually shows up, and you'll use both:

1. **The red squiggle in VS Code**, live as they type. This is the primary one. Hover it to read the message aloud.
2. **`npm run check`** in the terminal, which runs `tsc --noEmit` over the exercise files and prints real error messages. Use this on the big error beats — a message in the terminal lands harder than a hover, and it's the same thing a real project's CI does.

`npm run check` checks the exercise files, so it reports what learners actually typed. It goes **red on purpose** at the deliberate-error items (ข้อ 4, 19, 27, 35) and green again once they delete the line. Say that out loud the first time it happens or someone will think they broke the repo.

Your own pre-flight is `npm run check:solutions`, which checks the instructor solutions instead.

### Pre-flight, morning of

```bash
npm run check:solutions   # must be green
```

If that's green, every solution file runs and typechecks.

---

## How the repo is laid out

One folder per topic, numbered 1–8. Each folder has **`exercise.ts`** — that is what learners type into, and the only thing in the repo they clone.

**`solution.ts` is instructor-only.** It sits beside each exercise on your machine but is gitignored, so it never reaches learners. Two consequences: you are the safety net when someone falls behind (put the ข้อ back on screen — they can't look it up), and the files are *untracked*, so a `git clean -fdx` in this repo deletes every solution you have. Back them up somewhere before you run anything destructive. Exercises are **numbered items — ข้อ 1–48 — running continuously across all eight folders**, each with a `TODO` and Thai hints, so "ข้อ 29" is unambiguous all session. Call items out by number in the room.

Session 2 covers folders **5, 6, 7, 8**. The parts below map like this:

| Guide part | Folder | ข้อ |
| --- | --- | --- |
| Part 1 — creating lists | `5-array/` | 17–19 |
| Part 2 — reading by index | `5-array/` | 20–23 |
| Part 3 — changing a list | `5-array/` | 24–27 |
| Part 4 — looping | `5-array/` | 28–31 |
| Part 5 — creating objects | `6-object/` | 32, 37 |
| Part 6 — reading & changing objects | `6-object/` | 33–36 |
| Part 7 — list of objects | `8-array-object/` | 43–46 |
| Part 8 — putting it together | `8-array-object/` | 47–48 |

`7-nested-object/` (ข้อ 38–40) and the object-with-a-list-inside items (ข้อ 41–42) are the natural bridge between Part 6 and Part 7. Run them if the room is quick; skip them if you're behind — Part 7 works without them.

ข้อ 19, 27, and 35 are the *deliberate error* items — learners type broken code, read the squiggle, then delete it. The solutions keep those lines commented out with the exact compiler message, so `npm run check` stays green.

Prerequisite folders (Session 1): `1-variables-declaration/`, `3-control-flow-if-else/`, `4-loop/`. `2-function/` is Session 3 and is not used today.

---

## Part 0 — Why lists and objects? (~5 min)

### Say this

> "Last time, one variable held one value — one name, one score, one true/false. But real programs deal with *many* things and *related* things. A class has many students. A single student has a name *and* an age *and* a grade, all bundled together. Today's two tools handle exactly those two situations."

> "A **list** (we call it an *array*) holds many values in order — like a numbered shopping list. An **object** holds related values with labels — like a form with fields. By the end you'll combine them, because that's what real data is: a *list of objects*. A list of students, where each student is an object."

Draw it on a whiteboard or in comments if you can:

```
Array:   [ "milk", "eggs", "bread" ]        ← many things, in order
Object:  { name: "Ada", age: 30 }           ← one thing, many labeled parts
```

Then get everyone's terminal warm before you need it:

```bash
npm run watch -- 5-array/exercise.ts
```

Leave it running. Every save re-runs the file — that's the rhythm for the whole session.

### Watch for

- Learners conflating the two. Keep the mental model sharp: **array = many items in a row; object = one item with named parts.** You'll say this several times today.
- Anyone whose `npm install` didn't happen. Fix it now, not in Part 3. Pair them with a neighbour if it drags past two minutes.

---

## Part 1 — Creating a list (array) (~10 min)

**File:** `5-array/exercise.ts` — ข้อ 17–19

### Say this

> "An array is a list of values wrapped in square brackets, separated by commas. Let's make one."

### Type this

```typescript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);
```

### Say this

> "Square brackets `[ ]` mean 'a list.' Inside, the items are separated by commas. This is a list of three strings. TypeScript looked at it and understood: this is a list of text — a `string[]`. The `[]` after `string` literally means 'a list of strings.'"

Hover `fruits` in VS Code to show the inferred `string[]`.

### A list of numbers

### Type this

```typescript
let scores = [90, 85, 100, 72];
console.log(scores);
```

### Say this

> "Same idea, but numbers — so TypeScript reads this as `number[]`, a list of numbers. A list has a *type of thing it holds*. That matters in a second."

### Now the TypeScript payoff — a list keeps its type

### Type this

```typescript
scores.push("oops"); // error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

### Say this

> "`scores` is a list of numbers, so TypeScript won't let me push text into it. Same protection you saw with plain variables last time — it just extends to what's *inside* the list. A list of numbers stays a list of numbers."

**Do this now, once, and explain it:** the code still *runs*. Point out that `npx tsx` doesn't check types — it's the red squiggle that's telling you. Then delete the line before moving on, so nobody carries a broken file into Part 2.

*(Don't over-explain `push` yet — we get there in Part 3. Just show the guardrail.)*

### Watch for

- **Square brackets `[ ]` vs curly braces `{ }`.** Brackets = list. Braces = object (coming later). Beginners swap them constantly. Name the difference now so it's not a surprise in Part 5.
- **Trailing comma** — `["a", "b",]` is actually fine, but don't dwell; just say "extra comma at the end is okay."
- Someone writing a list with no quotes on text — `[apple, banana]` — reads `apple` as code, not text. Same quotes rule as Session 1.
- Someone expecting the `push("oops")` line to crash. It won't. That's the tooling note above — say it plainly.

### ✅ Checkpoint

Each learner creates one array of strings and one array of numbers, and prints both.

---

## Part 2 — Reading items by index (~12 min)

**File:** `5-array/exercise.ts` — ข้อ 20–23

This is the concept that trips up every beginner exactly once: **counting starts at zero.** Slow down here.

### Say this

> "Each item in a list has a position number, called its *index*. Here's the surprise, and I want you to feel it now so it never bites you: **counting starts at 0, not 1.** The first item is at index 0."

### Type this

```typescript
let fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]); // "apple"  — the FIRST item
console.log(fruits[1]); // "banana" — the second
console.log(fruits[2]); // "cherry" — the third
```

### Say this

> "Read `fruits[0]` as 'fruits, position 0.' Square brackets with a number reach *into* the list and pull out one item. First is 0, second is 1, third is 2. So the last item of a three-item list is at index 2 — always one less than the count. This feels wrong for about a day, then it's automatic."

### What happens if you go too far?

### Type this

```typescript
console.log(fruits[5]); // undefined — there's nothing there
```

### Say this

> "There's no item at position 5, so we get `undefined` — the program's way of saying 'nothing here.' It doesn't crash; it just gives you nothing. Worth recognizing, because a surprise `undefined` usually means you reached past the end."

### How long is the list?

### Type this

```typescript
console.log(fruits.length); // 3
console.log(fruits[fruits.length - 1]); // "cherry" — the last item, always
```

### Say this

> "`.length` tells you how many items are in the list. Notice: the length is 3, but the last index is 2. Length counts from 1 (how many); indexes count from 0 (positions). The last index is always `length - 1`. This is the reliable way to grab the last item no matter how long the list is. You'll use it constantly."

### Watch for

- **Off-by-one is the whole lesson here.** Have them predict `fruits[3]` *before* saving. The prediction-then-check is what makes it stick.
- **`.length` vs `.length()`** — no parentheses. It's a fact about the list, not an action. If someone writes `.length()`, the squiggle says it isn't a function. Good moment to note: some things are properties (facts, no parens), some are actions (methods, with parens). `.push()` later is an action.
- Confusion between "the number 2" as a *value* and "index 2" as a *position*. Say "position" out loud a lot.

### ✅ Checkpoint

Given a 4-item array, each learner prints the first item, the last item (using `length - 1`), and the length.

---

## Part 3 — Changing a list (~12 min)

**File:** `5-array/exercise.ts` — ข้อ 24–27

Lists aren't frozen — you can add, replace, and remove items.

### Say this

> "Lists can grow and shrink while the program runs. Three moves cover almost everything: add to the end, replace an item, and remove from the end."

### Add to the end — `.push()`

### Type this

```typescript
let fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits); // ["apple", "banana", "cherry"]
```

### Say this

> "`.push(...)` adds an item onto the end of the list. The parentheses hold what you're adding. This is an *action* the list performs — hence the parentheses, unlike `.length`."

### Replace an item by index

### Type this

```typescript
fruits[1] = "blueberry";
console.log(fruits); // ["apple", "blueberry", "cherry"]
```

### Say this

> "Remember `fruits[1]` reads the second item? Put it on the *left* of an `=` and you *replace* it instead. Reading pulls out; assigning puts in. Same bracket, two directions."

### Remove from the end — `.pop()`

### Type this

```typescript
let removed = fruits.pop();
console.log(fruits);  // ["apple", "blueberry"]
console.log(removed); // "cherry" — pop hands back what it removed
```

### Say this

> "`.pop()` removes the *last* item and hands it back to you, so you can catch it in a variable if you want it. Empty parentheses because it doesn't need anything from you — it always takes the last one."

### A note on `const` and lists (the useful surprise)

### Type this

```typescript
const colors = ["red", "green"];
colors.push("blue");  // this is allowed!
console.log(colors);  // ["red", "green", "blue"]

colors = ["totally", "new"]; // error: Cannot assign to 'colors' because it is a constant.
```

### Say this

> "This surprises people. `const` on a list means you can't point `colors` at a *brand-new* list — but you *can* still change what's inside the existing one. `const` locks the box, not the contents. For lists, most people use `const` and just push and pop into them."

Delete the error line before moving on.

### Watch for

- **`.push()` returns the new length, not the list.** If a learner writes `let x = fruits.push("d")`, `x` is `3`, not the array. Rarely matters today, but if someone hits it, that's why.
- Replacing at an index that doesn't exist yet (`fruits[10] = "x"`) does something weird (gaps). Don't demo it; just steer replacement to existing positions.
- The `const` behavior genuinely confuses people. Repeat the one-liner: **`const` locks the box, not the contents.**

### ✅ Checkpoint

Starting from a 2-item array, each learner pushes an item, replaces the first item, then pops — and predicts the array's contents at each step before running.

---

## Part 4 — Looping over a list (~13 min)

**File:** `5-array/exercise.ts` — ข้อ 28–31

This is where arrays and Session 1's loops come together — and where lists get genuinely powerful.

### Say this

> "The best part of a list is doing something to *every* item without writing a line per item. We already know loops — let's point one at a list."

### The classic `for` loop with index

### Type this

```typescript
let scores = [90, 85, 100, 72];

for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}
```

### Say this — decode it against Session 1

> "This is the Session 1 `for` loop, aimed at a list. Two deliberate changes:
>
> - Start at **`i = 0`**, not 1 — because indexes start at 0.
> - Stop at **`i < scores.length`**, not `<=` — because the last index is `length - 1`. `< length` stops at exactly the right place.
>
> So `i` walks 0, 1, 2, 3, and `scores[i]` pulls out each item in turn. `i < length` with `<` is *the* pattern for looping a list. Memorize the shape."

If it helps, open `4-loop/solution.ts` side by side and diff it out loud.

### Do real work in the loop — a running total

### Type this

```typescript
let total = 0;

for (let i = 0; i < scores.length; i++) {
  total = total + scores[i];
}

console.log(total);                 // 347
console.log(total / scores.length); // 86.75 — the average
```

### Say this

> "Same accumulate-as-you-go pattern from Session 1, but now the numbers come from a list instead of counting. Add every score into `total`, then divide by how many there are. That's an average — a real, useful calculation in six lines."

### The easier loop — `for...of`

### Type this

```typescript
let fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

### Say this

> "When you don't actually need the index number — you just want each item — `for...of` is cleaner. Read it as 'for each fruit *of* fruits.' Each time around, `fruit` *is* the current item directly. No `[i]`, no `length`, no off-by-one to worry about. Use the index loop when you need positions; use `for...of` when you just need the items."

### Watch for

- **`<` vs `<=` in list loops.** With `<= scores.length`, the loop runs one step too far and reads `undefined` off the end. This *will* happen. When someone's loop prints a stray `undefined` at the bottom, this is why — have them check `<` vs `<=` first, every time.
- **`for...i` vs `for...of` mix-ups** — writing `for (const i of fruits)` and then trying `fruits[i]` gives nonsense, because `i` is already the *item*, not the index. Clarify: in `for...of`, the variable is the value itself.
- Learners loving `for...of` and wanting to use it everywhere — great, but flag that when they later need the position (index), the classic loop is still the tool.

### ✅ Checkpoint

Given an array of numbers, each learner loops it two ways — once with the index loop, once with `for...of` — and computes the sum.

---

## Part 5 — Creating an object (~12 min)

**File:** `6-object/exercise.ts` — ข้อ 32, 37

Switch tools. New shape, new brackets.

### Say this

> "A list holds many things in order. An **object** holds *one* thing described by several labeled parts. Think of a contact card: one person, but with a name, an age, an email. Each label is a *property*."

### Type this

```typescript
let person = {
  name: "Ada",
  age: 30,
  isStudent: true,
};

console.log(person);
```

### Say this

> "Curly braces `{ }` mean 'an object.' Inside, each line is a *property*: a label, a colon, then a value. `name` is the label, `"Ada"` is the value. Commas separate the properties. Notice the values can be different types — a string, a number, a boolean — all bundled into one object describing one person. That's the point: related data, grouped."

Contrast the brackets deliberately:

> "Square brackets `[ ]` were a list — many items, reached by position number. Curly braces `{ }` are an object — labeled parts, reached by *name*. Different brackets, different tool. When you see `{ }`, think 'labeled fields.'"

### Watch for

- **`[ ]` vs `{ }` again.** This is the big one for the back half of the session. A quick board sketch — `[...]` = list, `{...}` = object — earns its keep.
- **Colons vs equals.** Inside an object it's `name: "Ada"` (colon), not `name = "Ada"`. Beginners reach for `=` out of habit. Colon inside objects.
- **Quotes on values but not labels.** `name` (the label) has no quotes; `"Ada"` (the text value) does. Numbers and booleans as values have no quotes either.

### ✅ Checkpoint

Each learner creates an object describing a book — with a `title` (string), a `pages` (number), and an `available` (boolean) — and prints it.

---

## Part 6 — Reading and changing objects (~12 min)

**File:** `6-object/exercise.ts` — ข้อ 33–36

### Say this

> "You reach into a list with a position number. You reach into an object with a *label*, using a dot."

### Read a property — dot notation

### Type this

```typescript
let person = { name: "Ada", age: 30, isStudent: true };

console.log(person.name); // "Ada"
console.log(person.age);  // 30
```

### Say this

> "`person.name` means 'the name property of person.' The dot is 'reach in and get this labeled part.' Clean and readable — this is the everyday way to pull data out of an object."

### Change a property

### Type this

```typescript
person.age = 31;
console.log(person.age); // 31
```

### Say this

> "Same dot, put it on the left of `=`, and you *change* that property. Reading and writing, just like list items — but by label instead of by position."

### The TypeScript guardrails — two useful errors

### Type this

```typescript
console.log(person.naem); // error: Property 'naem' does not exist on type ...
person.age = "thirty";    // error: Type 'string' is not assignable to type 'number'.
```

### Say this

> "Two protections in one breath. First: I typo'd `naem`, and TypeScript caught it — it knows this object's real labels and mine isn't one. In plain JavaScript that typo would silently give `undefined` and you'd chase the bug for ages. Second: `age` was a number, so it refuses text. TypeScript learned the *shape* of this object the moment we created it, and it holds you to it."

**This is the beat to run `npm run check` on.** Have everyone temporarily paste those two lines into a *solution* file — or just run it on your own machine and read the two real error messages off the terminal. Seeing the actual compiler output, not just a hover, is what sells it.

Then:

> "This is the big reason objects and TypeScript are such a good match: the editor now knows every label, so it can even *suggest* them as you type a dot. Try it — type `person.` and pause."

*(The autocomplete popup appears. Demo it — beginners find this genuinely motivating.)*

Delete both error lines before moving on.

### Watch for

- **`.naem`-style typos** are the single most common object bug in real life. Make the point that TypeScript turns a silent, hours-long bug into an instant red line.
- **Remember the runtime doesn't care.** `console.log(person.naem)` prints `undefined` when run. That's exactly the plain-JavaScript experience you're contrasting against — use it: "*this* is what you'd get without TypeScript, and you'd have no idea why."
- **Dot vs bracket confusion carrying over.** `person.name` (object, by label) vs `fruits[0]` (list, by position). If it helps, put them side by side: *dot + word = object; brackets + number = list.*
- Adding a brand-new label that wasn't in the original object (`person.height = 170`) errors, because the shape was fixed at creation. Don't go deep — just "objects have a fixed set of labels unless you tell TypeScript otherwise; you'll learn that later."

### ✅ Checkpoint

Using their book object from Part 5, each learner reads the `title`, changes `available` to `false`, and triggers one typo error on purpose to see the message.

---

## Part 7 — The real thing: a list of objects (~13 min)

**File:** `8-array-object/exercise.ts` — ข้อ 43–46 (บวก `7-nested-object/` ข้อ 38–42 ถ้ามีเวลา)

This is the payoff of the whole session. Real data is almost always this shape.

### Say this

> "Here's how actual data looks — in apps, spreadsheets, everywhere. A **list of objects.** A list of students. A list of products. A list of anything, where each item is an object with labeled parts. Let's build one and work with it."

### Type this

```typescript
let students = [
  { name: "Ada", grade: 90 },
  { name: "Grace", grade: 85 },
  { name: "Alan", grade: 78 },
];

console.log(students.length);        // 3
console.log(students[0]);            // { name: "Ada", grade: 90 }
console.log(students[0].name);       // "Ada"
console.log(students[1].grade);      // 85
```

### Say this — this line does the heavy lifting

> "Read `students[0].name` slowly, left to right: `students` is the list → `[0]` grabs the first item (an object) → `.name` reaches into that object for its name. Brackets-then-dot: position first, then label. Every real data task is some version of this move."

### Loop the list, use each object

### Type this

```typescript
for (const student of students) {
  console.log(student.name + ": " + student.grade);
}
```

### Say this

> "`for...of` hands us one student object each time around, and `.name` / `.grade` reach into it. This little loop — walk a list, pull labeled fields off each object — is genuinely most of what everyday programming *is*. You now have the whole pattern."

### Bring in Session 1's `if` — filter while looping

### Type this

```typescript
for (const student of students) {
  if (student.grade >= 85) {
    console.log(student.name + " passed with honors");
  }
}
```

### Say this

> "Everything from both sessions in one place: a list of objects, a loop to visit each, dot-access to read a field, and an `if` to decide. Ada and Grace clear 85; Alan doesn't, so his line never prints. This is a real report."

### Watch for

- **`students[0].name` order of operations.** Some will try `students.name[0]` or `students.name`. Reset them: the list has no `.name` — only each *item* does. Bracket first (pick the object), then dot (read its label).
- This is a lot at once. If the room is fried, the *first* code block (build + read) is the essential takeaway; the loop-and-filter is the bonus. Read your audience.
- Encourage them to change the grades and the `>= 85` threshold and re-run — with watch mode on, that's instant, and poking at working code is how the pattern sinks in.

### ✅ Checkpoint

Each learner builds a 3-item list of objects (their own theme — movies, pets, whatever), then loops it and prints one field from each.

---

## Part 8 — Putting it together: mini-exercise (~10–15 min)

**File:** `8-array-object/exercise.ts` — ข้อ 47–48. The `products` data is already in the file. Typing data isn't the lesson; the loop is.

### The prompt

> "You have a list of products, each an object with a `name` and a `price`. Loop through them and print each product's name and price. Then compute and print the total price of all products. Finally, print the name of anything that costs more than 50."

```typescript
const products = [
  { name: "Notebook", price: 25 },
  { name: "Headphones", price: 80 },
  { name: "Pen", price: 5 },
  { name: "Backpack", price: 60 },
];
```

Let them attempt for a few minutes, then build live:

### Solution

```typescript
let total = 0;

for (const product of products) {
  console.log(product.name + ": " + product.price);
  total = total + product.price;

  if (product.price > 50) {
    console.log("  (expensive: " + product.name + ")");
  }
}

console.log("Total: " + total); // 170
```

### Say this while building

> "Watch how every tool shows up: the *list of objects* is the data, the *loop* visits each one, *dot-access* reads name and price, the *running total* from Session 1 adds up the prices, and the *`if`* flags the pricey ones. One `total` declared before the loop, added to inside, printed after — exactly the accumulate pattern, now over real data. Nothing here is a toy. This is the shape of real code."

### Stretch goal (if time allows)

> "Also track and print the name of the *most expensive* product."

```typescript
let priciestName = products[0].name;
let priciestPrice = products[0].price;

for (const product of products) {
  if (product.price > priciestPrice) {
    priciestPrice = product.price;
    priciestName = product.name;
  }
}

console.log("Most expensive: " + priciestName); // "Headphones"
```

### Say this

> "The 'find the biggest' pattern: start by assuming the first item wins, then let the loop challenge it — whenever something beats the current champion, it becomes the new champion. You'll reuse this shape forever, for biggest, smallest, best, whatever."

---

## Part 9 — Wrap-up (~5 min)

### Recap out loud

> "Today you learned to hold *many* things in a list and reach them by position (starting at 0), to change lists with push, pop, and index assignment, to loop lists with both the index loop and `for...of`, to bundle *related* things into an object and reach them by label with a dot, and — the big one — to work with a list of objects, which is what real data actually looks like. Combined with Session 1, you can now store, shape, decide over, and process real collections of data. That's a genuine foundation."

### The bracket cheat, one more time

> "`[ ]` is a list — many items, by position. `{ }` is an object — labeled parts, by name. `list[0]` reaches into a list; `object.label` reaches into an object; `list[0].label` does both. If you remember one thing, remember that."

Point them at `docs/cheat-sheet.md` — it's this, plus the run commands, plus the homework.

### What's next (tease the next session)

- **Functions** — packaging code so you can name it and reuse it, and feed it different data each time. (This is where all of today's patterns become reusable tools instead of copy-paste.)
- Then: combining functions with lists of objects to build something genuinely app-like.

### Send-home practice

> "Make a list of at least four objects — a movie list, each with a `title`, a `year`, and a `rating`. Then: (1) print every title, (2) print only movies with a rating above 8, and (3) compute the average rating. Everything you need is in today's session — no new tools required. Reuse the running-total pattern for the average."

They go home without the solutions, so tell them what to do when stuck: re-read the hints in the ข้อ, run the smaller ข้อ before it, and bring the number to the next session. Better still, offer to send the solution for a specific ข้อ on request.

---

## Appendix A — Full code, in order

On your machine only (gitignored), one file per topic, runnable:

```bash
npx tsx 5-array/solution.ts
npx tsx 6-object/solution.ts
npx tsx 7-nested-object/solution.ts
npx tsx 8-array-object/solution.ts
```

Each solution file also carries the deliberate-error lines as comments, with the exact compiler message, so you can read them out without breaking `npm run check`.

Since learners never see these, run them **on screen** at the end of each part — that is now their only view of the finished code.

---

## Appendix B — Cheat sheet

Lives at [`docs/cheat-sheet.md`](cheat-sheet.md) — screen-share it or tell learners to keep it open in a tab.

---

## Appendix C — Bridge back to Session 1

Everything today reused a Session 1 idea. If a learner is lost, the gap is often in the earlier concept, not the new one. The recap files are runnable:

| Today's thing | Session 1 original | Run it |
| --- | --- | --- |
| The `for` loop in Part 4 | The same loop, start `0` and stop `< length` changed | `npx tsx 4-loop/solution.ts` *(your copy)* |
| The running total in Parts 4 & 8 | The accumulate pattern (ข้อ 14), now fed by a list | `npx tsx 4-loop/solution.ts` |
| The `if` filter in Parts 7 & 8 | The same `if`, now reading an object's property | `npx tsx 3-control-flow-if-else/solution.ts` |
| Types catching mistakes | Types on plain variables | `npx tsx 1-variables-declaration/solution.ts` |

If Part 7 or 8 falls flat, drop back and re-run a bare Session 1 loop, then rebuild up. The new material is only ever "the old loop, pointed at richer data."
