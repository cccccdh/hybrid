const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

app.use(cors());

app.get('/hi', (req, res) => {
    res.json({ message: '클라이언트에서 보낸 데이터입니다.' });
});

app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
