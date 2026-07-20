"use client"

import { useEffect, useRef } from "react"

export function DiagnosticSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      // Crear el HTML del diagnóstico
      containerRef.current.innerHTML = getDiagnosticHTML()
      
      // Cargar el script del diagnóstico después de que el HTML esté en el DOM
      const script = document.createElement("script")
      script.innerHTML = initDiagnosticScript()
      containerRef.current.appendChild(script)
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
      }
    }
  }, [])

  return (
    <section id="diagnostic" className="relative py-12 md:py-16">
      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        <div ref={containerRef} id="dm-root" />
      </div>

      <style>{getDiagnosticStyles()}</style>
    </section>
  )
}

function initDiagnosticScript() {
  return `
(function(){
  const KEYS = ['sabio','rebelde','mago','heroe','amante','bufon','creador','gobernante'];

  const ARCH = {
    sabio: { name:"El Sabio", icon:"🦉", tagline:"Busca la verdad y comparte lo que sabe",
      descripcion:"Buscas proyectar conocimiento, análisis y credibilidad. Te gustaría que te perciban como alguien que enseña, aporta contexto y genera confianza a través de lo que sabe.",
      recomendacionBase:"empezar a compartir contenido que enseñe algo concreto de tu área",
      stats:{Autoridad:85,Innovación:55,Cercanía:40,Carisma:60},
      tono:["Explica antes de vender","Usa datos y ejemplos concretos","Nunca des cosas por obvias","Enseña mientras vendes"],
      arquetipos:["Profesor","Investigador","Comentarista","Historiador"],
      colores:["#8B5CF6","#3B82F6"],
      emociones:["Confianza","Seguridad","Admiración"]
    },
    rebelde: { name:"El Rebelde", icon:"⚡", tagline:"Desafía lo establecido y rompe paradigmas",
      descripcion:"Quieres ser percibido como disruptor, innovador y alguien que se atreve a cuestionar lo establecido. Buscas generar conversación y cambio.",
      recomendacionBase:"compartir temas controversiales o desafiantes de tu industria",
      stats:{Autoridad:60,Innovación:90,Cercanía:50,Carisma:75},
      tono:["Sé provocador","Cuestiona lo obvio","Toma posiciones","Desafía creencias"],
      arquetipos:["Activista","Crítico","Innovador","Insurgente"],
      colores:["#EF4444","#DC2626"],
      emociones:["Provocación","Pasión","Energía"]
    },
    mago: { name:"El Mago", icon:"✨", tagline:"Transforma lo común en extraordinario",
      descripcion:"Buscas cautivar con historias fascinantes, insights sorprendentes y perspectivas únicas. Quieres que te vean como alguien que ve más allá.",
      recomendacionBase:"contar historias con giro sorprendente sobre temas de tu industria",
      stats:{Autoridad:70,Innovación:80,Cercanía:60,Carisma:85},
      tono:["Usa la narrativa","Revela insights ocultos","Sorprende","Hipnotiza"],
      arquetipos:["Narrador","Visionario","Showman","Pensador Lateral"],
      colores:["#A78BFA","#7C3AED"],
      emociones:["Asombro","Fascinación","Magia"]
    },
    heroe: { name:"El Héroe", icon:"🦸", tagline:"Inspira acción y superación",
      descripcion:"Quieres motivar a otros a lograr sus objetivos. Eres percibido como alguien valiente que enfrenta desafíos y sale victorioso.",
      recomendacionBase:"compartir casos de superación y cómo ayudan a otros a lograrlo",
      stats:{Autoridad:75,Innovación:65,Cercanía:80,Carisma:80},
      tono:["Inspira","Muestra el camino","Sé valiente","Celebra victorias"],
      arquetipos:["Mentor","Líder","Campeón","Emprendedor"],
      colores:["#F59E0B","#D97706"],
      emociones:["Inspiración","Valentía","Determinación"]
    },
    amante: { name:"El Amante", icon:"❤️", tagline:"Conecta desde la pasión y la empatía",
      descripcion:"Buscas generar conexión emocional profunda. Quieres ser percibido como alguien apasionado, empático y que realmente se importa.",
      recomendacionBase:"mostrar la pasión detrás de tu trabajo y tu vulnerabilidad",
      stats:{Autoridad:55,Innovación:50,Cercanía:95,Carisma:85},
      tono:["Sé vulnerable","Muestra emoción","Conecta el corazón","Celebra lo humano"],
      arquetipos:["Confidante","Empatista","Creador de Comunidad","Romántico"],
      colores:["#EC4899","#DB2777"],
      emociones:["Empatía","Conexión","Pasión"]
    },
    bufon: { name:"El Bufón", icon:"🎭", tagline:"Entretiene, divierte y enseña sin ser moralizante",
      descripcion:"Tu fuerza está en el humor y la levedad. Quieres que te vean como alguien divertido, accesible y que no se toma demasiado en serio.",
      recomendacionBase:"usar humor y ligereza para hablar de temas serios",
      stats:{Autoridad:50,Innovacion:70,Cercanía:85,Carisma:90},
      tono:["Sé divertido","Usa humor inteligente","No moralices","Juega"],
      arquetipos:["Comediante","Trickster","Satírico","Bromista Sabio"],
      colores:["#FBBF24","#F59E0B"],
      emociones:["Diversión","Ligereza","Alegría"]
    },
    creador: { name:"El Creador", icon:"🎨", tagline:"Expresa tu visión única y auténtica",
      descripcion:"Quieres ser visto como alguien original, talentoso y que crea cosas de valor. Buscas dejar un legado a través de tu trabajo.",
      recomendacionBase:"compartir tu proceso creativo y los challenges detrás",
      stats:{Autoridad:70,Innovación:85,Cercanía:65,Carisma:75},
      tono:["Sé auténtico","Muestra tu proceso","Crea sin filtros","Innova"],
      arquetipos:["Artista","Empresario","Innovador","Constructor"],
      colores:["#10B981","#059669"],
      emociones:["Creatividad","Autenticidad","Originalidad"]
    },
    gobernante: { name:"El Gobernante", icon:"👑", tagline:"Lidera, organiza y construye legados",
      descripcion:"Buscas ser percibido como líder, estratega y alguien que tiene el control. Quieres influir en decisiones importantes.",
      recomendacionBase:"compartir visión estratégica sobre tendencias de tu industria",
      stats:{Autoridad:90,Innovación:60,Cercanía:55,Carisma:70},
      tono:["Sé claro","Toma decisiones","Lidera","Construye"],
      arquetipos:["CEO","Estratega","Líder de Pensamiento","Futurólogo"],
      colores:["#06B6D4","#0891B2"],
      emociones:["Autoridad","Seguridad","Visión"]
    }
  };

  let dmState = { main: null, subtype: null, quiz: [], name: "", email: "" };

  const SUBTYPES = {
    persona: [
      { title: "Profesional", desc: "Expertos, freelancers, coaches, asesores", emoji: "💼" },
      { title: "Creador de Contenidos", desc: "Blogueros, influencers, educadores", emoji: "📱" },
      { title: "Emprendedor", desc: "Dueños de negocios, startups", emoji: "🚀" }
    ],
    empresa: [
      { title: "B2B/B2C", desc: "Empresas orientadas al cliente", emoji: "🏢" },
      { title: "Agencia", desc: "Servicios creativos o consultivos", emoji: "🎯" },
      { title: "Tech/SaaS", desc: "Productos digitales o software", emoji: "⚙️" }
    ],
    comunidad: [
      { title: "Comunidad de Conocimiento", desc: "Educativa, especializada", emoji: "📚" },
      { title: "Comunidad de Identidad", desc: "Fandoms, aficiones, estilos de vida", emoji: "🤝" },
      { title: "Comunidad de Acción", desc: "Movimientos, causas", emoji: "🌍" }
    ]
  };

  const QUIZ = [
    {
      q: "¿Qué palabra te describe mejor?",
      type: "choice",
      opts: ["Innovador/a","Cercano/a","Autoridad","Divertido/a"],
      keys: ["rebelde","amante","sabio","bufon"]
    },
    {
      q: "¿Cómo prefieres conectar con tu audiencia?",
      type: "choice",
      opts: ["Inspirando acción","Enseñando","Provocando reflexión","Divirtiendo"],
      keys: ["heroe","sabio","mago","bufon"]
    },
    {
      q: "¿Cuál es tu mayor fortaleza?",
      type: "choice",
      opts: ["Liderazgo","Creatividad","Empatía","Inteligencia"],
      keys: ["gobernante","creador","amante","sabio"]
    },
    {
      q: "En redes, te gustaría que digan de ti:",
      type: "multi",
      opts: ["Que es muy creíble","Que es muy auténtico","Que es muy innovador","Que es muy carismático"],
      keys: ["sabio","amante","rebelde","bufon"]
    }
  ];

  window.dmSelectMain = function(type) {
    dmState.main = type;
    document.getElementById("dm-screen-start").classList.add("dm-hidden");
    showSubtypeScreen();
  };

  function showSubtypeScreen() {
    const subs = SUBTYPES[dmState.main];
    const grid = document.getElementById("dm-subtype-grid");
    const title = document.getElementById("dm-subtype-title");
    
    title.textContent = dmState.main === "persona" ? "¿Cuál es tu rol?" : 
                       dmState.main === "empresa" ? "¿Qué tipo de empresa?" : 
                       "¿Qué tipo de comunidad?";
    
    grid.innerHTML = subs.map((s, i) => 
      '<button class="dm-tile" onclick="dmSelectSubtype(' + i + ')"><span class="em">' + s.emoji + '</span><div><h3>' + s.title + '</h3><p>' + s.desc + '</p></div></button>'
    ).join("");
    
    document.getElementById("dm-screen-subtype").classList.remove("dm-hidden");
  }

  window.dmSelectSubtype = function(idx) {
    dmState.subtype = idx;
    document.getElementById("dm-screen-subtype").classList.add("dm-hidden");
    showQuiz(0);
  };

  window.dmBackToStart = function() {
    dmState = { main: null, subtype: null, quiz: [], name: "", email: "" };
    document.getElementById("dm-screen-subtype").classList.add("dm-hidden");
    document.getElementById("dm-screen-start").classList.remove("dm-hidden");
  };

  function showQuiz(idx) {
    if (idx >= QUIZ.length) {
      showFinalForm();
      return;
    }
    
    const q = QUIZ[idx];
    const progress = document.getElementById("dm-progress");
    const qnum = document.getElementById("dm-qnum");
    
    let progressHtml = "";
    for (let i = 0; i < QUIZ.length; i++) {
      progressHtml += '<div class="dm-dot ' + (i <= idx ? 'on' : '') + '"></div>';
    }
    progress.innerHTML = progressHtml;
    qnum.textContent = "PREGUNTA " + (idx + 1) + " DE " + QUIZ.length;
    
    document.getElementById("dm-question").textContent = q.q;
    const opts = document.getElementById("dm-options");
    opts.innerHTML = q.opts.map((opt, i) => 
      '<button class="dm-opt" onclick="dmSelectOption(' + i + ', ' + idx + ')">' + opt + '</button>'
    ).join("");
    
    document.getElementById("dm-screen-quiz").classList.remove("dm-hidden");
  }

  window.dmSelectOption = function(optIdx, qIdx) {
    dmState.quiz[qIdx] = optIdx;
    document.getElementById("dm-screen-quiz").classList.add("dm-hidden");
    showQuiz(qIdx + 1);
  };

  function showFinalForm() {
    const layout = document.getElementById("dm-layout");
    layout.classList.add("dm-result-active");
    document.getElementById("dm-screen-quiz").classList.add("dm-hidden");
    document.getElementById("dm-screen-result").classList.remove("dm-hidden");
    showResult();
  }

  function showResult() {
    const archScores = {};
    KEYS.forEach(k => archScores[k] = 0);
    
    dmState.quiz.forEach((optIdx, qIdx) => {
      const key = QUIZ[qIdx].keys[optIdx];
      archScores[key] += 1;
    });
    
    const topArch = Object.keys(archScores).reduce((a, b) => 
      archScores[a] > archScores[b] ? a : b
    );
    
    const arch = ARCH[topArch];
    const head = document.getElementById("dm-result-head");
    
    head.innerHTML = '<div class="dm-card"><div class="dm-card-inner"><div class="dm-rarity">TU ARQUETIPO</div><div class="dm-icon"><span>' + arch.icon + '</span></div><h2 class="dm-name">' + arch.name + '</h2><p class="dm-tagline">' + arch.tagline + '</p></div></div>';
    
    const body = document.getElementById("dm-result-body");
    body.innerHTML = '<div class="dm-unlocked-section" style="display: block;"><div class="dm-block-title">SOBRE TI</div><p style="font-size:14px; line-height:1.6; color:#2d1b4e; margin-bottom:16px;">' + arch.descripcion + '</p><div class="dm-block-title">RECOMENDACIÓN INICIAL</div><p style="font-size:14px; line-height:1.6; color:#2d1b4e; margin-bottom:16px;">👉 ' + arch.recomendacionBase + '</p><div class="dm-block-title">TU TONO DE VOZ</div><ul class="dm-list">' + arch.tono.map(t => '<li>' + t + '</li>').join("") + '</ul><div class="dm-block-title">ARQUETIPOS SIMILARES</div><p style="font-size:13px; color:#6b5a85;">' + arch.arquetipos.join(", ") + '</p><div class="dm-block-title">PALETA SUGERIDA</div><div class="dm-palette">' + arch.colores.map(c => '<div class="dm-swatch" style="background:' + c + '"></div>').join("") + '</div></div>';
  }

  window.dmUnlock = function(e) {
    e.preventDefault();
    const name = document.getElementById("dm-name").value;
    const email = document.getElementById("dm-email").value;
    
    if (!name || !email) return;
    
    const msg = document.getElementById("dm-form-msg");
    msg.innerHTML = '<div class="dm-success">✓ Listo! Te enviaremos tu diagnóstico completo</div>';
    
    setTimeout(() => {
      document.getElementById("dm-name").value = "";
      document.getElementById("dm-email").value = "";
      msg.innerHTML = "";
    }, 2000);
  };
})();
  `
}

function getDiagnosticHTML() {
  return `
    <div class="dm-wrap">
      <div class="dm-eyebrow">DESCUBRE TU ARQUETIPO</div>
      <h1 class="dm-title">Diagnóstico de Marca</h1>
      <p class="dm-sub">Encuentra el arquetipo que mejor define tu marca o personal branding. Un viaje interactivo para descubrir cómo conectar auténticamente con tu audiencia.</p>

      <div class="dm-layout">
        <div class="dm-console">
          <!-- SCREEN: START -->
          <div id="dm-screen-start" class="dm-screen">
            <div class="dm-branches">
              <button class="dm-branch-card" onclick="dmSelectMain('persona')">
                <span class="em">👤</span>
                <div>
                  <h3>Soy Profesional</h3>
                  <p>Expertos, creadores, emprendedores o freelancers</p>
                </div>
              </button>
              <button class="dm-branch-card" onclick="dmSelectMain('empresa')">
                <span class="em">🏢</span>
                <div>
                  <h3>Soy una Empresa</h3>
                  <p>B2B, B2C, agencias o startups tech</p>
                </div>
              </button>
              <button class="dm-branch-card" onclick="dmSelectMain('comunidad')">
                <span class="em">🌐</span>
                <div>
                  <h3>Soy una Comunidad</h3>
                  <p>Espacios de conocimiento, identidad o acción</p>
                </div>
              </button>
            </div>
          </div>

          <!-- SCREEN: SUBTYPE -->
          <div id="dm-screen-subtype" class="dm-screen dm-hidden">
            <div class="dm-tile-header">
              <h2 id="dm-subtype-title">¿Cuál es tu rol?</h2>
            </div>
            <div id="dm-subtype-grid" class="dm-tile-grid"></div>
            <div class="dm-back-row">
              <button onclick="dmBackToStart()">← Volver</button>
            </div>
          </div>

          <!-- SCREEN: QUIZ -->
          <div id="dm-screen-quiz" class="dm-screen dm-hidden">
            <div id="dm-progress" class="dm-progress"></div>
            <div id="dm-qnum" class="dm-qnum"></div>
            <div id="dm-question" class="dm-question"></div>
            <div id="dm-options" class="dm-options"></div>
          </div>

          <!-- SCREEN: RESULT -->
          <div id="dm-screen-result" class="dm-screen dm-hidden">
            <div class="dm-result">
              <div id="dm-result-head"></div>
              <div id="dm-result-body"></div>
            </div>
            <div class="dm-form">
              <input type="text" id="dm-name" placeholder="Tu nombre" />
              <input type="email" id="dm-email" placeholder="Tu email" />
              <button class="dm-btn" onclick="dmUnlock(event)">Desbloquear Diagnóstico Completo</button>
              <div id="dm-form-msg"></div>
            </div>
            <div class="dm-back-row">
              <button onclick="dmBackToStart()">← Empezar de nuevo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

function getDiagnosticStyles() {
  return `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@600;700;800&family=Caveat:wght@600;700&display=swap');

    #dm-root {
      --dm-bg: #f8f3fc;
      --dm-ink: #2d1b4e;
      --dm-soft: #6b5a85;
      --dm-primary: #8639b0;
      --dm-primary-light: #a86fd6;
      --dm-card-bg: #ffffff;
      --dm-field-bg: #f2e8fb;
      --dm-field-border: #e6d6f5;
      --dm-selected-bg: #efe1fb;
      font-family: 'Inter', sans-serif;
      color: var(--dm-ink);
      background: transparent;
      min-height: 100%;
      display: flex;
      justify-content: center;
      padding: 24px 16px 40px;
      box-sizing: border-box;
    }

    #dm-root * { box-sizing: border-box; }

    .dm-wrap { width: 100%; max-width: 560px; margin: 0 auto; }

    .dm-eyebrow { 
      font-family: 'Inter', sans-serif; 
      font-weight: 700; 
      font-size: 12px; 
      letter-spacing: 2.5px; 
      color: var(--dm-primary); 
      text-align: center; 
      margin-bottom: 10px; 
      text-transform: uppercase;
    }

    .dm-title { 
      font-family: 'Poppins', sans-serif; 
      font-weight: 700; 
      font-size: 34px; 
      text-align: center; 
      margin: 0 0 10px; 
      line-height: 1.25; 
      color: var(--dm-ink);
    }

    .dm-wave { display: flex; justify-content: center; margin: 4px 0 14px; }

    .dm-sub { 
      text-align: center; 
      font-size: 15px; 
      color: var(--dm-soft); 
      margin: 0 0 28px; 
      line-height: 1.6;
    }

    .dm-layout { 
      display: flex; 
      align-items: center; 
      gap: clamp(16px, 3vw, 32px);
    }

    .dm-console {
      background: var(--dm-card-bg);
      border-radius: 24px; 
      padding: 36px 34px;
      box-shadow: 0 16px 40px -16px rgba(134, 57, 176, 0.28), 0 2px 10px rgba(134, 57, 176, 0.08);
      position: relative; 
      color: var(--dm-ink);
      min-height: 340px; 
      display: flex; 
      flex-direction: column;
      border: 1px solid #f1e6fa;
      flex: 1; 
      min-width: 0;
    }

    .dm-branches { 
      display: flex; 
      flex-direction: column; 
      gap: 12px; 
      margin: auto; 
      position: relative; 
      z-index: 1;
    }

    .dm-branch-card {
      text-align: left; 
      background: var(--dm-field-bg); 
      border: 1px solid var(--dm-field-border);
      border-radius: 14px; 
      padding: 16px 16px; 
      cursor: pointer; 
      transition: all .15s ease; 
      color: var(--dm-ink);
    }

    .dm-branch-card:hover { 
      background: var(--dm-selected-bg); 
      border-color: var(--dm-primary); 
      transform: translateX(3px);
    }

    .dm-branch-card .em { 
      font-size: 22px; 
      margin-bottom: 6px; 
      display: block;
    }

    .dm-branch-card h3 { 
      font-family: 'Poppins', sans-serif; 
      font-size: 15px; 
      margin: 0 0 4px;
    }

    .dm-branch-card p { 
      font-size: 12.5px; 
      color: var(--dm-soft); 
      margin: 0; 
      line-height: 1.4;
    }

    .dm-tile-grid { 
      display: flex; 
      flex-direction: column; 
      gap: 12px; 
      position: relative; 
      z-index: 1; 
      width: 100%;
    }

    .dm-tile {
      background: var(--dm-field-bg); 
      border: 1px solid var(--dm-field-border); 
      border-radius: 16px;
      padding: 18px 20px; 
      cursor: pointer; 
      transition: all .15s ease; 
      color: var(--dm-ink);
      text-align: left; 
      display: flex; 
      flex-direction: row; 
      align-items: center; 
      gap: 10px;
      width: 100%;
    }

    .dm-tile:hover { 
      background: var(--dm-selected-bg); 
      border-color: var(--dm-primary); 
      transform: translateY(-2px);
    }

    .dm-tile .em { 
      font-size: 30px; 
      line-height: 1;
    }

    .dm-tile h3 { 
      font-family: 'Poppins', sans-serif; 
      font-weight: 600; 
      font-size: 15px; 
      margin: 0; 
      line-height: 1.35; 
      color: var(--dm-ink);
    }

    .dm-tile-header { 
      text-align: center; 
      margin-bottom: 14px; 
      position: relative; 
      z-index: 1;
    }

    .dm-back-row { 
      text-align: center; 
      margin-top: 14px; 
      position: relative; 
      z-index: 1;
    }

    .dm-back-row button { 
      background: none; 
      border: none; 
      color: var(--dm-soft); 
      font-size: 12px; 
      cursor: pointer; 
      text-decoration: underline; 
      opacity: .8;
    }

    button.dm-btn {
      font-family: 'Inter', sans-serif; 
      font-weight: 700; 
      font-size: 14px;
      background: linear-gradient(135deg, var(--dm-primary), var(--dm-primary-light)); 
      color: white; 
      border: none;
      padding: 13px 26px; 
      border-radius: 13px; 
      cursor: pointer;
      box-shadow: 0 8px 18px -6px rgba(134, 57, 176, 0.5); 
      transition: transform .15s ease, box-shadow .15s ease;
    }

    button.dm-btn:hover { 
      transform: translateY(-2px); 
      box-shadow: 0 10px 22px -6px rgba(134, 57, 176, 0.6);
    }

    .dm-progress { 
      display: flex; 
      gap: 5px; 
      margin-bottom: 16px; 
      position: relative; 
      z-index: 1;
    }

    .dm-dot { 
      flex: 1; 
      height: 5px; 
      border-radius: 4px; 
      background: var(--dm-field-bg);
    }

    .dm-dot.on { background: var(--dm-primary); }

    .dm-qnum { 
      font-family: 'Inter', sans-serif; 
      font-weight: 700; 
      font-size: 10.5px; 
      color: var(--dm-primary); 
      letter-spacing: 1.5px; 
      margin-bottom: 8px; 
      position: relative; 
      z-index: 1; 
      text-transform: uppercase;
    }

    .dm-question { 
      font-family: 'Poppins', sans-serif; 
      font-weight: 600; 
      font-size: 16.5px; 
      line-height: 1.4; 
      margin: 0 0 16px; 
      position: relative; 
      z-index: 1; 
      color: var(--dm-ink);
    }

    .dm-options { 
      display: flex; 
      flex-wrap: wrap; 
      gap: 8px; 
      position: relative; 
      z-index: 1;
    }

    .dm-opt {
      background: var(--dm-field-bg); 
      border: 1px solid var(--dm-field-border); 
      color: var(--dm-ink);
      padding: 10px 15px; 
      border-radius: 11px; 
      font-size: 13px; 
      text-align: left; 
      cursor: pointer;
      transition: all .15s ease; 
      line-height: 1.35; 
      flex: 1 1 auto;
    }

    .dm-opt:hover { 
      background: var(--dm-selected-bg); 
      border-color: var(--dm-primary); 
      transform: translateX(2px);
    }

    .dm-result { position: relative; z-index: 1; }

    .dm-card { 
      border-radius: 16px; 
      padding: 1px; 
      background: linear-gradient(120deg, var(--dm-field-border), var(--dm-primary-light)); 
      margin-bottom: 14px;
    }

    .dm-card-inner { 
      background: var(--dm-card-bg); 
      border-radius: 15px; 
      padding: 22px 20px; 
      text-align: center;
    }

    .dm-rarity { 
      font-family: 'Inter', sans-serif; 
      font-weight: 700; 
      font-size: 10.5px; 
      letter-spacing: 2px; 
      color: var(--dm-primary); 
      text-transform: uppercase;
    }

    .dm-icon { 
      margin: 6px 0 4px; 
      color: var(--dm-primary); 
      display: flex; 
      justify-content: center; 
      font-size: 52px;
    }

    .dm-name { 
      font-family: 'Caveat', cursive; 
      font-weight: 700; 
      font-size: 32px; 
      margin: 0 0 2px; 
      color: var(--dm-primary); 
      line-height: 1.1;
    }

    .dm-tagline { 
      font-size: 13px; 
      color: var(--dm-soft); 
      margin: 0; 
      line-height: 1.5;
    }

    .dm-unlocked-section { 
      margin-top: 16px; 
      text-align: left;
    }

    .dm-block-title { 
      font-family: 'Inter', sans-serif; 
      font-weight: 700; 
      font-size: 10.5px; 
      letter-spacing: 1.5px; 
      color: var(--dm-primary); 
      margin: 18px 0 8px; 
      text-transform: uppercase;
    }

    .dm-block-title:first-child { margin-top: 0; }

    .dm-list { 
      margin: 0; 
      padding-left: 18px; 
      font-size: 13px; 
      line-height: 1.6; 
      color: var(--dm-ink);
    }

    .dm-list li::marker { color: var(--dm-primary); }

    .dm-palette { 
      display: flex; 
      gap: 8px; 
      margin-top: 4px;
    }

    .dm-swatch { 
      width: 34px; 
      height: 34px; 
      border-radius: 8px; 
      border: 1px solid var(--dm-field-border);
    }

    .dm-form { 
      display: flex; 
      flex-direction: column; 
      gap: 9px; 
      margin-top: 6px; 
      width: 100%; 
      max-width: 320px;
    }

    .dm-form input {
      padding: 11px 13px; 
      border-radius: 10px; 
      border: 1px solid var(--dm-field-border);
      background: var(--dm-field-bg); 
      color: var(--dm-ink); 
      font-size: 13px; 
      font-family: 'Inter', sans-serif;
    }

    .dm-form input::placeholder { color: #a894c4; }

    .dm-form input:focus { 
      outline: 2px solid var(--dm-primary-light); 
      outline-offset: 1px;
    }

    .dm-hidden { display: none !important; }

    .dm-success { 
      color: #3a9a6b; 
      font-size: 12px; 
      margin-top: 6px;
    }

    .dm-result-active .dm-mascot-wrap { display: none; }

    .dm-result-active .dm-console { 
      flex: 1 1 100%; 
      max-width: 100%;
    }
  `
}
