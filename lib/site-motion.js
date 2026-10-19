// Motion layer ported from the approved HTML prototype (js/site.js).
// Each section is guarded, so a page simply skips the effects whose elements it does not have.
// initSite() runs after every route change and returns a cleanup function.
/* eslint-disable */
export function initSite() {
  var gsap = window.gsap, ScrollTrigger = window.ScrollTrigger, Lenis = window.Lenis, THREE = window.THREE;
  var __ac = new AbortController(), __opt = { signal: __ac.signal }, __cleanups = [], __alive = true;
  function __tick(f){ gsap.ticker.add(f); __cleanups.push(function(){ gsap.ticker.remove(f); }); }
  var __ctx = gsap.context(function(){

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var touch = window.matchMedia('(hover:none),(pointer:coarse)').matches;
  var mobile = window.matchMedia('(max-width:1000px)').matches;
  var hasG = !!window.gsap;
  var pre = document.getElementById('pre');
  function killPre(){ if(pre){ pre.remove(); pre=null; } document.body.classList.remove('loading'); }
  setTimeout(killPre, 4000); // safety: never block the page

  try{
  /* ---------- menus ---------- */
  var hdr = document.getElementById('top'), lastY = 0;
  var dds = document.querySelectorAll('.dd');
  function closeAll(except){ dds.forEach(function(d){ if(d!==except){ d.classList.remove('open'); d.querySelector('button').setAttribute('aria-expanded','false'); } }); }
  dds.forEach(function(d){
    var b = d.querySelector('button'), t;
    function open(){ clearTimeout(t); closeAll(d); d.classList.add('open'); b.setAttribute('aria-expanded','true'); }
    d.addEventListener('mouseenter', open, __opt);
    d.addEventListener('mouseleave', function(){ t = setTimeout(function(){ d.classList.remove('open'); b.setAttribute('aria-expanded','false'); }, 160); }, __opt);
    b.addEventListener('click', function(){ d.classList.contains('open') ? (d.classList.remove('open'), b.setAttribute('aria-expanded','false')) : open(); }, __opt);
    d.querySelectorAll('.menu a').forEach(function(a){ a.addEventListener('click', function(){ closeAll(); }, __opt); });
  });
  document.addEventListener('click', function(e){ if(!e.target.closest('.dd')) closeAll(); }, __opt);
  var mnav = document.getElementById('mnav'), opener = document.querySelector('.top .burger');
  function setM(on){ mnav.classList.toggle('open', on); opener.setAttribute('aria-expanded', on?'true':'false'); if(lenis){ on ? lenis.stop() : lenis.start(); } document.body.style.overflow = on ? 'hidden' : ''; if(on) mnav.querySelector('[data-close]').focus(); }
  opener.addEventListener('click', function(){ setM(true); }, __opt);
  mnav.querySelector('[data-close]').addEventListener('click', function(){ setM(false); opener.focus(); }, __opt);
  mnav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ setM(false); }, __opt); });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape'){ closeAll(); setM(false); } }, __opt);

  var row = document.getElementById('logoRow');
  if (window.matchMedia('(max-width:760px)').matches && !reduce) Array.prototype.slice.call(row.children).forEach(function(a){ var c=a.cloneNode(true); c.setAttribute('aria-hidden','true'); c.tabIndex=-1; row.appendChild(c); });

  }catch(err){ if(window.console) console.warn("section skipped", err.message); }
  try{
  /* ---------- marquee text ---------- */
  var mq = document.getElementById('mq');
  var words = ['Masterplan','Building','Unit','360°','Live availability','Payment plan'];
  var html=''; for (var r=0;r<2;r++) words.forEach(function(w,i){ html += '<span class="'+(i%2?'':'f')+'">'+w+'</span><span class="dot">✳</span>'; });
  mq.innerHTML = html;

  }catch(err){ if(window.console) console.warn("section skipped", err.message); }
  try{
  /* ---------- split headings into words ---------- */
  document.querySelectorAll('.split').forEach(function(el){
    el.innerHTML = el.textContent.trim().split(/\s+/).map(function(w){ return '<span class="w"><span>'+w+'</span></span>'; }).join(' ');
  });

  }catch(err){ if(window.console) console.warn("section skipped", err.message); }
  try{
  /* ---------- 3D twin ---------- */
  var twin = (function(){
    var canvas = document.getElementById('twin');
    if (!window.THREE) { canvas.remove(); return null; }
    var renderer;
    try { renderer = new THREE.WebGLRenderer({canvas:canvas, antialias:true, alpha:false}); } catch(e){ canvas.remove(); return null; } __cleanups.push(function(){ renderer.dispose(); });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.setClearColor(0x0b0d12, 1);
    var scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0b0d12, 60, 150);
    var cam = new THREE.PerspectiveCamera(36, 1, 0.1, 400);
    var base = {r:78, h:52, a:-0.7};
    var group = new THREE.Group(); scene.add(group);

    // ground grid and plot
    var grid = new THREE.GridHelper(200, 100, 0x1f2633, 0x161b24); grid.position.y = -0.01; group.add(grid);
    var plot = new THREE.Mesh(new THREE.PlaneGeometry(76,56), new THREE.MeshBasicMaterial({color:0x10141c}));
    plot.rotation.x = -Math.PI/2; group.add(plot);
    var edge = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.PlaneGeometry(76,56)), new THREE.LineBasicMaterial({color:0x7b96ff, transparent:true, opacity:.6}));
    edge.rotation.x = -Math.PI/2; edge.position.y = .02; group.add(edge);
    // roads
    var roadM = new THREE.MeshBasicMaterial({color:0x1a2030});
    [[0,0,76,4],[0,0,4,56],[-19,0,2.4,56],[19,0,2.4,56],[0,-14,76,2.4],[0,14,76,2.4]].forEach(function(r){ var m=new THREE.Mesh(new THREE.PlaneGeometry(r[2],r[3]), roadM); m.rotation.x=-Math.PI/2; m.position.set(r[0],.01,r[1]); group.add(m); });
    // park and pool in the middle
    var park = new THREE.Mesh(new THREE.CircleGeometry(7.5,48), new THREE.MeshBasicMaterial({color:0x1d4a37})); park.rotation.x=-Math.PI/2; park.position.y=.03; group.add(park);
    var pool = new THREE.Mesh(new THREE.CircleGeometry(3,40), new THREE.MeshBasicMaterial({color:0x2c6cff, transparent:true, opacity:.85})); pool.rotation.x=-Math.PI/2; pool.position.y=.05; group.add(pool);
    var ring = new THREE.Mesh(new THREE.RingGeometry(9,9.15,64), new THREE.MeshBasicMaterial({color:0x7b96ff, transparent:true, opacity:.5})); ring.rotation.x=-Math.PI/2; ring.position.y=.06; group.add(ring);

    // buildings
    var mats = { body: new THREE.MeshStandardMaterial({color:0x2a3040, roughness:.7, metalness:.1}) };
    var colOk = new THREE.Color(0x3ddc97), colSold = new THREE.Color(0xff5d6c), colSel = new THREE.Color(0x7b96ff), colIdle = new THREE.Color(0x8a93a6);
    var blds = [];
    var n = 0;
    for (var gx=-3; gx<=3; gx++) for (var gz=-2; gz<=2; gz++){
      if (Math.abs(gx)<=1 && Math.abs(gz)<=1) continue; // leave the park
      if (gx===0 || gz===0) { if (Math.random()<.5) continue; }
      var w = 5 + Math.random()*2.2, d = 4.2 + Math.random()*2, floors = 3 + Math.floor(Math.random()*6);
      var h = floors*1.5;
      var geo = new THREE.BoxGeometry(w, h, d); geo.translate(0, h/2, 0);
      var mesh = new THREE.Mesh(geo, mats.body.clone());
      var x = gx*10.6 + (Math.random()-.5)*1.4, z = gz*11 + (Math.random()-.5)*1.2;
      if (Math.abs(x) < 3) x += 4;
      mesh.position.set(x, 0, z);
      var lines = new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({color:colIdle.clone(), transparent:true, opacity:.9}));
      mesh.add(lines);
      // floor lines
      for (var f=1; f<floors; f++){ var fl = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.PlaneGeometry(w,d)), new THREE.LineBasicMaterial({color:0x3b4356, transparent:true, opacity:.6})); fl.rotation.x=-Math.PI/2; fl.position.y=f*1.5; mesh.add(fl); }
      mesh.scale.y = .001;
      var units = floors*4, avail = Math.floor(units*(.15+Math.random()*.6));
      mesh.userData = {id:++n, floors:floors, units:units, avail:avail, sold: avail===0 || Math.random()<.22, lines:lines, target: new THREE.Color()};
      if (mesh.userData.sold) mesh.userData.avail = 0;
      group.add(mesh); blds.push(mesh);
    }
    // lights
    scene.add(new THREE.HemisphereLight(0x9fb4ff, 0x0b0d12, .9));
    var dl = new THREE.DirectionalLight(0xffffff, .9); dl.position.set(-40,60,30); scene.add(dl);

    // scanning beam
    var beam = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 56), new THREE.MeshBasicMaterial({color:0x7b96ff, transparent:true, opacity:.22}));
    beam.rotation.x=-Math.PI/2; beam.position.y=.08; group.add(beam);

    var hb = document.getElementById('hb'), hu = document.getElementById('hu');
    var totalAvail = blds.reduce(function(s,b){ return s + b.userData.avail; }, 0);
    hb.textContent = blds.length;

    var mouse = {x:0,y:0, tx:0, ty:0}, ray = new THREE.Raycaster(), ndc = new THREE.Vector2(-9,-9), hover = null;
    var tip = document.getElementById('tip'), hero = document.getElementById('hero');
    hero.addEventListener('pointermove', function(e){
      var r = canvas.getBoundingClientRect();
      mouse.tx = (e.clientX - r.left)/r.width*2-1; mouse.ty = (e.clientY - r.top)/r.height*2-1;
      ndc.set(mouse.tx, -mouse.ty);
      tip.style.left = (e.clientX - r.left)+'px'; tip.style.top = (e.clientY - r.top)+'px';
    }, __opt);
    hero.addEventListener('pointerleave', function(){ ndc.set(-9,-9); }, __opt);
    var scrollP = 0, intro = {p:0}, visible = true, revealStart = 0;

    function resize(){ var w=canvas.clientWidth, h=canvas.clientHeight; renderer.setSize(w,h,false); cam.aspect=w/h; cam.updateProjectionMatrix(); base.r = w<700 ? 118 : 80; }
    resize(); window.addEventListener('resize', resize, __opt);
    var __io = new IntersectionObserver(function(es){ visible = es[0].isIntersecting; }); __io.observe(hero); __cleanups.push(function(){ __io.disconnect(); });

    var clock = new THREE.Clock();
    function start(){
      revealStart = clock.getElapsedTime();
      blds.forEach(function(b,i){
        var delay = .25 + (Math.hypot(b.position.x, b.position.z)/50)*1.1 + Math.random()*.15;
        b.userData.delay = delay;
      });
    }
    var counted = 0;
    function loop(){
      if (__alive) requestAnimationFrame(loop);
      if (!visible) return;
      var t = clock.getElapsedTime(), since = t - revealStart;
      mouse.x += (mouse.tx - mouse.x)*.05; mouse.y += (mouse.ty - mouse.y)*.05;
      var a = base.a + mouse.x*.35 + t*.03;
      var r = base.r - scrollP*30, h = base.h - mouse.y*6 - scrollP*16;
      cam.position.set(Math.cos(a)*r, h, Math.sin(a)*r);
      cam.lookAt(0, 2 - scrollP*2, 0);
      // rise
      var shown = 0;
      blds.forEach(function(b){
        var k = reduce ? 1 : Math.min(Math.max((since - b.userData.delay)/1.1, 0), 1);
        var e = 1 - Math.pow(1-k, 4);
        b.scale.y = Math.max(e, .001);
        if (k >= 1) shown += b.userData.avail;
      });
      if (shown !== counted){ counted = shown; hu.textContent = shown; }
      // availability pulse
      beam.position.x = ((t*9) % 90) - 45;
      ray.setFromCamera(ndc, cam);
      var hit = ray.intersectObjects(blds, false)[0];
      hover = hit ? hit.object : null;
      blds.forEach(function(b){
        var u = b.userData, near = Math.abs(b.position.x - beam.position.x) < 4;
        var c = b === hover ? colSel : (since > u.delay + 1.2 ? (u.sold ? colSold : colOk) : colIdle);
        u.lines.material.color.lerp(c, .08);
        u.lines.material.opacity = near ? 1 : (b===hover ? 1 : .75);
        b.material.emissive = b.material.emissive || new THREE.Color();
        b.material.emissive.lerp(b===hover ? new THREE.Color(0x1d2c6b) : new THREE.Color(0x000000), .1);
      });
      if (hover){ canvas.style.cursor='pointer'; tip.style.opacity=1; var u=hover.userData; tip.textContent = 'Building '+String(u.id).padStart(2,'0')+' · '+u.floors+' floors · '+(u.sold ? 'Sold out' : u.avail+' units available'); }
      else { canvas.style.cursor=''; tip.style.opacity=0; }
      group.rotation.y = scrollP*.4;
      renderer.render(scene, cam);
    }
    loop();
    return { start:start, setScroll:function(p){ scrollP = p; } };
  })();

  }catch(err){ if(window.console) console.warn("section skipped", err.message); }
  try{
  /* ---------- no GSAP: show everything and stop ---------- */
  if (!hasG || reduce){
    killPre(); if (twin) twin.start();
    document.querySelectorAll('.zoom .pills div').forEach(function(d){ d.style.opacity=1; d.style.transform='none'; });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  var lenis = null;
  if (window.Lenis && !touch){
    lenis = new Lenis({lerp:.1, smoothWheel:true}); __cleanups.push(function(){ lenis.destroy(); });
    lenis.on('scroll', ScrollTrigger.update);
    __tick(function(t){ lenis.raf(t*1000); });
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach(function(a){ a.addEventListener('click', function(e){ var id=a.getAttribute('href'); var el=id.length>1 && document.querySelector(id); if(el){ e.preventDefault(); lenis.scrollTo(el, {offset:-70, duration:1.4}); } }, __opt); });
  }

  // header hides on scroll down, returns on scroll up
  ScrollTrigger.create({start:0, end:'max', onUpdate:function(s){ var y=s.scroll(); hdr.classList.toggle('solid', y>40); hdr.classList.toggle('hide', y>window.innerHeight && s.direction===1); }});

  }catch(err){ if(window.console) console.warn("section skipped", err.message); }
  try{
  /* ---------- preloader then intro ---------- */
  if (pre) {
  document.body.classList.add('loading');
  var pc = document.getElementById('pc'), obj={v:0};
  var tl = gsap.timeline({onComplete:function(){ killPre(); }});
  tl.to('.pre .logo', {clipPath:'inset(0 0% 0 0)', duration:1, ease:'power3.inOut'}, 0)
    .to(obj, {v:100, duration:1.3, ease:'power2.inOut', onUpdate:function(){ pc.textContent = String(Math.round(obj.v)).padStart(3,'0'); }}, 0)
    .to('.pre .bar i', {scaleX:1, duration:1.3, ease:'power2.inOut'}, 0)
    .to('.pre', {yPercent:-100, duration:.9, ease:'power4.inOut'}, 1.45)
    .add(function(){ if (twin) twin.start(); }, 1.5)
    .from('#h1 .w>span', {yPercent:110, rotate:4, duration:1.1, ease:'power4.out', stagger:.06}, 1.7)
    .from('.hero [data-fade]', {y:24, opacity:0, duration:1, ease:'power3.out', stagger:.12}, 2)
    .from('.hud', {opacity:0, y:-10, duration:.8}, 2.2);
  }

  // hero scroll: camera dives, text lifts
  if (twin) ScrollTrigger.create({trigger:'#hero', start:'top top', end:'bottom top', scrub:true, onUpdate:function(s){ twin.setScroll(s.progress); }});
  if (document.getElementById('hero')) gsap.to('.hero .wrap', {yPercent:-25, opacity:0, ease:'none', scrollTrigger:{trigger:'#hero', start:'top top', end:'bottom top', scrub:true}});

  }catch(err){ if(window.console) console.warn("section skipped", err.message); }
  try{
  /* ---------- word reveals for every split heading below the hero ---------- */
  document.querySelectorAll('.split:not(#h1)').forEach(function(el){
    gsap.from(el.querySelectorAll('.w>span'), {yPercent:110, duration:1, ease:'power4.out', stagger:.05, scrollTrigger:{trigger:el, start:'top 85%'}});
  });
  gsap.utils.toArray('.lead, .eyebrow').forEach(function(el){
    if (el.closest('.hero')) return;
    gsap.from(el, {y:20, opacity:0, duration:.9, ease:'power3.out', scrollTrigger:{trigger:el, start:'top 90%'}});
  });

  }catch(err){ if(window.console) console.warn("section skipped", err.message); }
  try{
  if (!document.querySelector('.logos')) throw new Error('no .logos');
  /* ---------- logos ---------- */
  gsap.fromTo('.logo-row img', {y:30, autoAlpha:0}, {y:0, autoAlpha:1, duration:.8, stagger:.07, ease:'power3.out', scrollTrigger:{trigger:'.logos', start:'top 85%'}});

  }catch(err){ if(window.console) console.warn("section skipped", err.message); }
  try{
  if (!document.querySelector('#reveal')) throw new Error('no #reveal');
  /* ---------- model to reality wipe ---------- */
  var real = document.getElementById('real'), seam = document.getElementById('seam');
  gsap.timeline({scrollTrigger:{trigger:'#reveal', start:'top top', end:'bottom bottom', scrub:true}})
    .fromTo('.reveal .layer img', {scale:1.25}, {scale:1, ease:'none'}, 0)
    .fromTo(real, {clipPath:'inset(0 0 0 100%)'}, {clipPath:'inset(0 0 0 0%)', ease:'none'}, .15)
    .fromTo(seam, {left:'100%'}, {left:'0%', ease:'none'}, .15)
    .to(seam, {opacity:0, duration:.05}, '>');

  }catch(err){ if(window.console) console.warn("section skipped", err.message); }
  try{
  if (!document.querySelector('#mq')) throw new Error('no #mq');
  /* ---------- marquee driven by scroll speed ---------- */
  var mx = 0, vel = 0;
  ScrollTrigger.create({start:0, end:'max', onUpdate:function(s){ vel = s.getVelocity()/300; }});
  __tick(function(){ var half = mq.scrollWidth/2; mx -= 1.1 + Math.abs(vel); vel *= .9; if (mx <= -half) mx += half; mq.style.transform = 'translate3d('+mx+'px,0,0)'; });

  }catch(err){ if(window.console) console.warn("section skipped", err.message); }
  try{
  /* ---------- solution zoom ---------- */
  var mm = gsap.matchMedia();
  gsap.timeline({scrollTrigger:{trigger:'#solution', start:'top top', end:'bottom bottom', scrub:true}})
    .fromTo('#zcard', {width: mobile ? '84vw' : '46vw', borderRadius:24}, {width:'100vw', borderRadius:0, ease:'power2.inOut', duration:1}, 0)
    .fromTo('#zcard', {height: mobile ? '47.25vw' : '25.9vw'}, {height:'100vh', ease:'power2.inOut', duration:1}, 0)
    .fromTo('#zcard', {y: mobile ? '10vh' : '13vh'}, {y:0, ease:'power2.inOut', duration:1}, 0)
    .fromTo('#zcard img', {scale:1.15}, {scale:1, ease:'none', duration:1}, 0)
    .to('#zcard', {'--o':1, duration:.4}, .6)
    .to('#pills div', {opacity:1, y:0, stagger:.12, duration:.35, ease:'power2.out'}, .7)
    .to('.zoom .intro h2', {y:-40, opacity:.0, duration:.3}, .55);

  }catch(err){ if(window.console) console.warn("section skipped", err.message); }
  try{
  /* ---------- journey: pinned images with number ---------- */
  var steps = document.querySelectorAll('.step'), figs = document.querySelectorAll('.stage figure'), bigN = document.getElementById('bigN');
  steps.forEach(function(s){
    ScrollTrigger.create({trigger:s, start:'top 55%', end:'bottom 55%', onToggle:function(st){
      if (!st.isActive) return;
      var i = +s.getAttribute('data-i');
      steps.forEach(function(x,k){ x.classList.toggle('on', k===i); });
      figs.forEach(function(f,k){ f.classList.toggle('on', k<=i); f.style.zIndex = k; });
      gsap.fromTo(bigN, {yPercent:40, opacity:0}, {yPercent:0, opacity:1, duration:.6, ease:'power3.out'});
      bigN.textContent = String(i+1).padStart(2,'0');
    }});
  });

  }catch(err){ if(window.console) console.warn("section skipped", err.message); }
  try{
  if (!document.querySelector('#visualization')) throw new Error('no #visualization');
  /* ---------- horizontal gallery ---------- */
  mm.add('(min-width: 761px)', function(){
    var rail = document.getElementById('rail');
    var dist = function(){ return Math.max(rail.scrollWidth - window.innerWidth, 0); };
    var tw = gsap.to(rail, {x:function(){ return -dist(); }, ease:'none', scrollTrigger:{trigger:'#visualization', pin:'#hzpin', start:'top top', end:function(){ return '+='+dist(); }, scrub:1, invalidateOnRefresh:true, onUpdate:function(s){ gsap.set('#hzp', {scaleX:s.progress}); }}});
    gsap.utils.toArray('#rail .card img').forEach(function(img){
      gsap.fromTo(img, {xPercent:-8}, {xPercent:8, ease:'none', scrollTrigger:{trigger:img.parentElement, containerAnimation:tw, start:'left right', end:'right left', scrub:true}});
    });
  });
  mm.add('(max-width: 760px)', function(){
    var rail = document.getElementById('rail'); rail.style.overflowX='auto'; rail.style.width='100%'; rail.style.scrollSnapType='x mandatory'; rail.style.paddingBottom='6px';
    rail.querySelectorAll('.card').forEach(function(c){ c.style.scrollSnapAlign='center'; });
    rail.addEventListener('scroll', function(){ gsap.set('#hzp', {scaleX: rail.scrollLeft/(rail.scrollWidth-rail.clientWidth)}); }, {passive:true}, __opt);
  });

  }catch(err){ if(window.console) console.warn("section skipped", err.message); }
  try{
  /* ---------- dashboard tilt ---------- */
  gsap.fromTo('#browser', {rotateX:28, scale:.9, y:60}, {rotateX:0, scale:1, y:0, ease:'none', scrollTrigger:{trigger:'#browser', start:'top 95%', end:'top 35%', scrub:true}});
  gsap.from('#feat div', {y:40, opacity:0, duration:.8, stagger:.08, ease:'power3.out', scrollTrigger:{trigger:'#feat', start:'top 85%'}});

  }catch(err){ if(window.console) console.warn("section skipped", err.message); }
  try{
  /* ---------- cases: mask reveal, parallax, count up ---------- */
  gsap.utils.toArray('.case').forEach(function(c){
    gsap.fromTo(c.querySelector('.img'), {clipPath:'inset(18% 10% 18% 10% round 20px)'}, {clipPath:'inset(0% 0% 0% 0% round 0px)', duration:1.4, ease:'power3.inOut', scrollTrigger:{trigger:c, start:'top 85%'}});
    gsap.fromTo(c.querySelector('[data-par]'), {yPercent:-12}, {yPercent:0, ease:'none', scrollTrigger:{trigger:c, start:'top bottom', end:'bottom top', scrub:true}});
  });
  document.querySelectorAll('[data-count]').forEach(function(el){
    var end = +el.getAttribute('data-count'), o = {v:0};
    gsap.to(o, {v:end, duration:1.6, ease:'power3.out', scrollTrigger:{trigger:el, start:'top 90%'}, onUpdate:function(){ el.textContent = Math.round(o.v); }});
  });

  }catch(err){ if(window.console) console.warn("section skipped", err.message); }
  try{
  /* ---------- panels: glow follows the pointer ---------- */
  document.querySelectorAll('.panel').forEach(function(p){
    p.addEventListener('pointermove', function(e){ var r=p.getBoundingClientRect(); p.style.setProperty('--mx',(e.clientX-r.left)+'px'); p.style.setProperty('--my',(e.clientY-r.top)+'px'); }, __opt);
  });
  gsap.from('.panel', {y:60, opacity:0, duration:1, stagger:.12, ease:'power3.out', scrollTrigger:{trigger:'.brands .grid', start:'top 85%'}});
  gsap.from('.about .vm', {y:40, opacity:0, duration:1, stagger:.12, ease:'power3.out', scrollTrigger:{trigger:'.about', start:'top 75%'}});

  }catch(err){ if(window.console) console.warn("section skipped", err.message); }
  try{
  /* ---------- process line ---------- */
  var ps = document.querySelectorAll('.proc .s');
  gsap.to('#procR', {scaleX:1, scaleY:1, ease:'none', scrollTrigger:{trigger:'#proc', start:'top 80%', end:'bottom 45%', scrub:true, onUpdate:function(s){ ps.forEach(function(x,i){ x.classList.toggle('lit', s.progress >= i/(ps.length-1) - .02); }); }}});

  }catch(err){ if(window.console) console.warn("section skipped", err.message); }
  try{
  /* ---------- CTA heading scales in ---------- */
  gsap.fromTo('#ctaH', {scale:.88}, {scale:1, ease:'none', transformOrigin:'0% 100%', scrollTrigger:{trigger:'#demo', start:'top bottom', end:'top 30%', scrub:true}});

  }catch(err){ if(window.console) console.warn("section skipped", err.message); }
  try{
  /* ---------- cursor + magnetic buttons ---------- */
  if (!touch){
    var dot = document.querySelector('.cur'), ringEl = document.querySelector('.cur-ring'), label = ringEl.querySelector('span');
    var qx = gsap.quickTo(dot,'x',{duration:.12}), qy = gsap.quickTo(dot,'y',{duration:.12});
    var rx = gsap.quickTo(ringEl,'x',{duration:.45,ease:'power3'}), ry = gsap.quickTo(ringEl,'y',{duration:.45,ease:'power3'});
    window.addEventListener('pointermove', function(e){ qx(e.clientX); qy(e.clientY); rx(e.clientX); ry(e.clientY); }, __opt);
    document.querySelectorAll('[data-cursor]').forEach(function(el){
      el.addEventListener('pointerenter', function(){ label.textContent = el.getAttribute('data-cursor'); ringEl.classList.add('big'); }, __opt);
      el.addEventListener('pointerleave', function(){ ringEl.classList.remove('big'); }, __opt);
    });
    document.querySelectorAll('.magnet').forEach(function(m){
      var b = m.firstElementChild, mx2 = gsap.quickTo(b,'x',{duration:.5,ease:'elastic.out(1,.4)'}), my2 = gsap.quickTo(b,'y',{duration:.5,ease:'elastic.out(1,.4)'});
      m.addEventListener('pointermove', function(e){ var r=m.getBoundingClientRect(); mx2((e.clientX-r.left-r.width/2)*.35); my2((e.clientY-r.top-r.height/2)*.45); }, __opt);
      m.addEventListener('pointerleave', function(){ mx2(0); my2(0); }, __opt);
    });
  }

  window.addEventListener('load', function(){ ScrollTrigger.refresh(); }, __opt);
  setTimeout(function(){ if (__alive) ScrollTrigger.refresh(); }, 700);

  }catch(err){ if(window.console) console.warn("section skipped", err.message); }

  });
  return function cleanup(){
    __alive = false; __ac.abort();
    __cleanups.forEach(function(f){ try { f(); } catch(e){} });
    __ctx.revert();
    document.body.classList.remove('loading'); document.body.style.overflow = '';
  };
}
