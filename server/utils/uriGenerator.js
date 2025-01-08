import DataUriParser from "datauri/parser.js";
import path from "path";

const getDataUrl = (file) => {
  const parser = new DataUriParser();
  console.log("extName  ===>", typeof(file));
  const extName = path.extname(file.originalname).toString();
  console.log(extName);
  

  return parser.format(extName, file.buffer)
};

export default getDataUrl;