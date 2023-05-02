
// 모듈을 추출합니다.
const express = require('express');

const app = express();
app.get('', (request, response) => {
     response.redirect('http://hanbit.co.kr');
});
// 서버를 실행합니다.
app.listen(52273, () => {
console.log('Server running at http://127.0.0.1:52273');
});
