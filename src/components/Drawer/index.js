import React from 'react';
import styles from './Drawer.module.scss';
import Info from '../Info';
import { useCart } from '../../hooks/useCart';
import axios from 'axios';



const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));


function Drawer({onClose, onRemove, items =[], opened}) {
    const { cartItems, setCartItems, totalPrice} = useCart();
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    
    const [orderId, setOrderId] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    
    


    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://64425b3f33997d3ef90e0c97.mockapi.io/orders', {
                items: cartItems, });
           
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);


            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://64425b3f33997d3ef90e0c97.mockapi.io/cart/' + item.id);
                await delay();
            }
            
            
        } catch (error) {
            alert("Error in the order!")
        }
        setIsLoading(false);
    }
    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}> 
            <div className={styles.drawer}>
                <h2 className="mb-30 d-flex justify-between align-center">Cart<img onClick={onClose} src="img/close.svg" alt="close" width={42} height={42}></img></h2>
                {
                    items.length > 0 ? 
                    <div className={styles.cartBlock}>
                        <div className={styles.items}>
                            {items.map((obj) => (
                            <div key={obj.id} className={styles.cartItem}>
                        <img src={obj.imageUrl} alt="Rome"  className="mr-20"></img>
                            <div className={styles.card_text}>
                            <div>
                                <p>{obj.name}</p>
                                <p>$ {obj.price}</p>
                                <p>{obj.period}</p>
                            </div>
                            <img src="img/delete.svg" onClick={() => onRemove(obj.id)} width={42} height={42} alt="remove" className={styles.remove}></img>
                            </div>
                            </div>))}
                        
                        </div> 
                        <ul className={styles.totalBlock}>
                            <li >
                                <span>Total:</span>
                                <div></div>
                                <b>${totalPrice}</b>
                            </li>
                            <li>
                                <span>Tax 5%:</span>
                                <div></div>
                                <b>${(totalPrice / 100 * 5).toFixed(2)}</b>
                            </li>
                        </ul>
                        <button className={styles.greenButton} onClick={onClickOrder} disabled={isLoading}>To order
                        <img src="img/arrow-right.svg" alt="arrow"></img></button>
                    </div> : <Info 
                                title={ isOrderComplete ? "Your order is complete!" : "Your cart is empty :(" }
                                description={ isOrderComplete ?  `Your order number #${orderId} will be transferred to the delivery service :)` : "Please, add at least one trip to your cart!" }
                                image={isOrderComplete ? "img/complete.svg" : "img/basket.svg"}/>
                }
            </div>
        </div>
    )
}
export default Drawer; 