import { getFiles } from "#db/queries/files";
import express from "express";
const router = express.Router();

router.route('/').get(async ( req, res ) => {
    const files = await getFiles();
    res.send(files);
})

export default router