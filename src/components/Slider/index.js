import { useState, useEffect } from "react";
import styles from './Slider.module.scss'

const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
   
    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    useEffect(() => {
        const intervalId = setInterval(goToNext, 3000); // Встановлюємо таймер на 3 секунди
        return () => clearInterval(intervalId); // Очищаємо таймер при демонтажі компонента
      }, [currentIndex]);

   
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }
    return (<div className={styles.reviewsWrapper}>
        <div>
            <div className={styles.reviews}>
                <img src={process.env.PUBLIC_URL + slides[currentIndex].url} alt={slides[currentIndex].userName} className={styles.userPhoto}/>
                <p  className={styles.comments}>{slides[currentIndex].comments}</p>
                <h6 className={styles.userName}>{slides[currentIndex].userName} </h6>
                <p  className={styles.userHome}>{slides[currentIndex].homePlace}</p>
            </div>
            <div className={styles.dotsCont}>
                {slides.map((slide, slideIndex) => (<div key={slideIndex}><img src={process.env.PUBLIC_URL + '/img/dots.svg'} alt='dots' width={12} height={12} onClick={() => goToSlide(slideIndex)} className={styles.dots}/></div>))}
            </div>
        </div>
       
        <div className={styles.arrows}>
            <img src={process.env.PUBLIC_URL + '/img/prev.svg'} alt='send' width={32} height={32} onClick={goToPrev}/>
            <img src={process.env.PUBLIC_URL + '/img/next.svg'} alt='send' width={32} height={32} onClick={goToNext}/>
        </div>
        
    </div>)
}
export default Slider;

//<img src={process.env.PUBLIC_URL + ""} alt="" />
//<p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
//<h6>Mike taylor</h6>
//<p>Lahore, Pakistan</p>