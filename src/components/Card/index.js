import React from 'react';
import styles from './Card.module.scss';
import ContentLoader from "react-content-loader";
import AppContext from '../../context';

function Card({imageUrl, name, price, period, addButton, id, onFavourite, favourited = false, loading = false}){
    const {isItemAdded} = React.useContext(AppContext)

    const [isFavourite, setIsFavourite] = React.useState(favourited);

    

    const onClickAdd = () => {
        addButton({id, imageUrl, name, price, parentId: id});
    }
    const onClickFavourite = () => {
        onFavourite({imageUrl, name, price, id, parentId: id});
        setIsFavourite(!isFavourite);
    }
    return (
        <div className={styles.card}>
            {
                loading ? <ContentLoader 
                speed={2}
                width={314}
                height={457}
                viewBox="0 0 314 457"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                
              >
                <rect x="82" y="78" rx="0" ry="0" width="17" height="0" /> 
                <rect x="0" y="377" rx="6" ry="6" width="181" height="24" /> 
                <rect x="227" y="377" rx="7" ry="7" width="90" height="24" /> 
                <rect x="272" y="420" rx="7" ry="7" width="32" height="32" /> 
                <rect x="-1" y="436" rx="7" ry="7" width="224" height="26" /> 
                <rect x="0" y="0" rx="10" ry="10" width="314" height="353" /> 
                <rect x="220" y="281" rx="0" ry="0" width="24" height="6" />
              </ContentLoader> : <> {onFavourite && (<div className={styles.favourite} onClick={onClickFavourite}>
                <img src={process.env.PUBLIC_URL + (isFavourite ? "/img/like-active.svg" : "/img/like.svg")} alt="like" className={styles.like}/>
            </div>)}
      
            <img src={process.env.PUBLIC_URL + imageUrl} alt={name}></img>
            <div className={styles.card_text}>
                <div className="d-flex justify-between">
                    <p>{name}</p>
                    <p className="d-flex justify-end"> $ {price}</p>
                </div>
                <div className="d-flex align-baseline">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0682 1.76033L10.1932 16.7603C10.1357 16.886 10.0381 16.989 9.91582 17.0533C9.7935 17.1177 9.65332 17.1396 9.5172 17.1158C9.38108 17.092 9.25669 17.0237 9.16348 16.9217C9.07028 16.8197 9.01352 16.6896 9.00208 16.5519L8.42083 9.57896L1.44789 8.99771C1.31017 8.98627 1.18013 8.92951 1.0781 8.8363C0.976073 8.7431 0.90781 8.61871 0.88399 8.48258C0.860169 8.34646 0.882135 8.20628 0.946451 8.08397C1.01077 7.96166 1.11381 7.86411 1.23945 7.80658L16.2395 0.93158C16.3554 0.878438 16.4849 0.862048 16.6104 0.884614C16.736 0.907179 16.8516 0.967618 16.9418 1.05781C17.032 1.14801 17.0924 1.26365 17.115 1.38919C17.1375 1.51474 17.1212 1.64418 17.068 1.76014L17.0682 1.76033Z" fill="#080809"/>
                    </svg>
                    <p> {period}</p>

                    {addButton && (<img src={process.env.PUBLIC_URL + (isItemAdded(id) ? "/img/check.svg" : "/img/add.svg")} alt="add" width={42} height={42} className={styles.add} onClick={onClickAdd}></img>)}
                    
                </div>
            </div></>
            }
            
        </div>
    )
}
export default Card;