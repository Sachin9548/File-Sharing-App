import File from "../models/file.js";
export const uploadFile = async (req, res) => {
  const fileobj = {
    path: req.file.path,
    name: req.file.originalname,
  };
  try {
    const file = await File.create(fileobj);
    // console.log("file", file);
    console.log(req.params);
    res.status(200).json(`backendurl/file/${file.id}`);
  } catch (error) {
    console.log("error in upload image", error);
    res.status(400).json(error);
  }
};

export const downloadFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    file.downloadCount++;
    await file.save();
    res.download(file.path, file.name);
  } catch (error) {
    console.log("error in download image", error);
    res.status(400).json(error);
  }
};
