/*!
 * fullPage 3.0.5 - Extensions 0.1.8
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo
 */
! function(e, t, n, o, r) { "function" == typeof define && define.amd ? define(function() { return e.fullpage = o(t, n), e.fullpage }) : "object" == typeof exports ? module.exports = o(t, n) : t.fullpage = o(t, n) }(this, window, document, function(Ut, _t) { "use strict"; var Qt = "fullpage-wrapper",
        Jt = "." + Qt,
        Kt = "fp-responsive",
        $t = "fp-notransition",
        qt = "fp-destroyed",
        en = "fp-enabled",
        tn = "fp-viewing",
        nn = "active",
        on = "." + nn,
        rn = "fp-completely",
        ln = "fp-section",
        an = "." + ln,
        sn = an + on,
        cn = "fp-tableCell",
        un = "." + cn,
        dn = "fp-auto-height",
        fn = "fp-normal-scroll",
        vn = "fp-nav",
        pn = "#" + vn,
        hn = "fp-tooltip",
        gn = "fp-slide",
        mn = "." + gn,
        Sn = mn + on,
        bn = "fp-slides",
        yn = "." + bn,
        wn = "fp-slidesContainer",
        En = "." + wn,
        xn = "fp-table",
        An = "fp-slidesNav",
        Ln = "." + An,
        Mn = Ln + " a",
        e = "fp-controlArrow",
        Tn = "." + e,
        On = "fp-prev",
        kn = Tn + ".fp-prev",
        Cn = Tn + ".fp-next";

    function Hn(e, t) { Ut.console && Ut.console[e] && Ut.console[e]("fullPage: " + t) }

    function Rn(e, t) { return (t = 1 < arguments.length ? t : _t) ? t.querySelectorAll(e) : null }

    function In(e) { e = e || {}; for (var t = 1, n = arguments.length; t < n; ++t) { var o = arguments[t]; if (o)
                for (var r in o) o.hasOwnProperty(r) && ("[object Object]" !== Object.prototype.toString.call(o[r]) ? e[r] = o[r] : e[r] = In(e[r], o[r])) } return e }

    function zn(e, t) { return null != e && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className)) }

    function Bn() { return "innerHeight" in Ut ? Ut.innerHeight : _t.documentElement.offsetHeight }

    function Nn(e, t) { var n; for (n in e = l(e), t)
            if (t.hasOwnProperty(n) && null !== n)
                for (var o = 0; o < e.length; o++) { e[o].style[n] = t[n] }
            return e }

    function n(e, t, n) { for (var o = e[n]; o && !io(o, t);) o = o[n]; return o }

    function jn(e, t) { return n(e, t, "previousElementSibling") }

    function Pn(e, t) { return n(e, t, "nextElementSibling") }

    function Wn(e, t) { if (null == t) return e.previousElementSibling; var n = Wn(e); return n && io(n, t) ? n : null }

    function Yn(e, t) { if (null == t) return e.nextElementSibling; var n = Yn(e); return n && io(n, t) ? n : null }

    function Dn(e) { return e[e.length - 1] }

    function Xn(e, t) { e = i(e) ? e[0] : e; for (var n = null != t ? Rn(t, e.parentNode) : e.parentNode.childNodes, o = 0, r = 0; r < n.length; r++) { if (n[r] == e) return o;
            1 == n[r].nodeType && o++ } return -1 }

    function l(e) { return i(e) ? e : [e] }

    function Vn(e) { e = l(e); for (var t = 0; t < e.length; t++) e[t].style.display = "none"; return e }

    function Zn(e) { e = l(e); for (var t = 0; t < e.length; t++) e[t].style.display = "block"; return e }

    function i(e) { return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e) }

    function Gn(e, t) { e = l(e); for (var n = 0; n < e.length; n++) { var o = e[n];
            o.classList ? o.classList.add(t) : o.className += " " + t } return e }

    function Fn(e, t) { e = l(e); for (var n = t.split(" "), o = 0; o < n.length; o++) { t = n[o]; for (var r = 0; r < e.length; r++) { var i = e[r];
                i.classList ? i.classList.remove(t) : i.className = i.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ") } } return e }

    function Un(e, t) { t.appendChild(e) }

    function o(e, t, n) { var o;
        t = t || _t.createElement("div"); for (var r = 0; r < e.length; r++) { var i = e[r];
            (n && !r || !n) && (o = t.cloneNode(!0), i.parentNode.insertBefore(o, i)), o.appendChild(i) } return e }

    function _n(e, t) { o(e, t, !0) }

    function Qn(e, t) { for ("string" == typeof t && (t = ao(t)), e.appendChild(t); e.firstChild !== t;) t.appendChild(e.firstChild) }

    function Jn(e) { for (var t = _t.createDocumentFragment(); e.firstChild;) t.appendChild(e.firstChild);
        e.parentNode.replaceChild(t, e) }

    function Kn(e, t) { return e && 1 === e.nodeType ? io(e, t) ? e : Kn(e.parentNode, t) : null }

    function $n(e, t) { r(e, e.nextSibling, t) }

    function qn(e, t) { r(e, e, t) }

    function r(e, t, n) { i(n) || ("string" == typeof n && (n = ao(n)), n = [n]); for (var o = 0; o < n.length; o++) e.parentNode.insertBefore(n[o], t) }

    function eo() { var e = _t.documentElement; return (Ut.pageYOffset || e.scrollTop) - (e.clientTop || 0) }

    function to(t) { return Array.prototype.filter.call(t.parentNode.children, function(e) { return e !== t }) }

    function no(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1 }

    function oo(e) { if ("function" == typeof e) return !0; var t = Object.prototype.toString(e); return "[object Function]" === t || "[object GeneratorFunction]" === t }

    function ro(e, t, n) { var o;
        n = void 0 === n ? {} : n, "function" == typeof Ut.CustomEvent ? o = new CustomEvent(t, { detail: n }) : (o = _t.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n), e.dispatchEvent(o) }

    function io(e, t) { return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t) }

    function lo(e, t) { if ("boolean" == typeof t)
            for (var n = 0; n < e.length; n++) e[n].style.display = t ? "block" : "none"; return e }

    function ao(e) { var t = _t.createElement("div"); return t.innerHTML = e.trim(), t.firstChild }

    function so(e) { e = l(e); for (var t = 0; t < e.length; t++) { var n = e[t];
            n && n.parentElement && n.parentNode.removeChild(n) } }

    function a(e, t, n) { for (var o = e[n], r = []; o;)(io(o, t) || null == t) && r.push(o), o = o[n]; return r }

    function co(e, t) { return a(e, t, "nextElementSibling") }

    function uo(e, t) { return a(e, t, "previousElementSibling") }

    function fo(e, t) { e.insertBefore(t, e.firstChild) } return Ut.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(e, t) { t = t || Ut; for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this) }), Ut.fp_utils = { $: Rn, deepExtend: In, hasClass: zn, getWindowHeight: Bn, css: Nn, until: n, prevUntil: jn, nextUntil: Pn, prev: Wn, next: Yn, last: Dn, index: Xn, getList: l, hide: Vn, show: Zn, isArrayOrList: i, addClass: Gn, removeClass: Fn, appendTo: Un, wrap: o, wrapAll: _n, wrapInner: Qn, unwrap: Jn, closest: Kn, after: $n, before: qn, insertBefore: r, getScrollTop: eo, siblings: to, preventDefault: no, isFunction: oo, trigger: ro, matches: io, toggle: lo, createElementFromHTML: ao, remove: so, filter: function(e, t) { Array.prototype.filter.call(e, t) }, untilAll: a, nextAll: co, prevAll: uo, showError: Hn, prependTo: fo, toggleClass: function(e, t, n) { if (e.classList && null == n) e.classList.toggle(t);
                else { var o = zn(e, t);
                    o && null == n || !n ? Fn(e, t) : (!o && null == n || n) && Gn(e, t) } } },
        function(e, g) { var t = g && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(g.licenseKey) || -1 < _t.domain.indexOf("alvarotrigo.com"); if (!zn(Rn("html"), en)) { var r = Rn("html, body"),
                    m = Rn("body")[0],
                    S = {};
                g = In({ menu: !1, anchors: [], lockAnchors: !1, navigation: !1, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: !1, slidesNavigation: !1, slidesNavPosition: "bottom", scrollBar: !1, hybrid: !1, css3: !0, scrollingSpeed: 700, autoScrolling: !0, fitToSection: !0, fitToSectionDelay: 1e3, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: !1, loopTop: !1, loopHorizontal: !0, continuousVertical: !1, continuousHorizontal: !1, scrollHorizontally: !1, interlockedSlides: !1, dragAndMove: !1, offsetSections: !1, resetSliders: !1, fadingEffect: !1, normalScrollElements: null, scrollOverflow: !1, scrollOverflowReset: !1, scrollOverflowHandler: Ut.fp_scrolloverflow ? Ut.fp_scrolloverflow.iscrollHandler : null, scrollOverflowOptions: null, touchSensitivity: 5, touchWrapper: "string" == typeof e ? Rn(e)[0] : e, normalScrollElementTouchThreshold: 5, bigSectionsDestination: null, keyboardScrolling: !0, animateAnchor: !0, recordHistory: !0, controlArrows: !0, controlArrowColor: "#fff", verticalCentered: !0, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: !1, parallax: !1, parallaxOptions: { type: "reveal", percentage: 62, property: "translate" }, cards: !1, cardsOptions: { perspective: 100, fadeContent: !0, fadeBackground: !0 }, sectionSelector: ".section", slideSelector: ".slide", v2compatible: !1, afterLoad: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, lazyLoading: !0 }, g); var b, l, c, n, a = !1,
                    o = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                    i = "ontouchstart" in Ut || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
                    y = "string" == typeof e ? Rn(e)[0] : e,
                    w = Bn(),
                    E = !1,
                    s = !0,
                    x = !0,
                    u = [],
                    d = { m: { up: !0, down: !0, left: !0, right: !0 } };
                d.k = In({}, d.m); var f, v, p, h, A, L, M, T, O = kt(),
                    k = { touchmove: "ontouchmove" in Ut ? "touchmove" : O.move, touchstart: "ontouchstart" in Ut ? "touchstart" : O.down },
                    C = !1,
                    H = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                    R = !1; try { var I = Object.defineProperty({}, "passive", { get: function() { R = !0 } });
                    Ut.addEventListener("testPassive", null, I), Ut.removeEventListener("testPassive", null, I) } catch (e) {} var z, B = In({}, g),
                    N = !1,
                    j = !0,
                    P = {};
                Dt(), Ut.fp_easings = In(Ut.fp_easings, { easeInOutCubic: function(e, t, n, o) { return (e /= o / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t } }), y && (S.version = "3.0.5", S.setAutoScrolling = K, S.setRecordHistory = $, S.setScrollingSpeed = q, S.setFitToSection = ee, S.setLockAnchors = function(e) { g.lockAnchors = e }, S.setMouseWheelScrolling = te, S.setAllowScrolling = ne, S.setKeyboardScrolling = re, S.moveSectionUp = ie, S.moveSectionDown = le, S.silentMoveTo = ae, S.moveTo = se, S.moveSlideRight = ce, S.moveSlideLeft = ue, S.fitToSection = xe, S.reBuild = de, S.setResponsive = fe, S.getFullpageData = function() { return { options: g, internals: { container: y, canScroll: x, isScrollAllowed: d, getDestinationPosition: Ie, isTouch: i, c: Je, getXmovement: St, removeAnimation: ht, getTransforms: It, lazyLoad: De, addAnimation: pt, performHorizontalMove: dt, landscapeScroll: st, silentLandscapeScroll: Ht, keepSlidesPosition: Re, silentScroll: Rt, styleSlides: me, styleSection: be, scrollHandler: Ee, getEventsPage: Ct, getMSPointer: kt, isReallyTouch: Te, usingExtension: Nt, toggleControlArrows: ct, touchStartHandler: Oe, touchMoveHandler: Me } } }, S.destroy = function(e) { ro(y, "destroy", e), K(!1, "internal"), ne(!0), oe(!1), re(!1), Gn(y, qt), clearTimeout(h), clearTimeout(p), clearTimeout(v), clearTimeout(A), clearTimeout(L), Ut.removeEventListener("scroll", Ee), Ut.removeEventListener("hashchange", qe), Ut.removeEventListener("resize", ft), _t.removeEventListener("keydown", tt), _t.removeEventListener("keyup", nt), ["click", "touchstart"].forEach(function(e) { _t.removeEventListener(e, ve) }), ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function(e) { _t.removeEventListener(e, he, !0) }), Nt("dragAndMove") && S.dragAndMove.destroy(), clearTimeout(h), clearTimeout(p), e && (Rt(0), Rn("img[data-src], source[data-src], audio[data-src], iframe[data-src]", y).forEach(function(e) { Ye(e, "src") }), Rn("img[data-srcset]").forEach(function(e) { Ye(e, "srcset") }), so(Rn(pn + ", " + Ln + ", " + Tn)), Nn(Rn(an), { height: "", "background-color": "", padding: "" }), Nn(Rn(mn), { width: "" }), Nn(y, { height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), Nn(r, { overflow: "", height: "" }), Fn(Rn("html"), en), Fn(m, Kt), m.className.split(/\s+/).forEach(function(e) { 0 === e.indexOf(tn) && Fn(m, e) }), Rn(an + ", " + mn).forEach(function(e) { g.scrollOverflowHandler && g.scrollOverflow && g.scrollOverflowHandler.remove(e), Fn(e, xn + " " + nn + " " + rn); var t = e.getAttribute("data-fp-styles");
                        t && e.setAttribute("style", e.getAttribute("data-fp-styles")), zn(e, ln) && !N && e.removeAttribute("data-anchor") }), Bt(y), [un, En, yn].forEach(function(e) { Rn(e, y).forEach(function(e) { Jn(e) }) }), Ut.scrollTo(0, 0), [ln, gn, wn].forEach(function(e) { Fn(Rn("." + e), e) })) }, S.getActiveSection = function() { return new Gt(Rn(sn)[0]) }, S.getActiveSlide = function() { return je(Rn(Sn, Rn(sn)[0])[0]) }, S.landscapeScroll = st, S.test = { top: "0px", translate3d: "translate3d(0px, 0px, 0px)", translate3dH: function() { for (var e = [], t = 0; t < Rn(g.sectionSelector, y).length; t++) e.push("translate3d(0px, 0px, 0px)"); return e }(), left: function() { for (var e = [], t = 0; t < Rn(g.sectionSelector, y).length; t++) e.push(0); return e }(), options: g, setAutoScrolling: K }, S.shared = { afterRenderActions: we }, Ut.fullpage_api = S, g.$ && (g.$.fn.fullpage = S), ge("continuousHorizontal"), ge("scrollHorizontally"), ge("resetSliders"), ge("interlockedSlides"), ge("responsiveSlides"), ge("fadingEffect"), ge("dragAndMove"), ge("offsetSections"), ge("scrollOverflowReset"), ge("parallax"), ge("cards"), Nt("dragAndMove") && S.dragAndMove.init(), g.css3 && (g.css3 = function() { var e, t = _t.createElement("p"),
                        n = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" }; for (var o in t.style.display = "block", _t.body.insertBefore(t, null), n) void 0 !== t.style[o] && (t.style[o] = "translate3d(1px,1px,1px)", e = Ut.getComputedStyle(t).getPropertyValue(n[o])); return _t.body.removeChild(t), void 0 !== e && 0 < e.length && "none" !== e }()), g.scrollBar = g.scrollBar || g.hybrid, function() { if (!g.anchors.length) { var e = "[data-anchor]",
                            t = Rn(g.sectionSelector.split(",").join(e + ",") + e, y);
                        t.length && (N = !0, t.forEach(function(e) { g.anchors.push(e.getAttribute("data-anchor").toString()) })) } if (!g.navigationTooltips.length) { var e = "[data-tooltip]",
                            n = Rn(g.sectionSelector.split(",").join(e + ",") + e, y);
                        n.length && n.forEach(function(e) { g.navigationTooltips.push(e.getAttribute("data-tooltip").toString()) }) } }(), function() { Nn(y, { height: "100%", position: "relative" }), Gn(y, Qt), Gn(Rn("html"), en), w = Bn(), Fn(y, qt), Gn(Rn(g.sectionSelector, y), ln), Gn(Rn(g.slideSelector, y), gn), jt("parallax", "init"); for (var e = Rn(an), t = 0; t < e.length; t++) { var n = t,
                            o = e[t],
                            r = Rn(mn, o),
                            i = r.length;
                        o.setAttribute("data-fp-styles", o.getAttribute("style")), be(o, n), l = o, a = n, void 0 !== g.anchors[a] && zn(l, nn) && gt(g.anchors[a], a), g.menu && g.css3 && null != Kn(Rn(g.menu)[0], Jt) && Rn(g.menu).forEach(function(e) { m.appendChild(e) }), 0 < i ? me(o, r, i) : g.verticalCentered && bt(o) } var l, a;
                    g.fixedElements && g.css3 && Rn(g.fixedElements).forEach(function(e) { m.appendChild(e) }), g.navigation && function() { var e = _t.createElement("div");
                        e.setAttribute("id", vn); var t = _t.createElement("ul");
                        e.appendChild(t), Un(e, m); var n = Rn(pn)[0];
                        Gn(n, "fp-" + g.navigationPosition), g.showActiveTooltip && Gn(n, "fp-show-active"); for (var o = "", r = 0; r < Rn(an).length; r++) { var i = "";
                            g.anchors.length && (i = g.anchors[r]), o += '<li><a href="#' + i + '"><span class="fp-sr-only">' + ye(r, "Section") + "</span><span></span></a>"; var l = g.navigationTooltips[r];
                            void 0 !== l && "" !== l && (o += '<div class="' + hn + " fp-" + g.navigationPosition + '">' + l + "</div>"), o += "</li>" }
                        Rn("ul", n)[0].innerHTML = o, Nn(Rn(pn), { "margin-top": "-" + Rn(pn)[0].offsetHeight / 2 + "px" }), Gn(Rn("a", Rn("li", Rn(pn)[0])[Xn(Rn(sn)[0], an)]), nn) }(), Rn('iframe[src*="youtube.com/embed/"]', y).forEach(function(e) { var t, n, o;
                        n = "enablejsapi=1", o = (t = e).getAttribute("src"), t.setAttribute("src", o + (/\?/.test(o) ? "&" : "?") + n) }), g.fadingEffect && S.fadingEffect && S.fadingEffect.apply(), Nt("cards") && S.cards.init(), g.scrollOverflow && (f = g.scrollOverflowHandler.init(g)) }(), ne(!0), oe(!0), K(g.autoScrolling, "internal"), vt(), Ot(), "complete" === _t.readyState && $e(), Ut.addEventListener("load", $e), g.scrollOverflow || we(), Ut.addEventListener("scroll", Ee), Ut.addEventListener("hashchange", qe), Ut.addEventListener("blur", lt), Ut.addEventListener("resize", ft), _t.addEventListener("keydown", tt), _t.addEventListener("keyup", nt), ["click", "touchstart"].forEach(function(e) { _t.addEventListener(e, ve) }), g.normalScrollElements && (["mouseenter", "touchstart"].forEach(function(e) { pe(e, !1) }), ["mouseleave", "touchend"].forEach(function(e) { pe(e, !0) })), Nt("dragAndMove") && S.dragAndMove.turnOffTouch()); var W, Y, D, X = !1,
                    V = 0,
                    Z = 0,
                    G = 0,
                    F = 0,
                    U = (new Date).getTime(),
                    _ = 0,
                    Q = 0,
                    J = w; return S }

            function K(e, t) { e || Rt(0), Yt("autoScrolling", e, t); var n = Rn(sn)[0]; if (g.autoScrolling && !g.scrollBar) Nn(r, { overflow: "hidden", height: "100%" }), $(B.recordHistory, "internal"), Nn(y, { "-ms-touch-action": "none", "touch-action": "none" }), null != n && Rt(n.offsetTop);
                else if (Nn(r, { overflow: "visible", height: "initial" }), $(!!g.autoScrolling && B.recordHistory, "internal"), Nn(y, { "-ms-touch-action": "", "touch-action": "" }), Bt(y), null != n) { var o = Pe(n.offsetTop);
                    o.element.scrollTo(0, o.options) }
                ro(y, "setAutoScrolling", e) }

            function $(e, t) { Yt("recordHistory", e, t) }

            function q(e, t) { "internal" !== t && Nt("fadingEffect") && S.fadingEffect.update(e), Nt("cards") && S.cards.update(e), Yt("scrollingSpeed", e, t) }

            function ee(e, t) { Yt("fitToSection", e, t) }

            function te(e) { e ? (function() { var e, t = "";
                    Ut.addEventListener ? e = "addEventListener" : (e = "attachEvent", t = "on"); var n = "onwheel" in _t.createElement("div") ? "wheel" : void 0 !== _t.onmousewheel ? "mousewheel" : "DOMMouseScroll",
                        o = !!R && { passive: !1 }; "DOMMouseScroll" == n ? _t[e](t + "MozMousePixelScroll", Ce, o) : _t[e](t + n, Ce, o) }(), y.addEventListener("mousedown", ot), y.addEventListener("mouseup", rt)) : (_t.addEventListener ? (_t.removeEventListener("mousewheel", Ce, !1), _t.removeEventListener("wheel", Ce, !1), _t.removeEventListener("MozMousePixelScroll", Ce, !1)) : _t.detachEvent("onmousewheel", Ce), y.removeEventListener("mousedown", ot), y.removeEventListener("mouseup", rt)) }

            function ne(t, e) { void 0 !== e ? (e = e.replace(/ /g, "").split(",")).forEach(function(e) { zt(t, e, "m") }) : zt(t, "all", "m"), ro(y, "setAllowScrolling", { value: t, directions: e }) }

            function oe(e) { e ? (te(!0), function() { if (o || i) { g.autoScrolling && (m.removeEventListener(k.touchmove, Le, { passive: !1 }), m.addEventListener(k.touchmove, Le, { passive: !1 })); var e = g.touchWrapper;
                        e.removeEventListener(k.touchstart, Oe), e.removeEventListener(k.touchmove, Me, { passive: !1 }), e.addEventListener(k.touchstart, Oe), e.addEventListener(k.touchmove, Me, { passive: !1 }) } }()) : (te(!1), function() { if (o || i) { g.autoScrolling && (m.removeEventListener(k.touchmove, Me, { passive: !1 }), m.removeEventListener(k.touchmove, Le, { passive: !1 })); var e = g.touchWrapper;
                        e.removeEventListener(k.touchstart, Oe), e.removeEventListener(k.touchmove, Me, { passive: !1 }) } }()) }

            function re(t, e) { void 0 !== e ? (e = e.replace(/ /g, "").split(",")).forEach(function(e) { zt(t, e, "k") }) : (zt(t, "all", "k"), g.keyboardScrolling = t) }

            function ie() { var e = jn(Rn(sn)[0], an);
                e || !g.loopTop && !g.continuousVertical || (e = Dn(Rn(an))), null != e && ze(e, null, !0) }

            function le() { var e = Pn(Rn(sn)[0], an);
                e || !g.loopBottom && !g.continuousVertical || (e = Rn(an)[0]), null != e && ze(e, null, !1) }

            function ae(e, t) { q(0, "internal"), se(e, t), q(B.scrollingSpeed, "internal") }

            function se(e, t) { var n = Et(e);
                void 0 !== t ? xt(e, t) : null != n && ze(n) }

            function ce(e) { He("right", e) }

            function ue(e) { He("left", e) }

            function de(e) { if (!zn(y, qt)) { E = !0, w = Bn(); for (var t = Rn(an), n = 0; n < t.length; ++n) { var o = t[n],
                            r = Rn(yn, o)[0],
                            i = Rn(mn, o);
                        g.verticalCentered && Nn(Rn(un, o), { height: yt(o) + "px" }), Nn(o, { height: Se(o) + "px" }), 1 < i.length && st(r, Rn(Sn, r)[0]) }
                    g.scrollOverflow && f.createScrollBarForAll(); var l = Xn(Rn(sn)[0], an);
                    l && !Nt("fadingEffect") && ae(l + 1), E = !1, oo(g.afterResize) && e && g.afterResize.call(y, Ut.innerWidth, Ut.innerHeight), oo(g.afterReBuild) && !e && g.afterReBuild.call(y), ro(y, "afterRebuild") } }

            function fe(e) { var t = zn(m, Kt);
                e ? t || (K(!1, "internal"), ee(!1, "internal"), Vn(Rn(pn)), Gn(m, Kt), oo(g.afterResponsive) && g.afterResponsive.call(y, e), g.responsiveSlides && S.responsiveSlides && S.responsiveSlides.toSections(), ro(y, "afterResponsive", e), g.scrollOverflow && f.createScrollBarForAll()) : t && (K(B.autoScrolling, "internal"), ee(B.autoScrolling, "internal"), Zn(Rn(pn)), Fn(m, Kt), oo(g.afterResponsive) && g.afterResponsive.call(y, e), g.responsiveSlides && S.responsiveSlides && S.responsiveSlides.toSlides(), ro(y, "afterResponsive", e)) }

            function ve(e) { var t = e.target;
                t && Kn(t, pn + " a") ? function(e) { no(e); var t = Xn(Kn(this, pn + " li"));
                    ze(Rn(an)[t]) }.call(t, e) : io(t, ".fp-tooltip") ? function() { ro(Wn(this), "click") }.call(t) : io(t, Tn) ? function() { var e = Kn(this, an);
                    zn(this, On) ? d.m.left && ue(e) : d.m.right && ce(e) }.call(t, e) : io(t, Mn) || null != Kn(t, Mn) ? function(e) { no(e); var t = Rn(yn, Kn(this, an))[0],
                        n = Rn(mn, t)[Xn(Kn(this, "li"))];
                    st(t, n) }.call(t, e) : Kn(t, g.menu + " [data-menuanchor]") && function(e) {!Rn(g.menu)[0] || !g.lockAnchors && g.anchors.length || (no(e), se(this.getAttribute("data-menuanchor"))) }.call(t, e) }

            function pe(e, t) { _t["fp_" + e] = t, _t.addEventListener(e, he, !0) }

            function he(t) { t.target != _t && ("touchend" === t.type && (j = !1, setTimeout(function() { j = !0 }, 800)), ("mouseenter" !== t.type || j) && g.normalScrollElements.split(",").forEach(function(e) { null != Kn(t.target, e) && oe(_t["fp_" + t.type]) })) }

            function ge(e) { var t = "fp_" + e + "Extension";
                P[e] = g[e + "Key"], S[e] = void 0 !== Ut[t] ? new Ut[t] : null, S[e] && S[e].c(e) }

            function me(e, t, n) { var o = 100 * n,
                    r = 100 / n,
                    i = _t.createElement("div");
                i.className = bn, _n(t, i); var l, a, s = _t.createElement("div");
                s.className = wn, _n(t, s), Nn(Rn(En, e), { width: o + "%" }), 1 < n && (g.controlArrows && (l = e, a = [ao('<div class="fp-controlArrow fp-prev"></div>'), ao('<div class="fp-controlArrow fp-next"></div>')], $n(Rn(yn, l)[0], a), "#fff" !== g.controlArrowColor && (Nn(Rn(Cn, l), { "border-color": "transparent transparent transparent " + g.controlArrowColor }), Nn(Rn(kn, l), { "border-color": "transparent " + g.controlArrowColor + " transparent transparent" })), g.loopHorizontal || Vn(Rn(kn, l))), g.slidesNavigation && function(e, t) { Un(ao('<div class="' + An + '"><ul></ul></div>'), e); var n = Rn(Ln, e)[0];
                    Gn(n, "fp-" + g.slidesNavPosition); for (var o = 0; o < t; o++) Un(ao('<li><a href="#"><span class="fp-sr-only">' + ye(o, "Slide") + "</span><span></span></a></li>"), Rn("ul", n)[0]);
                    Nn(n, { "margin-left": "-" + n.innerWidth / 2 + "px" }), Gn(Rn("a", Rn("li", n)[0]), nn) }(e, n)), t.forEach(function(e) { Nn(e, { width: r + "%" }), g.verticalCentered && bt(e) }); var c = Rn(Sn, e)[0];
                null != c && (0 !== Xn(Rn(sn), an) || 0 === Xn(Rn(sn), an) && 0 !== Xn(c)) ? (Ht(c, "internal"), Gn(c, "fp-initial")) : Gn(t[0], nn) }

            function Se(e) { return g.offsetSections && S.offsetSections ? Math.round(S.offsetSections.getWindowHeight(e)) : Bn() }

            function be(e, t) { t || null != Rn(sn)[0] || Gn(e, nn), n = Rn(sn)[0], Nn(e, { height: Se(e) + "px" }), g.paddingTop && Nn(e, { "padding-top": g.paddingTop }), g.paddingBottom && Nn(e, { "padding-bottom": g.paddingBottom }), void 0 !== g.sectionsColor[t] && Nn(e, { "background-color": g.sectionsColor[t] }), void 0 !== g.anchors[t] && e.setAttribute("data-anchor", g.anchors[t]) }

            function ye(e, t) { return g.navigationTooltips[e] || g.anchors[e] || t + " " + (e + 1) }

            function we() { var e, t = Rn(sn)[0];
                Gn(t, rn), De(t), Xe(t), g.scrollOverflow && g.scrollOverflowHandler.afterLoad(), (!(e = Et(et().section)) || void 0 !== e && Xn(e) === Xn(n)) && oo(g.afterLoad) && Be("afterLoad", { activeSection: null, element: t, direction: null, anchorLink: t.getAttribute("data-anchor"), sectionIndex: Xn(t, an) }), oo(g.afterRender) && Be("afterRender"), ro(y, "afterRender") }

            function Ee() { var e; if (ro(y, "onScroll"), (!g.autoScrolling || g.scrollBar || Nt("dragAndMove")) && !Wt()) { var t = Nt("dragAndMove") ? Math.abs(S.dragAndMove.getCurrentScroll()) : eo(),
                        n = 0,
                        o = t + Bn() / 2,
                        r = (Nt("dragAndMove") ? S.dragAndMove.getDocumentHeight() : m.offsetHeight - Bn()) === t,
                        i = Rn(an); if (r) n = i.length - 1;
                    else if (t)
                        for (var l = 0; l < i.length; ++l) i[l].offsetTop <= o && (n = l);
                    else n = 0; if (!zn(e = i[n], nn)) { X = !0; var a, s, c = Rn(sn)[0],
                            u = Xn(c, an) + 1,
                            d = mt(e),
                            f = e.getAttribute("data-anchor"),
                            v = Xn(e, an) + 1,
                            p = Rn(Sn, e)[0],
                            h = { activeSection: c, sectionIndex: v - 1, anchorLink: f, element: e, leavingSection: u, direction: d };
                        p && (s = p.getAttribute("data-anchor"), a = Xn(p)), x && (Gn(e, nn), Fn(to(e), nn), jt("parallax", "afterLoad"), oo(g.onLeave) && Be("onLeave", h), oo(g.afterLoad) && Be("afterLoad", h), g.resetSliders && S.resetSliders && S.resetSliders.apply({ localIsResizing: E, leavingSection: u }), Ze(c), De(e), Xe(e), gt(f, v - 1), g.anchors.length && (b = f), Lt(a, s, f)), clearTimeout(A), A = setTimeout(function() { X = !1 }, 100) }
                    g.fitToSection && (clearTimeout(L), L = setTimeout(function() { g.fitToSection && Rn(sn)[0].offsetHeight <= w && xe() }, g.fitToSectionDelay)) } }

            function xe() { x && (E = !0, ze(Rn(sn)[0]), E = !1) }

            function Ae(e) { if (d.m[e]) { var t = "down" === e ? le : ie; if (S.scrollHorizontally && (t = S.scrollHorizontally.getScrollSection(e, t)), g.scrollOverflow) { var n = g.scrollOverflowHandler.scrollable(Rn(sn)[0]),
                            o = "down" === e ? "bottom" : "top"; if (null != n) { if (!g.scrollOverflowHandler.isScrolled(o, n)) return !0;
                            t() } else t() } else t() } }

            function Le(e) { g.autoScrolling && Te(e) && d.m.up && no(e) }

            function Me(e) { var t = Kn(e.target, an) || Rn(sn)[0]; if (Te(e)) { g.autoScrolling && no(e); var n = Ct(e);
                    G = n.y, F = n.x, Rn(yn, t).length && Math.abs(Z - F) > Math.abs(V - G) ? !a && Math.abs(Z - F) > Ut.innerWidth / 100 * g.touchSensitivity && (F < Z ? d.m.right && ce(t) : d.m.left && ue(t)) : g.autoScrolling && x && Math.abs(V - G) > Ut.innerHeight / 100 * g.touchSensitivity && (G < V ? Ae("down") : V < G && Ae("up")) } }

            function Te(e) { return void 0 === e.pointerType || "mouse" != e.pointerType }

            function Oe(e) { if (g.fitToSection && (z = !1), Te(e)) { var t = Ct(e);
                    V = t.y, Z = t.x } }

            function ke(e, t) { for (var n = 0, o = e.slice(Math.max(e.length - t, 1)), r = 0; r < o.length; r++) n += o[r]; return Math.ceil(n / t) }

            function Ce(e) { var t = (new Date).getTime(),
                    n = zn(Rn(".fp-completely")[0], fn); if (!d.m.down && !d.m.up) return no(e), !1; if (g.autoScrolling && !c && !n) { var o = (e = e || Ut.event).wheelDelta || -e.deltaY || -e.detail,
                        r = Math.max(-1, Math.min(1, o)),
                        i = void 0 !== e.wheelDeltaX || void 0 !== e.deltaX,
                        l = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !i;
                    149 < u.length && u.shift(), u.push(Math.abs(o)), g.scrollBar && no(e); var a = t - U; if (U = t, 200 < a && (u = []), x && !Pt()) { var s = ke(u, 10);
                        ke(u, 70) <= s && l && Ae(r < 0 ? "down" : "up") } return !1 }
                g.fitToSection && (z = !1) }

            function He(e, t) { var n = null == t ? Rn(sn)[0] : t,
                    o = Rn(yn, n)[0]; if (!(null == o || Pt() || a || Rn(mn, o).length < 2)) { var r = Rn(Sn, o)[0],
                        i = null; if (null == (i = "left" === e ? jn(r, mn) : Pn(r, mn))) { if (!g.loopHorizontal) return; var l = to(r);
                        i = "left" === e ? l[l.length - 1] : l[0] }
                    a = !S.test.isTesting, st(o, i, e) } }

            function Re() { for (var e = Rn(Sn), t = 0; t < e.length; t++) Ht(e[t], "internal") }

            function Ie(e) { var t = e.offsetHeight,
                    n = e.offsetTop,
                    o = n,
                    r = Nt("dragAndMove") && S.dragAndMove.isGrabbing ? S.dragAndMove.isScrollingDown() : _ < n,
                    i = o - w + t,
                    l = g.bigSectionsDestination; return w < t ? (r || l) && "bottom" !== l || (o = i) : (r || E && null == Yn(e)) && (o = i), g.offsetSections && S.offsetSections && (o = S.offsetSections.getSectionPosition(r, o, e)), _ = o }

            function ze(e, t, n) { if (null != e) { var o, r, i = { element: e, callback: t, isMovementUp: n, dtop: Ie(e), yMovement: mt(e), anchorLink: e.getAttribute("data-anchor"), sectionIndex: Xn(e, an), activeSlide: Rn(Sn, e)[0], activeSection: Rn(sn)[0], leavingSection: Xn(Rn(sn), an) + 1, localIsResizing: E }; if (!(i.activeSection == e && !E || g.scrollBar && eo() === i.dtop && !zn(e, dn))) { if (null != i.activeSlide && (o = i.activeSlide.getAttribute("data-anchor"), r = Xn(i.activeSlide)), !i.localIsResizing) { var l = i.yMovement; if (void 0 !== n && (l = n ? "up" : "down"), i.direction = l, oo(g.onLeave) && !1 === Be("onLeave", i)) return } var a;
                        jt("parallax", "apply", i), jt("cards", "apply", i), g.autoScrolling && g.continuousVertical && void 0 !== i.isMovementUp && (!i.isMovementUp && "up" == i.yMovement || i.isMovementUp && "down" == i.yMovement) && ((s = i).isMovementUp ? qn(Rn(sn)[0], co(s.activeSection, an)) : $n(Rn(sn)[0], uo(s.activeSection, an).reverse()), Rt(Rn(sn)[0].offsetTop), Re(), s.wrapAroundElements = s.activeSection, s.dtop = s.element.offsetTop, s.yMovement = mt(s.element), s.leavingSection = Xn(s.activeSection, an) + 1, s.sectionIndex = Xn(s.element, an), ro(Rn(Jt)[0], "onContinuousVertical", s), i = s), Nt("scrollOverflowReset") && S.scrollOverflowReset.setPrevious(i.activeSection), i.localIsResizing || Ze(i.activeSection), g.scrollOverflow && g.scrollOverflowHandler.beforeLeave(), Gn(e, nn), Fn(to(e), nn), De(e), g.scrollOverflow && g.scrollOverflowHandler.onLeave(), x = S.test.isTesting, Lt(r, o, i.anchorLink, i.sectionIndex),
                            function(e) { if (g.css3 && g.autoScrolling && !g.scrollBar) { var t = "translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)";
                                    wt(t, !0), g.scrollingSpeed ? (clearTimeout(p), p = setTimeout(function() { We(e) }, g.scrollingSpeed)) : We(e) } else { var n = Pe(e.dtop);
                                    S.test.top = -e.dtop + "px", Xt(n.element, n.options, g.scrollingSpeed, function() { g.scrollBar ? setTimeout(function() { We(e) }, 30) : We(e) }) } }(i), b = i.anchorLink, gt(i.anchorLink, null == (a = i).wrapAroundElements ? a.sectionIndex : a.isMovementUp ? Rn(an).length - 1 : 0) } } var s }

            function Be(e, t) { var n, o, r, i, l = (o = e, r = t, (i = g.v2compatible ? { afterRender: function() { return [y] }, onLeave: function() { return [r.activeSection, r.leavingSection, r.sectionIndex + 1, r.direction] }, afterLoad: function() { return [r.element, r.anchorLink, r.sectionIndex + 1] }, afterSlideLoad: function() { return [r.destiny, r.anchorLink, r.sectionIndex + 1, r.slideAnchor, r.slideIndex] }, onSlideLeave: function() { return [r.prevSlide, r.anchorLink, r.sectionIndex + 1, r.prevSlideIndex, r.direction, r.slideIndex] } } : { afterRender: function() { return { section: Ne(Rn(sn)[0]), slide: je(Rn(Sn, Rn(sn)[0])[0]) } }, onLeave: function() { return { origin: Ne(r.activeSection), destination: Ne(r.element), direction: r.direction } }, afterLoad: function() { return i.onLeave() }, afterSlideLoad: function() { return { section: Ne(r.section), origin: je(r.prevSlide), destination: je(r.destiny), direction: r.direction } }, onSlideLeave: function() { return i.afterSlideLoad() } })[o]()); if (g.v2compatible) { if (!1 === g[e].apply(l[0], l.slice(1))) return !1 } else if (ro(y, e, l), !1 === g[e].apply(l[Object.keys(l)[0]], (n = l, Object.keys(n).map(function(e) { return n[e] })))) return !1; return !0 }

            function Ne(e) { return e ? new Gt(e) : null }

            function je(e) { return e ? new Ft(e) : null }

            function Pe(e) { var t = {}; return g.autoScrolling && !g.scrollBar ? (t.options = -e, t.element = Rn(Jt)[0]) : (t.options = e, t.element = Ut), t }

            function We(e) { var t;
                null != (t = e).wrapAroundElements && (t.isMovementUp ? qn(Rn(an)[0], t.wrapAroundElements) : $n(Rn(an)[Rn(an).length - 1], t.wrapAroundElements), Rt(Rn(sn)[0].offsetTop), Re(), t.sectionIndex = Xn(t.element, an), t.leavingSection = Xn(t.activeSection, an) + 1), oo(g.afterLoad) && !e.localIsResizing && Be("afterLoad", e), g.scrollOverflow && g.scrollOverflowHandler.afterLoad(), jt("parallax", "afterLoad"), Nt("scrollOverflowReset") && S.scrollOverflowReset.reset(), Nt("resetSliders") && S.resetSliders.apply(e), e.localIsResizing || Xe(e.element), Gn(e.element, rn), Fn(to(e.element), rn), x = !0, oo(e.callback) && e.callback() }

            function Ye(e, t) { e.setAttribute(t, e.getAttribute("data-" + t)), e.removeAttribute("data-" + t) }

            function De(e) { g.lazyLoading && Rn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", Ge(e)).forEach(function(n) { if (["src", "srcset"].forEach(function(e) { var t = n.getAttribute("data-" + e);
                            null != t && t && Ye(n, e) }), io(n, "source")) { var e = Kn(n, "video, audio");
                        e && e.load() } }) }

            function Xe(e) { var t = Ge(e);
                Rn("video, audio", t).forEach(function(e) { e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play() }), Rn('iframe[src*="youtube.com/embed/"]', t).forEach(function(e) { e.hasAttribute("data-autoplay") && Ve(e), e.onload = function() { e.hasAttribute("data-autoplay") && Ve(e) } }) }

            function Ve(e) { e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") }

            function Ze(e) { var t = Ge(e);
                Rn("video, audio", t).forEach(function(e) { e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause() }), Rn('iframe[src*="youtube.com/embed/"]', t).forEach(function(e) { /youtube\.com\/embed\//.test(e.getAttribute("src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*") }) }

            function Ge(e) { var t = Rn(Sn, e); return t.length && (e = t[0]), e }

            function Fe(e) { var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

                function o(e) { var t, n, o, r, i, l, a = "",
                        s = 0; for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); s < e.length;) t = c.indexOf(e.charAt(s++)) << 2 | (r = c.indexOf(e.charAt(s++))) >> 4, n = (15 & r) << 4 | (i = c.indexOf(e.charAt(s++))) >> 2, o = (3 & i) << 6 | (l = c.indexOf(e.charAt(s++))), a += String.fromCharCode(t), 64 != i && (a += String.fromCharCode(n)), 64 != l && (a += String.fromCharCode(o)); return a = function(e) { for (var t, n = "", o = 0, r = 0, i = 0; o < e.length;)(r = e.charCodeAt(o)) < 128 ? (n += String.fromCharCode(r), o++) : 191 < r && r < 224 ? (i = e.charCodeAt(o + 1), n += String.fromCharCode((31 & r) << 6 | 63 & i), o += 2) : (i = e.charCodeAt(o + 1), t = e.charCodeAt(o + 2), n += String.fromCharCode((15 & r) << 12 | (63 & i) << 6 | 63 & t), o += 3); return n }(a) }

                function r(e) { return e.slice(3).slice(0, -3) } return function(e) { var t = e.split("_"); if (1 < t.length) { var n = t[1]; return e.replace(r(t[1]), "").split("_")[0] + "_" + o(n.slice(3).slice(0, -3)) } return r(e) }(o(e)) }

            function Ue(e) { var t = function() { if (_t.domain.length) { for (var e = _t.domain.replace(/^(www\.)/, "").split("."); 2 < e.length;) e.shift(); return e.join(".").replace(/(^\.*)|(\.*$)/g, "") } return "" }(),
                    n = ["MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN"],
                    o = Fe(n[0]),
                    r = Fe(n[1]),
                    i = Fe(n[2]),
                    l = Fe(n[3]),
                    a = [o, r, i].indexOf(t) < 0 && 0 !== t.length,
                    s = void 0 !== P[e] && P[e].length; if (!s && a) return !1; var c = s ? Fe(P[e]) : "",
                    u = 1 < (c = c.split("_")).length && -1 < c[1].indexOf(e, c[1].length - e.length); return !(c[0].indexOf(t, c[0].length - t.length) < 0 && a && l != c[0]) && u || !a }

            function _e(e) { e.forEach(function(e) { e.removedNodes[0] && e.removedNodes[0].isEqualNode(Y) && (clearTimeout(D), D = setTimeout(Qe, 900)) }) }

            function Qe() { C = !1 }

            function Je(e) { Y = _t.createElement("div"), W = Fe("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="), Y.innerHTML = W, Y = Y.firstChild, "MutationObserver" in Ut && new MutationObserver(_e).observe(_t.body, { childList: !0, subtree: !1 }), Nt(e) && S[e] && (Ue(e) || (Ke(), setInterval(Ke, 2e3))) }

            function Ke() { Y && (C || (Math.random() < .5 ? fo(m, Y) : Un(Y, m), C = !0), Y.setAttribute("style", Fe("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g, Fe("MTIzICFpbXBvcnRhbnQ7MzQ1")))) }

            function $e() { var e = et(),
                    t = e.section,
                    n = e.slide;
                t && (g.animateAnchor ? xt(t, n) : ae(t, n)) }

            function qe() { if (!X && !g.lockAnchors) { var e = et(),
                        t = e.section,
                        n = e.slide,
                        o = void 0 === b,
                        r = void 0 === b && void 0 === n && !a; if (t && t.length) { var i = !Nt("dragAndMove") || l;
                        (t && t !== b && !o || r || !a && l != n && i) && xt(t, n) } } }

            function et() { var e, t, n = Ut.location.hash; if (n.length) { var o = n.replace("#", "").split("/"),
                        r = -1 < n.indexOf("#/");
                    e = r ? "/" + o[1] : decodeURIComponent(o[0]); var i = r ? o[2] : o[1];
                    i && i.length && (t = decodeURIComponent(i)) } return { section: e, slide: t } }

            function tt(e) { clearTimeout(M); var t = _t.activeElement,
                    n = e.keyCode;
                9 === n ? function(e) { var t, n, o, r, i, l, a, s = e.shiftKey,
                        c = _t.activeElement,
                        u = it(Ge(Rn(sn)[0]));

                    function d(e) { return no(e), u[0] ? u[0].focus() : null }(t = e, n = it(_t), o = n.indexOf(_t.activeElement), r = t.shiftKey ? o - 1 : o + 1, i = n[r], l = je(Kn(i, mn)), a = Ne(Kn(i, an)), l || a) && (c ? null == Kn(c, sn + "," + sn + " " + Sn) && (c = d(e)) : d(e), (!s && c == u[u.length - 1] || s && c == u[0]) && no(e)) }(e) : io(t, "textarea") || io(t, "input") || io(t, "select") || "true" === t.getAttribute("contentEditable") || "" === t.getAttribute("contentEditable") || !g.keyboardScrolling || !g.autoScrolling || (-1 < [40, 38, 32, 33, 34].indexOf(n) && no(e), c = e.ctrlKey, M = setTimeout(function() {! function(e) { var t = e.shiftKey; if (x || !([37, 39].indexOf(e.keyCode) < 0)) switch (e.keyCode) {
                            case 38:
                            case 33:
                                d.k.up && ie(); break;
                            case 32:
                                if (t && d.k.up) { ie(); break }
                            case 40:
                            case 34:
                                d.k.down && le(); break;
                            case 36:
                                d.k.up && se(1); break;
                            case 35:
                                d.k.down && se(Rn(an).length); break;
                            case 37:
                                d.k.left && ue(); break;
                            case 39:
                                d.k.right && ce() } }(e) }, 150)) }

            function nt(e) { s && (c = e.ctrlKey) }

            function ot(e) { 2 == e.which && (Q = e.pageY, y.addEventListener("mousemove", at)) }

            function rt(e) { 2 == e.which && y.removeEventListener("mousemove", at) }

            function it(e) { return [].slice.call(Rn(H, e)).filter(function(e) { return "-1" !== e.getAttribute("tabindex") && null !== e.offsetParent }) }

            function lt() { c = s = !1 }

            function at(e) { x && (e.pageY < Q && d.m.up ? ie() : e.pageY > Q && d.m.down && le()), Q = e.pageY }

            function st(e, t, n) { var o = Kn(e, an),
                    r = { slides: e, destiny: t, direction: n, destinyPos: { left: t.offsetLeft }, slideIndex: Xn(t), section: o, sectionIndex: Xn(o, an), anchorLink: o.getAttribute("data-anchor"), slidesNav: Rn(Ln, o)[0], slideAnchor: Tt(t), prevSlide: Rn(Sn, o)[0], prevSlideIndex: Xn(Rn(Sn, o)[0]), localIsResizing: E };
                r.xMovement = St(r.prevSlideIndex, r.slideIndex), r.direction = r.direction ? r.direction : r.xMovement, r.localIsResizing || (x = !1), jt("parallax", "applyHorizontal", r), jt("cards", "apply", r), g.onSlideLeave && !r.localIsResizing && "none" !== r.xMovement && oo(g.onSlideLeave) && !1 === Be("onSlideLeave", r) ? a = !1 : (Gn(t, nn), Fn(to(t), nn), r.localIsResizing || (Ze(r.prevSlide), De(t)), ct(r), zn(o, nn) && !r.localIsResizing && Lt(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex), S.continuousHorizontal && S.continuousHorizontal.apply(r), Wt() ? ut(r) : dt(e, r, !0), g.interlockedSlides && S.interlockedSlides && (Nt("continuousHorizontal") && void 0 !== n && n !== r.xMovement || S.interlockedSlides.apply(r))) }

            function ct(e) {!g.loopHorizontal && g.controlArrows && (lo(Rn(kn, e.section), 0 !== e.slideIndex), lo(Rn(Cn, e.section), null != Yn(e.destiny))) }

            function ut(e) { var t, n;
                S.continuousHorizontal && S.continuousHorizontal.afterSlideLoads(e), t = e.slidesNav, n = e.slideIndex, g.slidesNavigation && null != t && (Fn(Rn(on, t), nn), Gn(Rn("a", Rn("li", t)[n]), nn)), e.localIsResizing || (jt("parallax", "afterSlideLoads"), jt("scrollOverflowReset", "setPrevious", e.prevSlide), jt("scrollOverflowReset", "reset"), oo(g.afterSlideLoad) && Be("afterSlideLoad", e), x = !0, Xe(e.destiny)), a = !1, Nt("interlockedSlides") && S.interlockedSlides.apply(e) }

            function dt(e, t, n) { var o = t.destinyPos; if (g.css3) { var r = "translate3d(-" + Math.round(o.left) + "px, 0px, 0px)";
                    S.test.translate3dH[t.sectionIndex] = r, Nn(pt(Rn(En, e)), It(r)), h = setTimeout(function() { n && ut(t) }, g.scrollingSpeed) } else S.test.left[t.sectionIndex] = Math.round(o.left), Xt(e, Math.round(o.left), g.scrollingSpeed, function() { n && ut(t) }) }

            function ft() { if (ro(y, "onResize"), vt(), o) { var e = _t.activeElement; if (!io(e, "textarea") && !io(e, "input") && !io(e, "select")) { var t = Bn();
                        Math.abs(t - J) > 20 * Math.max(J, t) / 100 && (v = setTimeout(function() { de(!0), J = t }, navigator.userAgent.match("CriOS") ? 50 : 0)) } } else clearTimeout(v), v = setTimeout(function() { de(!0) }, 350) }

            function vt() { var e = g.responsive || g.responsiveWidth,
                    t = g.responsiveHeight,
                    n = e && Ut.innerWidth < e,
                    o = t && Ut.innerHeight < t;
                e && t ? fe(n || o) : e ? fe(n) : t && fe(o) }

            function pt(e) { var t = "all " + g.scrollingSpeed + "ms " + g.easingcss3; return Fn(e, $t), Nn(e, { "-webkit-transition": t, transition: t }) }

            function ht(e) { return Gn(e, $t) }

            function gt(e, t) { var n, o, r, i;
                n = e, Rn(g.menu).forEach(function(e) { g.menu && null != e && (Fn(Rn(on, e), nn), Gn(Rn('[data-menuanchor="' + n + '"]', e), nn)) }), o = e, r = t, i = Rn(pn)[0], g.navigation && null != i && "none" !== i.style.display && (Fn(Rn(on, Rn(pn)[0]), nn), Gn(o ? Rn('a[href="#' + o + '"]', Rn(pn)[0]) : Rn("a", Rn("li", Rn(pn)[0])[r]), nn)) }

            function mt(e) { var t = Xn(Rn(sn)[0], an),
                    n = Xn(e, an); return t == n ? "none" : n < t ? "up" : "down" }

            function St(e, t) { return e == t ? "none" : t < e ? "left" : "right" }

            function bt(e) { if (!zn(e, xn)) { var t = _t.createElement("div");
                    t.className = cn, t.style.height = yt(e) + "px", Gn(e, xn), Qn(e, t) } }

            function yt(e) { var t = Se(e); if (g.paddingTop || g.paddingBottom) { var n = e;
                    zn(n, ln) || (n = Kn(e, an)), t -= parseInt(getComputedStyle(n)["padding-top"]) + parseInt(getComputedStyle(n)["padding-bottom"]) } return t }

            function wt(e, t) { t ? pt(y) : ht(y), clearTimeout(T), Nn(y, It(e)), S.test.translate3d = e, T = setTimeout(function() { Fn(y, $t) }, 10) }

            function Et(e) { var t = Rn(an + '[data-anchor="' + e + '"]', y)[0]; if (!t) { var n = void 0 !== e ? e - 1 : 0;
                    t = Rn(an)[n] } return t }

            function xt(e, t) { var n = Et(e); if (null != n) { var o, r, i, l = (null == (i = Rn(mn + '[data-anchor="' + (o = t) + '"]', r = n)[0]) && (o = void 0 !== o ? o : 0, i = Rn(mn, r)[o]), i);
                    Tt(n) === b || zn(n, nn) ? At(l) : ze(n, function() { At(l) }) } }

            function At(e) { null != e && st(Kn(e, yn), e) }

            function Lt(e, t, n, o) { var r = "";
                g.anchors.length && !g.lockAnchors && (e ? (null != n && (r = n), null == t && (t = e), Mt(r + "/" + (l = t))) : (null != e && (l = t), Mt(n))), Ot() }

            function Mt(e) { if (g.recordHistory) location.hash = e;
                else if (o || i) Ut.history.replaceState(void 0, void 0, "#" + e);
                else { var t = Ut.location.href.split("#")[0];
                    Ut.location.replace(t + "#" + e) } }

            function Tt(e) { if (!e) return null; var t = e.getAttribute("data-anchor"),
                    n = Xn(e); return null == t && (t = n), t }

            function Ot() { var e = Rn(sn)[0],
                    t = Rn(Sn, e)[0],
                    n = Tt(e),
                    o = Tt(t),
                    r = String(n);
                t && (r = r + "-" + o), r = r.replace("/", "-").replace("#", ""); var i = new RegExp("\\b\\s?" + tn + "-[^\\s]+\\b", "g");
                m.className = m.className.replace(i, ""), Gn(m, tn + "-" + r) }

            function kt() { return Ut.PointerEvent ? { down: "pointerdown", move: "pointermove" } : { down: "MSPointerDown", move: "MSPointerMove" } }

            function Ct(e) { var t = []; return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, i && Te(e) && g.scrollBar && void 0 !== e.touches && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t }

            function Ht(e, t) { q(0, "internal"), void 0 !== t && (E = !0), st(Kn(e, yn), e), void 0 !== t && (E = !1), q(B.scrollingSpeed, "internal") }

            function Rt(e) { var t = Math.round(e); if (g.css3 && g.autoScrolling && !g.scrollBar) wt("translate3d(0px, -" + t + "px, 0px)", !1);
                else if (g.autoScrolling && !g.scrollBar) Nn(y, { top: -t + "px" }), S.test.top = -t + "px";
                else { var n = Pe(t);
                    Vt(n.element, n.options) } }

            function It(e) { return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e } }

            function zt(t, e, n) { "all" !== e ? d[n][e] = t : Object.keys(d[n]).forEach(function(e) { d[n][e] = t }) }

            function Bt(e) { return Nn(e, { "-webkit-transition": "none", transition: "none" }) }

            function Nt(e) { return null !== g[e] && "[object Array]" === Object.prototype.toString.call(g[e]) ? g[e].length && S[e] : g[e] && S[e] }

            function jt(e, t, n) { if (Nt(e)) return S[e][t](n) }

            function Pt() { return Nt("dragAndMove") && S.dragAndMove.isAnimating }

            function Wt() { return Nt("dragAndMove") && S.dragAndMove.isGrabbing }

            function Yt(e, t, n) { g[e] = t, "internal" !== n && (B[e] = t) }

            function Dt() { t || (Hn("error", "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"), Hn("error", "https://github.com/alvarotrigo/fullPage.js#options.")), zn(Rn("html"), en) ? Hn("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (g.continuousVertical && (g.loopTop || g.loopBottom) && (g.continuousVertical = !1, Hn("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !g.scrollOverflow || !g.scrollBar && g.autoScrolling || Hn("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !g.continuousVertical || !g.scrollBar && g.autoScrolling || (g.continuousVertical = !1, Hn("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), g.scrollOverflow && null == g.scrollOverflowHandler && (g.scrollOverflow = !1, Hn("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), g.anchors.forEach(function(t) { var e = [].slice.call(Rn("[name]")).filter(function(e) { return e.getAttribute("name") && e.getAttribute("name").toLowerCase() == t.toLowerCase() }),
                        n = [].slice.call(Rn("[id]")).filter(function(e) { return e.getAttribute("id") && e.getAttribute("id").toLowerCase() == t.toLowerCase() });
                    (n.length || e.length) && (Hn("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), n.length && Hn("error", '"' + t + '" is is being used by another element `id` property'), e.length && Hn("error", '"' + t + '" is is being used by another element `name` property')) })) }

            function Xt(t, n, o, r) { var e, i = (e = t).self != Ut && zn(e, bn) ? e.scrollLeft : !g.autoScrolling || g.scrollBar ? eo() : e.offsetTop,
                    l = n - i,
                    a = 0;
                z = !0; var s = function() { if (z) { var e = n;
                        a += 20, o && (e = Ut.fp_easings[g.easing](a, i, l, o)), Vt(t, e), a < o ? setTimeout(s, 20) : void 0 !== r && r() } else a < o && r() };
                s() }

            function Vt(e, t) {!g.autoScrolling || g.scrollBar || e.self != Ut && zn(e, bn) ? e.self != Ut && zn(e, bn) ? e.scrollLeft = t : e.scrollTo(0, t) : e.style.top = t + "px" }

            function Zt(e, t) { this.anchor = e.getAttribute("data-anchor"), this.item = e, this.index = Xn(e, t), this.isLast = this.index === e.parentElement.querySelectorAll(t).length - 1, this.isFirst = !this.index }

            function Gt(e) { Zt.call(this, e, an) }

            function Ft(e) { Zt.call(this, e, mn) }
            Dt() } }), window.jQuery && window.fullpage && function(t, n) { "use strict";
    t && n ? t.fn.fullpage = function(e) { e.$ = t, new n(this[0], e) } : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!") }(window.jQuery, window.fullpage);