var fs = require('fs');

export default function handler(req, res) {
    fs.readdir("blogData", (err, data) => {
        console.log(data)
        res.status(200).json(data);
    })
  }
  