const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const connect = require('./server/schemas/db');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const userRouter = require('./server/routes/users');
const memberRouter = require('./server/routes/members');
const postsRouter = require('./server/routes/posts');
const messageRouter = require('./server/routes/message');
const commentsRouter = require('./server/routes/comments');
const likesRouter = require('./server/routes/likes');
const workSpaceRouter = require('./server/routes/workSpaces');
const boardRouter = require('./server/routes/boards');
const http = require('http');
const server = http.createServer(app);
const cookieParser = require('cookie-parser');
const kakaoRouter = require('./server/routes/kakao');
const naverRouter = require('./server/routes/naver');
const taskRouter = require('./server/routes/tasks');
const tasksRouter = require('./server/routes/tasks_team');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const manitoRouter = require('./server/routes/manito');
const helmet = require('helmet');
const moment = require('moment');
const createdAt = moment().format('HH:mm');
const morganMiddleware = require('./server/config/morganMiddleware');
require('moment-timezone');
global.logger || (global.logger = require('./server/config/logger'));

connect();

moment.tz.setDefault('Asia/seoul');
console.log(
  '현재 시각은 ' + createdAt + ' 입니다. 오늘도 즐거운 코딩하세요 -!'
);

app.use(morgan('combined'));
app.use(cors());
app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({ secret: 'MySecret', resave: false, saveUninitialized: true })
);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(helmet()); // 보안성 향상
app.use(morganMiddleware); // 콘솔창에 통신결과 나오게 해주는 것

app.use('/api', [
  userRouter,
  postsRouter,
  messageRouter,
  commentsRouter,
  likesRouter,
  workSpaceRouter,
  kakaoRouter,
  naverRouter,
  taskRouter,
  tasksRouter,
  boardRouter,
  manitoRouter,
  memberRouter,
]);

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.send('실전 파이널 프로젝트 서버 루트 경로입니다.');
});
app.get('/api', (req, res) => {
  res.send('실전 파이널 프로젝트 서버 /api');
});

module.exports = server;
