'use strict'

angular.module('rereddit', ['ngResource'])
  .service(`DataService`, DataService)
  .controller(`UsersController`, UsersController)
  .controller(`PostsController`, PostsController)
  .controller(`CommentsController`, CommentsController)
  .config([`$resourceProvider`, function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false
  }])
