// 9. Array Helper Function  |  ข้อ 49 - 58  |  Session 3
//
// ต้องผ่านโฟลเดอร์ 2 (function) มาก่อน เพราะ helper พวกนี้รับ "ฟังก์ชัน" เข้าไปทั้งหมด
//
// ที่ผ่านมาเราเขียน for loop เองทุกครั้ง คราวนี้ลิสต์ทำให้แทน
// เราแค่บอกว่า "ทำอะไรกับแต่ละตัว" แล้วส่งฟังก์ชันนั้นเข้าไป

const prices: number[] = [100, 200, 500, 1000];

const products = [
  { name: "Notebook", price: 25 },
  { name: "Headphones", price: 80 },
  { name: "Pen", price: 5 },
  { name: "Backpack", price: 60 },
];

// ---------- แปลงร่าง: .map() (ข้อ 49 - 50) ----------

// ข้อ 49: .map() แปลงทุกตัวเป็นค่าใหม่
// TODO: Implement ข้อ 49
// 1. const pricesWithVat = prices.map((price: number): number => price * 1.07);
// 2. print ทั้ง prices และ pricesWithVat
// สังเกต: prices ตัวเดิมไม่เปลี่ยน -- map สร้างลิสต์ "ใหม่" คืนมา
// คำใบ้: ลิสต์ผลลัพธ์ยาวเท่าเดิมเสมอ เข้าไปกี่ตัว ออกมากี่ตัว

// ข้อ 50: .map() เปลี่ยนลิสต์ของ object เป็นลิสต์ของข้อความ
// TODO: Implement ข้อ 50
// 1. ใช้ map กับ products ให้ได้ ["Notebook", "Headphones", "Pen", "Backpack"]
// คำใบ้: products.map((product) => product.name)
// 2. ลองแยกฟังก์ชันออกมาตั้งชื่อก่อน แล้วค่อยส่งชื่อฟังก์ชันเข้าไป
//    const getName = (product: { name: string; price: number }): string => product.name;
//    products.map(getName)

// ---------- คัดกรอง: .filter() (ข้อ 51 - 52) ----------

// ข้อ 51: .filter() เก็บเฉพาะตัวที่ผ่านเงื่อนไข
// TODO: Implement ข้อ 51
// 1. หาสินค้าที่ราคา > 50 แล้ว print
// คำใบ้: products.filter((product) => product.price > 50)
// ต่างจาก map: filter ได้ลิสต์ "สั้นลงได้" เพราะคัดบางตัวออก แต่ตัวที่เหลือหน้าตาเหมือนเดิม

// ข้อ 52: filter + includes ทำ search แบบไม่สนตัวพิมพ์เล็กใหญ่
// TODO: Implement ข้อ 52
// 1. เขียนค้นหาสินค้าจากคำค้น เช่น "pen" ให้เจอ "Pen" ด้วย
// คำใบ้: product.name.toLowerCase().includes(query.toLowerCase())
// includes() ตอบ true/false ว่ามีข้อความนั้นอยู่ข้างในไหม

// ---------- ค้นหา: .find() / .findIndex() (ข้อ 53 - 54) ----------

// ข้อ 53: .find() คืน "ตัวแรก" ที่ตรงเงื่อนไข
// TODO: Implement ข้อ 53
// 1. const found = products.find((product) => product.name === "Pen");
// 2. print found
// 3. ลองหาชื่อที่ไม่มีจริง เช่น "Laptop" -> ได้ undefined
// สำคัญ: find อาจไม่เจอ ชนิดที่ได้จึงเป็น "object หรือ undefined"
//        ถ้าเขียน found.price ตรงๆ TypeScript จะฟ้อง -- ต้องเช็คก่อนด้วย if (found) { ... }
//        นี่คือ TypeScript บังคับให้เราคิดเผื่อกรณีไม่เจอ

// ข้อ 54: .findIndex() คืน "ตำแหน่ง" แทนตัวของ
// TODO: Implement ข้อ 54
// 1. หา index ของ "Backpack" แล้ว print
// 2. ลองหาตัวที่ไม่มี -> ได้ -1 (ไม่ใช่ undefined)
// คำใบ้: -1 คือธรรมเนียมที่แปลว่า "ไม่เจอ" เพราะ index จริงไม่มีทางติดลบ

// ---------- ตอบ true/false: .some() / .every() (ข้อ 55) ----------

// ข้อ 55: มีบ้างไหม / ใช่ทั้งหมดไหม
// TODO: Implement ข้อ 55
// 1. products.some((product) => product.price > 70)   -> มีอย่างน้อยหนึ่งชิ้นไหม
// 2. products.every((product) => product.price > 1)   -> ทุกชิ้นเลยไหม
// 3. print ทั้งสองอัน

// ---------- ยุบเหลือค่าเดียว: .reduce() (ข้อ 56) ----------

// ข้อ 56: .reduce() คือแพตเทิร์นบวกสะสมในรูปแบบสำเร็จรูป
// TODO: Implement ข้อ 56
// 1. หาผลรวมราคาด้วย reduce -- ควรได้ 170
// คำใบ้: products.reduce((sum, product) => sum + product.price, 0)
//        เลข 0 ท้ายสุดคือ "ค่าตั้งต้น" เหมือน let total = 0 ที่เราเคยเขียนก่อนลูป
// 2. เทียบกับ ข้อ 47 ที่เขียน for loop เอง -- ผลเหมือนกัน แต่สั้นกว่า

// ---------- เมธอดที่ "แก้ของเดิม" (ข้อ 57 - 58) ----------
// ระวัง: map/filter/find สร้างของใหม่ ไม่แตะของเดิม
//        แต่สองข้อนี้แก้ลิสต์ตัวเดิมเลย

// ข้อ 57: .sort() เรียงลำดับ
// TODO: Implement ข้อ 57
// 1. const sorted = [...prices].sort((a, b) => a - b);
//    [...prices] คือ "ก๊อปลิสต์ใหม่ก่อน" เพราะ sort แก้ของเดิม
// 2. print ทั้ง sorted และ prices -- prices ต้องไม่เปลี่ยน
// 3. ลองเรียง products ตามราคาจากมากไปน้อย: (a, b) => b.price - a.price

// ข้อ 58: .splice() ลบออกจากตำแหน่งที่ระบุ
// TODO: Implement ข้อ 58
// 1. หา index ของ "Pen" ด้วย findIndex
// 2. ถ้าเจอ (index !== -1) ให้ใช้ products.splice(index, 1) ลบทิ้ง 1 ตัว
// 3. print products
// คำใบ้: splice(ตำแหน่ง, จำนวนที่จะลบ) -- ต่างจาก pop() ที่ลบได้แค่ตัวท้าย

// ✅ CHECKPOINT: บอกได้ว่าจะใช้ตัวไหนเมื่อไร --
//    แปลงทุกตัว = map / คัดบางตัว = filter / หาตัวเดียว = find
//    เอาตำแหน่ง = findIndex / ถามใช่ไหม = some, every / ยุบเป็นค่าเดียว = reduce
