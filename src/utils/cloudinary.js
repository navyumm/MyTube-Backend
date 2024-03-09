import { v2 as cloudinary } from "cloudinary";
import fs from "fs";


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}



export { uploadOnCloudinary }



// isme files aayegi file system ke trought, means server par uploaad ho chuki hai, kaise hui nhi pta
// lekin ye koi bhi service use karega toh local file ka path dega

// local file matlab : jo bhi file mere server par jaa chuki hai
// ab server par mere file aa gyi hai, server se mai cloudinaryy par daal dunga
// fir server se file remove karni padegi


// node ke sath fs milta hai -> unlink

// -----------------

// ab middleware bnayenge using multer