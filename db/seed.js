import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  const folders = ['Personal', 'Class', 'Important'];
  const files = [
    { name: 'lylabean.docx', size: 1025, folderName: 'Personal' },
    { name: 'sunnybear.pptx', size: 2049, folderName: 'Personal' },
    { name: 'salem.docx', size: 1022, folderName: 'Personal' },
    { name: 'wolfie.txt', size: 900, folderName: 'Personal' },
    { name: 'jaskier.docx', size: 2500, folderName: 'Personal' },
    { name: 'block1.js', size: 25, folderName: 'Class' },
    { name: 'block2.js', size: 17, folderName: 'Class' },
    { name: 'block3.js', size: 1025, folderName: 'Class' },
    { name: 'block4.css', size: 714, folderName: 'Class' },
    { name: 'block5.js', size: 200, folderName: 'Class' },
    { name: 'bills.xlsx', size: 654, folderName: 'Important' },
    { name: 'taxes.docx', size: 354, folderName: 'Important' },
    { name: 'consultation.txt', size: 8645, folderName: 'Important' },
    { name: 'house.jpeg', size: 6841, folderName: 'Important' }
  ];
}
