import db from '#db/client';

export async function createFiles(name, size, folder_id){
    const sql = `
        INSERT INTO files (name, size, folder_id) VALUES ($1, $2, $3)
        RETURNING *;
    `;
    const { rows: [files] } = await db.query(sql, [name, size, folder_id]);
    return files;
}

export async function getFiles() {
    const sql = `
        SELECT * FROM files
    `
    const { rows: files } = await db.query(sql);
    return files;
}