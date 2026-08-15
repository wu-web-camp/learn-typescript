# Slide Source — Learn TypeScript Code-Along

สรุปทุกหัวข้อ/ทุกข้อ (ข้อ 1–58) ให้อยู่ในรูปที่เอาไปเจนสไลด์ได้ทันที

**วิธีอ่านไฟล์นี้**

- `---` คั่น 1 สไลด์
- ทุกสไลด์มีสามช่อง: **Theory** (มันทำงานยังไง) → **Syntax** (โค้ดที่ขึ้นจอ) → **Live** (สิ่งที่ผู้เรียนพิมพ์ตาม)
- `> 🎤` = สิ่งที่ผู้สอนพูดตอนโค้ดสด (speaker note ไม่ต้องขึ้นสไลด์)
- `⚠️` = จุดที่คนพลาดประจำ ควรมีสไลด์แยกหรือทำสีแดง
- โฟลเดอร์ = ลำดับหัวข้อ / Session = คาบที่สอน

| Session | Folders | ข้อ | ธีมของคาบ |
|---|---|---|---|
| 1 — Foundations | 1, 3, 4 | 1–4, 10–16 | ตัวแปร ชนิด ตัดสินใจ ทำซ้ำ |
| 2 — Lists & Objects | 5, 6, 7, 8 | 17–48 | โครงสร้างข้อมูลจริง |
| 3 — Functions & Helpers | 2, 9 | 5–9, 49–58 | ห่อโค้ด แล้วส่งโค้ดเป็นข้อมูล |

---

# SESSION 1 — Foundations

---

## S1.0 · ทำไมต้อง TypeScript

**Theory**

JavaScript รันได้ทุกอย่าง แล้วค่อยพังตอนรัน — TypeScript คือ JavaScript + "ป้ายบอกชนิด"
ป้ายพวกนี้ทำให้ editor เตือนเรา**ก่อน**โค้ดจะรัน

```
เขียนโค้ด ──► TypeScript อ่านป้าย ──► เส้นแดงขึ้นทันที
                                   └─► ไม่มีเส้นแดง = รันได้
```

**Syntax**

```ts
let age = 30;        // JavaScript — ใส่อะไรทีหลังก็ได้
let age: number = 30; // TypeScript — ล็อกไว้ว่าเป็นตัวเลขเท่านั้น
```

> 🎤 สำคัญมากและต้องพูดตั้งแต่สไลด์แรก: `npx tsx` **รัน** TypeScript แต่**ไม่เช็คชนิดให้**
> มันลบ type ทิ้งแล้วรันเลย → ทุก error ในคอร์สนี้เห็นได้ 2 ที่เท่านั้น
> 1. เส้นแดงใน VS Code (หลัก — hover อ่าน message)
> 2. `npm run check` ในเทอร์มินัล (ใช้ตอนอยากให้ error ดัง)

---

## S1.1 · Variables & Declaration — `let` / `const` · ข้อ 1–2

**Theory**

- `let` = กล่องที่เปลี่ยนของข้างในได้ทีหลัง
- `const` = กล่องที่ผูกไว้กับของชิ้นนั้นแล้ว เปลี่ยนไม่ได้
- `: type` หลังชื่อ คือการ**บอก TypeScript ตรงๆ** ว่ากล่องนี้เก็บอะไร
- ชนิดพื้นฐาน 3 อย่างที่ใช้ตลอดคอร์ส: `string` `number` `boolean`

```
let  nameStudent : string  =  "Ada"
 │        │          │         │
 │        │          │         └─ ค่า
 │        │          └─ ชนิด (annotation)
 │        └─ ชื่อ
 └─ เปลี่ยนค่าได้ทีหลัง
```

**Syntax**

```ts
let nameStudent: string = "Ada";
let age: number = 30;
let isStudent: boolean = true;
```

**Live · ข้อ 1–2**

```ts
console.log("Name: " + nameStudent);
console.log("Age: " + age);
console.log("Is student: " + isStudent);
```

> 🎤 colon ไม่ใช่ equal — `:` บอกชนิด, `=` ให้ค่า

---

## S1.2 · เมื่อ TypeScript ฟ้อง · ข้อ 3–4 ⚠️ (สไลด์ error ตัวแรกของคอร์ส)

**Theory**

error ไม่ใช่ความล้มเหลว มันคือฟีเจอร์ — คอร์สนี้จะ**จงใจทำให้ผิด**หลายครั้ง แล้วลบทิ้ง

**Syntax**

```ts
const birthYear: number = 1815;
birthYear = 1816;
// ❌ Cannot assign to 'birthYear' because it is a constant.

age = "thirty";
// ❌ Type 'string' is not assignable to type 'number'.
```

**Live · ข้อ 3–4** — พิมพ์ให้พัง → hover อ่าน error → `npm run check` → ลบทิ้ง

> 🎤 ย้ำ: โค้ดข้างบน "ยังรันได้" ด้วย tsx เพราะ tsx ไม่เช็ค type — เส้นแดงต่างหากที่เตือนเรา

✅ **CHECKPOINT** — ประกาศตัวแปรครบ 3 ชนิด, print ได้, และเคยเห็น error จากการใส่ผิดชนิด 1 ครั้ง

---

## S1.3 · Control Flow — `if` / `else if` / `else` · ข้อ 10–11

**Theory**

โปรแกรมตัดสินใจโดยไล่เงื่อนไข**จากบนลงล่าง** เจออันแรกที่จริงแล้วหยุด
→ **ลำดับจึงสำคัญ** ถ้าสลับ `>= 80` ขึ้นก่อน `>= 90` คนได้ 95 จะได้ "Good"

```
score >= 90 ? ──yes──► "Excellent"
     │no
score >= 80 ? ──yes──► "Good"
     │no
     └────────────────► "Keep practising"
```

**Syntax**

```ts
if (condition) {
  // ทำอันนี้
} else if (anotherCondition) {
  // ไม่งั้นทำอันนี้
} else {
  // นอกนั้นทำอันนี้
}
```

**Live · ข้อ 10–11**

```ts
const score: number = 85;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 80) {
  console.log("Good");
} else {
  console.log("Keep practising");
}
```

ข้อ 11: เปลี่ยน `score` เป็น 95 แล้ว 70 — **ทายผลก่อนรันทุกครั้ง**

---

## S1.4 · Union Type + `typeof` · ข้อ 12

**Theory**

`|` อ่านว่า "หรือ" — ตัวแปรหนึ่งตัวเป็นได้มากกว่าหนึ่งชนิด
`typeof x === "number"` คือการ**ถามตอนรัน**ว่าตอนนี้มันเป็นอะไร
พอถามแล้ว TypeScript จะ "แคบชนิดลง" (narrowing) ให้ในบล็อกนั้นเอง

```
input: number | string
   │
   ├── if (typeof input === "number") ──► ในบล็อกนี้ input เป็น number แน่นอน
   └── else ─────────────────────────────► ในบล็อกนี้ input เป็น string แน่นอน
```

**Syntax**

```ts
let input: number | string = 15;

if (typeof input === "number") {
  console.log("เป็นตัวเลข: " + input);
} else {
  console.log("เป็นข้อความ: " + input);
}
```

**Live · ข้อ 12** — เปลี่ยน `input` เป็น `"TypeScript"` แล้วรันใหม่

✅ **CHECKPOINT** — เขียน if / else if / else ได้ และอธิบายได้ว่า `number | string` แปลว่าอะไร

---

## S1.5 · Loop — `for` พื้นฐาน · ข้อ 13

**Theory**

`for` มี 3 ส่วน คั่นด้วย `;` — **เริ่มที่ไหน / ทำต่อเมื่อ / จบรอบแล้วทำอะไร**

```
for ( let i = 1 ;  i <= 5 ;  i++ )
        │           │         │
        │           │         └─ หลังจบแต่ละรอบ (บวกหนึ่ง)
        │           └─ ทำต่อเมื่อยังจริง
        └─ เริ่มที่นี่ ทำครั้งเดียว
```

**Syntax**

```ts
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// 1 2 3 4 5
```

**Live · ข้อ 13**

---

## S1.6 · แพตเทิร์นบวกสะสม (running total) · ข้อ 14 ⭐

**Theory**

แพตเทิร์นที่จะ**กลับมาอีกอย่างน้อย 3 ครั้ง**ในคอร์สนี้ (ข้อ 29, 47, 56) — จำ "รูปทรง" ไว้:

```
ประกาศก่อนลูป  →  let total = 0;
บวกข้างในลูป   →    total = total + i;   (หรือ total += i)
print หลังลูป  →  console.log(total);
```

⚠️ ถ้าประกาศ `total` ไว้**ข้างใน**ลูป มันจะถูกรีเซ็ตทุกรอบ → ได้ค่าผิด

**Syntax**

```ts
let total = 0;
for (let i = 1; i <= 5; i++) {
  total += i;
}
console.log(total); // 15
```

**Live · ข้อ 14**

---

## S1.7 · นับถอยหลัง + `if` ในลูป · ข้อ 15–16

**Theory**

ลูปไม่จำเป็นต้องนับขึ้น และข้างในลูปใส่ `if` ได้ = "ทำซ้ำ + ตัดสินใจ" รวมกัน
`%` คือเศษจากการหาร → `i % 2 === 0` แปลว่าเลขคู่

**Syntax**

```ts
// ข้อ 15 — นับถอยหลัง
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// ข้อ 16 — เฉพาะเลขคู่
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

✅ **CHECKPOINT** — เขียน for loop ได้ และใช้แพตเทิร์นบวกสะสมได้

---

# SESSION 2 — Lists & Objects

> ธีมของคาบ: `[ ]` เข้าถึงด้วย **ตำแหน่ง** · `{ }` เข้าถึงด้วย **ชื่อ** · ข้อมูลจริงคือสองอย่างนี้ซ้อนกัน

---

## S2.1 · Array คืออะไร · ข้อ 17–19

**Theory**

`[ ]` = ลิสต์ คั่นแต่ละตัวด้วยลูกน้ำ · ลิสต์ใน TypeScript **รู้ว่าตัวเองเก็บอะไร**

| เขียน | อ่านว่า |
|---|---|
| `string[]` | ลิสต์ของข้อความ |
| `number[]` | ลิสต์ของตัวเลข |
| `boolean[]` | ลิสต์ของ true/false |

**Syntax**

```ts
const fruits: string[] = ["apple", "banana", "cherry"];
const scores: number[] = [90, 85, 100, 72];
```

**Live · ข้อ 17–19**

```ts
scores.push("oops");
// ❌ Argument of type 'string' is not assignable to parameter of type 'number'.
```

> 🎤 hover ที่ `scores` ให้ดู — editor บอกเองว่า `number[]` แม้ไม่พิมพ์ annotation (type inference)
> ข้อ 19 ทำให้พังแล้วลบทิ้ง · `npm run check` จะแดง**ตั้งใจ**

---

## S2.2 · อ่านด้วย index · ข้อ 20–23

**Theory**

**นับเริ่มที่ 0** — ตัวแรกอยู่ตำแหน่ง 0 และ index ตัวสุดท้าย = `length - 1`

```
index:    0        1         2
        ┌────────┬─────────┬──────────┐
fruits: │ apple  │ banana  │ cherry   │   length = 3
        └────────┴─────────┴──────────┘
                                        fruits[3] → undefined
```

**Syntax**

```ts
fruits[0];                    // "apple"
fruits[5];                    // undefined — ไม่พัง แค่ "ไม่มีอะไรตรงนั้น"
fruits.length;                // 3   ← ไม่มีวงเล็บ เพราะเป็นข้อเท็จจริง ไม่ใช่การกระทำ
fruits[fruits.length - 1];    // "cherry" — ตัวสุดท้ายโดยไม่ hardcode เลข
```

⚠️ `.length` ไม่มี `()` · `.push()` มี `()` — **ข้อเท็จจริง vs การกระทำ**

**Live · ข้อ 20–23** — ข้อ 21 ให้**ทายก่อน**ว่า `fruits[5]` ได้อะไร

---

## S2.3 · แก้ไขลิสต์ — push / pop / แทนที่ · ข้อ 24–26

**Theory**

เหลี่ยม `[i]` อยู่**ขวาของ `=`** คืออ่าน · อยู่**ซ้ายของ `=`** คือเขียนทับ

**Syntax**

```ts
fruits.push("durian");   // เพิ่มท้ายลิสต์
fruits[1] = "blueberry"; // แทนที่ตำแหน่ง 1
const removed = fruits.pop(); // ลบตัวท้าย และ "คืนตัวที่ลบ" กลับมาด้วย
```

| เมธอด | ทำอะไร | คืนอะไร |
|---|---|---|
| `push(x)` | ต่อท้าย | ความยาวใหม่ |
| `pop()` | ตัดตัวท้ายออก | ตัวที่ถูกตัด |

**Live · ข้อ 24–26**

---

## S2.4 · `const` กับลิสต์ · ข้อ 27 ⚠️ (จุดที่คนงงที่สุดของคาบ)

**Theory**

> **`const` ล็อกกล่อง ไม่ได้ล็อกของข้างใน**

```
const colors ──► [ "red", "green" ]
      │              ▲
      │              └─ ข้างในเปลี่ยนได้ (push/pop/แทนที่)
      └─ ลูกศรนี้เปลี่ยนไม่ได้ (ชี้ลิสต์ก้อนอื่นไม่ได้)
```

**Syntax**

```ts
const colors = ["red", "green"];
colors.push("blue");          // ✅ ได้ — แก้ของข้างในกล่อง
colors = ["totally", "new"];  // ❌ Cannot assign to 'colors' because it is a constant.
```

**Live · ข้อ 27** — พิมพ์ให้พัง อ่าน error แล้วลบทิ้ง

---

## S2.5 · วนลูปในลิสต์ — index loop · ข้อ 28–30

**Theory**

เอา `for` จาก Session 1 มาใช้ แต่ให้ตัวนับวิ่งตามตำแหน่งของลิสต์

⚠️ กติกาสองข้อที่พลาดบ่อยที่สุด: **เริ่มที่ `0`** และใช้ **`<` ไม่ใช่ `<=`**
(ถ้าใช้ `<=` จะเกินไป 1 ตำแหน่ง แล้วได้ `undefined` โผล่มาท้ายผลลัพธ์)

**Syntax**

```ts
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}
```

**Live · ข้อ 28–30** — แพตเทิร์นบวกสะสมกลับมาแล้ว คราวนี้ตัวเลขมาจากลิสต์

```ts
let total = 0;
for (let i = 0; i < scores.length; i++) {
  total += scores[i];
}
console.log(total);                  // 347
console.log(total / scores.length);  // 86.75
```

---

## S2.6 · `for...of` · ข้อ 31

**Theory**

ถ้าไม่ต้องรู้ตำแหน่ง ก็ไม่ต้องยุ่งกับ index เลย — `for...of` ยื่น**ตัวของ**ให้ตรงๆ

| อยากได้อะไร | ใช้ |
|---|---|
| ต้องรู้ตำแหน่ง (`i`) | `for (let i = 0; i < a.length; i++)` |
| ต้องการแค่ตัวของ | `for (const x of a)` |

**Syntax**

```ts
for (const fruit of fruits) {
  console.log(fruit);
}
```

✅ **CHECKPOINT** — สร้างลิสต์ได้, หยิบตัวแรก/ตัวสุดท้ายได้, push/pop/แทนที่ได้, วนลูปหาผลรวมได้ทั้งสองแบบ

---

## S2.7 · Object คืออะไร · ข้อ 32–34

**Theory**

`{ }` = หนึ่งสิ่ง ที่มีหลายส่วนติดป้ายชื่อไว้ · แต่ละบรรทัดคือ `ป้ายชื่อ : ค่า`

```
[ ] ลิสต์      →  เข้าถึงด้วย "ตำแหน่ง"  →  a[0]
{ } ออบเจ็กต์  →  เข้าถึงด้วย "ชื่อ"     →  o.name
```

⚠️ ข้างใน object ใช้ `:` **ไม่ใช่** `=` · ป้ายชื่อไม่ต้องมี quote แต่ค่าที่เป็นข้อความต้องมี

**Syntax**

```ts
const person = { name: "Ada", age: 30, isStudent: true };

console.log(person.name);  // อ่าน — "property ชื่อ name ของ person"
person.age = 31;           // เขียน — จุดเดิม แต่ย้ายไปซ้ายของ =
```

**Live · ข้อ 32–34**

---

## S2.8 · TypeScript ช่วยจับผิด object · ข้อ 35 ⭐⚠️ (บีตสำคัญที่สุดของคาบ)

**Theory**

object เป็นที่ที่ TypeScript คุ้มค่าที่สุด เพราะ**พิมพ์ชื่อ property ผิด**เป็นบั๊กที่เงียบที่สุดใน JavaScript

```
JavaScript เปล่าๆ :  person.naem  →  undefined  →  ไล่บั๊กเป็นชั่วโมง
TypeScript        :  person.naem  →  เส้นแดงทันทีตอนพิมพ์
```

**Syntax**

```ts
console.log(person.naem);
// ❌ Property 'naem' does not exist on type '{ name: string; age: number; ... }'.
//    Did you mean 'name'?

person.age = "thirty";
// ❌ Type 'string' is not assignable to type 'number'.
```

**Live · ข้อ 35**
1. พิมพ์ทั้งสองบรรทัด อ่าน error
2. รัน `npm run check` ให้ error ดังในเทอร์มินัล
3. พิมพ์ `person.` แล้ว**หยุด** → editor ขึ้นรายชื่อ property ให้เลือก (autocomplete มาจาก type)
4. ลบทิ้ง

> 🎤 ประโยคปิด: "TypeScript รู้จัก object ของคุณ เพราะคุณสร้างมันขึ้นมาเอง — ไม่ต้องประกาศ type แยกเลย"

---

## S2.9 · Object ของตัวเอง · ข้อ 36–37

**Theory**

ค่าข้างใน object เป็น**คนละชนิดกันได้** แต่ทุกอันบรรยาย "สิ่งเดียวกัน"

**Syntax**

```ts
const book = { title: "Dune", pages: 412, available: true };

const dog = {
  dogName: "Rex",
  weight: 32,
  color: "brown",
  breed: "Labrador",
  age: 4,
  burglarBiter: true,
};
console.log(dog); // print ทั้งก้อนได้เลย
```

✅ **CHECKPOINT** — สร้าง object ได้, อ่าน/แก้ property ได้, เคยเห็น error จากการพิมพ์ชื่อ property ผิด

---

## S2.10 · Nested Object · ข้อ 38–40

**Theory**

ค่าของ property เป็น object อีกทีก็ได้ — ข้อมูลจริงซ้อนกันแบบนี้เสมอ
อ่าน**จากซ้ายไปขวา**: `company` → `.address` (ได้ object) → `.city` (ได้ข้อความ)

```
company
├── companyName          "Jitta"
├── yearOfEstablishment  2012
└── address ─────────────┐
                         ├── street
                         ├── city   ← company.address.city
                         └── state
```

**Syntax**

```ts
const company = {
  companyName: "Jitta",
  activity: "fintech",
  yearOfEstablishment: 2012,
  address: {
    street: "Sukhumvit",
    number: 42,
    zipcode: "10110",
    city: "Bangkok",
    state: "TH",
  },
};

console.log(company.address.city); // "Bangkok"
company.address.city = "Chiang Mai";
```

**Live · ข้อ 38–40** — พิมพ์ `company.address.` แล้วหยุด: editor รู้จัก property ชั้นในให้ด้วย
พิมพ์ผิดเป็น `company.adress.city` เพื่อดู error แล้วลบทิ้ง

✅ **CHECKPOINT** — สร้าง object ซ้อนได้ และอ่านค่าชั้นในด้วยจุดต่อจุดได้

---

## S2.11 · Object ที่มี Array ข้างใน · ข้อ 41–42

**Theory**

เหลี่ยมอยู่ข้างในปีกกาได้ — property หนึ่งตัวเก็บได้หลายค่า
อ่านจากซ้ายไปขวา: **จุด**เข้าไปหาลิสต์ก่อน แล้วค่อยใช้**เหลี่ยม**หยิบตัวในลิสต์

**Syntax**

```ts
const companyActivities = {
  companyName: "Jitta",
  activities: ["research", "investing", "education"],
};

companyActivities.activities.length; // 3
companyActivities.activities[0];     // "research"
```

---

## S2.12 · Array ของ Object — ข้อมูลจริงหน้าตาแบบนี้ · ข้อ 43–44 ⭐

**Theory**

**เหลี่ยมข้างนอก ปีกกาข้างใน** — นี่คือรูปทรงของข้อมูลเกือบทุกอย่างที่จะเจอในงานจริง
(ผลลัพธ์จาก API, แถวในตาราง, รายการสินค้า)

```
students   [    {name:"Ada",  grade:90},  {name:"Grace", grade:85},  ... ]
              ▲    ▲
              │    └─ .name  ← ชื่อ (ชั้นใน)
              └─ [0]         ← ตำแหน่ง (ชั้นนอก)

students[0].name  =  "หยิบตัวที่ 0 ออกมา (ได้ object) แล้วอ่านป้ายชื่อ name"
```

⚠️ `students.name` **ไม่มี** — ลิสต์ไม่มีชื่อ มีแต่ของแต่ละตัวในลิสต์

**Syntax**

```ts
const students = [
  { name: "Ada", grade: 90 },
  { name: "Grace", grade: 85 },
  { name: "Alan", grade: 78 },
];

students.length;        // 3
students[0];            // { name: "Ada", grade: 90 }
students[0].name;       // "Ada"
students[1].grade;      // 85
```

**Live · ข้อ 43–44**

---

## S2.13 · วนลิสต์ของ object + `if` · ข้อ 45–46

**Theory**

รวมของสามอย่างที่เรียนมา: ลูป + object property + เงื่อนไข
นี่คือ "รายงาน" แบบพื้นฐานที่สุด — วนทุกแถว แล้วเลือกทำอะไรกับบางแถว

**Syntax**

```ts
for (const student of students) {
  console.log(student.name + ": " + student.grade);
}

for (const student of students) {
  if (student.grade >= 85) {
    console.log(student.name + " passed with honors");
  }
}
// Alan ได้ 78 → บรรทัดของเขาไม่ถูก print
```

---

## S2.14 · รวมทุกอย่าง — รายงานสินค้า · ข้อ 47

**Theory**

หนึ่งลูป ทำได้สามอย่างพร้อมกัน: print แต่ละแถว / สะสมยอดรวม / กรองด้วย `if`
แพตเทิร์นบวกสะสมจาก **ข้อ 14** กลับมาเป็นครั้งที่สาม

**Syntax**

```ts
const products = [
  { name: "Notebook", price: 25 },
  { name: "Headphones", price: 80 },
  { name: "Pen", price: 5 },
  { name: "Backpack", price: 60 },
];

let total = 0;
for (const product of products) {
  console.log(product.name + ": " + product.price);
  total += product.price;
  if (product.price > 50) {
    console.log("  ↑ ของแพง");
  }
}
console.log(total); // 170
```

---

## S2.15 · แพตเทิร์น "หาตัวที่มากที่สุด" · ข้อ 48 (ท้าทาย) ⭐

**Theory**

หาค่าสูงสุดไม่ต้องใช้ของวิเศษ — **สมมติตัวแรกเป็นแชมป์ แล้วเดินท้าชิงทีละตัว**

```
แชมป์ = ตัวแรก
  ├─ เจอตัวที่มากกว่า? ──yes──► เปลี่ยนแชมป์เป็นตัวนี้
  └─ ไม่มากกว่า ────────────► แชมป์เดิมอยู่ต่อ
จบลูป → ตัวที่ถืออยู่คือคำตอบ
```

ใช้ได้ตลอดไปกับ มากสุด / น้อยสุด / ดีสุด — แค่พลิกเครื่องหมาย

**Syntax**

```ts
let priciestName = products[0].name;
let priciestPrice = products[0].price;

for (const product of products) {
  if (product.price > priciestPrice) {
    priciestName = product.name;
    priciestPrice = product.price;
  }
}
console.log(priciestName); // "Headphones"
```

✅ **CHECKPOINT** — สร้างลิสต์ของ object ในธีมของตัวเองได้, วนลูปอ่าน property ได้, คิดยอดรวมและกรองด้วย `if` ได้

📝 **การบ้าน** — ลิสต์หนัง 4 เรื่องขึ้นไป แต่ละเรื่องมี `title`, `year`, `rating`
(1) print ทุก title (2) print เฉพาะเรื่องที่ `rating > 8` (3) หา rating เฉลี่ย
ใช้ของที่เรียนไปแล้วทั้งหมด ไม่ต้องใช้ของใหม่

---

# SESSION 3 — Functions & Array Helpers

> ลำดับของคาบนี้บังคับ: **โฟลเดอร์ 2 ก่อนโฟลเดอร์ 9 เสมอ** เพราะ helper ทุกตัวรับ "ฟังก์ชัน" เข้าไป

---

## S3.1 · Function คืออะไร · ข้อ 5–6

**Theory**

ฟังก์ชัน = ห่อโค้ดไว้ ตั้งชื่อ แล้วเรียกใช้ซ้ำได้ ป้อนข้อมูลต่างกันได้
**signature** บอกสองอย่าง: รับอะไร (พารามิเตอร์) และคืนอะไร (return type)

```
function add ( a: number, b: number ) : number  { ... }
                     │                    │
                     │                    └─ คืนอะไรกลับไป
                     └─ รับอะไรเข้ามา
```

`void` = ไม่คืนค่าอะไรกลับไป ทำงานแล้วจบ (เช่นแค่ `console.log`)

**Syntax**

```ts
export function sayHi(name: string): void {
  console.log("Hello, " + name + "!");
}

export function add(a: number, b: number): number {
  return a + b;
}
```

**Live · ข้อ 5–6**

> 🎤 ลอง `return "5"` ในฟังก์ชันที่ประกาศ `: number` ให้เห็นว่า return type ก็ถูกเช็ค

---

## S3.2 · Arrow Function · ข้อ 7–8

**Theory**

หน้าตาต่าง งานเดียวกัน — arrow function เป็นค่า จึงเก็บใส่ตัวแปรได้ (และ**ส่งต่อได้**ในข้อ 9)

| แบบ | ปีกกา | `return` |
|---|---|---|
| block body | มี | ต้องเขียนเอง |
| concise body (บรรทัดเดียว) | ไม่มี | ผลของนิพจน์คือค่าที่คืนอัตโนมัติ |

**Syntax**

```ts
// ข้อ 7 — block body
export const multiply = (x: number, y: number): number => {
  return x * y;
};

// ข้อ 8 — บรรทัดเดียว ไม่มีปีกกา ไม่มี return
const calVat = (price: number): number => price * 1.07;
console.log(calVat(100)); // 107.00000000000001
```

> 🎤 เลข 107.000...1 ไม่ใช่บั๊กของเรา — เป็นเรื่องทศนิยมของคอมพิวเตอร์ พูดสั้นๆ แล้วไปต่อ

---

## S3.3 · Callback — ส่งฟังก์ชันเป็นข้อมูล · ข้อ 9 ⭐ (ประตูสู่โฟลเดอร์ 9)

**Theory**

ฟังก์ชันเป็น "ค่า" ได้ → เอาไปเป็น**อาร์กิวเมนต์**ของฟังก์ชันอื่นได้
ชนิดของมันเขียนแบบนี้: `(message: string) => void` อ่านว่า "ฟังก์ชันที่รับ string แล้วไม่คืนค่า"

```
sayHello("Ada", ────────────────► ฟังก์ชันข้างนอกสร้าง message
                (m) => log(m) ──► แล้วเรียก "โค้ดที่เราส่งเข้าไป" ให้ทำงาน
```

**Syntax**

```ts
export function sayHello(
  name: string,
  callback: (message: string) => void
): void {
  const message = `Hi ${name}`;
  callback(message);
}

sayHello("Ada", (message) => console.log(message));
```

> 🎤 ถ้าเข้าใจสไลด์นี้ `.map()` จะไม่ใช่ของใหม่เลย — มันคือรูปแบบเดียวกันเป๊ะ

✅ **CHECKPOINT** — เขียนได้ทั้ง declaration และ arrow, แยกออกว่า `void` ต่างจาก `number` ยังไง

---

## S3.4 · จาก `for` loop สู่ Array Helper

**Theory**

ที่ผ่านมาเราเขียนลูปเองทุกครั้ง — คราวนี้**ลิสต์ทำให้แทน** เราแค่บอกว่า "ทำอะไรกับแต่ละตัว"

```ts
// เดิม (Session 2)                      // ใหม่ (Session 3)
const out = [];                          const out = prices.map(
for (const p of prices) {                  (p) => p * 1.07
  out.push(p * 1.07);                    );
}
```

**แผนที่ตัดสินใจ — สไลด์นี้คือสไลด์ที่ควรพิมพ์แจก**

| อยากทำอะไร | ใช้ | ได้อะไรกลับมา |
|---|---|---|
| แปลงทุกตัว | `.map(fn)` | ลิสต์ใหม่ **ยาวเท่าเดิม** |
| คัดบางตัวออก | `.filter(fn)` | ลิสต์ใหม่ **สั้นลงได้** |
| หาตัวแรกที่ตรง | `.find(fn)` | ตัวนั้น **หรือ `undefined`** |
| หาตำแหน่ง | `.findIndex(fn)` | index หรือ **`-1`** |
| มีบ้างไหม | `.some(fn)` | `true` / `false` |
| ใช่ทั้งหมดไหม | `.every(fn)` | `true` / `false` |
| ยุบเหลือค่าเดียว | `.reduce(fn, 0)` | ค่าเดียว |
| เรียงลำดับ | `[...a].sort(fn)` | ⚠️ แก้ของเดิม |
| ลบตรงตำแหน่ง | `.splice(i, 1)` | ⚠️ แก้ของเดิม |

---

## S3.5 · `.map()` — แปลงร่าง · ข้อ 49–50

**Theory**

เข้าไปกี่ตัว **ออกมากี่ตัวเสมอ** — map ไม่ทิ้งใคร แค่เปลี่ยนหน้าตาแต่ละตัว
และ map สร้างลิสต์ **ใหม่** คืนมา — ลิสต์เดิมไม่ถูกแตะ

```
[100, 200, 500]  ──.map(p => p * 1.07)──►  [107, 214, 535]
   ยาว 3                                      ยาว 3 (เท่าเดิมเสมอ)
```

**Syntax**

```ts
const prices: number[] = [100, 200, 500, 1000];

const pricesWithVat = prices.map((price: number): number => price * 1.07);
console.log(prices);        // ไม่เปลี่ยน
console.log(pricesWithVat); // ลิสต์ใหม่

// ลิสต์ของ object → ลิสต์ของข้อความ
const names = products.map((product) => product.name);
// ["Notebook", "Headphones", "Pen", "Backpack"]
```

**Live · ข้อ 50 ตอนที่ 2** — แยกฟังก์ชันออกมาตั้งชื่อก่อน แล้วส่ง**ชื่อ**เข้าไป (ย้อนกลับไปข้อ 9)

```ts
const getName = (product: { name: string; price: number }): string => product.name;
products.map(getName);
```

---

## S3.6 · `.filter()` — คัดกรอง · ข้อ 51–52

**Theory**

ฟังก์ชันที่ส่งเข้าไปต้องตอบ `true` / `false` — จริงคือเก็บไว้ เท็จคือคัดออก
ต่างจาก `map`: **ตัวที่เหลือหน้าตาเหมือนเดิม แต่จำนวนสั้นลงได้**

```
map    : เปลี่ยนหน้าตา  จำนวนเท่าเดิม
filter : หน้าตาเหมือนเดิม  จำนวนน้อยลงได้
```

**Syntax**

```ts
const expensive = products.filter((product) => product.price > 50);

// ค้นหาแบบไม่สนตัวพิมพ์เล็กใหญ่
const query = "pen";
const results = products.filter((product) =>
  product.name.toLowerCase().includes(query.toLowerCase())
);
```

`includes()` ตอบ `true`/`false` ว่ามีข้อความนั้นอยู่ข้างในไหม
`toLowerCase()` ทั้งสองฝั่ง → `"pen"` เจอ `"Pen"`

---

## S3.7 · `.find()` และ `undefined` · ข้อ 53 ⭐⚠️

**Theory**

`find` คืน**ตัวแรก**ที่ตรงเงื่อนไข — แต่มัน **อาจไม่เจอ**
ชนิดที่ได้จึงเป็น `{...} | undefined` และ TypeScript จะ**ไม่ยอม**ให้เราอ่าน property ตรงๆ

```
found = products.find(...)
   │
   ├─ เจอ    → object
   └─ ไม่เจอ → undefined
              └─► found.price จะพังตอนรัน → TypeScript เลยฟ้องก่อน
```

**Syntax**

```ts
const found = products.find((product) => product.name === "Pen");

console.log(found.price);
// ❌ 'found' is possibly 'undefined'.

if (found) {
  console.log(found.price); // ✅ ในบล็อกนี้ TypeScript รู้แล้วว่ามีของแน่
}
```

> 🎤 นี่คือหัวใจของคอร์สทั้งหมดในสไลด์เดียว: TypeScript ไม่ได้จู้จี้ มันบังคับให้เรา**คิดเผื่อกรณีไม่เจอ**
> — เคสที่โปรแกรมจริงพังบ่อยที่สุด (narrowing แบบเดียวกับ `typeof` ในข้อ 12)

---

## S3.8 · `.findIndex()` / `.some()` / `.every()` · ข้อ 54–55

**Theory**

- `findIndex` คืน**ตำแหน่ง** ไม่ใช่ตัวของ · ไม่เจอ = `-1` (ไม่ใช่ `undefined`)
  เพราะ index จริงไม่มีทางติดลบ จึงใช้ `-1` เป็นธรรมเนียมว่า "ไม่เจอ"
- `some` / `every` ไม่คืนลิสต์ คืนคำตอบ `true`/`false` ตัวเดียว

**Syntax**

```ts
const i = products.findIndex((product) => product.name === "Backpack"); // 3
const missing = products.findIndex((product) => product.name === "Laptop"); // -1

products.some((product) => product.price > 70);  // true  — มีอย่างน้อยหนึ่ง
products.every((product) => product.price > 1);  // true  — ทุกตัวเลย
```

⚠️ เช็คผลของ `findIndex` ต้องเขียน `if (i !== -1)` ไม่ใช่ `if (i)` — เพราะ index `0` ก็ falsy

---

## S3.9 · `.reduce()` — ยุบเหลือค่าเดียว · ข้อ 56 ⭐

**Theory**

`reduce` คือ**แพตเทิร์นบวกสะสมจากข้อ 14 ในรูปแบบสำเร็จรูป** — ไม่ใช่ของใหม่เลย

```
let total = 0;                    ← ค่าตั้งต้น  =  อาร์กิวเมนต์ตัวที่สองของ reduce
for (const p of products) {       ← การวน      =  reduce วนให้
  total = total + p.price;        ← ตัวฟังก์ชัน =  (sum, product) => sum + product.price
}
```

**Syntax**

```ts
const total = products.reduce((sum, product) => sum + product.price, 0);
console.log(total); // 170  — ผลเท่ากับข้อ 47 เป๊ะ แต่สั้นกว่า
```

> 🎤 เปิดข้อ 47 ค้างไว้ข้างๆ แล้วเทียบให้เห็นว่ามันคือโค้ดเดียวกัน

---

## S3.10 · เมธอดที่แก้ของเดิม — `.sort()` / `.splice()` · ข้อ 57–58 ⚠️

**Theory**

> `map` / `filter` / `find` **สร้างของใหม่** ไม่แตะของเดิม
> `sort` / `splice` / `push` / `pop` **แก้ลิสต์ตัวเดิม**

`[...prices]` คือ "ก๊อปลิสต์ใหม่ก่อน" — ต้องทำก่อน `sort` เสมอ ถ้าไม่อยากให้ของเดิมเปลี่ยน
ฟังก์ชันเปรียบเทียบของ `sort`: ติดลบ = `a` มาก่อน, บวก = `b` มาก่อน

**Syntax**

```ts
const sorted = [...prices].sort((a, b) => a - b);       // น้อย → มาก
console.log(prices); // ไม่เปลี่ยน เพราะก๊อปก่อน

const byPriceDesc = [...products].sort((a, b) => b.price - a.price); // มาก → น้อย

// splice(ตำแหน่ง, จำนวนที่จะลบ) — ต่างจาก pop() ที่ลบได้แค่ตัวท้าย
const index = products.findIndex((product) => product.name === "Pen");
if (index !== -1) {
  products.splice(index, 1);
}
```

✅ **CHECKPOINT** — บอกได้ว่าจะใช้ตัวไหนเมื่อไร:
แปลงทุกตัว = `map` / คัดบางตัว = `filter` / หาตัวเดียว = `find` /
เอาตำแหน่ง = `findIndex` / ถามใช่ไหม = `some`, `every` / ยุบเป็นค่าเดียว = `reduce`

---

# สไลด์ปิดคอร์ส

**สิ่งที่ TypeScript ให้เรา — สรุปจากทุก error ที่เจอมา**

| เจอตอนไหน | ข้อ | มันช่วยอะไร |
|---|---|---|
| ใส่ค่าผิดชนิด | 4, 19, 35 | จับก่อนโค้ดไปถึง production |
| แก้ค่า `const` | 3, 27 | ป้องกันการเขียนทับที่ไม่ตั้งใจ |
| พิมพ์ชื่อ property ผิด | 35, 40 | บั๊กที่เงียบที่สุดใน JS กลายเป็นเส้นแดงทันที |
| `find` อาจไม่เจอ | 53 | บังคับให้คิดเผื่อกรณี `undefined` |
| autocomplete | 35, 39 | ไม่ต้องจำ ไม่ต้องเปิดเอกสาร |

**สามประโยคที่อยากให้จำ**

1. ลิสต์นับเริ่มที่ **0** — ตัวสุดท้ายคือ `length - 1`
2. `[ ]` คือตำแหน่ง · `{ }` คือชื่อ — คนละเครื่องมือ คนละวิธีเข้าถึง
3. `const` **ล็อกกล่อง ไม่ได้ล็อกของข้างใน**

**ไปต่อ** — `npm run check` คือสิ่งเดียวกับที่ CI ของโปรเจกต์จริงรัน · โฟลเดอร์ 9 คือโค้ดที่เจอในงานจริง 80%
