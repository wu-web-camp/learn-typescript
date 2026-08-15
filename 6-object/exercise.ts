// 6. Object  |  ข้อ 32 - 37  |  Session 2
//
// ปีกกา { } แปลว่า "ออบเจ็กต์" -- แต่ละบรรทัดคือ ป้ายชื่อ : ค่า
// [ ] = ลิสต์ เข้าถึงด้วยตำแหน่ง / { } = ออบเจ็กต์ เข้าถึงด้วยชื่อ

// ข้อ 32: สร้าง object
// TODO: Implement ข้อ 32
// 1. สร้าง person มี name: "Ada", age: 30, isStudent: true แล้ว print
// คำใบ้: ป้ายชื่อไม่ต้องมี quote แต่ค่าที่เป็นข้อความต้องมี
// ระวัง: ข้างใน object ใช้ colon ( : ) ไม่ใช่ equal ( = )

// ข้อ 33: อ่าน property ด้วยจุด
// TODO: Implement ข้อ 33
// 1. print person.name และ person.age
// คำใบ้: person.name อ่านว่า "property ชื่อ name ของ person"

// ข้อ 34: แก้ property
// TODO: Implement ข้อ 34
// 1. เปลี่ยน age เป็น 31 แล้ว print ซ้ำ
// คำใบ้: จุดเดิม แต่ย้ายไปซ้ายของ =

// ข้อ 35: ให้ TypeScript ช่วยจับผิด (ทำแล้วลบทิ้ง)
// TODO: Implement ข้อ 35
// 1. เขียน console.log(person.naem);   <- พิมพ์ผิดตั้งใจ
// 2. เขียน person.age = "thirty";      <- ใส่ผิดชนิดตั้งใจ
// 3. อ่าน error ทั้งสองอัน แล้วลองรัน npm run check ในเทอร์มินัลด้วย
// 4. ลองพิมพ์ person. แล้วหยุด -- editor จะขึ้นรายชื่อ property ให้เลือก
// 5. ลบทั้งสองบรรทัดทิ้ง
// ถ้าเป็น JavaScript เปล่าๆ ข้อผิดพลาดแรกจะ print undefined เงียบๆ แล้วเราไล่บั๊กเป็นชั่วโมง

// ข้อ 36: object ของตัวเอง
// TODO: Implement ข้อ 36
// 1. สร้าง book มี title (string), pages (number), available (boolean)
// 2. print title
// 3. เปลี่ยน available เป็น false แล้ว print

// ข้อ 37: object ที่มีค่าเป็นชนิดต่างๆ ปนกัน
// TODO: Implement ข้อ 37
// 1. สร้าง dog มี dogName, weight, color, breed, age, burglarBiter
// 2. print ทั้ง object ออกมาทีเดียว
// สังเกต: ค่าข้างในเป็นคนละชนิดกันได้ แต่บรรยาย "สิ่งเดียวกัน"

// ✅ CHECKPOINT: สร้าง object ได้, อ่านและแก้ property ได้, และเคยเห็น error จากการพิมพ์ชื่อ property ผิด
