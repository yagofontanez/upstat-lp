const pt = {
  nav: {
    features: "Funcionalidades",
    pricing: "Preços",
    login: "Entrar",
    cta: "Quero começar grátis →",
  },
  hero: {
    badge1: "Monitoramento em tempo real",
    badge2: "Alertas por WhatsApp",
    title1: "Seu sistema caiu.",
    title2: "Seus clientes já sabem.",
    sub: "Monitore APIs, fluxos e sistemas com synthetic monitors. Detecte quedas em segundos e receba alertas direto no seu WhatsApp — sem complicação.",
    cta1: "Quero monitorar meu sistema →",
    cta2: "Ver como funciona",
  },
  mock: {
    title: "Minha Startup — Status",
    api: "API Principal",
    operational: "Operacional",
  },
  stats: {
    uptime: "UPTIME MÉDIO MONITORADO",
    detection: "TEMPO DE DETECÇÃO",
    start: "PRA COMEÇAR",
  },
  feat: {
    tag: "// funcionalidades",
    head1: "Tudo que você precisa.",
    head2: "Nada que você não precisa.",
  },
  feat1: {
    title: "Monitoramento automático",
    desc: "Seu sistema é verificado a cada 1–5 minutos. Se cair, você sabe antes do seu cliente.",
  },
  feat2: {
    title: "Synthetic Monitor",
    desc: "Simule fluxos reais — login, checkout, formulários. Detecte quando algo quebra, não só quando o servidor cai.",
    tag: "✦ Pro",
  },
  feat3: {
    title: "Histórico de uptime",
    desc: "Visualize 90 dias de histórico com barras por dia, latência e incidentes registrados.",
  },
  feat4: {
    title: "Alertas por WhatsApp",
    desc: "Receba mensagem direto no WhatsApp quando qualquer monitor cair ou se recuperar. Na hora, sem delay.",
    tag: "💬 Pro",
  },
  feat5: {
    title: "Status page pública",
    desc: "Página profissional com URL personalizada pra compartilhar com seus clientes e usuários.",
  },
  feat6: {
    title: "Alertas por email",
    desc: "Notificações por email quando seu sistema cair ou se recuperar — disponível em todos os planos.",
  },
  feat7: {
    title: "CLI & SDK",
    desc: "Gerencie monitores pelo terminal ou integre direto no seu código com o SDK npm. Zero fricção no seu workflow.",
    tag: "📦 npm install upstat-sdk",
  },
  feat8: {
    title: "Inscrição na Status Page",
    desc: "Seus usuários se inscrevem na sua status page e recebem notificações automáticas por email ou WhatsApp quando algo cair.",
  },
  feat9: {
    title: "API REST",
    desc: "Acesse todos os dados dos seus monitores via API. Integre com qualquer ferramenta, dashboard ou sistema interno.",
  },
  wpp: {
    tag: "// alertas por whatsapp",
    head1: "Cai às 3h da manhã?",
    head2: "Você sabe na hora.",
    desc: "Email fica sem ler. Push você ignora. Mas <strong>WhatsApp você vê</strong> — independente da hora. Por isso o UpStat manda o alerta direto pra onde você vai ver mesmo.",
    check1:
      "<strong>Alerta de queda instantâneo</strong> — assim que o monitor detecta falha",
    check2:
      "<strong>Alerta de recuperação</strong> — quando o sistema volta ao ar",
    check3:
      "<strong>Detalhes completos</strong> — nome do monitor, downtime, código de status",
    check4:
      "<strong>Sem app extra</strong> — funciona direto no WhatsApp que você já usa",
    cta: "💬 Quero alertas no WhatsApp →",
    bubble1t: "🔴 Monitor offline",
    bubble1b:
      "<strong>API Principal</strong> está fora do ar.<br/>Status: 503 · Detectado às 03:17",
    bubble2t: "🔴 Synthetic falhou",
    bubble2b:
      "<strong>Checkout Flow</strong> — step 2 falhou.<br/>Timeout na etapa de pagamento",
    bubble3t: "🟢 Monitor recuperado",
    bubble3b:
      "<strong>API Principal</strong> voltou ao ar.<br/>Downtime: 4 min · Latência: 138ms",
  },
  syn: {
    tag: "// synthetic monitor",
    head1: "Não é só ping.",
    head2: "É o fluxo real.",
    desc: "Servidor respondendo 200 OK enquanto o checkout está quebrado? O Synthetic Monitor simula o que seu <strong>usuário real faz</strong> e alerta quando qualquer etapa falha.",
    check1:
      "<strong>Simula fluxos reais</strong> — login, checkout, APIs encadeadas",
    check2:
      "<strong>Detecta erros lógicos</strong> — não só downtime, mas falhas de integração",
    check3:
      "<strong>Steps granulares</strong> — veja exatamente qual etapa quebrou",
    check4:
      "<strong>Alerta via WhatsApp + email</strong> — integra com todos os canais",
    cta: "🤖 Criar meu primeiro synthetic →",
    running: "CHECKOUT FLOW · RODANDO AGORA",
    step1: "Listagem carregada",
    step2: "Item adicionado",
    step3: "Verificando gateway…",
    running_step: "⟳ rodando",
    step4desc: "Confirmação",
    step5desc: "Validação do pedido",
    waiting: "aguardando",
    lastrun:
      'Último: <span style="color:var(--up)">✓ OK</span> · 1.2s · há 3 min',
  },
  cli: {
    tag: "// cli & sdk",
    head1: "No seu terminal.",
    head2: "No seu código.",
    desc: "Gerencie monitores, consulte status e dispare eventos direto do seu workflow. <strong>CLI para o terminal</strong>, SDK para integrar no código — do jeito que dev gosta.",
    check1:
      "<strong>CLI completa</strong> — criar, pausar, listar e deletar monitores sem abrir o dashboard",
    check2:
      "<strong>SDK npm</strong> — <code>upstat-sdk</code> para Node.js e TypeScript",
    check3:
      "<strong>Heartbeat & cron jobs</strong> — monitore tarefas agendadas com um ping simples",
    check4:
      "<strong>CI/CD ready</strong> — pause alertas durante deploys sem falso positivo",
    npm: "📦 Ver no npm →",
    docs: "Ver docs",
    heartbeat_hint:
      "Se o job não pingar dentro do intervalo esperado, o alerta vai automaticamente.",
  },
  sub: {
    tag: "// inscrição na status page",
    head1: "Seus usuários",
    head2: "sempre informados.",
    desc: "Qualquer visitante da sua status page pode se inscrever para receber notificações automáticas quando <strong>qualquer serviço cair ou se recuperar</strong> — sem precisar ficar atualizando a página.",
    check1:
      "<strong>Inscrição por email</strong> — formulário já integrado na sua status page",
    check2:
      "<strong>Inscrição por WhatsApp</strong> — notificação no canal que eles já usam",
    check3:
      "<strong>Notificação de incidente</strong> — avisados quando algo cai e quando volta",
    check4:
      "<strong>Zero configuração</strong> — funciona automaticamente na sua status page existente",
    cta: "📣 Ativar inscrições →",
    preview: "PRÉVIA — STATUS PAGE PÚBLICA",
    form_label: "RECEBER NOTIFICAÇÕES",
    form_btn: "Inscrever",
    sent_label: "NOTIFICAÇÕES ENVIADAS",
    notif1_title: "Incidente detectado",
    notif1_desc: "Email enviado para 47 inscritos · API Principal offline",
    notif2_title: "Serviço recuperado",
    notif2_desc: "WhatsApp enviado para 23 inscritos · Downtime: 4 min",
  },
  how: {
    tag: "// como funciona",
    head1: "Do cadastro à",
    head2: "status page em minutos.",
    step1title: "Crie sua conta grátis",
    step1desc:
      "Cadastro em 30 segundos. Sem cartão de crédito. Seu primeiro monitor já começa a rodar na hora.",
    step2title: "Adicione um monitor (HTTP ou Synthetic)",
    step2desc:
      "Cole a URL da sua API pra monitoramento simples, ou configure um Synthetic Monitor com steps encadeados pra testar fluxos reais.",
    step3title: "Configure seus alertas",
    step3desc:
      "Ative notificações por email — ou por WhatsApp no plano Pro — pra saber imediatamente quando algo falhar.",
    step4title: "Compartilhe sua status page",
    step4desc:
      "Uma URL pública é gerada automaticamente. Compartilhe com seus clientes e deixe que eles acompanhem em tempo real.",
  },
  testimonial: {
    quote:
      "O UpStat me avisa antes do meu cliente perceber que algo caiu. Simples, direto e em português — sem precisar de ferramenta gringa.",
    name: "Dev BR",
    role: "Cliente Pro · upstat.online",
  },
  price: {
    tag: "// preços",
    head1: "Simples como",
    head2: "deve ser.",
    forever: "para sempre",
    f1: "10 monitores HTTP",
    f2: "Ping a cada 5 minutos",
    f3: "Histórico de 7 dias",
    f4: "Status page pública",
    f5: "Notificação por email",
    f6: "Alertas por WhatsApp",
    f7: "Synthetic Monitor",
    f8: "URL personalizada",
    freebtn: "Quero começar grátis",
    recommended: "recomendado",
    permonth: "por mês",
    p1: "Monitores ilimitados",
    p2: "Ping a cada 1 minuto",
    p3: "Histórico de 90 dias",
    p4: "Status page pública",
    p5: "URL personalizada",
    p6: "Notificação por email",
    p7: "💬 Alertas por WhatsApp",
    p8: "🤖 Synthetic Monitor",
    p9: "Suporte prioritário",
    probtn: "Quero fazer upgrade →",
  },
  faq: {
    tag: "// perguntas frequentes",
    head1: "Tem dúvida?",
    head2: "A gente responde.",
    q1: "O plano gratuito tem limite de tempo?",
    a1: "Não. O plano Free é gratuito para sempre — não é um trial. Você pode usar os 10 monitores HTTP, a status page e os alertas por email sem pagar nada, pelo tempo que quiser.",
    q2: "Como funciona o alerta por WhatsApp?",
    a2: "Você conecta seu número de WhatsApp nas configurações da conta. Quando qualquer monitor cair ou se recuperar, o UpStat manda uma mensagem direto pra você — sem app extra. Disponível no plano Pro.",
    q3: "O que é um Synthetic Monitor?",
    a3: "É um monitor que simula ações reais de um usuário — sequências de requisições HTTP encadeadas, como login ou checkout completo. Detecta quando uma funcionalidade quebra, mesmo que o servidor continue de pé.",
    q4: "Como instalo e uso o SDK?",
    a4: 'Instale via npm: <code>npm install upstat-sdk</code>. Inicialize com sua API key (disponível no dashboard) e use os métodos para criar monitores, checar status e enviar heartbeats. Docs em <a href="https://upstat.online/docs" target="_blank">upstat.online/docs</a>.',
    q5: "Como meus usuários se inscrevem na status page?",
    a5: 'Na sua status page pública há um botão "Receber notificações". O usuário informa email ou WhatsApp e passa a receber alertas automáticos em cada incidente. Você vê a lista de inscritos no dashboard.',
    q6: "Posso usar a CLI no CI/CD?",
    a6: "Sim. Basta rodar <code>upstat monitors pause &lt;id&gt;</code> antes do deploy e <code>upstat monitors resume &lt;id&gt;</code> depois para evitar falsos positivos. Funciona em qualquer pipeline (GitHub Actions, GitLab CI, etc.).",
    q7: "Qual a diferença entre monitorar cron jobs e APIs?",
    a7: "Monitorar APIs é ativo: o UpStat faz requisições periódicas. Monitorar cron jobs é passivo (heartbeat): o seu job envia um ping pro UpStat após executar. Se o ping não chegar no intervalo esperado, o alerta dispara — ideal para backups, envio de emails e relatórios.",
    q8: "Preciso de cartão de crédito pra criar conta?",
    a8: "Não. Conta grátis sem nenhum dado de pagamento. Cartão só é necessário para fazer upgrade pro plano Pro.",
  },
  cta: {
    title1: "Pronto pra parar",
    title2: "de perder",
    title3: "downtime",
    sub: "Comece grátis agora. Sem cartão de crédito.",
    btn1: "Quero criar minha conta →",
    btn2: "💬 Quero alertas no WhatsApp",
  },
  footer: {
    copy: "© 2026 UpStat. Feito no Brasil 🇧🇷",
  },
};

export default pt;
