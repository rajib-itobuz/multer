import multer from "multer";
import express from "express";
import { connectDb } from "./connectDb/index.js";
import { constants } from "./constants/index.js";
import { timeLog } from "./logger/logger.js";
import { addUser } from "./controller/index.js";


const app = express();
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '.' + file.originalname.split('.').pop())
    }
})
const upload = multer({ storage: storage });


app.use(timeLog);
connectDb(constants.mongourl);


app.use(express.json());
app.post('/register', upload.single('file'), addUser)
app.use('/uploads', express.static('uploads'));


app.listen(constants.port, () => {
    console.log(`port running at ${constants.port}`);
})