const router = require('koa-router')({
    prefix: '/lm'
})
const controllers = require('../controllers/index')

router.get('/index/index', controllers.home.index)


router.get('/search/indexaction', controllers.search.index.indexAction)
router.post('/search/addhistoryaction', controllers.search.index.addHistoryAction)

module.exports = router
