import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const currentLang = i18n.language?.startsWith("en") ? "en" : "pt";

  function setLang(lang) {
    i18n.changeLanguage(lang);
    setLangOpen(false);
  }

  const links = [
    { href: "#features", label: t("nav.features") },
    { href: "#whatsapp", label: "WhatsApp" },
    { href: "#synthetic", label: "Synthetic" },
    { href: "#pricing", label: t("nav.pricing") },
  ];

  return (
    <>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>
          <div className={styles.logoDot} />
          UpStat
        </a>

        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="https://upstat.online/login">{t("nav.login")}</a>
          </li>
          <li>
            <a href="https://upstat.online/register" className={styles.cta}>
              {t("nav.cta")}
            </a>
          </li>
        </ul>

        <div className={styles.right}>
          <div
            className={`${styles.langSwitcher} ${langOpen ? styles.open : ""}`}
          >
            <button
              className={styles.langBtn}
              onClick={(e) => {
                e.stopPropagation();
                setLangOpen(!langOpen);
              }}
            >
              <span>{currentLang === "pt" ? "🇧🇷" : "🇺🇸"}</span>
              <span>{currentLang.toUpperCase()}</span>
              <span className={styles.arrow}>▼</span>
            </button>
            {langOpen && (
              <div
                className={styles.dropdown}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className={`${styles.option} ${currentLang === "pt" ? styles.active : ""}`}
                  onClick={() => setLang("pt")}
                >
                  🇧🇷 Português
                </div>
                <div className={styles.divider} />
                <div
                  className={`${styles.option} ${currentLang === "en" ? styles.active : ""}`}
                  onClick={() => setLang("en")}
                >
                  🇺🇸 English
                </div>
              </div>
            )}
          </div>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {langOpen && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 99 }}
          onClick={() => setLangOpen(false)}
        />
      )}

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="https://upstat.online/login"
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.login")}
          </a>
          <a
            href="https://upstat.online/register"
            className={styles.mobileCta}
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.cta")}
          </a>
        </div>
      )}
    </>
  );
}
