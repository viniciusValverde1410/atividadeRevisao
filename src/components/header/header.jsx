import styles from './header.module.css';

export default function Header({ title, subtitle, total }) {
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h3>📊 Total de produtos:{total}</h3>
        </div>
    )
}