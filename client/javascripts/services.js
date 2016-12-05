'use strict'

app.service('DataService',function($resource, $http) {
  const users = $resource(`/users/:id`, { id: `@id` }, { update: { method: `PATCH` }})
  const signup = newUser => { return $http.post(`/users/signup`, newUser) }
  const login = user => { return $http.post(`/users/login`, user) }
  const logout = () => { return $http.delete(`/users/logout`) }
  const posts = $resource(`/posts/:pid`, { pid: `@pid` }, { update: { method: `PATCH` }})
  const comments = $resource(`/posts/:pid/comments/:cid`, { pid: `@pid`, cid: `@cid` }, { update: { method: `PATCH` }})

  return { users, signup, login, logout, posts, comments }
})

// DataService.$inject = [`$resource`, `$http`]
