import { useTranslation } from "react-i18next";
import styles from "./Sections.module.css";

export function Stats() {
  const { t } = useTranslation();
  return (
    <div style={{ padding: "80px 0", position: "relative", zIndex: 1 }}>
      <div className="wrap">
        <div className={`reveal ${styles.statsGrid}`}>
          {[
            { num: "99.9%", lbl: t("stats.uptime") },
            { num: "<60s", lbl: t("stats.detection") },
            { num: "R$0", lbl: t("stats.start") },
          ].map((s, i) => (
            <div key={i} className={styles.statCell}>
              <div className={styles.statGlow} />
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLbl}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Features() {
  const { t } = useTranslation();
  const cards = [
    { icon: "⚡", title: t("feat1.title"), desc: t("feat1.desc") },
    {
      icon: "🤖",
      title: t("feat2.title"),
      desc: t("feat2.desc"),
      tag: t("feat2.tag"),
      tagType: "synth",
      hl: "synth",
    },
    { icon: "📊", title: t("feat3.title"), desc: t("feat3.desc") },
    {
      icon: "💬",
      title: t("feat4.title"),
      desc: t("feat4.desc"),
      tag: t("feat4.tag"),
      tagType: "wpp",
      hl: "wpp",
    },
    { icon: "🔗", title: t("feat5.title"), desc: t("feat5.desc") },
    { icon: "🔔", title: t("feat6.title"), desc: t("feat6.desc") },
    {
      icon: "⌨️",
      title: t("feat7.title"),
      desc: t("feat7.desc"),
      tag: t("feat7.tag"),
      tagType: "synth",
      hl: "synth",
    },
    { icon: "📣", title: t("feat8.title"), desc: t("feat8.desc") },
    { icon: "🛠️", title: t("feat9.title"), desc: t("feat9.desc") },
  ];

  function cardBg(hl) {
    if (hl === "wpp")
      return "linear-gradient(135deg, var(--surface) 60%, var(--wpp-d))";
    if (hl === "synth")
      return "linear-gradient(135deg, var(--surface) 60%, var(--primary-d))";
    return "var(--surface)";
  }
  function cardBgHover(hl) {
    if (hl === "wpp")
      return "linear-gradient(135deg, var(--surface2) 60%, var(--wpp-b))";
    if (hl === "synth")
      return "linear-gradient(135deg, var(--surface2) 60%, var(--primary-b))";
    return "var(--surface2)";
  }

  return (
    <section
      style={{ padding: "100px 0", position: "relative", zIndex: 1 }}
      id="features"
    >
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="stag reveal">{t("feat.tag")}</div>
          <h2 className="shead reveal">
            {t("feat.head1")}
            <br />
            <em>{t("feat.head2")}</em>
          </h2>
        </div>
        <div className={`reveal-group ${styles.featGrid}`}>
          {cards.map((c, i) => (
            <div
              key={i}
              className={styles.featCard}
              style={{ background: cardBg(c.hl) }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = cardBgHover(c.hl);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = cardBg(c.hl);
              }}
            >
              <span
                style={{ fontSize: 22, display: "block", marginBottom: 12 }}
              >
                {c.icon}
              </span>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 8,
                }}
              >
                {c.title}
              </div>
              <p
                style={{ fontSize: 12, color: "var(--text2)", lineHeight: 1.7 }}
              >
                {c.desc}
              </p>
              {c.tag && (
                <span
                  style={{
                    display: "inline-block",
                    marginTop: 12,
                    fontSize: 10,
                    padding: "3px 9px",
                    borderRadius: 5,
                    fontWeight: 700,
                    background:
                      c.tagType === "wpp" ? "var(--wpp-d)" : "var(--primary-d)",
                    color:
                      c.tagType === "wpp" ? "var(--wpp)" : "var(--primary)",
                    border: `1px solid ${c.tagType === "wpp" ? "rgba(37,211,102,0.2)" : "rgba(0,212,170,0.2)"}`,
                  }}
                >
                  {c.tag}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
