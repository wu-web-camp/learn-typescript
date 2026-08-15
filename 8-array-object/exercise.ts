// 8. Array + Object  |  ข้อ 41 - 48  |  Session 2 (จุดพีคของคอร์ส)
//
// ข้อมูลจริงหน้าตาแบบนี้: ลิสต์ของออบเจ็กต์ และออบเจ็กต์ที่มีลิสต์ข้างใน

// ---------- object ที่มี array ข้างใน (ข้อ 41 - 42) ----------

// ข้อ 41: property ที่ค่าเป็นลิสต์
// TODO: Implement ข้อ 41
// 1. สร้าง companyActivities มี companyName และ activities
//    โดย activities เป็นลิสต์ของข้อความ 3 อย่าง
// 2. print ออกมาทั้งก้อน
// คำใบ้: activities: ["...", "...", "..."]  <- เหลี่ยมอยู่ข้างในปีกกา

// ข้อ 42: อ่านลิสต์ที่อยู่ข้างใน object
// TODO: Implement ข้อ 42
// 1. print companyActivities.activities.length
// 2. print companyActivities.activities[0]
// อ่านจากซ้ายไปขวา: จุดเข้าไปหาลิสต์ก่อน แล้วค่อยใช้เหลี่ยมหยิบตัวในลิสต์

// ---------- array ของ object (ข้อ 43 - 46) ----------

// ข้อ 43: สร้างลิสต์ของ object
// TODO: Implement ข้อ 43
// 1. สร้าง students เก็บ 3 คน แต่ละคนเป็น object { name, grade }
//    Ada 90, Grace 85, Alan 78
// 2. print students.length
// คำใบ้: [ { ... }, { ... }, { ... } ]  -- เหลี่ยมข้างนอก ปีกกาข้างใน

// ข้อ 44: หยิบเข้าไปทั้งสองชั้น
// TODO: Implement ข้อ 44
// 1. print students[0]        -> ได้ทั้ง object
// 2. print students[0].name   -> ได้ "Ada"
// 3. print students[1].grade  -> ได้ 85
// อ่านจากซ้ายไปขวา: students คือลิสต์ -> [0] หยิบตัวแรก (เป็น object) -> .name อ่านป้ายชื่อ
// ระวัง: students.name ไม่มีนะ มีแต่ของแต่ละ "ตัว" ในลิสต์

// ข้อ 45: วนลิสต์แล้วอ่าน property
// TODO: Implement ข้อ 45
// 1. ใช้ for...of วน students
// 2. print แบบ "Ada: 90"
// คำใบ้: student.name + ": " + student.grade

// ข้อ 46: ใส่ if เข้าไปในลูป
// TODO: Implement ข้อ 46
// 1. วน students อีกรอบ
// 2. ถ้า grade >= 85 ให้ print ชื่อ + " passed with honors"
// 3. Alan ได้ 78 บรรทัดของเขาจึงไม่ถูก print

// ---------- รวมทุกอย่าง (ข้อ 47 - 48) ----------

const products = [
  { name: "Notebook", price: 25 },
  { name: "Headphones", price: 80 },
  { name: "Pen", price: 5 },
  { name: "Backpack", price: 60 },
];

// ข้อ 47: รายงานสินค้า
// TODO: Implement ข้อ 47
// 1. วน products ด้วย for...of แล้ว print "ชื่อ: ราคา" ของทุกชิ้น
// 2. รวมราคาทั้งหมด (ประกาศ total ก่อนลูป / บวกข้างในลูป / print หลังลูป)
//    -- ควรได้ 170
// 3. ข้างในลูปเดิม ถ้า price > 50 ให้ print ว่าเป็นของแพง

// ข้อ 48 (ท้าทาย): หาของที่แพงที่สุด
// TODO: Implement ข้อ 48
// 1. สมมติว่าตัวแรกเป็นแชมป์:
//    let priciestName = products[0].name;
//    let priciestPrice = products[0].price;
// 2. วนลูป ถ้าเจอตัวที่ราคามากกว่าแชมป์ ให้เปลี่ยนแชมป์
// 3. print ชื่อแชมป์ -- ควรได้ "Headphones"
// แพตเทิร์น "หาตัวที่มากที่สุด" ใช้ได้กับ มากสุด/น้อยสุด/ดีสุด ตลอดไป

// ✅ CHECKPOINT: สร้างลิสต์ของ object ในธีมของตัวเองได้ วนลูปอ่าน property ได้
//    และคิดยอดรวมกับกรองด้วย if ได้

// 📝 การบ้าน: สร้างลิสต์ของหนัง 4 เรื่องขึ้นไป แต่ละเรื่องมี title, year, rating
//    (1) print ทุก title  (2) print เฉพาะเรื่องที่ rating > 8  (3) หา rating เฉลี่ย
//    ใช้ของที่เรียนไปแล้วทั้งหมด ไม่ต้องใช้ของใหม่
