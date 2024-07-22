// Express 모듈을 불러옵니다.
// Express는 Node.js를 위한 빠르고 개방적인 웹 애플리케이션 프레임워크입니다.
// 웹 및 모바일 애플리케이션을 위한 강력한 기능 세트를 제공합니다.
const express = require('express');

// Mongoose 모듈을 불러옵니다.
// Mongoose는 MongoDB 객체 모델링 도구로, 비동기 환경에서 작동하도록 설계되었습니다.
const mongoose = require('mongoose');

// body-parser 모듈을 불러옵니다.
// body-parser는 HTTP 요청 본문을 파싱하는 미들웨어로, 요청 데이터를 쉽게 추출할 수 있게 해줍니다.
const bodyParser = require('body-parser');

// Express 애플리케이션을 생성합니다.
// 이 애플리케이션 객체는 HTTP 요청을 처리하고 미들웨어를 구성하는 데 사용됩니다.
const app = express();

// body-parser 미들웨어를 사용하도록 설정합니다.
// JSON 형식의 요청 본문을 파싱합니다.
app.use(bodyParser.json());
// URL-encoded 형식의 요청 본문을 파싱합니다.
app.use(bodyParser.urlencoded({ extended: true }));

const mongoURI = 'mongodb://localhost:27017/biofdnc-hub';

// MongoDB 연결 설정
// 실제 사용 시 환경 변수나 설정 파일에서 URL을 가져오는 것이 좋습니다.
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

// API 라우트를 '/api' 경로에 연결
const apiRoutes = require('./src/app/api/index');
app.use('/api', apiRoutes);

// 포트 번호를 설정합니다.
const port = process.env.PORT || 5000;

// 지정된 포트에서 서버를 시작하고 리스닝을 시작합니다.
// Express는 Node.js의 http 모듈을 추상화하여 서버 설정을 간소화합니다.
app.listen(port, () => {
  // 서버가 성공적으로 시작되면 콘솔에 메시지를 출력합니다.
  console.log(`App listening on port ${port}`);
});