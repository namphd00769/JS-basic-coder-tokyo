var fs = require('fs');

fs.readFile('./song1.txt', { encoding: "utf8" }, (err1, song1) => {
   console.log(song1);
   fs.readFile('./song2.txt', { encoding: "utf8" }, (err2, song2) => {
      console.log(song2);
      fs.readFile('./song3.txt', { encoding: "utf8" }, (err3, song3) => {
         console.log(song3);
      });
   });
});

/**
 * Callback Hell là kiểu gọi lồng nhau của các callback function, kiểu này nhìn kinh dị nên ít được dùng
 * cách khắc phục là dung (Promise)
 */