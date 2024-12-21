const cloudinary = require('../config/cloudinary')

const uploadToCloudinary = async (filepath) =>{
    try {
        const result  = await cloudinary.uploader.upload(filepath)
        return{
            url: result.secure_url,
            publicId: result.public_id
        }
    } catch (error) {
        console.error('there had been some internal error', error);
        throw new Error('there had been some internal error')
    }
}

module.exports={
    uploadToCloudinary
}