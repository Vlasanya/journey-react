
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useCart} from '../../hooks/useCart'



function Header(props) {
  const { totalPrice} = useCart();

    const [burgerUnclicked, setBurgerUnclicked] = useState(true);
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);


    const visibleMenu = styles["menu__visible"];
    const menuHidden = styles["menu__hidden"];
    const unclickedBurger = styles["burger-bar__unclicked"];
    const clickedBurger = styles["burger-bar__clicked"];

  
    const updateMenu = () => {
      if (!isMenuClicked) {
        setBurgerUnclicked(true);
        setMenuVisible(true);
      } else {
        setBurgerUnclicked(false);
        setMenuVisible(false);
      }
      setIsMenuClicked(!isMenuClicked);
    };
  
    return (
        <header className={styles.header}>
          <Link to="/" >
            <div className={styles.header_logo}>
              <img src={process.env.PUBLIC_URL + "/img/logo.svg"} alt='logo'/>
            </div>
          </Link>
        
          <ul className={`${styles.header_menu} ${menuVisible ? visibleMenu : menuHidden}`}>
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
          <nav>
                <div className={styles.burger_menu} onClick={updateMenu}>
                   <div className={`${burgerUnclicked ? clickedBurger : unclickedBurger}`} ></div>
                   <div className={`${burgerUnclicked ? clickedBurger : unclickedBurger}`}></div>
                   <div className={`${burgerUnclicked ? clickedBurger : unclickedBurger}`}></div>
                </div>
            </nav>
        </header>
    )
}
export default Header;