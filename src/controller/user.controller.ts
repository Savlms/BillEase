import { Request, Response } from "express";
import uploadToBucket from "../service/user.service";

export default class UploadController {
    async uploadImage(req: Request, res: Response) {
        try {
            if (req.files) {

                const imageUrls: string[] = [];

                if (Array.isArray(req.files)) {
                    for (const file of req.files) {
                        const imageUrl = await uploadToBucket(file.path, "ugwo")
                        imageUrls.push(imageUrl);
                    }
                }
                return res.status(200).send({
                    message: "Image uploaded successfully",
                    success: true,
                    date : imageUrls
                });
            }
        } catch  (err: any) {
                res.status(500).send({
                    message: 'Failed to upload Image',
                    success: false,
                    error: err.message
                })
            }
        }
    }
  
