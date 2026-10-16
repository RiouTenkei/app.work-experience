import express from 'express';
import { searchController, userLogin, userSignup, usernameController } from './controller.js';
import router from './route.js';
import multer from 'multer';
import bodyParser from 'body-parser';

const app = express();

const upload = multer()

const port = 3000;

app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
app.use(upload.array())
app.use('/tasks', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});