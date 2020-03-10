import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer) // store 与reducer联系

export default store