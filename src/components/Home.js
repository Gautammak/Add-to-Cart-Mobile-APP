import React from 'react'

function Home(props) {
  console.log('props',props);

  return (
    <div>
        
       <h1>Home</h1>
       <div className='cart-wrapper'>
        <div className='img-wrapper item'>
               <img src="/images/Mobileimage.jpg" alt="phone" />
        </div>
        <div className='text-wrapper item'>
            <span>
                I-Phone
            </span>
            <span>
                Price: $1000.00
            </span>
        </div>
         <div className='btn-wrapper item'>
            <button 
             onClick={()=>
             props.addToCardHandler({price:1000,name:'i phone 11'})
             }> Add to Cart</button>

       <button  className='remove-cart-btn'
             onClick={()=>
             props.removeToCardHandler()}> Remove to Cart</button>


             
         </div>
       </div>
    </div>
  )
}

export default Home
