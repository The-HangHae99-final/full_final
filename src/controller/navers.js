const dotenv = require('dotenv');
dotenv.config();
var axios = require('axios');
var request = require('request');
var User = require('../models/user');
var express = require('express');
var app = express();
var router = express.Router();
var client_id = process.env.YOUR_CLIENT_ID;
var client_secret = process.env.YOUR_CLIENT_SECRET;
var state = 'teamnote';
var jwt = require('jsonwebtoken');
const jwtSecret = process.env.SECRET_KEY;
var redirectURI = encodeURI('https://0jun.shop/auth/login/callback');
// var server_url = 'http://52.78.168.151:3000';
var request = require('request');

// 프론트에게서 인가코드를 받는다 post_1
// 서버에서 인가코드를 가지고 카톡에게서 토큰을 받는다.
// 토큰을 클라이언트에게 보낸다.
// 클라이언트가 토큰을 바디에 담아서 다시 post 요청을 한다. post_2
// 백엔드에서 토큰을 가지고 다시 카톡에게 정보를 요청한다.
// 정보를 클라이언트에게 보낸다.
// 클라이언트가 받고 데이터를 파싱해서 다시 보낸다.post_3  // 데이터 파싱문제!!
// 백엔드가 받아서 DB에 저장한다.
// router.post('/naver', authmiddleware)

// 프론트에게서 인가코드 받고 액세스 토큰 발급받기.
function naver(req, res) {
  try {
    //#swagger.tags= ['네이버 API'];
    //#swagger.summary= '네이버 콜백 API'
    //#swagger.description='-'
    var code = req.body.code;
    console.log('code:', code);
    var state = 'teamnote';
    console.log('state:', state);
    api_url =
      'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=' +
      client_id +
      '&client_secret=' +
      client_secret +
      '&code=' +
      code +
      '&state=' +
      state;
    var options = {
      url: api_url,
      headers: {
        'X-Naver-Client-Id': client_id,
        'X-Naver-Client-Secret': client_secret,
      },
    };
    // 액세스 토큰 프론트에게 다시 건네주기
    request.get(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
        res.end(body);
      } else {
        res.status(response.statusCode).end();
      }
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      errorMessage: error.message,
      message: '오류가 발생했습니다.',
    });
  }
}

// router.post('/member')
// 프론트에게 건너준 토큰을 다시 받고, 네이버에 정보요청하기.
function naver_member(req, res) {
  try {
    //#swagger.tags= ['네이버 API'];
    //#swagger.summary= '네이버 정보요청 API'
    //#swagger.description='-'
    var api_url = 'https://openapi.naver.com/v1/nid/me';
    var request = require('request');
    var token = req.body.token;
    console.log('---------------------토큰', token);
    var header = 'Bearer ' + token; // Bearer 다음에 공백 추가
    var options = {
      url: api_url,
      headers: { Authorization: header }, // 헤더 중요
    };
    request.get(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
        res.end(body);
      } else {
        console.log('error');
        if (response != null) {
          res.status(response.statusCode).end();
          console.log('error = ' + response.statusCode);
        }
      }
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      errorMessage: error.message,
      message: '에러가 발생했습니다',
    });
    console.log(err);
  }
}

// router.post('/parsing')
// 프론트에서 파싱한 데이터 받고, DB에 유저정보 저장하기
async function naver_parsing(req, res) {
  try {
    //#swagger.tags= ['네이버 API'];
    //#swagger.summary= '네이버 파싱 API'
    //#swagger.description='-'
    const site = 2; //naver
    const user_info = req.body;
    console.log(
      'user_info-----------------------------------------',
      user_info
    );
    const _user = user_info.user_id;
    const userEmail = user_info.user_email;
    const userName = user_info.user_name;
    const double = await User.findOne({ userEmail });

    // 리프레시 토큰 생성

    const token = jwt.sign({ userEmail }, jwtSecret, {
      expiresIn: '1h',
    });

    const refresh_token = jwt.sign({}, jwtSecret, {
      expiresIn: '14d',
    });

    if (!double) {
      const social = new User({ userName, userEmail, site, refresh_token });
      social.save();
      res.send('저장에 성공하였습니다.');
    } else if (double.userName == userName) {
      //이름까지 같다면 통과, 리프레시 토큰만 대체
      await double.update({ refresh_token }, { $: { userEmail } });
      res.status(200);
      console
        .log('token-----------------', token)
        .json({ token, success: true, message: '리프레시 토큰 대체 성공' });
    } else {
      // 랜덤난수 생성
      min = Math.ceil(111111);
      max = Math.floor(999999);
      const number = Math.floor(Math.random() * (max - min)) + min;
      //기존에 이메일이 존재하지만, 이름이 틀리다면, email에 표시하고 가입시키고 통과.

      userEmail = userEmail + number;
      const social = new User({ userName, userEmail, site, refresh_token });
      social.save();
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      errorMessage: error.message,
      message: '에러가 발생했습니다.',
    });
    console.log('error =' + err);
  }
}

module.exports = {
  naver,
  naver_member,
  naver_parsing,
};
