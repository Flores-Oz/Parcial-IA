const topics = {
  history: { name: "Historia y actualidad", icon: "◷", source: "1 · Historia y actualidad" },
  human: { name: "IA e inteligencia humana", icon: "◎", source: "3.1 · Enfoques de la IA" },
  rational: { name: "Racionalidad", icon: "◇", source: "3.2 · Enfoques de la IA" },
  agents: { name: "Agentes y vehículos", icon: "⌁", source: "4.1 · REAS, entorno y percepción" },
  api: { name: "API de OpenAI", icon: "{ }", source: "4.2 · API OpenAI" },
  dialogflow: { name: "Dialogflow", icon: "◌", source: "5.2 · Dialogflow" }
};

const q = (topic, difficulty, text, options, answer, explanation, hint) => ({ topic, difficulty, text, options, answer, explanation, hint });
const questions = [
  q("history",1,"¿Qué problema contribuyó al primer invierno de la IA?",["El exceso de datos de entrenamiento","El crecimiento exponencial del espacio de búsqueda frente al hardware limitado","La aparición de las GPU","La prohibición mundial de LISP"],1,"El poder computacional limitado no podía afrontar espacios de búsqueda que crecían exponencialmente; además, hubo problemas de información y recortes de fondos.","Piensa en la relación entre la complejidad del problema y el hardware de 1952–1960."),
  q("history",1,"¿Qué sistema experto ayudaba a diagnosticar y tratar infecciones bacterianas graves?",["DENDRAL","XCON","MYCIN","ALPAC"],2,"MYCIN utilizaba un motor de inferencia con 456 reglas IF–THEN para apoyar diagnósticos y tratamientos.","No era el sistema dedicado a química ni a configurar equipos VAX."),
  q("history",1,"DENDRAL se utilizó principalmente para…",["traducir documentos automáticamente","inferir estructuras moleculares a partir de espectrometría de masas","configurar sistemas VAX","reconocer dígitos postales"],1,"DENDRAL incorporaba conocimiento experto de química para inferir estructuras de compuestos orgánicos.","Su dominio era la química orgánica."),
  q("history",2,"¿Cuál fue un problema central de los sistemas expertos de los años 70 y 80?",["No podían almacenar reglas","Sus reglas deterministas manejaban mal la incertidumbre y se volvieron difíciles de mantener","Solo funcionaban en máquinas domésticas","Dependían de redes convolucionales"],1,"Las reglas crecían en complejidad y los esquemas deterministas no representaban bien la incertidumbre.","Considera qué ocurre cuando miles de reglas IF–THEN interactúan."),
  q("history",1,"¿Qué limitación del perceptrón quedó destacada en 1969?",["No podía ejecutar AND","No podía resolver XOR por ser un modelo lineal","No admitía entradas numéricas","No podía clasificarse información"],1,"XOR no es linealmente separable, por lo que un perceptrón lineal de una capa no puede resolverlo.","La clave es la separabilidad lineal."),
  q("history",2,"¿Qué avance se asocia con 1986 en la historia de redes neuronales?",["La creación de LISP","La popularización de la retropropagación para redes multicapa","El lanzamiento de AlphaGo","El surgimiento de AlexNet"],1,"Rumelhart, Hinton y Williams popularizaron la retropropagación para entrenar redes multicapa.","Es el algoritmo que propaga el error desde la salida."),
  q("history",1,"AlexNet marcó un gran avance en 2012 principalmente en…",["traducción automática","visión y reconocimiento de objetos","sistemas expertos médicos","planificación GPS"],1,"La CNN profunda AlexNet transformó el reconocimiento de objetos y la visión computarizada.","Era una red convolucional profunda."),
  q("history",2,"¿Qué combinación describe correctamente AlphaGo?",["Reglas IF–THEN y diagnóstico médico","Aprendizaje por refuerzo profundo y victoria sobre Lee Sedol","Clasificación lineal y traducción","Lógica proposicional y configuración de VAX"],1,"AlphaGo empleó aprendizaje por refuerzo profundo y derrotó al campeón Lee Sedol en Go en 2016.","Relaciona el año 2016 con el juego Go."),
  q("history",1,"Según el material, Seeing AI busca…",["detectar fraude fiscal","asistir a personas ciegas o con baja visión narrando su entorno","controlar robots industriales","crear mapas de pobreza"],1,"Seeing AI usa la cámara del teléfono e IA para describir objetos y personas y leer textos en voz alta.","Es una tecnología de accesibilidad visual."),
  q("history",2,"Un patrón casi imperceptible hace que un sistema de visión clasifique mal una señal. ¿Qué riesgo ilustra?",["Consumo energético","Ataque o ejemplo adversarial de seguridad","Falta de tokens","Error de fulfillment"],1,"Los patrones adversariales pueden engañar el “ojo” artificial aunque parezcan insignificantes para una persona.","El material menciona gafas que confunden el reconocimiento facial."),

  q("human",1,"¿Cuáles son los cuatro enfoques generales de la IA presentados?",["Datos, reglas, sensores y acciones","Pensar/actuar como humanos y pensar/actuar racionalmente","Supervisado, no supervisado, refuerzo y profundo","Percepción, memoria, lenguaje y control"],1,"Los enfoques cruzan dos ejes: pensamiento frente a conducta, y semejanza humana frente a racionalidad.","Son dos pares construidos con los verbos pensar y actuar."),
  q("human",1,"¿Qué diferencia fundamental señala el material entre IA e inteligencia humana?",["La IA posee emociones más simples","La inteligencia humana surge de procesos biológicos; la IA usa algoritmos, estadística y datos","Ambas poseen conciencia","La inteligencia humana solo reconoce patrones"],1,"La inteligencia humana involucra biología, conciencia, emociones e intuición; la IA aprende patrones sin conciencia ni emociones genuinas.","Contrasta procesos biológicos con modelos matemáticos."),
  q("human",2,"¿Qué afirmación describe mejor a la mayoría de sistemas de IA actuales?",["Son inteligencias generales conscientes","Son sistemas estrechos diseñados para tareas concretas","Aprenden siempre con un solo ejemplo","Generalizan sin dificultad a cualquier contexto"],1,"La mayoría corresponde a narrow AI: traduce, reconoce imágenes o juega, pero no posee la polivalencia humana.","Recuerda el término narrow AI."),
  q("human",1,"Una sinapsis es…",["una unidad para medir cómputo","una aproximación funcional entre neuronas donde se transmite el impulso nervioso","un algoritmo de aprendizaje","el núcleo de una GPU"],1,"La sinapsis es el contacto funcional especializado mediante el cual se transmite el impulso nervioso.","Conecta funcionalmente neuronas."),
  q("human",1,"¿Qué mide FLOPS?",["La cantidad de neuronas","Las operaciones de punto flotante por segundo","El número de reglas lógicas","La energía anual en vatios"],1,"FLOPS es una medida de rendimiento computacional basada en operaciones de coma flotante por segundo.","La S final significa «por segundo»."),
  q("human",2,"Según la aproximación de una sinapsis por FLOP, ¿qué orden de cómputo requeriría el cerebro humano?",["10³ FLOPS","10⁹ FLOPS","10¹⁵ FLOPS, aproximadamente un petaflop","10²⁵ FLOPS"],2,"El material aproxima el cerebro a 10¹⁵ FLOPS, es decir, un petaflop.","Relaciona peta con 10 elevado a 15."),
  q("human",2,"¿Por qué un modelo artificial no equivale automáticamente a un cerebro biológico?",["Porque todo modelo es más grande","Porque simular funciones no reproduce necesariamente conciencia, subjetividad ni procesos biológicos","Porque carece de electricidad","Porque solo puede usar lógica proposicional"],1,"La imitación funcional no implica reproducir la biología ni que emerjan conciencia, emociones o experiencia subjetiva.","Distingue comportamiento observable de experiencia interna."),
  q("human",2,"¿Qué estudian los sistemas que intentan «pensar como humanos»?",["Solo la apariencia externa","Procesos como razonamiento, memoria, aprendizaje y atención basados en psicología o neurociencia","Únicamente maximización de utilidad","Exclusivamente velocidad de cómputo"],1,"Este enfoque modela explícitamente procesos cognitivos humanos apoyándose en psicología cognitiva y neurociencia computacional.","Se centra en procesos cognitivos internos."),

  q("rational",1,"El enfoque de pensar razonablemente pretende…",["copiar exactamente el cerebro","razonar internamente de forma lógica y coherente","parecer humano en una conversación","actuar al azar para explorar"],1,"Busca inferencia lógica y coherente, no reproducir exactamente el pensamiento humano.","Su tradición se relaciona con las leyes del pensamiento."),
  q("rational",1,"¿Quién es presentado como precursor de la codificación de la manera correcta de pensar?",["Alan Turing","Aristóteles","Dijkstra","Hinton"],1,"Aristóteles inició el estudio formal de la lógica y de las leyes del pensamiento.","Es un filósofo de la Antigüedad."),
  q("rational",2,"¿Cuáles son dos obstáculos del enfoque lógico de las leyes del pensamiento?",["Falta de cámaras y GPS","No todo conocimiento se expresa en lógica y la inferencia puede agotar recursos","Ausencia de emociones y pantallas","Pocos lenguajes de programación"],1,"La representación lógica tiene límites y el costo computacional de inferir puede ser excesivo.","Uno es expresivo; el otro, computacional."),
  q("rational",1,"En el enfoque de actuar razonablemente, lo más importante es…",["imitar gestos humanos","seguir siempre una demostración lógica exacta","tomar acciones efectivas que conduzcan a los objetivos","tener conciencia"],2,"Importa el comportamiento final racional y efectivo, sin exigir un proceso interno idéntico al humano o puramente lógico.","La evaluación se hace por las decisiones y resultados."),
  q("rational",2,"Actuar racionalmente significa seleccionar acciones que…",["maximicen la utilidad esperada","se parezcan a decisiones humanas","usen más recursos","eviten toda incertidumbre"],0,"Un agente racional elige acciones óptimas de acuerdo con su información y busca maximizar su rendimiento o utilidad esperada.","La palabra clave es maximizar."),
  q("rational",2,"Un agente cambia su plan ante nueva información, aunque su proceso no sea lógica formal pura. Esto corresponde a…",["pensar como humano","actuar razonablemente","actuar como humano","pensar razonablemente exclusivamente"],1,"La actuación racional permite flexibilidad y adaptación mientras las acciones sean coherentes con la información y las metas.","Importa lograr el objetivo de forma efectiva."),
  q("rational",2,"¿Por qué el enfoque de agentes racionales es influyente en la IA moderna?",["Elimina la incertidumbre","Reconoce incertidumbre, tiempo y recursos limitados del mundo real","Garantiza conciencia artificial","Solo sirve para pruebas teóricas"],1,"Su enfoque práctico admite límites reales y sustenta agentes, asistentes y vehículos autónomos.","Piensa en condiciones del mundo real."),

  q("agents",1,"En la descripción REAS de un agente, las letras representan…",["Reglas, Entradas, Algoritmos y Salidas","Rendimiento, Entorno, Actuadores y Sensores","Respuesta, Energía, Aprendizaje y Sistema","Racionalidad, Eventos, Acciones y Simulación"],1,"REAS organiza la medida de Rendimiento, el Entorno, los Actuadores y los Sensores de un agente.","Equivale al esquema PEAS en inglés."),
  q("agents",1,"¿Qué componente permite a un agente percibir su entorno?",["Actuadores","Sensores","Función de utilidad exclusivamente","Reglas de salida"],1,"Los sensores captan información del entorno; los actuadores permiten intervenir en él.","Cámaras, radar y LIDAR son ejemplos."),
  q("agents",1,"OEDR significa…",["Operational Environment Data Registry","Object and Event Detection and Response","Optimal Engine Decision Rule","Object Evaluation Driving Route"],1,"OEDR es la detección y respuesta ante objetos y eventos del entorno de conducción.","Incluye detectar vehículos, peatones y obstáculos y decidir cómo responder."),
  q("agents",2,"¿Qué caracteriza al nivel 3 de automatización?",["El conductor realiza toda la conducción","El sistema opera bajo ciertas condiciones, pero el conductor debe estar disponible para retomar el control","Nunca requiere conductor ni tiene límites","Solo ofrece advertencias"],1,"En nivel 3 la automatización es condicional: el sistema conduce en ciertas circunstancias, con un humano disponible ante una solicitud.","Está entre asistencia y alta automatización."),
  q("agents",2,"¿Cuál es la diferencia clave entre niveles 4 y 5?",["El nivel 4 no usa sensores","El nivel 4 funciona autónomamente dentro de condiciones o zonas definidas; el 5 podría operar en cualquier condición","El nivel 5 exige conductor atento","No existe diferencia"],1,"Nivel 4 posee un dominio operacional limitado; nivel 5 sería automatización total sin conductor en cualquier entorno.","La clave es si existe un ODD restringido."),
  q("agents",1,"¿Qué define el ODD de un vehículo autónomo?",["El diseño del motor","Las condiciones específicas donde la automatización puede operar con seguridad","El número de pasajeros","Solo la velocidad máxima"],1,"El Operational Design Domain fija límites geográficos, climáticos, viales, legales, de tráfico y velocidad.","Es el «dominio de diseño operacional»."),
  q("agents",2,"Un Waymo de nivel 4 encuentra nieve intensa fuera de su ODD. ¿Qué conducta es coherente con el material?",["Continuar a máxima velocidad","Solicitar intervención o detenerse de forma segura","Desactivar sus sensores","Convertirse automáticamente en nivel 5"],1,"Cuando las condiciones salen del dominio previsto, debe alcanzar un estado seguro, por ejemplo detenerse.","Fuera de su dominio no debe fingir capacidad ilimitada."),
  q("agents",1,"¿Cuáles son las tres partes generales del proceso de conducción descrito?",["Entrenamiento, validación y prueba","Percepción, planeación y control","GPS, Internet y electricidad","Entrada, token y respuesta"],1,"Conducir requiere percibir el ambiente, planear cómo llegar o maniobrar y controlar el vehículo.","Primero entiende, luego decide y finalmente ejecuta."),
  q("agents",2,"¿Por qué deben combinarse GPS, IMU y odometría?",["Para aumentar el costo","Para producir una estimación coherente y robusta de posición y movimiento","Para reemplazar todos los mapas","Para reconocer intenciones"],1,"La fusión de sensores compensa limitaciones individuales y mejora la ego-localización.","Ninguna medición aislada ofrece toda la imagen."),
  q("agents",1,"¿Qué sensor crea mediciones precisas del entorno 3D, aunque es costoso y puede afectarle el clima?",["Micrófono","LIDAR","Teclado","Tokenizador"],1,"LIDAR —Light Detection and Ranging— se usa para detección y mapeo tridimensional.","Emite luz para medir distancias."),
  q("agents",2,"¿Qué representa una grilla de ocupación?",["Las intenciones del conductor","Un mapa 2D o 3D que marca espacios libres y obstáculos estacionarios","El historial de la API","Solo las señales de tránsito"],1,"La grilla marca celdas libres u ocupadas y permite planificar rutas sin colisiones.","Imagina el entorno dividido en pequeñas celdas."),
  q("agents",2,"¿Cuál es un reto real de la percepción autónoma?",["Los sensores nunca generan incertidumbre","GPS corrupto, visibilidad reducida o ruido de LIDAR","Los mapas no contienen geometría","Las cámaras siempre ven igual"],1,"La percepción enfrenta ruido, reflejos, destellos y condiciones atmosféricas; por ello debe ser robusta.","Los sensores pueden degradarse por el ambiente."),

  q("api",1,"¿Qué es un token en el contexto de un modelo de lenguaje?",["Una contraseña de usuario","Una unidad básica de texto usada para procesar y generar lenguaje","Una respuesta JSON completa","Un modelo de IA"],1,"La tokenización divide el texto en unidades que el modelo procesa; palabras, partes de palabras y signos pueden ser tokens.","No siempre coincide con una palabra completa."),
  q("api",1,"¿Qué se necesita para enviar solicitudes a la API de OpenAI según el material?",["Solo una cuenta de correo","Una cuenta en la plataforma y una API key con saldo disponible","Un servidor de Dialogflow","Un vehículo con GPS"],1,"La API key autentica las solicitudes realizadas desde Python, JavaScript u otros lenguajes.","Es una credencial secreta de la plataforma."),
  q("api",1,"¿Qué rol permite configurar el comportamiento general del asistente?",["user","system","assistant","token"],1,"El rol system, aunque opcional, establece instrucciones generales para el comportamiento del asistente.","Suele colocarse al inicio de los mensajes."),
  q("api",1,"¿Qué rol contiene normalmente la solicitud actual de la persona?",["user","assistant","system","usage"],0,"El rol user representa la petición o comentario del usuario.","Su nombre coincide con la persona que hace la consulta."),
  q("api",2,"¿Para qué pueden incluirse mensajes con rol assistant en la entrada?",["Para almacenar respuestas previas o proporcionar ejemplos del comportamiento deseado","Para autenticar la API key","Para elegir el precio del modelo","Para reemplazar al rol user"],0,"Los mensajes assistant preservan contexto de respuestas anteriores y también pueden servir como ejemplos.","Ayudan a representar el historial conversacional."),
  q("api",1,"¿Dónde se encuentra el texto principal de una respuesta Chat Completions mostrada en el material?",["response.usage.total_tokens","response.choices[0].message.content","response.model.name","response.system.output"],1,"Se accede a la primera alternativa, después a su mensaje y finalmente a content.","La ruta pasa por choices y message."),
  q("api",2,"¿Qué informa el objeto usage de una respuesta?",["La contraseña de la cuenta","Los tokens de entrada, salida y el total consumido","Solo el nombre del usuario","La intención detectada"],1,"usage contiene métricas como prompt_tokens, completion_tokens y total_tokens.","Sirve para observar consumo."),
  q("api",2,"¿Qué efecto general se busca al comparar temperature=0 con temperature=1.5?",["Cambiar la API key","Comparar una salida más precisa/determinista con otra más creativa/variable","Limitar el número de usuarios","Cambiar JSON a XML"],1,"Una temperatura baja reduce variación; una alta favorece diversidad y creatividad.","Es un control de aleatoriedad de la generación."),
  q("api",2,"¿Cuál es la diferencia conceptual entre un LLM y un asistente?",["No existe ninguna","El LLM genera texto por patrones; el asistente es una implementación orientada a interacción continua y contextual","Un asistente no usa modelos","El LLM siempre posee memoria permanente"],1,"El asistente envuelve un modelo con una experiencia de conversación y manejo de contexto.","Uno es el modelo; el otro, una aplicación conversacional."),

  q("dialogflow",1,"¿Qué es Dialogflow?",["Un sensor para automóviles","Una suite de Google para crear agentes conversacionales","Un lenguaje de programación","Una red neuronal convolucional"],1,"Dialogflow es una plataforma de desarrollo end-to-end para agentes conversacionales en varios idiomas.","Puede integrarse con web, apps, mensajería y telefonía."),
  q("dialogflow",1,"¿Qué representa una intención o intent?",["La acción o necesidad que el usuario desea comunicar","Una contraseña","El número de tokens","Un sensor físico"],0,"La intención clasifica el propósito del mensaje, como abrir un ticket o consultar su estado.","Responde a «¿qué quiere lograr el usuario?»."),
  q("dialogflow",1,"¿Para qué sirven las frases de entrenamiento?",["Para obligar al usuario a repetirlas literalmente","Para enseñar al agente formas representativas de activar una intención","Para ejecutar una API externa","Para medir FLOPS"],1,"Son ejemplos variados de cómo los usuarios podrían expresar la misma intención; no necesitan coincidir literalmente.","Cuanta más variedad representativa, mejor reconocimiento."),
  q("dialogflow",2,"El mensaje «Necesito dos pizzas grandes para hoy» contiene datos que conviene modelar como…",["integraciones","entidades","intenciones por default","roles system"],1,"Cantidad, tamaño y tiempo son piezas extraíbles —entidades— que cuantifican o especifican la solicitud.","Responden a cuánto, qué y cuándo."),
  q("dialogflow",1,"¿Qué preguntas ayudan a identificar entidades?",["Quién, qué, cuándo y dónde","Por qué compila y cuánto cuesta la GPU","Qué modelo piensa como humano","Cuántos FLOPS tiene LISP"],0,"Las entidades extraen información concreta como quién, qué, cuándo, dónde o cuántos.","Son detalles dentro de la solicitud."),
  q("dialogflow",2,"¿Cuándo se utiliza un fulfillment?",["Cuando una intención requiere una respuesta dinámica o ejecutar una acción específica","Para escribir frases de entrenamiento","Solo para saludar","Para reemplazar todas las entidades"],0,"El fulfillment suele llamar una Cloud Function o API para procesar datos y generar una respuesta dinámica.","Por ejemplo, crear realmente un ticket y devolver su número."),
  q("dialogflow",1,"¿Qué hace Default Welcome Intent?",["Responde cuando nada se entiende","Reconoce saludos y ofrece una respuesta inicial","Extrae cantidades","Cierra el agente"],1,"La intención de bienvenida identifica expresiones como «hola» o «buenos días».","Se activa al comenzar una conversación."),
  q("dialogflow",1,"¿Cuándo se activa Fallback Intent?",["Al detectar un saludo","Cuando el agente no entiende la solicitud del usuario","Después de toda respuesta correcta","Al extraer una fecha"],1,"Fallback gestiona entradas que no coinciden suficientemente con ninguna intención conocida.","Es la ruta de recuperación ante mensajes no comprendidos."),
  q("dialogflow",2,"Para responder «Su ticket es #9999» después de registrarlo en otro sistema, la combinación más adecuada es…",["Entidad sin intención","Intent de abrir ticket más fulfillment conectado a una API","Fallback más saludo","Solo muchas frases de entrenamiento"],1,"La intención reconoce la necesidad y el fulfillment ejecuta la creación externa y devuelve la respuesta dinámica.","Se necesita reconocer y también actuar."),
  q("dialogflow",2,"¿Cuál secuencia resume mejor el procesamiento conversacional?",["El usuario habla → se reconoce intención y entidades → se ejecuta fulfillment si hace falta → se genera respuesta","Se genera respuesta → luego se descubre la intención","Se llama siempre a fallback → se borran entidades","Se calcula FLOPS → se crea un mapa"],0,"Dialogflow interpreta la entrada, identifica propósito y datos, ejecuta lógica dinámica cuando corresponde y responde.","Ordena comprensión, acción y respuesta.")
];

const $ = id => document.getElementById(id);
const state = { mode: "all", session: [], index: 0, correct: 0, streak: 0, bestStreak: 0, answers: [] };
const saved = JSON.parse(localStorage.getItem("iaQuizProgress") || '{"attempts":{},"sessions":0}');

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; }
  return copy;
}

function renderTopics() {
  const counts = questions.reduce((a,x) => ((a[x.topic] = (a[x.topic] || 0) + 1), a), {});
  $("topicGrid").innerHTML = Object.entries(topics).map(([key,t]) => `<div class="topic-card"><i>${t.icon}</i><strong>${t.name}</strong><span>${counts[key]} preguntas · ${t.source}</span></div>`).join("");
}

function selectMode(mode) {
  state.mode = mode;
  document.querySelectorAll(".segment").forEach(b => b.classList.toggle("active", b.dataset.mode === mode));
}

function startQuiz(forcedMode) {
  if (forcedMode) selectMode(forcedMode);
  let pool = questions.map((item,id) => ({...item,id}));
  if (state.mode === "review") {
    const missed = Object.entries(saved.attempts).filter(([,v]) => v.wrong > 0 && v.correct / (v.correct + v.wrong) < .8).map(([id]) => Number(id));
    if (missed.length) pool = pool.filter(x => missed.includes(x.id));
    else { alert("Aún no tienes errores guardados. Comenzaremos con todos los temas."); selectMode("all"); }
  }
  pool = shuffle(pool);
  const count = $("questionCount").value;
  state.session = count === "all" ? pool : pool.slice(0, Math.min(Number(count),pool.length));
  Object.assign(state,{ index:0, correct:0, streak:0, bestStreak:0, answers:[] });
  $("homeView").classList.add("hidden"); $("resultsView").classList.add("hidden"); $("quizView").classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const item = state.session[state.index];
  const letters = ["A","B","C","D"];
  $("progressLabel").textContent = `Pregunta ${state.index + 1} de ${state.session.length}`;
  $("scoreLabel").textContent = `${state.correct} correctas`;
  $("progressFill").style.width = `${state.index / state.session.length * 100}%`;
  $("topicPill").textContent = topics[item.topic].name;
  $("difficultyLabel").textContent = ["Fundamental","Intermedia","Desafío"][item.difficulty - 1];
  $("questionText").textContent = item.text;
  $("answers").innerHTML = item.options.map((o,i) => `<button class="answer" data-index="${i}" type="button"><span class="answer-letter">${letters[i]}</span><span>${o}</span></button>`).join("");
  document.querySelectorAll(".answer").forEach(b => b.addEventListener("click", answerQuestion));
  $("feedback").className = "feedback hidden"; $("nextButton").classList.add("hidden"); $("hintButton").classList.remove("hidden"); $("hintText").classList.add("hidden");
}

function answerQuestion(event) {
  const item = state.session[state.index];
  const chosen = Number(event.currentTarget.dataset.index);
  const correct = chosen === item.answer;
  document.querySelectorAll(".answer").forEach((b,i) => { b.disabled = true; if (i === item.answer) b.classList.add("correct"); if (i === chosen && !correct) b.classList.add("wrong"); });
  if (correct) { state.correct++; state.streak++; state.bestStreak = Math.max(state.bestStreak,state.streak); }
  else state.streak = 0;
  state.answers.push({ id:item.id, topic:item.topic, correct });
  const record = saved.attempts[item.id] || {correct:0,wrong:0}; record[correct ? "correct" : "wrong"]++; saved.attempts[item.id] = record; saveProgress();
  $("feedback").className = `feedback ${correct ? "" : "incorrect"}`;
  $("feedbackTitle").textContent = correct ? "✓ Correcta" : "✕ Incorrecta";
  $("feedbackText").textContent = item.explanation;
  $("sourceNote").textContent = `Fuente: ${topics[item.topic].source}`;
  $("nextButton").classList.remove("hidden"); $("hintButton").classList.add("hidden");
}

function nextQuestion() { state.index++; if (state.index >= state.session.length) finishQuiz(); else renderQuestion(); }

function finishQuiz() {
  saved.sessions++; saveProgress();
  $("quizView").classList.add("hidden"); $("resultsView").classList.remove("hidden");
  const percent = Math.round(state.correct / state.session.length * 100);
  $("resultPercent").textContent = `${percent}%`; $("resultRing").style.background = `conic-gradient(var(--green) ${percent}%, #dfe4dd 0)`;
  $("resultTitle").textContent = percent >= 85 ? "Tema dominado" : percent >= 65 ? "Vas por buen camino" : "Buen comienzo";
  $("resultSummary").textContent = percent >= 85 ? "Tu comprensión es sólida. Mantén el nivel con preguntas variadas." : percent >= 65 ? "Tienes una buena base. El repaso dirigido te ayudará a cerrar las brechas." : "Ya identificaste qué temas necesitan más atención. Repásalos y vuelve a intentarlo.";
  $("correctResult").textContent = state.correct; $("incorrectResult").textContent = state.session.length - state.correct; $("streakResult").textContent = state.bestStreak;
  const byTopic = {};
  state.answers.forEach(a => { byTopic[a.topic] ||= {total:0,correct:0}; byTopic[a.topic].total++; if(a.correct) byTopic[a.topic].correct++; });
  $("breakdown").innerHTML = Object.entries(byTopic).map(([key,v]) => { const p=Math.round(v.correct/v.total*100); return `<div class="break-row"><span>${topics[key].name}</span><div class="mini-track"><div class="mini-fill" style="width:${p}%"></div></div><strong>${p}%</strong></div>`; }).join("");
  window.scrollTo({top:0,behavior:"smooth"});
}

function saveProgress() { localStorage.setItem("iaQuizProgress", JSON.stringify(saved)); }

function showStats() {
  const all = Object.entries(saved.attempts);
  const total = all.reduce((n,[,v]) => n+v.correct+v.wrong,0), correct = all.reduce((n,[,v]) => n+v.correct,0);
  $("statsIntro").textContent = total ? `${correct} respuestas correctas de ${total} intentos en ${saved.sessions} sesiones.` : "Aquí aparecerá tu avance cuando completes algunas preguntas.";
  if (!total) $("statsContent").innerHTML = '<div class="stats-empty">Todavía no hay actividad guardada.</div>';
  else {
    const data = {};
    all.forEach(([id,v]) => { const key=questions[Number(id)].topic; data[key] ||= {total:0,correct:0}; data[key].total += v.correct+v.wrong; data[key].correct += v.correct; });
    $("statsContent").innerHTML = Object.entries(data).map(([key,v]) => { const p=Math.round(v.correct/v.total*100); return `<div class="break-row"><span>${topics[key].name}</span><div class="mini-track"><div class="mini-fill" style="width:${p}%"></div></div><strong>${p}%</strong></div>`; }).join("");
  }
  if (!$("statsDialog").open) $("statsDialog").showModal();
}

document.querySelectorAll(".segment").forEach(b => b.addEventListener("click",() => selectMode(b.dataset.mode)));
$("startButton").addEventListener("click",() => startQuiz());
$("nextButton").addEventListener("click",nextQuestion);
$("hintButton").addEventListener("click",() => { $("hintText").textContent = state.session[state.index].hint; $("hintText").classList.remove("hidden"); });
$("quitButton").addEventListener("click",() => { if(confirm("¿Salir de esta práctica? El progreso de las preguntas respondidas quedará guardado.")) { $("quizView").classList.add("hidden"); $("homeView").classList.remove("hidden"); } });
$("retryButton").addEventListener("click",() => { $("resultsView").classList.add("hidden"); $("homeView").classList.remove("hidden"); window.scrollTo({top:0}); });
$("reviewButton").addEventListener("click",() => startQuiz("review"));
$("statsButton").addEventListener("click",showStats); $("closeStats").addEventListener("click",() => $("statsDialog").close());
$("resetStats").addEventListener("click",() => { if(confirm("¿Borrar todo tu progreso guardado?")) { saved.attempts={}; saved.sessions=0; saveProgress(); showStats(); } });
renderTopics();
