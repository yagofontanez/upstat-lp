import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";

const ubarsUp = Array(30).fill("rgba(34,197,94,0.18)");
const ubarsSynth = Array(30).fill("rgba(0,212,170,0.14)");
ubarsUp[4] = "rgba(239,68,68,0.22)";
ubarsUp[11] = "rgba(245,158,11,0.2)";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.badges}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          {t("hero.badge1")}
        </div>
        <div className={styles.badge}>
          <span className={`${styles.dot} ${styles.dotWpp}`} />
          {t("hero.badge2")}
        </div>
      </div>

      <h1 className={styles.title}>
        {t("hero.title1")}
        <br />
        <em>{t("hero.title2")}</em>
      </h1>

      <p className={styles.sub}>{t("hero.sub")}</p>

      <div className={styles.actions}>
        <a href="https://upstat.online/register" className="btn btn-primary">
          {t("hero.cta1")}
        </a>
        <a href="#how" className="btn btn-ghost">
          {t("hero.cta2")}
        </a>
      </div>

      <div className={styles.mock}>
        <div className={styles.mockHeader}>
          <span>{t("mock.title")}</span>
          <div className={styles.mockPill}>
            <span className={styles.pillDot} /> All systems operational
          </div>
        </div>

        <div className={styles.mockRow}>
          <div className={styles.rowLeft}>
            <div className={`${styles.rowDot} ${styles.dotUp}`} />
            <span>{t("mock.api")}</span>
          </div>
          <div className={styles.rowRight}>
            <span>142ms</span>
            <span>99.98%</span>
            <span className={`${styles.spill} ${styles.spillUp}`}>
              {t("mock.operational")}
            </span>
          </div>
        </div>
        <div className={styles.ubars}>
          {ubarsUp.map((bg, i) => (
            <div key={i} className={styles.ubar} style={{ background: bg }} />
          ))}
        </div>

        <div className={styles.mockRow}>
          <div className={styles.rowLeft}>
            <div className={`${styles.rowDot} ${styles.dotTeal}`} />
            <span>Checkout Flow</span>
            <span className={styles.synthTag}>synthetic</span>
          </div>
          <div className={styles.rowRight}>
            <span>1.4s</span>
            <span>100%</span>
            <span className={`${styles.spill} ${styles.spillTeal}`}>OK</span>
          </div>
        </div>
        <div className={styles.ubars}>
          {ubarsSynth.map((bg, i) => (
            <div key={i} className={styles.ubar} style={{ background: bg }} />
          ))}
        </div>
      </div>
    </section>
  );
}
