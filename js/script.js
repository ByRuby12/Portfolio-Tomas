document.querySelectorAll('a[href*="CV%20TOMAS%20CANO"]').forEach((link) => { link.href = 'docs/CV%20TOMAS%2020262027%20NEW.pdf'; });
document.querySelector('.profile')?.insertAdjacentHTML('afterend', `<section class="resume-details section-wrap reveal"><div class="resume-detail-intro"><p class="eyebrow">Perfil completo</p><h2>También cuento<br /><em>lo que sostiene el código.</em></h2></div><div class="resume-detail-grid"><div class="resume-detail-card"><span class="mono">IDIOMAS</span><strong>Español <i>Nativo</i></strong><strong>Inglés <i>B1</i></strong></div><div class="resume-detail-card"><span class="mono">DISPONIBILIDAD</span><p>Incorporación inmediata<br />Disponibilidad completa<br />Permiso de conducir B · B1 · AM · A1</p></div><div class="resume-detail-card"><span class="mono">FORMA DE TRABAJAR</span><p>Resolución de problemas · trabajo en equipo · liderazgo · aprendizaje continuo · gestión de proyectos</p></div><div class="resume-detail-card"><span class="mono">ECOSISTEMA</span><p>Arquitectura ORM · proyectos IoT · Firebase · Discord · web scraping · documentación técnica</p></div></div></section>`);
document.querySelector('.projects-grid')?.insertAdjacentHTML('beforeend', `<article class="project-card project-extra reveal" data-category="ia" data-project="discord-bot"><div class="project-visual visual-discord"><span class="visual-label">COMMUNITY AUTOMATION / 15</span><div class="discord-orb">D<span>↗</span></div><div class="discord-lines"><i></i><i></i><i></i></div><div class="discord-caption mono">BOT<br />MULTIFUNCIÓN</div></div><div class="project-meta"><div><span class="project-index">15</span><h3>Bot completo<br /><em>para Discord</em></h3></div><p>Bot multifunción para servidores de comunidad con moderación, gestión de usuarios, economía y tickets de soporte.</p><div class="project-tags"><span>Python</span><span>Discord API</span><span>Automatización</span></div><button class="project-open" data-open="discord-bot" aria-label="Ver detalles del bot de Discord">↗</button></div></article><article class="project-card project-extra reveal" data-category="web" data-project="web-ecosystem"><div class="project-visual visual-browser"><span class="visual-label">WEB ECOSYSTEM / 16</span><div class="browser-bar"><i></i><i></i><i></i></div><div class="browser-game">18<span>_</span></div><div class="browser-pixel"></div></div><div class="project-meta"><div><span class="project-index">16</span><h3>Ecosistema de webs<br /><em>proyecto conjunto</em></h3></div><p>Conjunto de 18 tiendas, webs corporativas y catálogos online desarrollados y mantenidos dentro de un mismo ecosistema digital.</p><div class="project-tags"><span>Websites</span><span>eCommerce</span><span>SEO</span></div><button class="project-open" data-open="web-ecosystem" aria-label="Ver detalles del ecosistema de webs">↗</button></div></article>`);
document.querySelector('.projects-grid')?.insertAdjacentHTML('beforeend', `<article class="project-card project-extra reveal" data-category="web" data-project="universalworks"><div class="project-visual visual-browser"><span class="visual-label">BUSINESS WEB / 17</span><div class="browser-bar"><i></i><i></i><i></i></div><div class="browser-game">UW<span>_</span></div><div class="browser-pixel"></div></div><div class="project-meta"><span class="project-index">17</span><h3>UniversalWorks<br /><em>web multi-negocio</em></h3><p>Web adaptable para más de 30 tipos de negocio, desde mecánicos y carpinteros hasta electricistas y otros profesionales.</p><div class="project-tags"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>TypeScript</span><span>Vue.js</span><span>JSON</span><span>Firebase Security Rules</span><span>Node.js</span><span>PowerShell</span><span>Markdown</span></div><button class="project-open" data-open="universalworks" aria-label="Ver detalles de UniversalWorks">↗</button></div></article>`);
document.querySelectorAll('.timeline-place').forEach((place) => { if (place.textContent.includes('La Tienda de España')) place.textContent = 'La Tienda del Espía'; });
const projectCount = document.querySelector('#load-more b');
if (projectCount) projectCount.firstChild.textContent = '08 ';
if (projectCount) projectCount.firstChild.textContent = '10 ';
document.querySelector('[data-filter="all"] small')?.replaceChildren('17');
document.querySelector('[data-filter="web"] small')?.replaceChildren('13');
document.querySelector('[data-filter="ia"] small')?.replaceChildren('02');

const projects = {
  tpv: { kicker: '01 / Sistema operativo', title: 'TPV Hostelería & pedidos QR', description: 'Plataforma completa para que clientes, camareros, cocina y administración trabajen sobre el mismo flujo en tiempo real. Incluye comandas por estado, rechazo por línea, pagos mixtos, control de caja y estadísticas.', tech: ['Vue 3', 'TypeScript', 'Firebase', 'Firestore', 'Chart.js'], live: 'https://byruby12.github.io/TPV-Hosteleria/Version-3-TPV/#/login', repo: 'https://github.com/ByRuby12/TPV-Hosteleria' },
  carta: { kicker: '02 / Experiencia web', title: 'Carta Web para hostelería', description: 'Sistema de cartas digitales preparado para adaptarse a bares y cafeterías. Varias versiones, carga dinámica desde JSON, diseño responsive, alérgenos, idiomas y redes sociales.', tech: ['HTML5', 'CSS3', 'JavaScript', 'JSON'], live: 'https://byruby12.github.io/CartaWebVersiones/Version-2-Profesional', repo: 'https://github.com/ByRuby12/CartaWebVersiones' },
  leaders: { kicker: '03 / Community hub', title: 'LeidersRP', description: 'Sitio oficial para una comunidad de roleplay en consola. Centraliza normativas, novedades, sistemas, eventos y accesos, con una experiencia pensada para que la comunidad encuentre rápido lo que necesita.', tech: ['Frontend', 'UI/UX', 'GitHub Pages'], live: 'https://byruby12.github.io/LeidersRPWeb', repo: 'https://github.com/ByRuby12/LeidersRPWeb' },
  stockage: { kicker: '04 / Herramienta de negocio', title: 'Stockage Tienda', description: 'Aplicación web enfocada en el control de inventario y las operaciones diarias de una tienda, con una interfaz directa para consultar y gestionar el stock.', tech: ['Web app', 'JavaScript', 'GitHub Pages'], live: 'https://byruby12.github.io/StockageTienda/', repo: 'https://github.com/ByRuby12/StockageTienda' },
  madrid: { kicker: '05 / Automatización IA', title: 'Bot inteligente para Madrid Móvil', description: 'Bot de Telegram desarrollado durante las prácticas en el Ayuntamiento de Madrid para gestionar avisos y peticiones ciudadanas, integrando APIs y clasificación mediante Inteligencia Artificial.', tech: ['Python', 'OpenAI API', 'Telegram', 'APIs'], live: 'https://github.com/ByRuby12/AyuntMadrid', repo: 'https://github.com/ByRuby12/AyuntMadrid' },
  bibliotech: { kicker: '06 / Media library', title: 'Bibliotech', description: 'Repositorio de música, películas y videojuegos construido como proyecto de DAW, con backend, base de datos Oracle y una interfaz web para organizar y consultar el catálogo.', tech: ['Java', 'PHP', 'Oracle', 'HTML5', 'CSS3'], live: 'https://github.com/ByRuby12/Bibliotech-DAW', repo: 'https://github.com/ByRuby12/Bibliotech-DAW' },
  'leaders-app': { kicker: '07 / Sistema de comunidad', title: 'LeidersRP PDA & sistemas', description: 'Conjunto de consolas web para una comunidad de roleplay: CNP, EMS, DNI y USER, con perfiles y herramientas adaptadas a cada tipo de usuario.', tech: ['Web app', 'JavaScript', 'Roleplay', 'GitHub'], live: 'https://github.com/ByRuby12/LeidersRP', repo: 'https://github.com/ByRuby12/LeidersRP' }
  , 'carta-basic': { kicker: '08 / Experiencia web', title: 'Carta Web versión básica', description: 'La primera versión de la plantilla para bares: una carta digital sencilla, responsive, organizada por categorías y alimentada desde JSON.', tech: ['HTML5', 'CSS3', 'JavaScript', 'JSON'], live: 'https://byruby12.github.io/CartaWebVersiones/Version-1-Basica', repo: 'https://github.com/ByRuby12/CartaWebVersiones' },
  cremesports: { kicker: '09 / Primer proyecto', title: 'CremEsports', description: 'Mi primera página web completa: un ecosistema de gaming con bienvenida, registro, menús temáticos, productos, merchandising y simulación de compra.', tech: ['HTML5', 'CSS3', 'Diseño web', 'eCommerce'], live: 'https://github.com/ByRuby12/CremEsports', repo: 'https://github.com/ByRuby12/CremEsports' },
  processing: { kicker: '10 / Programación creativa', title: 'Videojuegos Processing', description: 'Colección de mini-juegos creados con Processing y Java para practicar lógica, animación, interacción visual y mecánicas clásicas.', tech: ['Processing', 'Java', 'Game logic', 'Animación'], live: 'https://github.com/ByRuby12/VideoJuegos-Processing', repo: 'https://github.com/ByRuby12/VideoJuegos-Processing' },
  'html-games': { kicker: '11 / Juegos de navegador', title: 'Videojuegos HTML', description: 'Biblioteca de juegos ejecutables directamente en navegador, con Buscaminas, Tetris, Pacman, Dinosaurio, Tower Blocks, p0rtal y más.', tech: ['HTML5', 'CSS3', 'JavaScript', 'Canvas'], live: 'https://github.com/ByRuby12/Videojuegos-HTML', repo: 'https://github.com/ByRuby12/Videojuegos-HTML' },
  'pollo-loco': { kicker: '12 / Experiencia interactiva', title: 'El Pollo Loco', description: 'Juego web multisección con minijuegos, retos y categorías temáticas, creado como proyecto personal de aprendizaje y diseño interactivo.', tech: ['HTML5', 'CSS3', 'JavaScript', 'Game design'], live: 'https://github.com/ByRuby12/PolloLoco', repo: 'https://github.com/ByRuby12/PolloLoco' },
  daw: { kicker: '13 / Laboratorio DAW', title: 'Proyectos del ciclo DAW', description: 'Repositorio de formación con prácticas de A-Frame, biblioteca, Bootstrap, cartas, IoT, MVC, Pokémon, procesador de textos, Tailwind, trivial y webs dinámicas.', tech: ['DAW', 'PHP', 'Java', 'Vue', 'MVC', 'A-Frame'], live: 'https://github.com/ByRuby12/DAW', repo: 'https://github.com/ByRuby12/DAW' },
  sportdistrict: { kicker: '14 / Proyecto final DAW', title: 'Sportdistrict', description: 'Plataforma integral para gestionar ligas deportivas de barrio: equipos, partidos, árbitros, estadísticas, reportes, estadios y paneles de administración.', tech: ['Vue 3', 'TypeScript', 'NestJS', 'MySQL', 'JWT', 'Tailwind'], live: 'https://github.com/ByRuby12/TFG-DAW', repo: 'https://github.com/ByRuby12/TFG-DAW' },
  'discord-bot': { kicker: '15 / Automatización de comunidad', title: 'Bot completo para Discord', description: 'Bot multifunción para servidores de comunidad con moderación, gestión de usuarios, economía y tickets de soporte.', tech: ['Python', 'Discord API', 'Automatización', 'Moderación'], live: 'https://github.com/ByRuby12/LeidersRP', repo: 'https://github.com/ByRuby12/LeidersRP' },
  'web-ecosystem': { kicker: '16 / Ecosistema web', title: 'Ecosistema de webs', description: 'Proyecto conjunto formado por 18 webs: latiendadelhumor.es, labodegadelhumor.es, sinverguenza.eu, elnacionalista.es, qrgift.es, pueblerinos.es, latiendadelespia.es, llamarlaatencion.es, profesionalesdelbarrio.es, job.profesionalesdelbarrio.es, maketheworldgreatagain.info, latiendadelrobot.es, latiendadelosinventos.es, bossmarket.es, catalogo.bossmarket.es, europalis.eu, hispanol.es y securitymark.es.', tech: ['Websites', 'eCommerce', 'Catálogos', 'SEO', 'Mantenimiento'], live: 'https://latiendadelhumor.es', repo: 'https://github.com/ByRuby12' },
  universalworks: { kicker: '17 / Web multi-negocio', title: 'UniversalWorks', description: 'Plantilla web adaptable para más de 30 tipos de negocio, como talleres mecánicos, carpinterías, electricistas y otros servicios profesionales. Cada negocio puede presentar sus servicios con una presencia online clara y responsive.', tech: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue.js', 'JSON', 'Firebase Security Rules', 'Node.js', 'PowerShell', 'Markdown'], live: 'https://byruby12.github.io/WebUniversal/', repo: 'https://github.com/ByRuby12/WebUniversal' }
};

const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

document.querySelectorAll('.filter').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  document.querySelectorAll('.project-card').forEach((card) => card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter));
}));

const modal = document.querySelector('#project-modal');
const openModal = (key) => {
  const project = projects[key];
  if (!project) return;
  document.querySelector('#modal-kicker').textContent = project.kicker;
  document.querySelector('#modal-title').textContent = project.title;
  document.querySelector('#modal-description').textContent = project.description;
  document.querySelector('#modal-tech').innerHTML = project.tech.map((item) => `<span>${item}</span>`).join('');
  document.querySelector('#modal-live').href = project.live;
  document.querySelector('#modal-repo').href = project.repo;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};
const closeModal = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; };
document.querySelectorAll('[data-open]').forEach((button) => button.addEventListener('click', () => openModal(button.dataset.open)));
document.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', closeModal));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', open); });
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); }));

window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  document.body.style.setProperty('--scroll-progress', `${scrollable > 0 ? window.scrollY / scrollable : 0}`);
}, { passive: true });

window.addEventListener('pointermove', (event) => {
  document.body.style.setProperty('--cursor-x', `${event.clientX}px`);
  document.body.style.setProperty('--cursor-y', `${event.clientY}px`);
});

document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    if (window.matchMedia('(max-width: 800px)').matches) return;
    const bounds = card.getBoundingClientRect();
    const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -2;
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    card.querySelector('.project-visual').style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener('pointerleave', () => { card.querySelector('.project-visual').style.transform = ''; });
});

const loadMore = document.querySelector('#load-more');
const projectGrid = document.querySelector('.projects-grid');
loadMore.addEventListener('click', () => {
  const expanded = projectGrid.classList.toggle('show-extra');
  loadMore.classList.toggle('is-open', expanded);
  loadMore.querySelector('span').textContent = expanded ? 'Ocultar proyectos' : 'Ver más proyectos';
  loadMore.querySelector('i').textContent = expanded ? '↑' : '↓';
  if (expanded) document.querySelectorAll('.project-extra').forEach((card) => revealObserver.observe(card));
});
