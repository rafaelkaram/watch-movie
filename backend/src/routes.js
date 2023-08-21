const {Router} = require('express')

const UserController = require('./controller/UserController')
const userCreateValidator = require('./middleware/validator/userCreateValidator');
const userUpdateValidator = require('./middleware/validator/userUpdateValidator');
const userLoginValidator = require('./middleware/validator/userLoginValidator');
const auth = require('./middleware/auth/userAuth');

const router = Router()

router.post('/login', userLoginValidator, UserController.login);

router.get('/user/:id', auth, UserController.find)
router.post('/user', userCreateValidator, UserController.create)
router.put('/user/:id', auth, userUpdateValidator, UserController.update)
router.delete('/user/:id', auth, UserController.delete)

module.exports = router