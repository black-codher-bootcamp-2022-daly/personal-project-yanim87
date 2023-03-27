import React from 'react'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';

function Header() {
  return (
    <div className ='header'>
      <img className ='header__logo' alt='nmm icon'
      src="/images/naturalmuslimmummy.png"/>
   

    <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className = "header_searchIcon"/>
        
    </div>
    <div className="header__nav">
       <div className='header__option'>
           <span className="header__optionLineOne">
               Hello Guest
           </span>
           <span className="header__optionLineTwo">
               Sign In
           </span>
           </div> 

           <div className='header__option'>
           <span className="header__optionLineOne">
        Products 
           </span>
           <span className="header__optionLineTwo">
              & Orders
           </span>
           </div> 
           <div className='header__option'>
           <span className="header__optionLineOne">
               NMM
           </span>
           <span className="header__optionLineTwo">
              Blog
           </span>
           </div> 

           <div className="header__optionBasket">

             <ShoppingBasketRoundedIcon />
             <span className="header__optionLineTwo header__basketCount">0</span>
           </div>
    </div>
    </div>
  )
}
export default Header;