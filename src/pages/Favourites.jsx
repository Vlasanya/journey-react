import React from 'react';
import Card from '../components/Card'
import AppContext  from '../context';


function Favourites() {
  const {favourites, onAddToFavourite} = React.useContext(AppContext);
    return(
        <main className="main">
          <section className='favourites'>
            <h2 className='favTitle'>Your lovely trips</h2>
            <div className="top-cards__wrapper">
            {favourites.map((item) => (
            <Card 
              key={item.id}
              favourited={true}
              onFavourite={onAddToFavourite}
              {...item}
            />))}  
            </div>
          </section>
      </main>
    )
}

export default Favourites;