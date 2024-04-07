import express from "express";
import { downloadFile, uploadFile } from "../Controllers/ImageController.js";
import { upload } from "../utils/uploadmiddleware.js";

const router = express.Router();
router.post("/upload", upload.single("file"), uploadFile);
router.get("/file/:id", downloadFile);
export default router;
