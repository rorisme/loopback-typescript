import {Model} from "@mean-expert/model";
import {AccountModule} from "./account.module";

const {Config} = AccountModule;

@Model({
  hooks: Config.hooks,
  remotes: Config.remotes
})

class Account {
  constructor(public model: any) {
  }
}

module.exports = Account;
