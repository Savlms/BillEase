import express from 'express';
import UploadController from '../controller/user.controller';
import upload from '../config/multer.config'
const router = express.Router();
const { uploadImage } = new UploadController();


//upload an image
router.post("/upload/images", upload.array("images"), uploadImage);


export default router