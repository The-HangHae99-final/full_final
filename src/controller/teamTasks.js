const TeamTask = require('../models/teamTask');
const moment = require('moment');
const urlencode = require('urlencode');

// 팀 일정 생성
async function createTeamTask(req, res, next) {
  try {
    //#swagger.tags= ['팀 일정 API'];
    //#swagger.summary= '팀 알정 생성 API'
    //#swagger.description='-'

    const { userEmail } = res.locals.User;
    const { startDate, endDate, title, desc, color, workSpaceName } = req.body;
    const maxTaskId = await TeamTask.findOne({ workSpaceName }).sort('-taskId');
    let taskId = 1;
    if (maxTaskId) {
      taskId = maxTaskId.taskId + 1;
    }
    const createdTask = await TeamTask.create({
      taskId,
      startDate,
      endDate,
      title,
      desc,
      userEmail,
      workSpaceName,
      color,
    });

    return res.json({
      result: createdTask,
      success: true,
      message: '팀 일정 생성 성공',
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message: '팀 일정 생성 실패',
      errorMessage: error.message,
    });
  }
}

// 팀 전체 일정 조회
async function showTeamTasks(req, res, next) {
  try {
    //#swagger.tags= ['팀 일정 API'];
    //#swagger.summary= '팀 전체 일정 조회 API 이것은 바디값으로 workSpaceName이 들어갑니다.'
    //#swagger.description='-'
    const { workSpaceName } = req.body;
    console.log('workSpaceName-----------------:', workSpaceName);
    if (!workSpaceName) {
      return res
        .status(400)
        .send({ success: false, message: '워크 스페이스 네임이 없습니다.' });
    }

    const tasks = await TeamTask.find({ workSpaceName }).sort('-taskId');
    console.log(tasks);
    return res.json({
      result: tasks,
      success: true,
    });
  } catch (err) {
    console.error(err);
    return res.status(400).json({
      success: false,
      message: '전체 팀 일정 조회 실패',
      errorMessage: err.message,
    });
  }
}

// 팀 일정 상세 조회
async function showTeamTaskDetail(req, res, next) {
  try {
    //#swagger.tags= ['팀 일정 API'];
    //#swagger.summary= '팀 일정 상세조회  API'
    //#swagger.description='-'
    const { taskId } = req.params;
    const task = await TeamTask.findOne({ taskId });

    const now = moment();
    const { endDate } = task;
    const diff = now.diff(endDate, 'days');

    return res.json({
      result: task,
      dayCount: -diff + 1, // 마감까지 D-day
      success: true,
    });
  } catch (err) {
    console.error(err);
    return res.status(400).json({
      success: false,
      message: '팀 일정 상세 조회 실패',
      errorMessage: err.message,
    });
  }
}

// 팀 일정 수정
async function editTeamTask(req, res, next) {
  try {
    //#swagger.tags= ['팀 일정 API'];
    //#swagger.summary= '일정 수정 API 이것은 바디값으로 workSpaceName이 들어갑니다.'
    //#swagger.description='-'
    const taskId = Number(req.params.taskId);
    const [existTask] = await TeamTask.find({ taskId, workSpaceName });
    console.log('existTask: ', existTask);
    const { userEmail } = res.locals.User;
    const { startDate, endDate, title, desc, color, workSpaceName } = req.body;

    if (!startDate || !endDate || !title) {
      return res
        .status(400)
        .json({ success: false, message: '빈값을 채워주세요' });
    }
    await TeamTask.updateOne(
      { taskId },
      { $set: { startDate, endDate, title, desc } }
    );
    const editTask = await TeamTask.findOne({ taskId });
    return res.status(200).json({
      result: editTask,
      success: true,
      message: '팀 일정 수정 성공',
    });
  } catch (err) {
    console.log('err: ', err);
    return res.status(400).json({
      success: false,
      message: '팀 일정 수정 에러',
      errorMessage: err.message,
    });
  }
}

// 팀 일정 삭제
async function deleteTeamTask(req, res, next) {
  try {
    //#swagger.tags= ['팀 일정 API'];
    //#swagger.summary= '팀 일정 삭제 API'
    //#swagger.description='-'
    const taskId = Number(req.params.taskId);
    const existTask = await TeamTask.findOne({ taskId });

    if (!existTask) {
      return res
        .status(400)
        .json({ success: false, message: '없는 팀 일정입니다.' });
    }

    await TeamTask.deleteOne({ taskId });
    return res.json({ success: true, message: '팀 일정 삭제 성공' });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: '팀 일정 삭제 실패',
      errorMessage: error.message,
    });
  }
}

module.exports = {
  createTeamTask,
  showTeamTasks,
  showTeamTaskDetail,
  editTeamTask,
  deleteTeamTask,
};
