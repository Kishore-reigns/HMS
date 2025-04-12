const express = require('express')
const router = express.Router()
const {getRoles} = require('../Controller/RoleController')

router.get('/',getRoles)

module.exports = router