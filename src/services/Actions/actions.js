
import  {ADD_TO_CART,REMOVE_TO_CART} from  '../constants'

export  const addToCard =(data)=>{
    console.log('action',data);
    return {
        type:ADD_TO_CART,
        data:data
    }
}

export const removeToCard =()=>{
    console.log("action");
    return {
        type:REMOVE_TO_CART,
       
    }
}





