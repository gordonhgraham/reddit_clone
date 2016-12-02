'use strict'

angular.module('rereddit', ['ngResource'])
  .service(`Da]taService`, DataService)
  .controller(`UsersController`, UsersController)
  .controller(`PostsController`, PostsController)
  .controller(`CommentsController`, CommentsController)
  .config([`$resourceProvider`, function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false
  }])
