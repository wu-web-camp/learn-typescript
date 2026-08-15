// 2. Function  |  ข้อ 5 - 9  |  Session 3
//
// ฟังก์ชัน = ห่อโค้ดไว้ ตั้งชื่อ แล้วเรียกใช้ซ้ำได้ ป้อนข้อมูลต่างกันได้
// signature บอกว่า "รับอะไร" (พารามิเตอร์) และ "คืนอะไร" (return type)

// ข้อ 5: function declaration ที่ไม่คืนค่า
// TODO: Implement ข้อ 5
export function sayHi(name: string): void {
    // 1. print "Hello, " + name + "!"
    // คำใบ้: void แปลว่า "ไม่คืนค่าอะไรกลับไป" ทำงานแล้วจบ
}

// ข้อ 6: function declaration ที่คืนค่า
// TODO: Implement ข้อ 6
export function add(a: number, b: number): number {
    // 1. return ผลบวกของ a กับ b
    return 0; // placeholder -- ลบทิ้งตอนทำจริง
}

// ข้อ 7: arrow function
// TODO: Implement ข้อ 7
export const multiply = (x: number, y: number): number => {
    // 1. return ผลคูณ
    // คำใบ้: เขียนคนละหน้าตากับข้อ 6 แต่ทำงานเหมือนกัน
    return 0; // placeholder
};

// ข้อ 8: arrow function แบบสั้นบรรทัดเดียว
// TODO: Implement ข้อ 8
// 1. เขียน const calVat = (price: number): number => price * 1.07;
// 2. ไม่มีปีกกา ไม่มี return -- ผลของนิพจน์คือค่าที่คืนเลย
// 3. ลองเรียก console.log(calVat(100));

// ข้อ 9: callback -- ส่ง "ฟังก์ชัน" เข้าไปเป็นข้อมูล
// TODO: Implement ข้อ 9
export function sayHello(name: string, callback: (message: string) => void): void {
    // 1. สร้าง message เช่น `Hi ${name}`
    // 2. เรียก callback(message)
    // คำใบ้: พารามิเตอร์ callback มีชนิดเป็น "ฟังก์ชันที่รับ string แล้วไม่คืนค่า"
}

// ลองเรียกใช้ทั้งหมด
// TODO: เรียก sayHi, add, multiply, sayHello แล้ว print ผลออกมา

// ✅ CHECKPOINT: เขียนฟังก์ชันได้ทั้งแบบ declaration และ arrow, แยกออกว่า void ต่างกับ number ยังไง
