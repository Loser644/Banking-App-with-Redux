import { createStore } from "redux";
import myRoot from '../Page/rootRedux/rootReducer'
const myStore =createStore(myRoot);
export default myStore