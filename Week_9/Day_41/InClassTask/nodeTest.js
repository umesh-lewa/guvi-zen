var http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  let out = "";
  out += "<p>"
  fs.readdir("./../../Week_8/Day_40/PetShopDBDesign/", (err, files) => { 
  if (err) 
    console.log(err); 
  else { 
    console.log("\nCurrent directory filenames:"); 
    files.forEach(file => { 
      console.log(file); 
      out += "\n" + file;
    })  
  } 
}) 
  out += "</p>";
  console.log(out)
  res.write("out");
  res.end();
}).listen(8080);