"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { WavyLine } from "./doodles"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    // Cargar el HTML del diagnóstico directamente
    const diagnosticHTML = `
    <div id="dm-root">
      <div class="dm-wrap">
        <div class="dm-eyebrow">BRIEFING DE DIAGNÓSTICO</div>
        <h1 class="dm-title">Cuéntame sobre ti.</h1>
        <div class="dm-wave">
          <svg width="110" height="14" viewBox="0 0 110 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9C9 2 16 2 23 9C30 16 37 16 44 9C51 2 58 2 65 9C72 16 79 16 86 9C93 2 98 2 104 7" stroke="#c9a7e8" stroke-width="2.4" stroke-linecap="round"/>
          </svg>
        </div>
        <p class="dm-sub">Completa este diagnóstico y te ayudaré a identificar los principales retos y oportunidades.</p>

        <div class="dm-layout" id="dm-layout">
          <div class="dm-mascot-wrap" id="dm-mascot-side-wrap"></div>

          <div class="dm-console">
            <div id="dm-screen-start">
              <div class="dm-tile-header"><h2>¿Quién eres?</h2></div>
              <div class="dm-tile-grid">
                <button class="dm-tile" onclick="dmSelectMain('persona')"><h3>Soy una persona</h3></button>
                <button class="dm-tile" onclick="dmSelectMain('empresa')"><h3>Somos una empresa</h3></button>
                <button class="dm-tile" onclick="dmSelectMain('comunidad')"><h3>Somos una comunidad</h3></button>
              </div>
            </div>

            <div id="dm-screen-subtype" class="dm-hidden">
              <div class="dm-tile-header"><h2 id="dm-subtype-title"></h2></div>
              <div class="dm-tile-grid" id="dm-subtype-grid"></div>
              <div class="dm-back-row"><button onclick="dmBackToStart()">← elegir otra</button></div>
            </div>

            <div id="dm-screen-quiz" class="dm-hidden">
              <div class="dm-progress" id="dm-progress"></div>
              <div class="dm-qnum" id="dm-qnum"></div>
              <div class="dm-question" id="dm-question"></div>
              <div class="dm-options" id="dm-options"></div>
            </div>

            <div id="dm-screen-result" class="dm-hidden dm-result">
              <div id="dm-result-head"></div>
              <div id="dm-result-body"></div>

              <div class="dm-lock" id="dm-lock">
                <div class="dm-lock-blur" id="dm-lock-blur"></div>
                <div class="dm-lock-overlay" id="dm-lock-overlay">
                  <div class="dm-cta-ticket-wrap"></div>
                  <h4 id="dm-lock-title">¿Desbloqueamos el resto?</h4>
                  <p id="dm-lock-desc">Te mando el informe completo a tu correo, con la opción de agendar una asesoría personalizada.</p>
                  <form class="dm-form" id="dm-form" onsubmit="return dmUnlock(event)">
                    <input type="text" id="dm-name" placeholder="Tu nombre" required />
                    <input type="email" id="dm-email" placeholder="tucorreo@ejemplo.com" required />
                    <button class="dm-btn" type="submit">Quiero recibir mi diagnóstico</button>
                  </form>
                  <div id="dm-form-msg"></div>
                </div>
              </div>

              <div id="dm-unlocked" class="dm-unlocked-section dm-hidden"></div>

              <div class="dm-cta dm-hidden" id="dm-cta">
                <p id="dm-cta-text">¿Lista para llevar esto a una estrategia completa?</p>
                <button class="dm-btn" onclick="dmCTA()">Quiero mi asesoría</button>
              </div>
            </div>
          </div>
        </div>

        <div class="dm-footer">Diseñado con cariño y un poco de vibecoding :3</div>
      </div>
    </div>
    `

    const container = document.querySelector('[data-dm-container]')
    if (container) {
      container.innerHTML = diagnosticHTML
      
      // Cargar el script del diagnóstico
      const script = document.createElement('script')
      script.innerHTML = initDiagnosticScript()
      document.body.appendChild(script)
    }

    return () => {
      const script = document.querySelector('script[data-diagnostic]')
      if (script) script.remove()
    }
  }, [])

  return (
    <section id="contact" className="relative py-24 md:py-32 paper-texture">
      <div className="mx-auto max-w-4xl px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Ponerse en <span className="font-serif italic text-primary">Contacto</span>
          </h2>
          <WavyLine className="mx-auto mt-3 text-primary/40" />
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Completa nuestro diagnóstico de marca y descubre tu arquetipo único.
          </p>
        </motion.div>

        <div data-dm-container />
      </div>
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
      stats:{Autoridad:50,Innovación:70,Cercanía:85,Carisma:90},
      tono:["Sé divertido","Usa humor inteligente","No moraliecs","Juega"],
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

  let dmState = { main: null, subtype: null, quiz: [], open: [], multi: [], name: "", email: "" };

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
    dmState = { main: null, subtype: null, quiz: [], open: [], multi: [], name: "", email: "" };
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

  window.dmCTA = function() {
    alert("¡Contactemos para tu asesoría personalizada!");
  };

  window.dmAdminPanel = function() {
    console.log("Estado:", dmState);
  };
})();
  `
}
