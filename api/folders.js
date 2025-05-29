import { getFolders } from "#db/queries/folders";
import express from "express";
const router = express.Router();

router.route('/').get(async ( req, res ) => {
    const folders = await getFolders();
    res.send(folders);
})

export default router