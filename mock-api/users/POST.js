const fs = require('fs')
const fileName = './GET.json'
const file = require(fileName)
file.key = "new value";

module.exports = (req,res) => {
  console.log(req.body)
  fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(file));
    console.log('writing to ' + fileName);
  });
    return 
      res.status(201).send({
        id: req.body.id,
        name: req.body.name,
      });
    };
