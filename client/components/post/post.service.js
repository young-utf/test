/**
 * Created by youngmoon on 12/19/14.
 */
angular.module('ninjaTestApp')
  .factory('Post', function ($resource) {
    return $resource('/api/posts/:id', {
      id: '@_id'
    },{

    })
  });
