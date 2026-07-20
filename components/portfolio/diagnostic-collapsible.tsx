'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function DiagnosticCollapsible() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 bg-primary/10 hover:bg-primary/15 rounded-xl border border-primary/20 transition-colors"
      >
        <span className="text-lg font-semibold text-primary">Descubre tu Arquetipo de Marca</span>
        <ChevronDown
          className={`h-5 w-5 text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="mt-4 bg-white rounded-xl border border-primary/20 overflow-hidden shadow-lg">
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <style>
                  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@600;700;800&family=Caveat:wght@600;700&display=swap');

                  #dm-root {
                    --bg: #f8f3fc;
                    --ink: #2d1b4e;
                    --soft: #6b5a85;
                    --primary: #8639b0;
                    --primary-light: #a86fd6;
                    --card-bg: #ffffff;
                    --field-bg: #f2e8fb;
                    --field-border: #e6d6f5;
                    --selected-bg: #efe1fb;
                    font-family: 'Inter', sans-serif;
                    color: var(--ink);
                    background: transparent;
                    min-height: 100%;
                    display: flex;
                    justify-content: center;
                    padding: 24px 16px 40px;
                    box-sizing: border-box;
                  }
                  #dm-root * { box-sizing: border-box; }
                  .dm-wrap { width: 100%; max-width: 560px; margin: 0 auto; }

                  .dm-eyebrow { font-family:'Inter',sans-serif; font-weight:700; font-size:12px; letter-spacing:2.5px; color:var(--primary); text-align:center; margin-bottom:10px; text-transform:uppercase; }
                  .dm-title { font-family:'Poppins',sans-serif; font-weight:700; font-size:34px; text-align:center; margin:0 0 10px; line-height:1.25; color:var(--ink); }
                  .dm-wave { display:flex; justify-content:center; margin:4px 0 14px; }
                  .dm-sub { text-align:center; font-size:15px; color:var(--soft); margin:0 0 28px; line-height:1.6; }

                  .dm-layout { display:flex; align-items:center; gap:clamp(16px,3vw,32px); }
                  .dm-mascot-wrap { flex: 0 0 clamp(190px,28%,310px); display:flex; justify-content:center; align-self:stretch; align-items:center; position:relative; z-index:1; }
                  .dm-mascot-wrap img { width:100%; max-width:310px; height:auto; filter: drop-shadow(0 8px 14px rgba(134,57,176,0.2)); }
                  @media (max-width:700px){
                    .dm-layout { flex-direction:column; align-items:center; }
                    .dm-mascot-wrap { flex:0 0 auto; width:180px; align-self:center; margin-bottom:-10px; }
                  }
                  .dm-layout.dm-result-active .dm-mascot-wrap { display:none; }
                  .dm-layout.dm-result-active .dm-console { flex: 1 1 100%; max-width: 100%; }

                  .dm-console {
                    background: var(--card-bg);
                    border-radius: 24px; padding: 36px 34px;
                    box-shadow: 0 16px 40px -16px rgba(134,57,176,0.28), 0 2px 10px rgba(134,57,176,0.08);
                    position: relative; color: var(--ink);
                    min-height: 340px; display:flex; flex-direction:column;
                    border: 1px solid #f1e6fa;
                    flex: 1; min-width: 0;
                  }

                  .dm-branches { display:flex; flex-direction:column; gap:12px; margin:auto; position:relative; z-index:1; }
                  .dm-branch-card {
                    text-align:left; background: var(--field-bg); border:1px solid var(--field-border);
                    border-radius:14px; padding:16px 16px; cursor:pointer; transition: all .15s ease; color:var(--ink);
                  }
                  .dm-branch-card:hover { background: var(--selected-bg); border-color: var(--primary); transform: translateX(3px); }
                  .dm-branch-card .em { font-size:22px; margin-bottom:6px; display:block; }
                  .dm-branch-card h3 { font-family:'Poppins',sans-serif; font-size:15px; margin:0 0 4px; }
                  .dm-branch-card p { font-size:12.5px; color:var(--soft); margin:0; line-height:1.4; }

                  .dm-tile-grid { display:flex; flex-direction:column; gap:12px; position:relative; z-index:1; width:100%; }
                  .dm-tile {
                    background: var(--field-bg); border:1px solid var(--field-border); border-radius:16px;
                    padding:18px 20px; cursor:pointer; transition: all .15s ease; color:var(--ink);
                    text-align:left; display:flex; flex-direction:row; align-items:center; gap:10px;
                    width:100%;
                  }
                  .dm-tile:hover { background: var(--selected-bg); border-color: var(--primary); transform: translateY(-2px); }
                  .dm-tile .em { font-size:30px; line-height:1; }
                  .dm-tile h3 { font-family:'Poppins',sans-serif; font-weight:600; font-size:15px; margin:0; line-height:1.35; color:var(--ink); }
                  .dm-tile-header { text-align:center; margin-bottom:14px; position:relative; z-index:1; }
                  .dm-tile-header h2 { font-family:'Poppins',sans-serif; font-weight:600; font-size:15px; margin:6px 0 0; color:var(--ink); }
                  .dm-back-row { text-align:center; margin-top:14px; position:relative; z-index:1; }
                  .dm-back-row button { background:none; border:none; color:var(--soft); font-size:12px; cursor:pointer; text-decoration:underline; opacity:.8; }

                  button.dm-btn {
                    font-family:'Inter',sans-serif; font-weight:700; font-size:14px;
                    background: linear-gradient(135deg, var(--primary), var(--primary-light)); color:white; border:none;
                    padding:13px 26px; border-radius:13px; cursor:pointer;
                    box-shadow:0 8px 18px -6px rgba(134,57,176,0.5); transition: transform .15s ease, box-shadow .15s ease;
                  }
                  button.dm-btn:hover { transform:translateY(-2px); box-shadow:0 10px 22px -6px rgba(134,57,176,0.6); }
                  button.dm-btn:disabled { opacity:.4; cursor:not-allowed; transform:none; }
                  button.dm-btn.dm-ghost { background:transparent; color:var(--primary); border:1px solid var(--field-border); box-shadow:none; }

                  .dm-progress { display:flex; gap:5px; margin-bottom:16px; position:relative; z-index:1; }
                  .dm-dot { flex:1; height:5px; border-radius:4px; background: var(--field-bg); }
                  .dm-dot.on { background: var(--primary); }
                  .dm-qnum { font-family:'Inter',sans-serif; font-weight:700; font-size:10.5px; color:var(--primary); letter-spacing:1.5px; margin-bottom:8px; position:relative; z-index:1; text-transform:uppercase; }
                  .dm-question { font-family:'Poppins',sans-serif; font-weight:600; font-size:16.5px; line-height:1.4; margin:0 0 16px; position:relative; z-index:1; color:var(--ink); }
                  .dm-hint { font-size:12px; color:var(--soft); margin:-10px 0 14px; position:relative; z-index:1; font-style:italic; }

                  .dm-options { display:flex; flex-wrap:wrap; gap:8px; position:relative; z-index:1; }
                  .dm-opt {
                    background: var(--field-bg); border:1px solid var(--field-border); color:var(--ink);
                    padding:10px 15px; border-radius:11px; font-size:13px; text-align:left; cursor:pointer;
                    transition: all .15s ease; line-height:1.35; flex: 1 1 auto;
                  }
                  .dm-opt:hover { background: var(--selected-bg); border-color:var(--primary); transform: translateX(2px); }
                  .dm-opt.dm-selected { background: var(--selected-bg); border-color: var(--primary); }

                  .dm-open-wrap { position:relative; z-index:1; display:flex; flex-direction:column; gap:14px; flex:1; }
                  .dm-open-wrap textarea, .dm-open-wrap input[type=text] {
                    width:100%; min-height:70px; padding:12px 14px; border-radius:11px; border:1px solid var(--field-border);
                    background: var(--field-bg); color:var(--ink); font-family:'Inter',sans-serif; font-size:13.5px; resize:vertical;
                  }
                  .dm-open-wrap input[type=text] { min-height:auto; }
                  .dm-open-wrap ::placeholder { color:#a894c4; }
                  .dm-open-wrap textarea:focus, .dm-open-wrap input[type=text]:focus { outline:2px solid var(--primary-light); outline-offset:1px; }

                  .dm-result { position:relative; z-index:1; }
                  .dm-card { border-radius:16px; padding:1px; background: linear-gradient(120deg, var(--field-border), var(--primary-light)); margin-bottom:14px; }
                  .dm-card-inner { background: var(--card-bg); border-radius:15px; padding:22px 20px; text-align:center; }
                  .dm-rarity { font-family:'Inter',sans-serif; font-weight:700; font-size:10.5px; letter-spacing:2px; color:var(--primary); text-transform:uppercase; }
                  .dm-icon { margin:6px 0 4px; color: var(--primary); display:flex; justify-content:center; }
                  .dm-name { font-family:'Caveat',cursive; font-weight:700; font-size:32px; margin:0 0 2px; color:var(--primary); line-height:1.1; }
                  .dm-tagline { font-size:13px; color:var(--soft); margin:0; line-height:1.5; }

                  .dm-stats { display:grid; gap:10px; margin:16px 0; }
                  .dm-stat-row { display:flex; align-items:center; gap:10px; }
                  .dm-stat-label { font-size:11.5px; width:84px; flex-shrink:0; color:var(--soft); }
                  .dm-stat-bar { flex:1; height:8px; border-radius:6px; background: var(--field-bg); overflow:hidden; }
                  .dm-stat-fill { height:100%; border-radius:6px; background: linear-gradient(90deg, var(--primary-light), var(--primary)); width:0%; transition: width 1s ease; }
                  .dm-stat-val { font-family:'Inter',sans-serif; font-weight:700; font-size:10.5px; width:28px; text-align:right; color:var(--primary); }

                  .dm-teaser-list { display:flex; flex-direction:column; gap:10px; margin: 4px 0 18px; }
                  .dm-teaser-item { background: var(--field-bg); border:1px solid var(--field-border); border-radius:12px; padding:12px 14px; }
                  .dm-teaser-item h4 { font-family:'Poppins',sans-serif; font-weight:600; font-size:13px; margin:0 0 4px; color: var(--primary); }
                  .dm-teaser-item p { font-size:12.5px; color:var(--soft); margin:0; line-height:1.5; }

                  .dm-lock { position:relative; border-radius:16px; background: var(--field-bg); border:1px dashed var(--field-border); padding:20px 18px; margin-top:6px; }
                  .dm-lock-blur { filter: blur(5px); opacity:.55; user-select:none; pointer-events:none; }
                  .dm-lock-overlay { position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; padding:16px; text-align:center; }
                  .dm-lock-overlay .em { font-size:22px; }
                  .dm-lock-overlay h4 { font-family:'Poppins',sans-serif; font-weight:600; font-size:15px; margin:0; color:var(--ink); }
                  .dm-lock-overlay p { font-size:12.5px; color:var(--soft); margin:0; max-width:300px; line-height:1.5; }

                  .dm-form { display:flex; flex-direction:column; gap:9px; margin-top:6px; width:100%; max-width:320px; }
                  .dm-form input {
                    padding:11px 13px; border-radius:10px; border:1px solid var(--field-border);
                    background: var(--field-bg); color:var(--ink); font-size:13px; font-family:'Inter',sans-serif;
                  }
                  .dm-form input::placeholder { color:#a894c4; }
                  .dm-form input:focus { outline:2px solid var(--primary-light); outline-offset:1px; }

                  .dm-unlocked-section { margin-top:16px; text-align:left; }
                  .dm-block-title { font-family:'Inter',sans-serif; font-weight:700; font-size:10.5px; letter-spacing:1.5px; color:var(--primary); margin:18px 0 8px; text-transform:uppercase; }
                  .dm-block-title:first-child { margin-top:0; }
                  .dm-list { margin:0; padding-left:18px; font-size:13px; line-height:1.6; color:var(--ink); }
                  .dm-list li::marker { color: var(--primary); }
                  .dm-copy-ex { font-size:13px; font-style:italic; color:var(--soft); margin:4px 0; line-height:1.5; }
                  .dm-palette { display:flex; gap:8px; margin-top:4px; }
                  .dm-swatch { width:34px; height:34px; border-radius:8px; border:1px solid var(--field-border); }

                  .dm-cta { margin-top:20px; text-align:center; padding-top:16px; border-top:1px solid var(--field-border); }
                  .dm-cta p { font-size:13px; color:var(--soft); margin:0 0 12px; }

                  .dm-footer { text-align:center; font-size:12px; color:var(--soft); margin-top:20px; }
                  .dm-admin-link { text-align:center; margin-top:6px; }
                  .dm-admin-link button { background:none; border:none; color:var(--soft); font-size:10.5px; cursor:pointer; text-decoration:underline; opacity:.5; }
                  .dm-hidden { display:none !important; }
                  .dm-error { color:#c0398a; font-size:12px; margin-top:6px; }
                  .dm-success { color:#3a9a6b; font-size:12px; margin-top:6px; }

                  .dm-nav { display:flex; justify-content:flex-end; gap:8px; margin-top:14px; position:relative; z-index:1; }
                  .dm-check { display:flex; align-items:center; gap:8px; background: var(--field-bg); border:1px solid var(--field-border); border-radius:11px; padding:10px 14px; cursor:pointer; font-size:13px; color:var(--ink); flex: 1 1 auto; }
                  .dm-check:hover { border-color: var(--primary); }
                  .dm-check.dm-selected { background: var(--selected-bg); border-color: var(--primary); }
                  .dm-check input { accent-color: var(--primary); width:16px; height:16px; }
                </style>

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

                  <div class="dm-admin-link"><button onclick="dmAdminPanel()">·</button></div>
                </div>
                </div>

                <script>
                (function(){
                  const KEYS = ['sabio','rebelde','mago','heroe','amante','bufon','creador','gobernante'];

                  const ARCH = {
                    sabio: { name:"El Sabio", icon:"🦉", tagline:"Busca la verdad y comparte lo que sabe",
                      descripcion:"Buscas proyectar conocimiento, análisis y credibilidad. Te gustaría que te perciban como alguien que enseña, aporta contexto y genera confianza a través de lo que sabe.",
                      recomendacionBase:"empezar a compartir contenido que enseñe algo concreto de tu área",
                      stats:{Autoridad:85,Innovación:55,Cercanía:40,Carisma:60},
                      tono:["Explica antes de vender","Usa datos y ejemplos concretos","Nunca grita, argumenta"],
                      ejemplos:["Esto es lo que dice la data, no lo que queremos creer.","Antes de decidir, entendamos por qué funciona."],
                      paleta:["#3B5169","#8FA6B8","#EDE7DD"],
                      pilares:["Contenido educativo","Casos con evidencia","Desmontar mitos del sector"],
                      evitar:["Sonar arrogante o de cátedra","Prometer resultados sin respaldo"] },
                    rebelde: { name:"El Rebelde", icon:"🔥", tagline:"Cuestiona la regla antes de seguirla",
                      descripcion:"Buscas desafiar lo establecido, sin miedo a incomodar. Te gustaría que te perciban como alguien directo, que cuestiona las reglas y dice lo que otros prefieren callar.",
                      recomendacionBase:"compartir una opinión clara que contraste con lo que todos dicen",
                      stats:{Autoridad:35,Innovación:80,Cercanía:55,Carisma:75},
                      tono:["Cuestiona lo establecido","Directo, sin rodeos","No pide permiso para opinar"],
                      ejemplos:["Todos hacen X. Nosotros no.","La regla no era sagrada, solo cómoda."],
                      paleta:["#1A1A1A","#D93636","#F4F4F4"],
                      pilares:["Contenido de opinión","Comparativas contra el status quo","Detrás de cámaras sin filtro"],
                      evitar:["Rebeldía sin argumento (queda en pose)","Atacar por atacar"] }
                  };

                  let dmState = { main: null, subtype: null, quiz: [], name: "", email: "" };

                  window.dmSelectMain = function(type) {
                    dmState.main = type;
                    document.getElementById("dm-screen-start").classList.add("dm-hidden");
                    showSubtypeScreen();
                  };

                  function showSubtypeScreen() {
                    const subs = [{title:"Profesional",emoji:"💼"},{title:"Creador",emoji:"📸"}];
                    const grid = document.getElementById("dm-subtype-grid");
                    const title = document.getElementById("dm-subtype-title");
                    title.textContent = "¿Cuál es tu rol?";
                    grid.innerHTML = subs.map((s, i) => '<button class="dm-tile" onclick="dmSelectSubtype(' + i + ')"><span class="em">' + s.emoji + '</span><div><h3>' + s.title + '</h3></div></button>').join("");
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
                    if (idx >= 4) {
                      showFinalForm();
                      return;
                    }
                    const questions = [
                      "¿Qué palabra te describe mejor?",
                      "¿Cómo prefieres conectar?",
                      "¿Cuál es tu fortaleza?",
                      "¿Qué emoción transmites?"
                    ];
                    const opts = [
                      ["Innovador/a","Cercano/a","Autoridad","Divertido/a"],
                      ["Inspirando","Enseñando","Provocando","Divirtiendo"],
                      ["Liderazgo","Creatividad","Empatía","Inteligencia"],
                      ["Creíble","Auténtico","Innovador","Carismático"]
                    ];
                    
                    let progressHtml = "";
                    for (let i = 0; i < 4; i++) {
                      progressHtml += '<div class="dm-dot ' + (i <= idx ? 'on' : '') + '"></div>';
                    }
                    document.getElementById("dm-progress").innerHTML = progressHtml;
                    document.getElementById("dm-qnum").textContent = "PREGUNTA " + (idx + 1) + " DE 4";
                    document.getElementById("dm-question").textContent = questions[idx];
                    const optsDiv = document.getElementById("dm-options");
                    optsDiv.innerHTML = opts[idx].map((opt, i) => '<button class="dm-opt" onclick="dmSelectOption(' + i + ', ' + idx + ')">' + opt + '</button>').join("");
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
                    const arch = ARCH.sabio;
                    const head = document.getElementById("dm-result-head");
                    head.innerHTML = '<div class="dm-card"><div class="dm-card-inner"><div class="dm-rarity">TU ARQUETIPO</div><div class="dm-icon">' + arch.icon + '</div><h2 class="dm-name">' + arch.name + '</h2><p class="dm-tagline">' + arch.tagline + '</p></div></div>';
                    
                    const body = document.getElementById("dm-result-body");
                    body.innerHTML = '<div class="dm-unlocked-section" style="display: block;"><div class="dm-block-title">SOBRE TI</div><p style="font-size:14px; line-height:1.6; color:#2d1b4e; margin-bottom:16px;">' + arch.descripcion + '</p><div class="dm-block-title">PALETA SUGERIDA</div><div class="dm-palette">' + arch.paleta.map(c => '<div class="dm-swatch" style="background:' + c + '"></div>').join("") + '</div></div>';
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
                </script>
              `,
            }}
          />
        </div>
      )}
    </div>
  )
}
