/* Theme switch, the section rail, the hero artwork, the chapter map readout and the nav highlight.
   The page reads correctly without any of it. */
(function () {
  "use strict";
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- theme: auto (follow the device), light or dark -----------------------
  var schemeButtons = document.querySelectorAll(".scheme button");
  function applyScheme(s, save) {
    if (s === "light" || s === "dark") root.setAttribute("data-theme", s); else root.removeAttribute("data-theme");
    schemeButtons.forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.scheme === s ? "true" : "false"); });
    if (!save) return;
    try { if (s === "auto") localStorage.removeItem("theme"); else localStorage.setItem("theme", s); } catch (e) {}
  }
  var saved = "auto";
  try { var v = localStorage.getItem("theme"); if (v === "light" || v === "dark") saved = v; } catch (e) {}
  applyScheme(saved, false);
  schemeButtons.forEach(function (b) { b.addEventListener("click", function () { applyScheme(b.dataset.scheme, true); }); });

  // ---- section rail ---------------------------------------------------------
  var rail = document.getElementById("rail"), prev = document.getElementById("rail-prev"), next = document.getElementById("rail-next");
  if (rail && prev && next) {
    var step = function () { var c = rail.querySelector(".card"); return c ? c.getBoundingClientRect().width + 16 : 300; };
    var sync = function () {
      prev.disabled = rail.scrollLeft <= 2;
      next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2;
    };
    prev.addEventListener("click", function () { rail.scrollBy({ left: -step(), behavior: reduce ? "auto" : "smooth" }); });
    next.addEventListener("click", function () { rail.scrollBy({ left: step(), behavior: reduce ? "auto" : "smooth" }); });
    rail.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    sync();
  }

  // ---- hero artwork: points spreading from a single origin ------------------
  function mulberry32(a) {
    return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  }
  function gauss(r) { var u = 0, v = 0; while (!u) u = r(); while (!v) v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
  function drawSky() {
    var cv = document.getElementById("sky");
    if (!cv || !cv.getContext) return;
    var w = cv.clientWidth, h = cv.clientHeight;
    if (!w || !h) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    var g = cv.getContext("2d");
    g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, w, h);

    var narrow = w < 900;
    var ox = w * (narrow ? 0.08 : 0.52), oy = h * (narrow ? 0.95 : 0.84);
    var ex = w * (narrow ? 0.95 : 0.97), ey = h * (narrow ? 0.76 : 0.16);
    var curve = function (t) { return { x: ox + (ex - ox) * t, y: oy - (oy - ey) * (1 - Math.pow(1 - t, 2.2)) }; };
    var rnd = mulberry32(20260930);

    // axes with ticks
    g.strokeStyle = "rgba(238,243,249,0.16)"; g.lineWidth = 1;
    g.beginPath(); g.moveTo(ox, oy); g.lineTo(w, oy); g.moveTo(ox, oy); g.lineTo(ox, narrow ? h * 0.70 : h * 0.06); g.stroke();
    g.strokeStyle = "rgba(238,243,249,0.10)"; g.beginPath();
    for (var tx = ox + 48; tx < w; tx += 48) { g.moveTo(tx, oy); g.lineTo(tx, oy + 6); }
    for (var ty = oy - 48; ty > (narrow ? h * 0.70 : h * 0.06); ty -= 48) { g.moveTo(ox, ty); g.lineTo(ox - 6, ty); }
    g.stroke();

    // points scatter more the further they are from the origin
    var spread = narrow ? h * 0.075 : h * 0.28, N = narrow ? 140 : 250, pts = [];
    for (var i = 0; i < N; i++) {
      var t = Math.pow(rnd(), 0.85), c = curve(t), s = spread * (0.04 + 0.96 * t);
      var x = Math.max(2, Math.min(w - 2, c.x + gauss(rnd) * s)), y = Math.max(2, Math.min(h - 2, c.y + gauss(rnd) * s * 0.8));
      pts.push({ x: x, y: y, r: 0.5 + rnd() * 1.9, a: 0.25 + rnd() * 0.7, warm: rnd() < 0.06 });
    }
    var maxd = Math.min(w, h) * 0.14; g.lineWidth = 0.8;
    for (var a = 0; a < pts.length; a++) for (var b = a + 1; b < pts.length; b++) {
      var dx = pts[a].x - pts[b].x, dy = pts[a].y - pts[b].y, d = Math.sqrt(dx * dx + dy * dy);
      if (d < maxd) { g.strokeStyle = "rgba(120,160,215," + (0.24 * (1 - d / maxd)).toFixed(3) + ")"; g.beginPath(); g.moveTo(pts[a].x, pts[a].y); g.lineTo(pts[b].x, pts[b].y); g.stroke(); }
    }
    // the curve itself
    var grad = g.createLinearGradient(ox, oy, ex, ey);
    grad.addColorStop(0, "rgba(240,149,95,0.9)"); grad.addColorStop(1, "rgba(147,180,226,0.55)");
    g.strokeStyle = grad; g.lineWidth = 2; g.beginPath();
    for (var k = 0; k <= 60; k++) { var q = curve(k / 60); if (k) g.lineTo(q.x, q.y); else g.moveTo(q.x, q.y); }
    g.stroke();
    pts.forEach(function (p) { g.fillStyle = p.warm ? "rgba(240,149,95," + p.a + ")" : "rgba(190,213,244," + p.a + ")"; g.beginPath(); g.arc(p.x, p.y, p.r, 0, 6.2832); g.fill(); });
    // origin
    g.strokeStyle = "rgba(240,149,95,0.18)"; g.lineWidth = 1.5;
    [26, 15].forEach(function (r) { g.beginPath(); g.arc(ox, oy, r, 0, 6.2832); g.stroke(); });
    g.fillStyle = "#F0955F"; g.beginPath(); g.arc(ox, oy, 5.5, 0, 6.2832); g.fill();
    g.fillStyle = "rgba(238,243,249,0.75)"; g.font = "12px 'IBM Plex Mono', ui-monospace, monospace";
    g.fillText("(0, 0)", ox + 14, oy + 24);
  }
  drawSky();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawSky);
  var skyTimer;
  window.addEventListener("resize", function () { clearTimeout(skyTimer); skyTimer = setTimeout(drawSky, 120); });

  // ---- chapter map readout ---------------------------------------------------
  var list = document.getElementById("chapters");
  var readout = document.getElementById("readout");
  function plural(n, word) { return n + " " + word + (n === 1 ? "" : "s"); }
  function metaText(d) {
    var blocks = parseInt(d.blocks, 10), figs = parseInt(d.figs, 10), prac = parseInt(d.practice, 10);
    var code = d.kind === "nb" ? "Code and notebook, " + plural(blocks, "code block")
             : d.kind === "code" ? "Code, " + plural(blocks, "code block") + ", no notebook"
             : "No companion directory";
    return [code, figs ? plural(figs, "figure") : "no figures", plural(prac, "interview question") + " start here"].join(" · ");
  }
  function show(btn) {
    if (!readout) return;
    var d = btn.dataset;
    readout.textContent = "";
    [["ro-ch", "Chapter " + d.ch], ["ro-title", d.title], ["ro-meta", metaText(d)]].forEach(function (p) {
      var s = document.createElement("span");
      s.className = p[0]; s.textContent = p[1];
      readout.appendChild(s);
    });
    list.querySelectorAll(".ch").forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
  }
  if (list) {
    list.addEventListener("click", function (e) { var b = e.target.closest(".ch"); if (b) show(b); });
    list.addEventListener("mouseover", function (e) { var b = e.target.closest(".ch"); if (b) show(b); });
    list.addEventListener("focusin", function (e) { var b = e.target.closest(".ch"); if (b) show(b); });
  }

  // ---- highlight the section in view ----------------------------------------
  var links = {};
  document.querySelectorAll(".nav a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        Object.keys(links).forEach(function (id) { links[id].removeAttribute("aria-current"); });
        var a = links[en.target.id];
        if (a) a.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }
})();
