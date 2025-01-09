import DataUriParser from "datauri/parser.js";
import path from "path";

const getDataUrl = (file) => {
  const parser = new DataUriParser();

  console.log("File :: ", file.originalname);
  const extName = path.extname(file.originalname).toString(); 
  console.log("extName :: ", extName);
  

  return parser.format(extName, file.buffer)
};

export default getDataUrl;