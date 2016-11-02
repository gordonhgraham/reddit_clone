'use strict'

const app = angular.module(`redditClone`, [])

app.controller(`PostsController`, $scope => {
  $scope.posts = [{
    title: `1--Bill is the man`,
    author: `Bill Murray`,
    image: `http://www.fillmurray.com/500/500`,
    description: `Lorem ipsum dolor consectetur adipiscing elit. Pellentesque ut lacus at velit consequat sodales. Ut posuere neque in molestie gravida. Integer eu feugiat neque, elementum posuere purus. Nam vitae convallis ipsum. Maecenas a vulputate ipsum,
      vestibulum lobortis enim. Sed consequat felis. Proin amet sollicitudin. Aliquam malesuada elementum risus, amet dictum tempor nec. Suspendisse massa, consequat at pellentesque , aliquam ullamcorper orci.`,
    votes: 0,
    date: new Date(),
    comments: [{
      author: `Gordon`,
      text: `great post`
    }, {
      author: `Graham`,
      text: `nope, not a great post`
    }]
  }, {
    title: `Bill is the man`,
    author: `Bill Murray`,
    image: `http://www.fillmurray.com/400/200`,
    description: `Lorem ipsum dolor consectetur adipiscing elit. Pellentesque ut lacus at velit consequat sodales. Ut posuere neque in molestie gravida. Integer eu feugiat neque, elementum posuere purus. Nam vitae convallis ipsum. Maecenas a vulputate ipsum,
          vestibulum lobortis enim. Sed consequat felis. Proin amet sollicitudin. Aliquam malesuada elementum risus, amet dictum tempor nec. Suspendisse massa, consequat at pellentesque , aliquam ullamcorper orci.`,
    votes: 0,
    date: `October 14, 2016`,
    comments: []
  }]

  $scope.addPost = () => {
    const newPost = {
      title: newPostForm.title.value,
      author: newPostForm.author.value,
      image: newPostForm.img.value,
      description: newPostForm.description.value
    }
    $scope.posts.push(newPost)

    return
  }

  $scope.addCommentForm = {}

  $scope.addComment = () => {
    const newComment = {
      author: $scope.addCommentForm.author,
      text: $scope.addCommentForm.text
    }

    const selectedPost = $index
    console.log(selectedPost)
  // $scope.posts[$index].comments.push(newComment)

    return
  }
})
