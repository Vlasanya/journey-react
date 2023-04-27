import React from 'react';
import Card from '../components/Card';



function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavourite, onAddToCart, isLoading}) {
  
  const renderItems = () => {
    const filterItems = items.filter((item ) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    return (isLoading ? [...Array(9)] : filterItems).map((item, index) => (
    <Card 
      key={index}
      addButton={(obj) => onAddToCart(obj)}
      onFavourite={(obj)=> onAddToFavourite(obj)}
      
      loading={isLoading}
      {...item}
    />))} 
    return(
        <main className="main">
        <section className="banner d-flex">
          <div className="banner-text">
            <h2 className="text-uppercase">Best Destinations around the world</h2>
            <h1>Travel, <span>enjoy </span>and live a new and full life</h1>
            <p>Built Wicket longer admire do barton vanity itself do in it. <br/> Preferred to sportsmen it engrossed listening. Park gate <br/>sell they west hard for the.</p>
            <div className="d-flex">
              <button className="btns btns-yellow">Find out more</button>
              <button className="btns btns-play"><img src="/img/play.svg" alt="Play-button" /> Play Demo</button>
            </div>
            
          </div>
          <div className="banner-img">
            <img src="/img/banner.png" alt="Banner" />
          </div>
        </section>
        <section className="categories">
          <h5>CATEGORY</h5>
          <h2>We Offer Best Services</h2>
          <div className="categories-cards d-flex">
            <div className="categories-cards__card">
              <img src="/img/weather.svg" alt='weather'/>
              <h6>Calculated Weather </h6>
              <p>Built Wicket longer admire do barton vanity itself do in it.</p>
            </div>
            <div className="categories-cards__card">
              <img src="/img/flighs.svg" alt='flighs'/>
              <h6>Calculated Weather </h6>
              <p>Built Wicket longer admire do barton vanity itself do in it.</p>
            </div>
            <div className="categories-cards__card">
              <img src="/img/events.svg" alt='events'/>
              <h6>Calculated Weather </h6>
              <p>Built Wicket longer admire do barton vanity itself do in it.</p>
            </div>
            <div className="categories-cards__card">
              <img src="/img/settings.svg" alt='settings'/>
              <h6>Calculated Weather </h6>
              <p>Built Wicket longer admire do barton vanity itself do in it.</p>
            </div>
          
          </div>
        </section>
        <section className="top-cards">

          <h5>Top Selling</h5>
          <h2>{searchValue ? `Searching: ${searchValue}` : "Top Destinations"}</h2>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..."/>
            {searchValue && <img onClick={() => setSearchValue('')} src="/img/close.svg" width={42} height={42} alt="clear"></img>}
          </div>
          <div className="top-cards__wrapper">
            {renderItems()}                
           
          </div>
        
        
        </section>
        <section className="book d-flex">
          <div className="book-left">
            <h5>CATEGORY</h5>
            <h2>Book your next trip in 3 easy steps</h2>
            <ul>
              <li className="book_item d-flex">
                <img src="/img/1.svg" alt="Pic" />
                <div>
                  <h6>Choose Destination</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur <br/>
                  adipiscing elit. Urna, tortor tempus. </p>
                </div>
              </li>
              <li className="book_item d-flex">
                <img src="/img/2.svg" alt="Pic" />
                <div>
                  <h6>Make Payment</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur <br/>
                  adipiscing elit. Urna, tortor tempus. </p>
                </div>
              </li>
              <li className="book_item d-flex">
                <img src="/img/3.svg" alt="Pic" />
                <div>
                  <h6>Reach Airport on Selected Date</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur <br/>
                  adipiscing elit. Urna, tortor tempus. </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="book-right d-flex">
            <div className="book-wrapper">
              <img src="/img/greese.png" alt="greese" />
              <h5>Trip To Greece</h5>
              <h6>14-29 June | <span> by Robbin joseph</span></h6>
              <ul className="d-flex mb-0">
                <li>
                 <img src='/img/leaf.svg' alt='leaf' width={36} height={36}/>
                </li>
                <li>
                 <img src='/img/map.svg' alt='map' width={36} height={36}/>
                </li>
                <li>
                 <img src='/img/send.svg' alt='send' width={36} height={36}/>
                </li>
              </ul>
              <p>24 people going</p>
            </div>
          </div>
        </section>
        <section className="comments d-flex">
          <div className="comments-left">
            <h4>Testimonials</h4>
            <h2>What people say
              about Us.</h2>
          </div>
          <div className="comments-right swipper">
           
            <ul>
              <li>
                <img src="" alt="" />
                <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                <h6>Mike taylor</h6>
                <p>Lahore, Pakistan</p>
              </li>
            </ul>
          </div>
        </section>
        <section className="partners">
          <ul className="d-flex">
            <li>
              <img src="/img/axon.png" alt="axon" />
            </li>
            <li>
              <img src="/img/alitalia.png" alt="alitalia" />
            </li>
            <li>
              <img src="/img/qantas.png" alt="qantas" />
            </li>
            <li>
              <img src="/img/jetstar.png" alt="jetstar" />
            </li>
            <li>
              <img src="/img/expedia.png" alt="expedia" />
            </li>
          </ul>
        </section>
      </main>
    )
}

export default Home;