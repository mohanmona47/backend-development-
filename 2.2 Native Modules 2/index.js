 const fs = require("fs");

/* s.writeFile("message.txt", "Hello Node1", (err) => {
  if (err) throw err;
  console.log("The file has been savedhere!");
}); */  
fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
