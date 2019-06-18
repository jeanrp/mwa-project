var express = require('express');
var router = express.Router();
var multer = require('multer');


// var DIR = '././uploads/';
// var upload = multer({dest: DIR});


// router.post('/', function (req, res, next) {
//     console.log('call upload');
//     var path = '';
//     upload(req, res, function (err) {
//         if (err) {
//             // An error occurred when uploading
//             console.log(err);
//             return res.status(422).send("an Error occured")
//         }
//         // No error occured.
//         path = req.file.path;
//         return res.send("Upload Completed for "+path);
//     });
// });


// const DIR = './uploads';
//
// let storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
//     }
// });
// let upload = multer({storage: storage});
//
//
// express.post('/',upload.single('photo'), function (req, res) {
//     if (!req.file) {
//         console.log("No file received");
//         return res.send({
//             success: false
//         });
//
//     } else {
//         console.log('file received successfully');
//         return res.send({
//             success: true
//         })
//     }
// });



module.exports = router;
