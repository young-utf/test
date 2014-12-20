/**
 * Created by youngmoon on 12/19/14.
 */
var Post = require('./post.model');
var passport = require('passport');
var config = require('../../config/environment');
var Ninja = require('tracer').console({
  format : "({{file}}:{{line}}) ".red+"≈<>".red.underline+" {{message}}"
});

exports.getOnePost = function (req, res) {
  Ninja.debug('getOnePost');
  Ninja.debug(req.body);
  res.send('getOnePost');
};
exports.postPosts = function (req, res) {
  Ninja.debug('postPosts');
  res.send('postPosts');
};

exports.postOnePost = function (req, res) {
  Ninja.debug('postOnePost');
  res.send('postOnePost');
};

exports.getPosts = function (req, res, next) {
  Ninja.debug('getPosts');
  Ninja.debug(req.body);
  Post.find({}, function (err, posts) {
    if (err) res.send(401);
    Ninja.debug(posts);
    res.json(200, posts);
  })
};

exports.writePost = function (req, res, next) {
  var newPost = new Post(req.body);
  if (!newPost) res.send(401);

  newPost.save(function (err, post) {
    if (err) res.send(401);
    else
      Ninja.debug(post);
      res.json(post);
  });
}

exports.deletePost = function (req, res, next) {
  Ninja.debug(req.params.id);
  Post.findByIdAndRemove(req.params.id, function (err, post) {
    Ninja.debug(err);
    Ninja.debug(post);
    if (err)
      res.send(401);
    else
      res.send(200);
  });
}
