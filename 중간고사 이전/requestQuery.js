const express = require('express');


const app = express();


app.get('*',(request,response)=>{
    console.log(request.query);
    response.send(request.query);
});


app.listen(52273,()=>{
    console.log('서버시작 http://127.0.0.1:52273')
})