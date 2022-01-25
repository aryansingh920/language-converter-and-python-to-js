const express = require('express');
const {spawn} = require('child_process');
const translate =  require("translate");

const app = express();
const port = 3000;


translate('नमस्ते मैं आर्यन हूँ',{from:'hi',to:'en'}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

// app.get('/', (req, res) => {
//     var dataToSend;
//     const python = spawn('python', ['script.py']);
//     python.stdout.on('data', (data) => {
//         console.log('pipe data from python script ...');
//         dataToSend = data.toString();

//     });

//     python.on('close', (code) => {
//         console.log('python script close with code: ' + code);
//         res.send(dataToSend);
//     });
// })




// app.get("/first",async(req,res)=>{
//     translate.engine = "deepl";
// translate.key = process.env.DEEPL_KEY;

// const text = await translate("Hello world", "es");
// console.log("Hola mundo");
// })
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))