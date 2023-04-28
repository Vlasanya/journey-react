import React from 'react';
import Card from '../components/Card';
import Slider from '../components/Slider';


function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavourite, onAddToCart, isLoading}) {
  
  const slides = [
    {url: '/img/user.svg', userName: 'Mike taylor', comments: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.', homePlace: 'Lahore, Pakistan'},
    {url: '/img/user.png', userName: 'Taylor Swift', comments: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.', homePlace: 'Berlin, Germany'},
    {url:'/img/user.svg', userName: 'John Dou', comments: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.', homePlace: 'New York, US'},
    {url: '/img/user.png', userName: 'Josef Zahn', comments: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.', homePlace: 'Singapur, Singapur'},
  ]

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
              <button className="btns btns-play"><img src={process.env.PUBLIC_URL +"/img/play.svg"} alt="Play-button" /> Play Demo</button>
            </div>
            
          </div>
          <div className="banner-img">
            <img src={process.env.PUBLIC_URL +"/img/banner.png"} alt="Banner" />
          </div>
        </section>
        <section className="categories">
          <h5>CATEGORY</h5>
          <h2>We Offer Best Services</h2>
          <div className="categories-cards d-flex">
            <div className="categories-cards__card">
              <img src={process.env.PUBLIC_URL +"/img/weather.svg"} alt='weather'/>
              <h6>Calculated Weather </h6>
              <p>Built Wicket longer admire do barton vanity itself do in it.</p>
            </div>
            <div className="categories-cards__card">
              <img src={process.env.PUBLIC_URL +"/img/flighs.svg"} alt='flighs'/>
              <h6>Calculated Weather </h6>
              <p>Built Wicket longer admire do barton vanity itself do in it.</p>
            </div>
            <div className="categories-cards__card">
              <img src={process.env.PUBLIC_URL +"/img/events.svg"} alt='events'/>
              <h6>Calculated Weather </h6>
              <p>Built Wicket longer admire do barton vanity itself do in it.</p>
            </div>
            <div className="categories-cards__card">
              <img src={process.env.PUBLIC_URL +"/img/settings.svg"} alt='settings'/>
              <h6>Calculated Weather </h6>
              <p>Built Wicket longer admire do barton vanity itself do in it.</p>
            </div>
          
          </div>
        </section>
        <section className="top-cards">

          <h5>Top Selling</h5>
          <h2>{searchValue ? `Searching: ${searchValue}` : "Top Destinations"}</h2>
          <div className="search-block d-flex">
            <img src={process.env.PUBLIC_URL +"/img/search.svg"} alt="Search"/>
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..."/>
            {searchValue && <img onClick={() => setSearchValue('')} src={process.env.PUBLIC_URL + "/img/close.svg"} width={42} height={42} alt="clear"></img>}
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
                <img src={process.env.PUBLIC_URL + "/img/1.svg"} alt="Pic" />
                <div>
                  <h6>Choose Destination</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur <br/>
                  adipiscing elit. Urna, tortor tempus. </p>
                </div>
              </li>
              <li className="book_item d-flex">
                <img src={process.env.PUBLIC_URL + "/img/2.svg"} alt="Pic" />
                <div>
                  <h6>Make Payment</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur <br/>
                  adipiscing elit. Urna, tortor tempus. </p>
                </div>
              </li>
              <li className="book_item d-flex">
                <img src={process.env.PUBLIC_URL + "/img/3.svg"} alt="Pic" />
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
              <img src={process.env.PUBLIC_URL + "/img/greese.png"} alt="greese" />
              <h5>Trip To Greece</h5>
              <h6>14-29 June | <span> by Robbin joseph</span></h6>
    
              <ul className="d-flex mb-0">
                <li>
                 <img src={process.env.PUBLIC_URL + '/img/leaf.svg'} alt='leaf' width={36} height={36}/>
                </li>
                <li>
                 <img src={process.env.PUBLIC_URL + '/img/map.svg'} alt='map' width={36} height={36}/>
                </li>
                <li>
                 <img src={process.env.PUBLIC_URL + '/img/send.svg'} alt='send' width={36} height={36}/>
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
           
            <Slider slides={slides} />
            
          </div>
        </section>
        <section className="partners">
          <ul className="d-flex">
            <li>
              <img src={process.env.PUBLIC_URL + "/img/axon.png"} alt="axon" />
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/img/alitalia.png"} alt="alitalia" />
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/img/qantas.png"} alt="qantas" />
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/img/jetstar.png"} alt="jetstar" />
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + "/img/expedia.png"} alt="expedia" />
            </li>
          </ul>
        </section>
      </main>
    )
}

export default Home;