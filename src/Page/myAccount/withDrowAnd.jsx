import '../../assets/style/withDrow.css'
import { set, get,child } from "firebase/database";
import { dbRef } from '../../lib/fireBase';
import { Deposit,Withdraw } from '../../lib/action';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
export default function WithDrow() {
  const [myObj,setObj] = useState({
    accountNo:'',
    paisa:''
  })
 let tempArray=[
  {
    "name": "John Doe",
    "accountNo": "ACC100001",
    "balance": 7283
  },
  {
    "name": "Emily Clark",
    "accountNo": "ACC100002",
    "balance": 3245
  },
  {
    "name": "Michael Smith",
    "accountNo": "ACC100003",
    "balance": 9471
  },
  {
    "name": "Sophia Johnson",
    "accountNo": "ACC100004",
    "balance": 5729
  },
  {
    "name": "David Lee",
    "accountNo": "ACC100005",
    "balance": 8392
  },
  {
    "name": "Isabella Brown",
    "accountNo": "ACC100006",
    "balance": 4167
  },
  {
    "name": "Daniel Garcia",
    "accountNo": "ACC100007",
    "balance": 6011
  },
  {
    "name": "Olivia Martinez",
    "accountNo": "ACC100008",
    "balance": 7850
  },
  {
    "name": "James Wilson",
    "accountNo": "ACC100009",
    "balance": 2354
  },
  {
    "name": "Ava Anderson",
    "accountNo": "ACC100010",
    "balance": 6930
  }
]
const dipatch = useDispatch();
// function setThigs(event) {
//     event.preventDefault();
//     set(child(dbRef, "users"), tempArray)
//   .then(() => console.log("Array stored!"))
//   .catch((err) => console.error("Error:", err));
// }
function set(evnt) {
    setObj({...myObj,[evnt.target.name]:evnt.target.value})
}
const handlesub1 = (evnt)=>{
    evnt.preventDefault();
    
      dipatch(Deposit(myObj))
}
const handlesub = (evnt)=>{
    evnt.preventDefault();
  
      dipatch(Withdraw(myObj))
}
const data = useSelector((store)=>{
  return store
})
console.table(data.reducer)
    return(
        <div className="underTaker">
            <div className="WorkPage">
                <form action="" >
                    <h1>Oppration's</h1>
                    <div className="inputDiv">
                        <input onChange={set} name='accountNo' type="text" id="AcN"/>
                        <label htmlFor="AcN">Ac Number</label>
                    </div>
                    <div className="inputDiv">
                        <input onChange={set} name='paisa' type="text" id="Am"/>
                        <label htmlFor="Am">Amount</label>
                    </div>
                    <div className="inputDiv">
                        <button type='submit' onClick={handlesub1} className='btn sgin-btn' >Dip</button> <button type='submit' onClick={handlesub} className='btn login-btn'>Wid</button>
                    </div>
                </form>
            </div>
        </div>
    )
}