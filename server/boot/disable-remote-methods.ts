import {BootScript} from "@mean-expert/boot-script";
import {RemoteMethod} from "../libs/lb-disable-method-scopes";

@BootScript()
class DisableRemoteMethods {
  constructor(app: any) {
    RemoteMethod.applyModelScopeRules(app.models);
  }
}

module.exports = DisableRemoteMethods;
