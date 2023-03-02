import React from "react";
import LoginStore from "./loginStore";


import { configure } from "mobx";
configure({
  enforceActions:'never',
})

class RootStore {
  constructor() { 
    this.loginStore = new LoginStore();
  }
}


// 实例化根
// 导出useStore context
const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }