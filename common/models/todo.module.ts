export module TodoModule {
  export class Config {
    static hooks: any = {
      beforeSave: {name: 'before save', type: 'operation'},
      beforeAllTodos: {name: 'allTodos', type: 'beforeRemote'}
    }
    static remotes: any = {
      allTodos: {
        returns: {arg: 'data', type: 'array'},
        http: {path: '/all', verb: 'get'}
      }
    }
  }
}
