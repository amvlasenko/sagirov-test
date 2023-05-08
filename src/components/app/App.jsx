import styles from './App.module.scss';
import {Header} from '../header/Header';
import {Promo} from '../promo/Promo';
import {useEffect, useState} from 'react';

export function App() {
    const [vwidth, setVwidth] = useState(window.innerWidth);
    useEffect(() => {
        return subscribe();
    }, []);


    function subscribe() {
        window.addEventListener('resize', () => setVwidth(getSnapshot()));
        return () => window.removeEventListener('resize', () => console.log(2));
    }

    function getSnapshot() {
        return window.innerWidth;
    }

    return (
        <div className={styles.App}>
            <Header vwidth={vwidth}/>
            <main className={styles.wrapper}>
                <div className={styles.travel}>
                    <div className={styles.textWrap}>
                        <h1>Путешествие</h1>
                        <p>На красную планету</p>
                    </div>
                    {vwidth > 768 &&
                        <button className={styles.startButton} onClick={(e) => e.preventDefault()}>Начать
                            путешествие</button>}
                </div>
                <Promo/>
                {vwidth <= 768 &&
                    <button className={styles.startButtonMobile} onClick={(e) => e.preventDefault()}>Начать
                        путешествие</button>}
            </main>
        </div>
    );
}