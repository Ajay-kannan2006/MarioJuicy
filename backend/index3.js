const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: 'dpkw7d7aa',
    api_key: '496195679164643',
    api_secret: 'R8UAlnQt7GnM0h3RGmSqIa_jWmU'
});


const imageUpload = async (imagePath) => {
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    };
    try {
        // Upload the image
        const result = await cloudinary.uploader.upload(imagePath, options);
        console.log(result.url);
        return result.public_id;
    } catch (error) {
        console.error(error);
    }
}

imageUpload("./models/images/black-coffee.jpg");