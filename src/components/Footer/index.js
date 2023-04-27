
import styles from './Footer.module.scss';


function Footer () {
    return (
        <footer className={styles.footer}>
          <div className={styles.footerWrapper}>
          <div className={styles.footerLogo}>
              <img src='/img/logo-footer.svg' alt='logo-footer' width={152} height={66}/>
              <p>Book your trip in minute, get full Control for much longer.</p>
            </div>
            <ul> 
              <h5>Company</h5>
              <li>About</li>
              <li>Mobile</li>
              <li>Careers</li>
            </ul>
            <ul>
              <h5>Contact</h5>
              <li>Help/FAQ</li>
              <li>Affilates</li>
              <li>Press</li>
            </ul>
            <ul>
              <h5>More</h5>
              <li>Airlinefees</li>
              <li>Low fare tips</li>
              <li>Airline</li>
            </ul>
            <div>
              <ul className={styles.social}>
                <li>
                  <a href='/'>
                  <img src='/img/fb.svg' alt='fb' width={42} height={42}></img>
                  </a>
                  <a href='/'>
                  <img src='/img/fb.svg' alt='twit' width={42} height={42}></img>
                  </a>
                  <a href='/'>
                  <img src='/img/fb.svg' alt='fb' width={42} height={42}></img>
                  </a>
                </li>
                <li>Discover our app</li>
                <li>
                  <a href='/'>
                  <img src='/img/google.svg' alt='fb' width={107} height={35}></img>
                  </a>
                  <a href='/'>
                  <img src='/img/apple.svg' alt='fb' width={107} height={35}></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
            
            <p>All rights reserved@jadoo.co</p>
            
        </footer>
    )
}
export default Footer;