
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import { useCart} from '../../hooks/useCart'



function Header(props) {
  const { totalPrice} = useCart();
  
    return (
        <header className={styles.header}>
          <Link to="/" >
            <div className={styles.header_logo}>
              <img src="/img/logo.svg"/>
            </div>
          </Link>
        
          <ul className={styles.header_menu}>
            <li className={styles.item}>Desitnations</li>
            <li className={styles.item}>Hotels</li>
            <li className={styles.item}>Flights</li>
            <li className={styles.item} >
              <Link to="/favourites"><img src='/img/favorite.svg' width={48} height={48}  alt='Favourites'/>
              </Link>
                
              </li>
            <li className={styles.item} onClick={props.onClickCart}>
              <img src='/img/basket.svg' width={48} height={48}  alt='basket'/>
              <span>{totalPrice} USD</span></li>
            
            <li className={styles.item}>
              <Link to='/orders'><img src='/img/user.svg' width={48} height={48}  alt='user'/>
              </Link>
            
            </li>
          </ul>
        </header>
    )
}
export default Header;