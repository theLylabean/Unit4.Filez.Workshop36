import filesRouter from './api/files.js';
import foldersRouter from './api/folders.js'
import express from "express";
const app = express();
export default app;

app.use(express.json());
app.use(( req, res, next ) => {
    console.log(req.method, req.originalUrl);
    next();
})
app.use('/files', filesRouter);
app.use('/folders', foldersRouter);
app.route('/').get(async ( req, res ) => {
    res.send('Welcome to the Complicated Mind of Beautiful Creatures')
})
app.use(( err, req, res, next ) => {
    console.log(err);
    res.status(500).send('AN ERROR HAS OCCURED' + err);
})