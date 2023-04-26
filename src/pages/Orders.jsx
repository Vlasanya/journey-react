import React from 'react';
import Card from '../components/Card'
import axios from 'axios';
import AppContext from '../context';



function Orders() {
  const {onAddToCart, onAddToFavourite} = React.useContext(AppContext);
  const [ orders , setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  
  React.useEffect(() => {
    async function ordersData() {
      try {
        const { data } = await axios.get('https://64425b3f33997d3ef90e0c97.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Error in your orders');
      }
    }
    ordersData();
  }, []);
    return(
        <main className="main">
          <section className='favourites'>
            <h2 className='favTitle'>Your orders:</h2>
            <div className="top-cards__wrapper">
            {(isLoading ? [...Array(6)] : orders).map((item, index) => (
            <Card 
              key={index}
              loading={isLoading}
              {...item}
            />))}  
            </div>
          </section>
      </main>
    )
}

export default Orders;