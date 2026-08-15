// 7. Nested Object (ออบเจ็กต์ซ้อนออบเจ็กต์)  |  ข้อ 38 - 40  |  Session 2
//
// ค่าของ property เป็น object อีกทีก็ได้ -- ข้อมูลจริงมักซ้อนกันแบบนี้

// ข้อ 38: สร้าง object ซ้อน
// TODO: Implement ข้อ 38
// 1. สร้าง company มี companyName, activity, yearOfEstablishment
// 2. เพิ่ม property ชื่อ address ที่ "ค่าเป็น object" อีกอัน
//    ข้างใน address มี street, number, zipcode, city, state
// 3. print company ออกมาทั้งก้อน
// คำใบ้: address: { street: "...", city: "..." }  <- ปีกกาซ้อนปีกกา

// ข้อ 39: อ่านเข้าไปหลายชั้นด้วยจุดต่อจุด
// TODO: Implement ข้อ 39
// 1. print company.companyName
// 2. print company.address.city
// อ่านจากซ้ายไปขวา: company -> address (ได้ object) -> city (ได้ข้อความ)
// ลองพิมพ์ company.address. แล้วหยุด -- editor รู้จัก property ชั้นในให้ด้วย

// ข้อ 40: แก้ค่าชั้นใน
// TODO: Implement ข้อ 40
// 1. เปลี่ยน company.address.city เป็นเมืองอื่น แล้ว print ซ้ำ
// 2. ลองพิมพ์ผิดเป็น company.adress.city ดู error แล้วลบทิ้ง

// ✅ CHECKPOINT: สร้าง object ที่มี object ซ้อนได้ และอ่านค่าชั้นในด้วยจุดต่อจุดได้
