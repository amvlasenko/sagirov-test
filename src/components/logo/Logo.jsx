import styles from './Logo.module.scss';

export function Logo() {
    return <a href="/#" title="На главную страницу" className={styles.Logo}>
        <div className={styles.render}></div>
    </a>;
}