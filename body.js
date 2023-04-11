
// 모듈을 추출합니다.
const express = require('express'); 
const morgan = require('morgan');
// 서버를 생성합니다.
const app = express();
app.use(express.static('public'));
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: false }));
// request 이벤트 리스너를 설정합니다. 
app.get('/', (request, response) => { // Creates an HTML form for user input.
    let output = '';
    output += '<form method="post"> ';
    output += '<input type="text" name="a" />';
    output += '<input type="text" name="b" />'; 
    output += '<input type="submit" />';
    output += '</form>';
    // 응답합니다.
    response.send(output);
});

app.post('/',(request,response)=> {
    response.send(request.body);
});

app.listen(52273,()=>{
    console.log('서버 http://127.0.0.1:52273 ')
});