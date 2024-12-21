const Image = require('../models/Image')
const {uploadToCloudinary} = require('../helpers/cloudinaryHelper')


const uploadImageController = async(req, res) =>{
    try {
        //checkif file exists
        if(!req.file){
            return res.status(400).json({
                success:false,
                message: "File is required to upload"
            })
        }

        //file exists and upload logic
        const {url, publicId} = await uploadToCloudinary(req.file.path)

        //store url, publicId, userId in db
        const newlyUploadedImage = new Image({
            url,
            publicId,
            uploadedBy: req.userInfo.userId
        })

        await newlyUploadedImage.save()
        res.status(201).json({
            success: true,
            message: "Image uploaded successfully",
            image: newlyUploadedImage
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Unable to upload image"
        })
    }
}

module.exports = {uploadImageController}