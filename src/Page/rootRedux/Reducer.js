import tempArray from "../../lib/DataBase";
const emtArray = tempArray;
const reducer = (state=emtArray,action)=> {
    console.log(action)
    switch (action.type) {
        case "dip":{
            state.map((obj)=>{
                if (obj.accountNo === action.data.accountNo) {
                    obj.balance+=parseInt(action.data.paisa)
                }
            })
            return [...state]
            }
        case "wid":{

                state.map((obj)=>{
                if (obj.accountNo === action.data.accountNo) {
                    obj.balance-=parseInt(action.data.paisa)
                }
            })
            return [...state]            
        }
        default:
            return [...state]
    }
}
export default reducer