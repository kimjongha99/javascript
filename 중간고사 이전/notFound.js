const express = require('express');
const res = require('express/lib/response');


const app = express();


app.get('*',(request, response)=> {

    response.status(404);
    response.send('해당 경로에는 아무것도 없습니다.');
});

app.listen(52273,()=> {
console.log('서버 시작 http://127.0.0.1:52273')
});