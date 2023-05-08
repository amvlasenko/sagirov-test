import styles from './Header.module.scss';
import {Logo} from '../logo/Logo';
import {useEffect, useState} from 'react';

export function Header({vwidth}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [visibleStyle, setVisibleStyle] = useState(styles.navigationList);

    useEffect(() => {
        setVisibleStyle(isMenuOpen ? styles.navigationListVisible : styles.navigationList);
    }, [isMenuOpen]);

    function menuToggle(e) {
        e.preventDefault();
        setIsMenuOpen((prev) => !prev);
    }


    return <header className={styles.Header}>
        <div className={styles.wrapper}>
            <Logo/>
            <nav className="navigation">
                {vwidth <= 768 && <button onClick={menuToggle}>Меню</button>}
                <ul className={visibleStyle}>
                    <li><a href="/#">Главная</a></li>
                    <li><a href="/#">Технология</a></li>
                    <li><a href="/#">График полетов</a></li>
                    <li><a href="/#">Гарантии</a></li>
                    <li><a href="/#">О&nbsp;компании</a></li>
                    <li><a href="/#">Контакты</a></li>
                </ul>
            </nav>
        </div>
    </header>;
}