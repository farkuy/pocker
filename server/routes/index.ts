const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter');
const userTotalStatsRouter = require('./userTotalStatsRouter');
const userStatsInGameRouter = require('./userStatsInGameRouter');
const infoAboutEnemyRouter = require('./infoAboutEnemyRouter');
const tableRouter = require('./tableRouter')

router.use('/user', userRouter);
router.use('/user_total_stats', userTotalStatsRouter);
router.use('/user_stats_in_game', userStatsInGameRouter);
router.use('/info_about_enemy', infoAboutEnemyRouter);
router.use('/table', tableRouter);

module.exports = router

