const fs = require('fs');
const sharp = require('sharp');



const main = () =>{
//check if the output folder exists
if(!fs.existsSync('./output')){
    fs.mkdirSync('./output');
}
const files = fs.readdirSync(__dirname).filter((file) => file.endsWith(".png"));
files.forEach(async (file) => {
    const image = sharp(file);
    image.resize(400, 400).png({ quality: 10 }).toFile(`./output/${file}`);
    //And delete the original file
    fs.unlinkSync(file);
  });
}


main()