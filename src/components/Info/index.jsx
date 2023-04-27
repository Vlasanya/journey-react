import React from 'react';
import styles from './Info.module.scss'
import AppContext from '../../context';

const Info = ({title, description, image}) => {
    const {setCartOpened} = React.useContext(AppContext);
  return (
    <div className={styles.cartEmpty}>
        <img width={120} height={120} src={image} alt="Basket empty"></img>
        <h3>{title}</h3>
        <p>{description}</p>
        <button className={styles.greenButton} onClick={() => setCartOpened(false)}>
            <img src={process.env.PUBLIC_URL + "/img/arrow_back.svg"} alt="arrow-back" className={styles.arrowBack}></img>Go back
        </button>
    </div>
  )
}



export default Info;