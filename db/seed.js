import db from "#db/client";
import { createFolder } from "./queries/folders.js";
import { createFiles } from "./queries/files.js";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  const folders = ['Personal', 'Class', 'Important'];
  const files = [
    { name: 'lylabean.docx', size: 1025 },
    { name: 'sunnybear.pptx', size: 2049 },
    { name: 'salem.docx', size: 1022 },
    { name: 'wolfie.txt', size: 900 },
    { name: 'jaskier.docx', size: 2500 },

    { name: 'block1.js', size: 25 },
    { name: 'block2.js', size: 17 },
    { name: 'block3.js', size: 1025 },
    { name: 'block4.css', size: 714 },
    { name: 'block5.js', size: 200 },

    { name: 'bills.xlsx', size: 654 },
    { name: 'taxes.docx', size: 354 },
    { name: 'consultation.txt', size: 8645 },
    { name: 'house.jpeg', size: 6841 },
    { name: 'lawn.jpeg', size: 3524 }
  ];
  for(let i=0; i < folders.length; i++){
    const folders = await createFolder( folders[i] )
    for (let j=0; j < files.length; j++){
      const files = await createFiles( files[j], files[j].size, folders.id )
    }
  }
}
