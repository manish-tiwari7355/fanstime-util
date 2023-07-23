const formidable = require("formidable");
const createHttpError = require("http-errors");
const uploadFileService = require("../../services/Upload/uploadFile");

const uploadFile = async (req, res, next) => {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(400);
        res.send(err);
      }

      const { modelName, originalFileName, fileType } = fields;

      // upload files to s3
      const filesArray = Object.values(files);
      if (!filesArray.length) throw createHttpError.BadRequest("Missing file!");
      const item = filesArray[0];

      let location = item.filepath;
      // uploads file.
      const data = await uploadFileService(
        location,
        originalFileName || item.name,
        modelName,
        fileType
      );
      console.log("data: ", data);
      const response = {
        url: data.Location,
        type: fileType,
      };

      res.status(200).send({
        success: "true",
        data: response,
      });
    });
  } catch (error) {
    console.error("error in upload file: ", error);
    next(error);
  }
};

module.exports = uploadFile;
