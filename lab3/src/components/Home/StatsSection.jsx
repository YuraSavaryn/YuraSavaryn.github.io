import styles from './StatsSection.module.css'

export default function StatsSection() {
    return (
        <section className={styles["stats-section"]}>
            <div className={styles["stats-grid"]}>
                <div className={styles["stat-item"]}>
                    <div className={styles["stat-number"]}>150+</div>
                    <div className={styles["stat-label"]}>Проведених хакатонів</div>
                </div>
                <div className={styles["stat-item"]}>
                    <div className={styles["stat-number"]}>50,000+</div>
                    <div className={styles["stat-label"]}>Активних учасників</div>
                </div>
                <div className={styles["stat-item"]}>
                    <div className={styles["stat-number"]}>₴5М+</div>
                    <div className={styles["stat-label"]}>Призових коштів</div>
                </div>
                <div className={styles["stat-item"]}>
                    <div className={styles["stat-number"]}>25+</div>
                    <div className={styles["stat-label"]}>Країн-учасниць</div>
                </div>
            </div>
        </section>
    )
}