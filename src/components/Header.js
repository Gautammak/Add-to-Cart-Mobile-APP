import React from 'react'

function Header(props) {
  console.log('Header',props.data);
  return (
    <div>
        <div className='add-to-cart'>
          <span className='cart-count'> {props.data.length}</span>
            <img  src="/images/Ecommerce.jpg" alt="card"/>
        </div>
    </div>
  )
}

export default Header;
