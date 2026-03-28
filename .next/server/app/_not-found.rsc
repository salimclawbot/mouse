2:I[2972,["972","static/chunks/972-5ecfbe0c89e84126.js","931","static/chunks/app/page-cc0438e40195881a.js"],""]
3:I[4707,[],""]
4:I[6423,[],""]
5:I[1322,["972","static/chunks/972-5ecfbe0c89e84126.js","185","static/chunks/app/layout-4bd408d43a52187e.js"],"default"]
6:I[8003,["972","static/chunks/972-5ecfbe0c89e84126.js","185","static/chunks/app/layout-4bd408d43a52187e.js"],""]
7:Tbcc,
          (function () {
            if (typeof window === 'undefined') return;
            const getPagePath = () => window.location.pathname + window.location.search;
            const getProductName = (link) => {
              const linkText = link.textContent?.trim() || '';
              if (linkText) return linkText;
              let node = link;
              while (node && node !== document.body) {
                const heading = node.querySelector?.('h1, h2, h3, h4, h5, h6');
                if (heading && heading.textContent) return heading.textContent.trim();
                node = node.parentElement;
              }
              return document.querySelector('h1, h2')?.textContent?.trim() || '';
            };
            const isAmazonAffiliateLink = (url) => {
              const value = (url || '').toLowerCase();
              return value.includes('amazon.com') || value.includes('amzn.to') || value.includes('tag=theforge05-20');
            };
            const trackEvent = (eventName, params) => {
              if (typeof window.gtag !== 'function') return;
              window.gtag('event', eventName, params);
            };
            document.addEventListener('click', (event) => {
              const target = event.target;
              if (!(target instanceof Element)) return;
              const link = target.closest('a[href]');
              if (!link) return;
              const href = link.getAttribute('href') || '';
              const absoluteUrl = (() => { try { return new URL(href, window.location.origin).toString(); } catch { return href; } })();
              if (!isAmazonAffiliateLink(absoluteUrl)) return;
              trackEvent('affiliate_click', { link_url: absoluteUrl, link_text: (link.textContent || '').trim(), page_path: getPagePath(), product_name: getProductName(link) });
            });
            const scrollMilestones = [25, 50, 75, 100];
            const scrollFired = new Set();
            const checkScrollDepth = () => {
              const scrollTop = window.scrollY || 0;
              const docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
              const winHeight = window.innerHeight;
              const percent = Math.min(100, Math.round((scrollTop / Math.max(docHeight - winHeight, 1)) * 100));
              scrollMilestones.forEach((m) => { if (percent >= m && !scrollFired.has(m)) { scrollFired.add(m); trackEvent('scroll_depth', { percent_scrolled: m, page_path: getPagePath() }); } });
            };
            let scrollTicking = false;
            window.addEventListener('scroll', () => { if (scrollTicking) return; scrollTicking = true; window.requestAnimationFrame(() => { checkScrollDepth(); scrollTicking = false; }); }, { passive: true });
            checkScrollDepth();
            [30, 60, 120, 300].forEach((s) => { window.setTimeout(() => { trackEvent('engagement_time', { time_seconds: s, page_path: getPagePath() }); }, s * 1000); });
          })();
        0:["1GYmRiwKyB_4iJfw_hfiH",[[["",{"children":["/_not-found",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",true],["",{"children":["/_not-found",{"children":["__PAGE__",{},[["$L1",["$","div",null,{"className":"flex flex-col items-center justify-center min-h-[50vh] px-4 text-center","children":[["$","h1",null,{"className":"text-4xl font-bold text-slate-900 mb-4","children":"Page Not Found"}],["$","p",null,{"className":"text-slate-600 mb-6","children":"The page you are looking for does not exist."}],["$","$L2",null,{"href":"/","className":"bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors","children":"Back to Home"}]]}],null],null],null]},[null,["$","$L3",null,{"parallelRouterKey":"children","segmentPath":["children","/_not-found","children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L4",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined"}]],null]},[[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/c2c4de2fe7c7ec20.css","precedence":"next","crossOrigin":"$undefined"}]],["$","html",null,{"lang":"en","children":["$","body",null,{"className":"__className_f367f3 antialiased","children":[["$","$L5",null,{}],["$","main",null,{"className":"min-h-screen","children":["$","$L3",null,{"parallelRouterKey":"children","segmentPath":["children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L4",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":["$","div",null,{"className":"flex flex-col items-center justify-center min-h-[50vh] px-4 text-center","children":[["$","h1",null,{"className":"text-4xl font-bold text-slate-900 mb-4","children":"Page Not Found"}],["$","p",null,{"className":"text-slate-600 mb-6","children":"The page you are looking for does not exist."}],["$","$L2",null,{"href":"/","className":"bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors","children":"Back to Home"}]]}],"notFoundStyles":[]}]}],["$","footer",null,{"className":"mt-16 border-t border-teal-100 bg-teal-50/40","children":[["$","div",null,{"className":"mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm text-slate-700 sm:px-6 md:grid-cols-3","children":[["$","div",null,{"children":[["$","h3",null,{"className":"font-semibold text-slate-900","children":"Vertical Mouse Guide"}],["$","p",null,{"className":"mt-2","children":"Expert vertical mouse reviews and ergonomic buying guides for wrist pain relief and RSI prevention."}]]}],["$","div",null,{"children":[["$","h3",null,{"className":"font-semibold text-slate-900","children":"Guides"}],["$","ul",null,{"className":"mt-2 space-y-1","children":[["$","li",null,{"children":["$","$L2",null,{"href":"/kensington-pro-fit-ergo-review-2026","className":"hover:text-teal-700","children":"Kensington Pro Fit Ergo Review"}]}],["$","li",null,{"children":["$","$L2",null,{"href":"/can-vertical-mouse-cure-rsi","className":"hover:text-teal-700","children":"Can a Vertical Mouse Cure RSI?"}]}]]}]]}],["$","div",null,{"children":[["$","h3",null,{"className":"font-semibold text-slate-900","children":"Contact"}],["$","p",null,{"className":"mt-2","children":"hello@verticalmouseguide.com"}]]}]]}],["$","div",null,{"className":"border-t border-teal-100 py-4 text-center text-xs text-slate-500","children":["© ",2026," Vertical Mouse Guide"]}]]}],["$","$L6",null,{"src":"https://www.googletagmanager.com/gtag/js?id=G-HQ8HYJN2FS","strategy":"afterInteractive"}],["$","$L6",null,{"id":"google-analytics","strategy":"afterInteractive","children":"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', 'G-HQ8HYJN2FS');\n          "}],["$","$L6",null,{"id":"ga4-custom-event-tracking","strategy":"afterInteractive","children":"$7"}]]}]}]],null],null],["$L8",["$","meta",null,{"name":"robots","content":"noindex"}]]]]]
8:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","1",{"charSet":"utf-8"}],["$","title","2",{"children":"Vertical Mouse Guide — Ergonomic Mouse Guides"}],["$","meta","3",{"name":"description","content":"Expert vertical mouse reviews and ergonomic buying guides for wrist pain relief. Top-rated ergonomic mice tested and reviewed for 2026. Updated monthly."}],["$","meta","4",{"property":"og:title","content":"Vertical Mouse Guide — Ergonomic Mouse Guides"}],["$","meta","5",{"property":"og:description","content":"Expert vertical mouse reviews and ergonomic buying guides for wrist pain relief. Top-rated ergonomic mice tested and reviewed for 2026. Updated monthly."}],["$","meta","6",{"property":"og:site_name","content":"Vertical Mouse Guide"}],["$","meta","7",{"property":"og:locale","content":"en_US"}],["$","meta","8",{"property":"og:image","content":"https://www.verticalmouseguide.com/og-image.jpg"}],["$","meta","9",{"property":"og:image:width","content":"1200"}],["$","meta","10",{"property":"og:image:height","content":"630"}],["$","meta","11",{"property":"og:image:alt","content":"Vertical Mouse Guide"}],["$","meta","12",{"property":"og:type","content":"website"}],["$","meta","13",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","14",{"name":"twitter:title","content":"Vertical Mouse Guide — Ergonomic Mouse Guides"}],["$","meta","15",{"name":"twitter:description","content":"Expert vertical mouse reviews and ergonomic buying guides for wrist pain relief. Top-rated ergonomic mice tested and reviewed for 2026. Updated monthly."}],["$","meta","16",{"name":"twitter:image","content":"https://www.verticalmouseguide.com/og-image.jpg"}],["$","meta","17",{"name":"twitter:image:width","content":"1200"}],["$","meta","18",{"name":"twitter:image:height","content":"630"}],["$","meta","19",{"name":"twitter:image:alt","content":"Vertical Mouse Guide"}],["$","meta","20",{"name":"next-size-adjust"}]]
1:null
