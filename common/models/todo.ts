import {Model} from "@mean-expert/model";
import * as request from "web-request";
import {TodoModule} from "./todo.module";

const {Config} = TodoModule;

interface ITodo {
  id: number,
  todo: string,
  done: boolean,
  pageContent: string,
  createdAt: number,
  updatedAt: number,
  accountId: number
  error: string,
}

@Model({
  hooks: Config.hooks,
  remotes: Config.remotes
})

class Todo {
  constructor(public model: ITodo) {
  }

  async getUrl(url: string): Promise<any> {
    let result;
    try {
      result = await request.get(url);
    } catch (e) {
      console.error(e);
      result = e;
    }
    return result;
  }

  async beforeSave(ctx: any, next: Function): Promise<void> {
    console.log('before save');
    let ins: ITodo = ctx.instance;

    if (!ctx.isNewInstance) {
      next();
      return;
    }

    try {
      let page = await this.getUrl("https://google.com");
      ins.pageContent = page.body;
    } catch (e) {
      console.error(e);
      ins.error = e.message;
    } finally {
      ins.done = false;
      ins.createdAt = Date.now();
      ins.updatedAt = Date.now();
    }

    next();
  }
}

module.exports = Todo;
