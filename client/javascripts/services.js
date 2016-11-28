const DataService = ($resource, $http) => {
  const users = {
    $resource(`/api/users/:id`, { id: `@id` }, { update: { method: `PATCH` }} ),
    // signup() => {},
    // login() => {},
    // logout() => {}
  }
  const posts = {
    $resource(`/api/posts/`, { pid: `@pid`}, { update: { method: `PATCH` }})
  }
  const comments = {
    $resource(`/api/posts/:pid/comments/:cid`, { pid: `@pid`, cid: `@cid`}, { update: { method: `PATCH` }})
  }
  return { users, posts, comments }
}

DataService.$inject = [`$resource`, `$http`]
