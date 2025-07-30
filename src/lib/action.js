export const Deposit = (obj)=>{
    return {
        type:'dip',
        data: obj // in this obj we will have the input amount & ac no.
    }
}

export const Withdraw = (obj) => {
    return {
        type:'wid',
        data: obj // this will work like the same in upper func
    }
}
// this page is just a midL men how dispatch our item;