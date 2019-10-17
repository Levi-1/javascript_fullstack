const package = require('./package.json');
console.log(package.version)
const images = require('images');
const background = images('./images/timg.jpg');
console.log(background);
const ind = images('./images/gq.jpeg');
console.log(ind)
const offset = {x: 5,y: 5};
console.log(ind.width(),ind.height());
const foreground_image = images(ind.width() + offset.x,ind.height() + offset.y).fill(0xff,0xff,0xff,1).draw(ind,offset.x,offset.y);
const position = {
    x: background.width() - ind.width(),
    y: background.height() - ind.height()
}
background.draw(foreground_image,position.x,position.y).save('./images/result.jpg',{qulity: 100})