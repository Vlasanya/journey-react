import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home'
import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

import Favourites from './pages/Favourites';
import AppContext from './context';
import Orders from './pages/Orders';



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [favourites, setFavourites] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
 

 React.useEffect(() => {
  async function fetchData() {
    try {
      setIsLoading(true);
      //тут можна замінити на  Promice.all()
      const cartResponse = await axios.get('https://64425b3f33997d3ef90e0c97.mockapi.io/cart');
      const favouritesResponse = await axios.get('https://64425b3f33997d3ef90e0c97.mockapi.io/favourites');
      const itemsResponse = await axios.get('https://64425b3f33997d3ef90e0c97.mockapi.io/items'); 
     
      setIsLoading(false)
  
      setCartItems(cartResponse.data);
      setFavourites(favouritesResponse.data);
      setItems(itemsResponse.data);
    } catch (error) {
      alert('Error in the backend')
    }
  }

  fetchData();
 }, []); 


 const onAddToCart = async (obj) => {
  try {
    const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
    if(findItem) {
      
      setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
      await axios.delete(`https://64425b3f33997d3ef90e0c97.mockapi.io/cart/${findItem.id}`);
    } else {
      const { data } = await axios.post('https://64425b3f33997d3ef90e0c97.mockapi.io/cart', obj);
      setCartItems((prev) => [...prev, data]);
      
    }
  } catch (error) {
    alert("Error in the cart");
  }
 }

 const onRemoveItem = (id) => {
  try {
    axios.delete(`https://64425b3f33997d3ef90e0c97.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)));
  } catch (error) {
    alert('Error in the removing');
  }
 }

  const onChangeSearchInput = (event) => {
  setSearchValue(event.target.value); 
  }

  const onAddToFavourite = async (obj) => {
   try {
    if(favourites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
      axios.delete(`https://64425b3f33997d3ef90e0c97.mockapi.io/favourites/${obj.id}`);
      setFavourites((prev) => prev.filter((item) => Number(item.id )!== Number(obj.id)));
    } else  {
      const { data } = await axios.post('https://64425b3f33997d3ef90e0c97.mockapi.io/favourites', obj);
      setFavourites((prev) => [...prev, data]);
    }
   }
   catch (error) {
    alert('Failed to add to favorites')
   }
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id) )
  }

  return (
    <AppContext.Provider value={{items, cartItems, favourites, isItemAdded, onAddToFavourite, setCartOpened, setCartItems, onAddToCart}}>
      <div className="container clear p-15">
      <div className="wrapper">
      <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} opened={cartOpened}/>
      
        <Header onClickCart={() => setCartOpened(true)}/>
       
        
        <Routes>
          <Route path='/favourites' exact element={<Favourites />}> </Route>

          <Route path='/orders' exact element={<Orders />}> </Route>

          <Route path='/' exact element={<Home 
            items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavourite={onAddToFavourite}
            onAddToCart={onAddToCart}
            cartItems={cartItems}
            // isLoading={!items.length}
            isLoading={isLoading}
            />
            
            }>

          </Route>
        </Routes>
        <Footer />
      </div>
      </div>
    </AppContext.Provider>
    
    
  );
}

export default App;
