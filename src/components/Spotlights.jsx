import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Spotlights.module.css";

function Checklist({ items, type = "teal" }) {
  return (
    <ul className="checklist">
      {items.map((item, i) => (
        <li key={i}>
          <span className={`ck ${type}`}>✓</span>
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  );
}

function WBubble({ title, body, time, titleClass }) {
  return (
    <div
      style={{
        background: "var(--surface2)",
        borderRadius: "12px 12px 12px 0",
        border: "1px solid var(--border)",
        padding: "12px 14px",
        marginBottom: 10,
        maxWidth: 300,
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          marginBottom: 5,
          color: titleClass === "down" ? "var(--down)" : "var(--up)",
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div
        style={{ fontSize: 11, color: "var(--text2)", lineHeight: 1.6 }}
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <div
        style={{
          fontSize: 10,
          color: "var(--muted)",
          textAlign: "right",
          marginTop: 5,
        }}
      >
        {time}
      </div>
    </div>
  );
}

export function WhatsAppSpotlight() {
  const { t } = useTranslation();
  return (
    <section
      style={{ padding: "60px 0", position: "relative", zIndex: 1 }}
      id="whatsapp"
    >
      <div className="wrap">
        <div className="sp-card wpp-card reveal">
          <div className="sp-content">
            <div className="stag wpp">{t("wpp.tag")}</div>
            <h2 className="shead">
              {t("wpp.head1")}
              <br />
              <em className="wpp">{t("wpp.head2")}</em>
            </h2>
            <p
              className="sp-desc"
              dangerouslySetInnerHTML={{ __html: t("wpp.desc") }}
            />
            <Checklist
              type="wpp"
              items={[
                t("wpp.check1"),
                t("wpp.check2"),
                t("wpp.check3"),
                t("wpp.check4"),
              ]}
            />
            <a href="https://upstat.online/register" className="btn btn-wpp">
              {t("wpp.cta")}
            </a>
          </div>
          <div className="sp-demo">
            <WBubble
              title={t("wpp.bubble1t")}
              body={t("wpp.bubble1b")}
              time="03:17 ✓✓"
              titleClass="down"
            />
            <WBubble
              title={t("wpp.bubble2t")}
              body={t("wpp.bubble2b")}
              time="03:18 ✓✓"
              titleClass="down"
            />
            <WBubble
              title={t("wpp.bubble3t")}
              body={t("wpp.bubble3b")}
              time="03:21 ✓✓"
              titleClass="up"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SyntheticSpotlight() {
  const { t } = useTranslation();
  const steps = [
    {
      n: 1,
      label: "GET /products",
      desc: t("syn.step1"),
      status: "✓ 210ms",
      cls: "ok",
    },
    {
      n: 2,
      label: "POST /cart/add",
      desc: t("syn.step2"),
      status: "✓ 318ms",
      cls: "ok",
    },
    {
      n: 3,
      label: "POST /checkout/init",
      desc: t("syn.step3"),
      status: t("syn.running_step"),
      cls: "run",
    },
    {
      n: 4,
      label: "POST /payment/confirm",
      desc: t("syn.step4desc"),
      status: t("syn.waiting"),
      cls: "w",
      dim: true,
    },
    {
      n: 5,
      label: "GET /order/:id",
      desc: t("syn.step5desc"),
      status: t("syn.waiting"),
      cls: "w",
      dim: true,
    },
  ];
  const statusColors = {
    ok: "var(--up)",
    run: "var(--primary)",
    w: "var(--muted)",
    err: "var(--down)",
  };
  const statusBg = {
    ok: "rgba(34,197,94,0.1)",
    run: "var(--primary-d)",
    w: "var(--surface3)",
    err: "rgba(239,68,68,0.1)",
  };

  return (
    <section
      style={{ padding: "60px 0", position: "relative", zIndex: 1 }}
      id="synthetic"
    >
      <div className="wrap">
        <div className="sp-card synth-card reveal">
          <div className="sp-content">
            <div className="stag">{t("syn.tag")}</div>
            <h2 className="shead">
              {t("syn.head1")}
              <br />
              <em>{t("syn.head2")}</em>
            </h2>
            <p
              className="sp-desc"
              dangerouslySetInnerHTML={{ __html: t("syn.desc") }}
            />
            <Checklist
              items={[
                t("syn.check1"),
                t("syn.check2"),
                t("syn.check3"),
                t("syn.check4"),
              ]}
            />
            <a
              href="https://upstat.online/register"
              className="btn btn-primary"
            >
              {t("syn.cta")}
            </a>
          </div>
          <div className="sp-demo">
            <div
              style={{
                fontSize: 11,
                color: "var(--muted)",
                marginBottom: 14,
                letterSpacing: "0.04em",
              }}
            >
              {t("syn.running")}
            </div>
            {steps.map((s) => (
              <div
                key={s.n}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 0",
                  borderBottom: "1px solid var(--border)",
                  opacity: s.dim ? 0.4 : 1,
                }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "var(--surface3)",
                    border: "1px solid var(--border2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    color: "var(--muted)",
                    flexShrink: 0,
                  }}
                >
                  {s.n}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: 1,
                    }}
                  >
                    {s.label}
                  </div>
                  <div style={{ fontSize: 10, color: "var(--muted)" }}>
                    {s.desc}
                  </div>
                </div>
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: 5,
                    flexShrink: 0,
                    background: statusBg[s.cls],
                    color: statusColors[s.cls],
                  }}
                >
                  {s.status}
                </span>
              </div>
            ))}
            <div
              style={{
                fontSize: 11,
                color: "var(--muted)",
                marginTop: 14,
                paddingTop: 12,
                borderTop: "1px solid var(--border)",
              }}
              dangerouslySetInnerHTML={{ __html: t("syn.lastrun") }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CLISpotlight() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("cli");
  const tabs = [
    { id: "cli", label: "CLI" },
    { id: "sdk", label: "SDK" },
    { id: "heartbeat", label: "Heartbeat" },
  ];

  return (
    <section
      style={{ padding: "60px 0", position: "relative", zIndex: 1 }}
      id="cli"
    >
      <div className="wrap">
        <div className="sp-card cli-card reveal">
          <div className="sp-content">
            <div
              className="stag"
              dangerouslySetInnerHTML={{ __html: t("cli.tag") }}
            />
            <h2 className="shead">
              {t("cli.head1")}
              <br />
              <em>{t("cli.head2")}</em>
            </h2>
            <p
              className="sp-desc"
              dangerouslySetInnerHTML={{ __html: t("cli.desc") }}
            />
            <ul className="checklist">
              {[
                t("cli.check1"),
                t("cli.check2"),
                t("cli.check3"),
                t("cli.check4"),
              ].map((c, i) => (
                <li key={i}>
                  <span className="ck teal">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: c }} />
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                href="https://www.npmjs.com/package/upstat-sdk"
                className="btn btn-primary"
                target="_blank"
              >
                {t("cli.npm")}
              </a>
              <a href="https://upstat.online/docs" className="btn btn-ghost">
                {t("cli.docs")}
              </a>
            </div>
          </div>

          <div className="sp-demo" style={{ minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid var(--border)",
                marginBottom: 14,
              }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "8px 14px",
                    color:
                      activeTab === tab.id ? "var(--primary)" : "var(--muted)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    borderBottom:
                      activeTab === tab.id
                        ? "2px solid var(--primary)"
                        : "2px solid transparent",
                    transition: "color 0.15s, border-color 0.15s",
                    letterSpacing: "0.04em",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === "cli" && (
              <div className={styles.codeBlock}>
                <code>
                  <span className="c-prompt">$ </span>
                  <span className="c-cmd">npm install -g upstat-cli</span>
                  {"\n\n"}
                  <span className="c-prompt">$ </span>
                  <span className="c-cmd">upstat login</span>
                  {"\n"}
                  <span className="c-ok">
                    ✓ Autenticado como yago@upstat.online
                  </span>
                  {"\n\n"}
                  <span className="c-prompt">$ </span>
                  <span className="c-cmd">upstat monitors list</span>
                  {"\n"}
                  <span className="c-ok">✓</span>
                  {" API Principal "}
                  <span style={{ color: "var(--up)" }}>UP</span>
                  {" 142ms\n"}
                  <span className="c-ok">✓</span>
                  {" Checkout Flow "}
                  <span style={{ color: "var(--up)" }}>UP</span>
                  {" 1.4s\n\n"}
                  <span className="c-prompt">$ </span>
                  <span className="c-cmd">
                    upstat monitors pause api-principal
                  </span>
                  {"\n"}
                  <span className="c-ok">✓ Monitor pausado durante deploy</span>
                </code>
              </div>
            )}

            {activeTab === "sdk" && (
              <div className={styles.codeBlock}>
                <code>
                  <span className="c-kw">import</span>
                  {" { "}
                  <span className="c-fn">UpStat</span>
                  {" } "}
                  <span className="c-kw">from</span>{" "}
                  <span className="c-str">'upstat-sdk'</span>
                  {"\n\n"}
                  <span className="c-kw">const</span>
                  {" upstat = "}
                  <span className="c-kw">new</span>{" "}
                  <span className="c-fn">UpStat</span>
                  {"({\n  apiKey: process.env."}
                  <span className="c-val">UPSTAT_API_KEY</span>
                  {"\n})\n\n"}
                  <span className="c-kw">await</span>
                  {" upstat.monitors."}
                  <span className="c-fn">create</span>
                  {"({\n  name: "}
                  <span className="c-str">'API Produção'</span>
                  {",\n  url: "}
                  <span className="c-str">'https://api.meuapp.com/health'</span>
                  {",\n  interval: "}
                  <span className="c-val">60</span>
                  {"\n})\n\n"}
                  <span className="c-kw">const</span>
                  {" s = "}
                  <span className="c-kw">await</span>
                  {" upstat.monitors."}
                  <span className="c-fn">status</span>
                  {"("}
                  <span className="c-str">'api-producao'</span>
                  {")\n"}
                  {"console."}
                  <span className="c-fn">log</span>
                  {"(s.uptime) "}
                  <span className="c-cmt">// 99.98</span>
                </code>
              </div>
            )}

            {activeTab === "heartbeat" && (
              <>
                <div className={styles.codeBlock}>
                  <code>
                    <span className="c-kw">import</span>
                    {" { "}
                    <span className="c-fn">heartbeat</span>
                    {" } "}
                    <span className="c-kw">from</span>{" "}
                    <span className="c-str">'upstat-sdk'</span>
                    {"\n\n"}
                    <span className="c-kw">const</span>
                    {" hb = "}
                    <span className="c-kw">await</span>{" "}
                    <span className="c-fn">heartbeat</span>
                    {"("}
                    <span className="c-str">'daily-report'</span>
                    {")\n\n"}
                    <span className="c-kw">try</span>
                    {" {\n  "}
                    <span className="c-kw">await</span>{" "}
                    <span className="c-fn">runDailyReport</span>
                    {"()\n  "}
                    <span className="c-kw">await</span>
                    {" hb."}
                    <span className="c-fn">success</span>
                    {"() "}
                    <span className="c-cmt">// ✓ job OK</span>
                    {"\n} "}
                    <span className="c-kw">catch</span>
                    {" (err) {\n  "}
                    <span className="c-kw">await</span>
                    {" hb."}
                    <span className="c-fn">fail</span>
                    {"(err.message)\n}"}
                  </code>
                </div>
                <p
                  style={{
                    fontSize: 11,
                    color: "var(--muted)",
                    paddingTop: 10,
                  }}
                >
                  {t("cli.heartbeat_hint")}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SubscribeSpotlight() {
  const { t } = useTranslation();
  return (
    <section
      style={{ padding: "60px 0", position: "relative", zIndex: 1 }}
      id="subscribe"
    >
      <div className="wrap">
        <div className="sp-card sub-card reveal">
          <div className="sp-content">
            <div className="stag">{t("sub.tag")}</div>
            <h2 className="shead">
              {t("sub.head1")}
              <br />
              <em>{t("sub.head2")}</em>
            </h2>
            <p
              className="sp-desc"
              dangerouslySetInnerHTML={{ __html: t("sub.desc") }}
            />
            <ul className="checklist">
              <li>
                <span className="ck teal">✓</span>
                <span dangerouslySetInnerHTML={{ __html: t("sub.check1") }} />
              </li>
              <li>
                <span className="ck wpp">✓</span>
                <span dangerouslySetInnerHTML={{ __html: t("sub.check2") }} />
              </li>
              <li>
                <span className="ck teal">✓</span>
                <span dangerouslySetInnerHTML={{ __html: t("sub.check3") }} />
              </li>
              <li>
                <span className="ck teal">✓</span>
                <span dangerouslySetInnerHTML={{ __html: t("sub.check4") }} />
              </li>
            </ul>
            <a
              href="https://upstat.online/register"
              className="btn btn-primary"
            >
              {t("sub.cta")}
            </a>
          </div>

          <div className="sp-demo">
            <div
              style={{
                fontSize: 11,
                color: "var(--muted)",
                marginBottom: 14,
                letterSpacing: "0.04em",
              }}
            >
              {t("sub.preview")}
            </div>

            <div
              style={{
                background: "var(--surface2)",
                border: "1px solid var(--border2)",
                borderRadius: "var(--radius)",
                padding: 20,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  color: "var(--muted)",
                  letterSpacing: "0.06em",
                  marginBottom: 10,
                  fontWeight: 700,
                }}
              >
                {t("sub.form_label")}
              </div>
              <div className={styles.subInputRow}>
                <input
                  readOnly
                  placeholder="seu@email.com"
                  className={styles.subInput}
                />
                <button className={styles.subBtn}>{t("sub.form_btn")}</button>
              </div>
            </div>

            <div className={styles.channels}>
              {[
                { label: "📧 Email", active: true },
                { label: "💬 WhatsApp", wpp: true },
                { label: "🌐 Web push" },
              ].map((ch, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 11,
                    padding: "6px 12px",
                    borderRadius: 100,
                    background: ch.active
                      ? "var(--primary-d)"
                      : ch.wpp
                        ? "var(--wpp-d)"
                        : "var(--surface3)",
                    border: `1px solid ${ch.active ? "rgba(0,212,170,0.3)" : ch.wpp ? "rgba(37,211,102,0.3)" : "var(--border2)"}`,
                    color: ch.active
                      ? "var(--primary)"
                      : ch.wpp
                        ? "var(--wpp)"
                        : "var(--text2)",
                  }}
                >
                  {ch.label}
                </div>
              ))}
            </div>

            <div
              style={{
                fontSize: 11,
                color: "var(--muted)",
                marginBottom: 10,
                letterSpacing: "0.04em",
              }}
            >
              {t("sub.sent_label")}
            </div>
            {[
              {
                icon: "📧",
                bg: "var(--primary-d)",
                title: t("sub.notif1_title"),
                desc: t("sub.notif1_desc"),
              },
              {
                icon: "💬",
                bg: "var(--wpp-d)",
                title: t("sub.notif2_title"),
                desc: t("sub.notif2_desc"),
              },
            ].map((n, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "10px 0",
                  borderBottom: i === 0 ? "1px solid var(--border)" : "none",
                  fontSize: 11,
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    flexShrink: 0,
                    background: n.bg,
                  }}
                >
                  {n.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: 2,
                    }}
                  >
                    {n.title}
                  </div>
                  <div style={{ color: "var(--muted)", lineHeight: 1.5 }}>
                    {n.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
