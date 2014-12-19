/**
 * Created by youngmoon on 12/19/14.
 */

var express = require('express');
var controller = require('./post.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.getPosts);
router.get('/:id', controller.getOnePost);
router.delete('/:id', controller.deletePost);
router.post('/', controller.writePost);
router.post('/:id', controller.postOnePost);

module.exports = router;
