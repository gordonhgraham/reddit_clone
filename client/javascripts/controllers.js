'use strict'

app.controller('UsersController', function($scope, DataService) {
  $scope.vm = {}
  $scope.vm.user = DataService.users.get()

  // $scope.users.get = () => {
  //   res.send(data)
  // }
})

app.controller('PostsController',function($scope, DataService) {
  $scope.vm = {}
  $scope.vm.posts = DataService.posts.query()
})

app.controller('CommentsController', function($scope, DataService) {
  $scope.vm = {}
  $scope.vm.comments = DataService.comments.get()
})
// 
// UsersController.$inject = [`$scope`, `DataService`]
// PostsController.$inject = [`$scope`, `DataService`]
// CommentsController.$inject = [`$scope`, `DataService`]
