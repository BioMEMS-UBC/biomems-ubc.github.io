// BioMEMS Lab site behaviour: theme, navigation, scroll effects,
// publication filters and click-to-load videos. No dependencies.
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) {
      return null;
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    // ---------------------------------------------------------- theme
    var toggle = document.querySelector("[data-theme-toggle]");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var root = document.documentElement;
        var current = root.dataset.theme ||
          (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        var next = current === "dark" ? "light" : "dark";
        root.dataset.theme = next;
        store("theme", next);
      });
    }

    // ---------------------------------------------------------- mobile nav
    var nav = document.querySelector("[data-nav]");
    var navToggle = document.querySelector("[data-nav-toggle]");
    if (nav && navToggle) {
      navToggle.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      nav.addEventListener("click", function (e) {
        if (e.target.closest("a")) {
          nav.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    }

    // ---------------------------------------------------------- header shadow
    var header = document.querySelector("[data-header]");
    function onScroll() {
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // ---------------------------------------------------------- reveal on scroll
    var revealables = document.querySelectorAll("[data-reveal]");
    if ("IntersectionObserver" in window && !reduceMotion) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
      revealables.forEach(function (el) { io.observe(el); });
    } else {
      revealables.forEach(function (el) { el.classList.add("is-visible"); });
    }

    // ---------------------------------------------------------- count-up stats
    var counters = document.querySelectorAll("[data-count-to]");
    if (counters.length && "IntersectionObserver" in window && !reduceMotion) {
      var co = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var target = parseInt(el.dataset.countTo, 10) || 0;
          var start = performance.now();
          var duration = 1200;
          (function tick(now) {
            var t = Math.min(1, (now - start) / duration);
            var eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(target * eased);
            if (t < 1) requestAnimationFrame(tick);
          })(start);
          co.unobserve(el);
        });
      }, { threshold: 0.6 });
      counters.forEach(function (el) { el.textContent = "0"; co.observe(el); });
    }

    // ---------------------------------------------------------- scrollspy for side navigation
    function scrollspy(linkSelector, sectionSelector, attr) {
      var links = document.querySelectorAll(linkSelector);
      var sections = document.querySelectorAll(sectionSelector);
      if (!links.length || !sections.length || !("IntersectionObserver" in window)) return;
      var visible = {};
      var so = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          visible[entry.target.getAttribute(attr)] = entry.isIntersecting;
        });
        var active = null;
        sections.forEach(function (s) {
          var id = s.getAttribute(attr);
          if (!active && visible[id] && !s.hidden) active = id;
        });
        if (!active) return;
        links.forEach(function (a) {
          var on = a.getAttribute(linkSelector.slice(1, -1)) === active;
          a.classList.toggle("is-active", on);
          if (on && a.scrollIntoView && window.innerWidth <= 900) {
            var bar = a.closest("[data-jump]");
            if (bar) bar.scrollTo({ left: a.offsetLeft - 16, behavior: reduceMotion ? "auto" : "smooth" });
          }
        });
      }, { rootMargin: "-20% 0px -60% 0px" });
      sections.forEach(function (s) { so.observe(s); });
    }
    scrollspy("[data-toc-link]", "[data-toc-section]", "data-toc-section");
    scrollspy("[data-jump-link]", "[data-section]", "data-section");

    // ---------------------------------------------------------- publication filters
    var pubs = document.querySelector("[data-pubs]");
    if (pubs) {
      var search = pubs.querySelector("[data-pub-search]");
      var chips = pubs.querySelectorAll("[data-topic]");
      var status = pubs.querySelector("[data-pub-status]");
      var reset = pubs.querySelector("[data-pub-reset]");
      var empty = pubs.querySelector("[data-pub-empty]");
      var items = Array.prototype.slice.call(pubs.querySelectorAll(".pub"));
      var total = items.length;
      items.forEach(function (li) { li._text = li.textContent.toLowerCase().replace(/\s+/g, " "); });

      var params = new URLSearchParams(window.location.search);
      if (params.get("q")) search.value = params.get("q");
      if (params.get("search")) search.value = params.get("search").replace(/"/g, "");
      var activeTopics = (params.get("topic") || "").split(",").filter(Boolean);
      chips.forEach(function (c) {
        c.setAttribute("aria-pressed", activeTopics.indexOf(c.dataset.topic) > -1 ? "true" : "false");
      });

      function apply(updateUrl) {
        var terms = search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
        var topics = [];
        chips.forEach(function (c) { if (c.getAttribute("aria-pressed") === "true") topics.push(c.dataset.topic); });
        var shown = 0;
        items.forEach(function (li) {
          var ok = terms.every(function (t) { return li._text.indexOf(t) > -1; });
          if (ok && topics.length) {
            var mine = (li.dataset.topics || "").split(" ");
            ok = topics.some(function (t) { return mine.indexOf(t) > -1; });
          }
          li.hidden = !ok;
          if (ok) shown++;
        });
        pubs.querySelectorAll("[data-year-group]").forEach(function (g) {
          g.hidden = !g.querySelector(".pub:not([hidden])");
        });
        pubs.querySelectorAll("[data-section]").forEach(function (s) {
          var n = s.querySelectorAll(".pub:not([hidden])").length;
          s.hidden = n === 0;
          var count = pubs.querySelector('[data-count="' + s.dataset.section + '"]');
          if (count) count.textContent = n;
          var link = pubs.querySelector('[data-jump-link="' + s.dataset.section + '"]');
          if (link) link.parentElement.hidden = n === 0;
        });
        var filtered = terms.length || topics.length;
        status.textContent = filtered ? "Showing " + shown + " of " + total + " publications" : total + " publications";
        reset.hidden = !filtered;
        empty.hidden = shown > 0;
        if (updateUrl && window.history.replaceState) {
          var p = new URLSearchParams();
          if (search.value.trim()) p.set("q", search.value.trim());
          if (topics.length) p.set("topic", topics.join(","));
          var qs = p.toString();
          history.replaceState(null, "", window.location.pathname + (qs ? "?" + qs : "") + window.location.hash);
        }
      }

      var timer;
      search.addEventListener("input", function () {
        clearTimeout(timer);
        timer = setTimeout(function () { apply(true); }, 120);
      });
      chips.forEach(function (c) {
        c.addEventListener("click", function () {
          c.setAttribute("aria-pressed", c.getAttribute("aria-pressed") === "true" ? "false" : "true");
          apply(true);
        });
      });
      reset.addEventListener("click", function () {
        search.value = "";
        chips.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
        apply(true);
        search.focus();
      });
      apply(false);
    }

    // ---------------------------------------------------------- click-to-load YouTube
    document.querySelectorAll("[data-youtube]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube-nocookie.com/embed/" + btn.dataset.youtube + "?autoplay=1&rel=0";
        iframe.title = "YouTube video";
        iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        var holder = document.createElement("div");
        holder.className = "video-frame";
        holder.appendChild(iframe);
        btn.replaceWith(holder);
      });
    });
    document.querySelectorAll(".video figcaption").forEach(function (cap) {
      cap.addEventListener("click", function () { cap.classList.toggle("is-expanded"); });
    });
  });
})();
