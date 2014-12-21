/**
 * Created by youngmoon on 12/19/14.
 */
'use strict';

angular.module('ninjaTestApp')
  .controller('BoardCtrl', function ($rootScope, $scope, $http, Auth, User, Post) {
    $scope.writeCaption = '';
    $rootScope.Posts = Post.put({});

    // Use the User $resource to fetch all users
    //$scope.users = User.query();
    $scope.delete = function (postId) {
      console.log(postId);
      Post.remove({id: postId}, function (data, err) {
        console.log(data);
        console.log(err);
      });
    }

    $scope.writePost = function () {
      console.log($scope.caption);
      var post = Post.save({
        title: $scope.title,
        caption: $scope.caption,
        writer: $scope.writer,
        tags: $scope.tags
      }, function (data, err) {
        console.log(data);
        console.dir(err);
        Post.query({}, function (data, err) {
          $rootScope.Posts = data;
          console.log(err);
        });
      });
      console.log(post);
    }
  });
