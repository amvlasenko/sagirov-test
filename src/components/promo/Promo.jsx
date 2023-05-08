import styles from './Promo.module.scss';

export function Promo() {
    return <div className={styles.Promo}>
        <ul>
            <li><a href="/#">Мы <span>1</span> на рынке</a></li>
            <li><a href="/#">Гарантируем <span>50%</span> безопасность</a></li>
            <li><a href="/#">Календарик за <span>2001 <span className={styles.year}>г.</span></span> в подарок</a></li>
            <li><a href="/#">Путешествие <span>579</span> дней</a></li>
        </ul>
    </div>;
}