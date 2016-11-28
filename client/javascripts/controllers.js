const UsersController = function($scope, DataService){
  $scope.vm = {}
  $scope.users.get = () => {
    res.send(data)
  }
}

const PostsController = function($scope, DataService){
  $scope.vm = {}
  $scope.vm.posts = DataService.posts.query()
  }

const CommentsController = function($scope, DataService){
  $scope.vm = {}
}

UsersController.$inject = [`$scope`, `DataService`]
PostsController.$inject = [`$scope`, `DataService`]
CommentsController.$inject = [`$scope`, `DataService`]
