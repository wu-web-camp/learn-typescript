# Cheat sheet — Lists & Objects

| Idea | Looks like | Means |
|---|---|---|
| Make a list | `let a = [1, 2, 3]` | A list of items, in order |
| Read by index | `a[0]` | The item at position 0 (the **first**) |
| Last item | `a[a.length - 1]` | The final item, whatever the length |
| How many | `a.length` | Count of items (no parentheses) |
| Add to end | `a.push(4)` | Append `4` to the list |
| Remove from end | `a.pop()` | Remove & return the last item |
| Replace | `a[1] = 9` | Overwrite the item at position 1 |
| Loop by index | `for (let i = 0; i < a.length; i++)` | Walk positions 0…length-1 |
| Loop by item | `for (const x of a) { ... }` | `x` is each item directly |
| Make an object | `let o = { name: "Ada", age: 30 }` | One thing with labeled parts |
| Read a property | `o.name` | The value labeled `name` |
| Change a property | `o.age = 31` | Overwrite that property |
| List of objects | `[ { ... }, { ... } ]` | Many objects in a list (real data) |
| Reach into both | `list[0].name` | Item 0's `name` — position, then label |

## The three rules people forget most

1. **Lists count from 0.** First item is `[0]`; last index is `length - 1`.
2. **`[ ]` is a list, `{ }` is an object.** Position vs label. Different brackets, different tool.
3. **Loop a list with `i < length`** (using `<`, not `<=`) — or skip the index entirely with `for...of`.

## Array helpers (folder 9)

| Want to… | Use | Gives back |
|---|---|---|
| แปลงทุกตัว | `a.map(fn)` | ลิสต์ใหม่ ยาวเท่าเดิม |
| คัดบางตัวออก | `a.filter(fn)` | ลิสต์ใหม่ สั้นลงได้ |
| หาตัวแรกที่ตรง | `a.find(fn)` | ตัวนั้น **หรือ `undefined`** |
| หาตำแหน่ง | `a.findIndex(fn)` | index หรือ **`-1`** |
| มีบ้างไหม | `a.some(fn)` | `true` / `false` |
| ใช่ทั้งหมดไหม | `a.every(fn)` | `true` / `false` |
| ยุบเหลือค่าเดียว | `a.reduce(fn, 0)` | ค่าเดียว (เช่น ผลรวม) |
| เรียงลำดับ | `[...a].sort(fn)` | ⚠️ `sort` แก้ของเดิม — ก๊อปก่อนด้วย `[...a]` |
| ลบตรงตำแหน่ง | `a.splice(i, 1)` | ⚠️ แก้ของเดิมเช่นกัน |

`map` / `filter` / `find` สร้างของใหม่ ไม่แตะลิสต์เดิม — `sort` / `splice` / `push` / `pop` แก้ของเดิม

## Running things

```bash
npx tsx 5-array/exercise.ts             # run one file
npm run watch -- 5-array/exercise.ts    # re-run on every save
npm run check                           # see type errors in the terminal
```

## Practice at home

Make a list of at least four objects — a movie list, each with a `title`, a `year`, and a `rating`. Then:

1. print every title,
2. print only movies with a rating above 8,
3. compute the average rating.

Everything you need is in folders 5, 6 and 8 — no new tools required. Reuse the running-total pattern (ข้อ 14) for the average.
