const DataService = function($resource, $http) {
  const users = $resource(`/users/:id`, { id: `@id` }, { update: { method: `PATCH` }} );
    // signup() => {},
    // login() => {},
    // logout() => {}
  const posts = $resource(`/posts/:pid`, { pid: `@pid`}, { update: { method: `PATCH` }})
  const comments = $resource(`/posts/:pid/comments/:cid`, { pid: `@pid`, cid: `@cid`}, { update: { method: `PATCH` }})
  return { users, posts, comments }
}

DataService.$inject = [`$resource`, `$http`]
