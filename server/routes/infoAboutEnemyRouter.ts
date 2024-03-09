export {};
const Router = require('express')
const router = new Router()
const infoAboutEnemyController = require('../controllers/infoAboutEnemyController')

router.post('/', infoAboutEnemyController.create);
router.get('/:id', infoAboutEnemyController.getInfo)

module.exports = router