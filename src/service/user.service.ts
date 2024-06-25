import cloudinary from "../config/cloudinary.config";

export default async function uploadToBucket (filePath: any, folder: string) {
    console.log(11)
    const result = await cloudinary.uploader.upload(filePath, {folder: folder});
    console.log(11)
    const imageUrl = result.secure_url;
    if(!imageUrl) {
        throw new Error("Error uploading Image")
    }
    return imageUrl;
}