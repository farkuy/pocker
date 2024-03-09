export {};
const Router = require('express')
const router = new Router()
const userStatsInGameController = require('../controllers/userStatsInGameController')


router.post('/', userStatsInGameController.create);
router.get('/', userStatsInGameController.getInfo)

module.exports = router