import { useState } from "react";
import { useTranslation } from "react-i18next";

export function HowItWorks() {
  const { t } = useTranslation();
  const steps = [
    { n: 1, title: t("how.step1title"), desc: t("how.step1desc") },
    { n: 2, title: t("how.step2title"), desc: t("how.step2desc") },
    { n: 3, title: t("how.step3title"), desc: t("how.step3desc") },
    { n: 4, title: t("how.step4title"), desc: t("how.step4desc") },
  ];
  return (
    <section
      style={{ padding: "100px 0", position: "relative", zIndex: 1 }}
      id="how"
    >
      <div className="wrap-sm">
        <div className="stag reveal">{t("how.tag")}</div>
        <h2 className="shead reveal">
          {t("how.head1")}
          <br />
          <em>{t("how.head2")}</em>
        </h2>
        <div className="reveal">
          {steps.map((s, i) => (
            <div
              key={s.n}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 20,
                padding: "28px 0",
                borderBottom:
                  i < steps.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "var(--primary-d)",
                  border: "1px solid rgba(0,212,170,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--primary)",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                {s.n}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: 5,
                  }}
                >
                  {s.title}
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: "var(--text2)",
                    lineHeight: 1.75,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonial() {
  return null;
}

export function Pricing() {
  const { t } = useTranslation();

  const freeFeats = [
    { on: true, label: t("price.f1") },
    { on: true, label: t("price.f2") },
    { on: true, label: t("price.f3") },
    { on: true, label: t("price.f4") },
    { on: true, label: t("price.f5") },
    { on: false, label: t("price.f6") },
    { on: false, label: t("price.f7") },
    { on: false, label: t("price.f8") },
  ];

  const proFeats = [
    { color: "var(--up)", label: t("price.p1") },
    { color: "var(--up)", label: t("price.p2") },
    { color: "var(--up)", label: t("price.p3") },
    { color: "var(--up)", label: t("price.p4") },
    { color: "var(--up)", label: t("price.p5") },
    { color: "var(--up)", label: t("price.p6") },
    { color: "var(--wpp)", label: t("price.p7"), highlight: "wpp" },
    { color: "var(--primary)", label: t("price.p8"), highlight: "synth" },
    { color: "var(--up)", label: t("price.p9") },
  ];

  return (
    <section
      style={{ padding: "100px 0", position: "relative", zIndex: 1 }}
      id="pricing"
    >
      <div className="wrap-sm">
        <div style={{ textAlign: "center" }}>
          <div className="stag reveal">{t("price.tag")}</div>
          <h2 className="shead reveal">
            {t("price.head1")}
            <br />
            <em>{t("price.head2")}</em>
          </h2>
        </div>
        <div className="reveal price-grid">
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border2)",
              borderRadius: "var(--radius-lg)",
              padding: "32px 28px",
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--text2)",
                marginBottom: 12,
              }}
            >
              Free
            </div>
            <div
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 52,
                lineHeight: 1,
                color: "var(--text)",
                marginBottom: 4,
              }}
            >
              R$0
            </div>
            <div
              style={{ fontSize: 11, color: "var(--muted)", marginBottom: 24 }}
            >
              {t("price.forever")}
            </div>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 9,
                marginBottom: 28,
              }}
            >
              {freeFeats.map((f, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    fontSize: 12,
                    color: "var(--text2)",
                    opacity: f.on ? 1 : 0.4,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      flexShrink: 0,
                      color: f.on ? "var(--up)" : "var(--muted)",
                    }}
                  >
                    {f.on ? "✓" : "✗"}
                  </span>
                  {f.label}
                </li>
              ))}
            </ul>
            <a
              href="https://upstat.online/register"
              style={{
                display: "block",
                textAlign: "center",
                padding: 13,
                borderRadius: "var(--radius-sm)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                fontWeight: 700,
                background: "var(--surface3)",
                color: "var(--text2)",
                border: "1px solid var(--border2)",
                transition: "opacity 0.15s, transform 0.15s",
                textDecoration: "none",
              }}
            >
              {t("price.freebtn")}
            </a>
          </div>

          <div
            style={{
              background:
                "linear-gradient(145deg, var(--surface2), var(--surface))",
              border: "1px solid rgba(0,212,170,0.25)",
              borderRadius: "var(--radius-lg)",
              padding: "32px 28px",
              boxShadow: "0 0 40px rgba(0,212,170,0.07)",
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--text2)",
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Pro
              <span
                style={{
                  fontSize: 9,
                  padding: "3px 8px",
                  background: "var(--primary-d)",
                  color: "var(--primary)",
                  border: "1px solid rgba(0,212,170,0.2)",
                  borderRadius: 100,
                  fontWeight: 700,
                }}
              >
                {t("price.recommended")}
              </span>
            </div>
            <div
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 52,
                lineHeight: 1,
                color: "var(--primary)",
                marginBottom: 4,
              }}
            >
              R$9
            </div>
            <div
              style={{ fontSize: 11, color: "var(--muted)", marginBottom: 24 }}
            >
              {t("price.permonth")}
            </div>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 9,
                marginBottom: 28,
              }}
            >
              {proFeats.map((f, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    fontSize: 12,
                    color:
                      f.highlight === "wpp"
                        ? "var(--wpp)"
                        : f.highlight === "synth"
                          ? "var(--primary)"
                          : "var(--text2)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      flexShrink: 0,
                      color: f.color,
                    }}
                  >
                    ✓
                  </span>
                  {f.label}
                </li>
              ))}
            </ul>
            <a
              href="https://upstat.online/register"
              style={{
                display: "block",
                textAlign: "center",
                padding: 13,
                borderRadius: "var(--radius-sm)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                fontWeight: 700,
                background: "var(--primary)",
                color: "#000",
                transition: "opacity 0.15s, transform 0.15s",
                textDecoration: "none",
              }}
            >
              {t("price.probtn")}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #pricing .price-grid-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export function FAQ() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(null);
  const items = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
    { q: t("faq.q7"), a: t("faq.a7") },
    { q: t("faq.q8"), a: t("faq.a8") },
  ];
  return (
    <section
      style={{ padding: "100px 0", position: "relative", zIndex: 1 }}
      id="faq"
    >
      <div className="wrap-sm">
        <div style={{ textAlign: "center" }}>
          <div className="stag reveal">{t("faq.tag")}</div>
          <h2 className="shead reveal">
            {t("faq.head1")}
            <br />
            <em>{t("faq.head2")}</em>
          </h2>
        </div>
        <div
          className="reveal"
          style={{
            border: "1px solid var(--border2)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            marginTop: 48,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                background: "var(--surface)",
                borderBottom:
                  i < items.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "22px 28px",
                  cursor: "pointer",
                  gap: 16,
                  background: open === i ? "var(--surface2)" : "transparent",
                  transition: "background 0.15s",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--text)",
                    lineHeight: 1.5,
                  }}
                >
                  {item.q}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: "var(--primary)",
                    flexShrink: 0,
                    transition: "transform 0.25s",
                    transform: open === i ? "rotate(45deg)" : "none",
                    display: "inline-block",
                  }}
                >
                  +
                </span>
              </div>
              {open === i && (
                <div
                  style={{
                    padding: "0 28px 22px",
                    fontSize: 12,
                    color: "var(--text2)",
                    lineHeight: 1.85,
                  }}
                  dangerouslySetInnerHTML={{ __html: item.a }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  const { t } = useTranslation();
  return (
    <section
      style={{
        padding: "120px 20px",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 400,
          background:
            "radial-gradient(ellipse, rgba(0,212,170,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <h2
        className="reveal"
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(36px, 6vw, 64px)",
          lineHeight: 1.08,
          letterSpacing: "-0.025em",
          marginBottom: 16,
        }}
      >
        {t("cta.title1")}
        <br />
        <em style={{ fontStyle: "italic", color: "var(--primary)" }}>
          {t("cta.title2")}
        </em>
        <br />
        {t("cta.title3")}
      </h2>
      <p
        className="reveal"
        style={{ fontSize: 13, color: "var(--muted)", marginBottom: 36 }}
      >
        {t("cta.sub")}
      </p>
      <div
        className="reveal"
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <a href="https://upstat.online/register" className="btn btn-primary">
          {t("cta.btn1")}
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "28px clamp(18px, 5vw, 40px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        zIndex: 1,
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <span
        style={{
          fontSize: 13,
          fontWeight: 700,
          color: "var(--primary)",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "var(--primary)",
            boxShadow: "0 0 8px var(--primary)",
          }}
        />
        UpStat
      </span>
      <span style={{ fontSize: 11, color: "var(--muted)" }}>
        {t("footer.copy")}
      </span>
    </footer>
  );
}
