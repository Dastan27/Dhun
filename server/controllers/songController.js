import { Album } from "../models/Album.js";
import TryCatch from "../utils/TryCatch.js";
import getDataUrl from "../utils/uriGenerator.js";
import cloudinary from "cloudinary"

export const createAlbum = TryCatch(async(req, res) => {
    if(req.user.role !== "admin") return res.status(403).json({
        message: "You are not Admin."
    })

    const {title, description} = req.body;

    console.log("req", req.body);
    
    const file = req.file;
    console.log(" ==>", file);
    

    const fileUrl = getDataUrl(file);

    const cloud = await cloudinary.v2.uploader.upload(fileUrl.content);

    await Album.create({
        title,
        description,
        thumbnail: {
            id: cloud.public_id,
            url: cloud.secure_url,

        }
    })

    res.json({
        message: "Album  Added"
    })
})