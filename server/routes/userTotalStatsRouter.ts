export {};
const Router = require('express')
const router = new Router()
const userTotalStatsController = require('../controllers/userTotalStatsController')

router.post('/', userTotalStatsController.create);
router.get('/', userTotalStatsController.getInfo)

module.exports = router