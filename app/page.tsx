"use client";
import cn from "classnames";
import oona from './assets/styles/oona/oona.module.scss'
// import Image from 'next/image'

export default function Home() {
  return (
      <>
        <div className={'bg-accentBackground text-main'}>
          <div className={cn('container intro', oona['container'], oona['intro'])}>
            <div className={cn('row')}>
              <h1 className={
                  'relative lg:absolute ' +
                  'top-0 lg:top-1/3 ' +
                  'px-3 ' +
                  'w-full lg:w-2/3 ' +
                  'text-[45px] lg:text-[70px] ' +
                  'tracking-tight'}>Improve The Quality and Performance of Your Business</h1>
              <div className="col s12 l6 offset-l6">
                <p className={cn('' +
                    'absolute lg:relative ' +
                    'top-2/3 md:top-3/4 lg:top-0 ' +
                    ' lg:text-[1.68rem] ' +
                    'intro-text text-main font-normal my-5 leading-normal')}>
                  Advertum is a cutting edge design and development studio that exists to create challenging and engaging
                  visual concepts.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={'bg-white text-main'}>
          <div className={cn('container', oona['container'])}>
            <section className={cn('latest-projects', oona['section'], oona['latest-projects'])}>
              <div className="row">
                <div className="col s12">
                  <h2 className={'tracking-tight'}>Latest projects</h2>
                </div>
              </div>
              <div className="row">
                <div className="col s12 l6 margin-on-medium-and-down">
                  <a href="/work/clip-finance" className={cn(oona['no-underline'], '')}>
                    <img src="/images/work/clip/clip.webp" alt="Clip Finance" className={'responsive-img rounded-3xl'}/>
                  </a>
                  <a href="/work/clip-finance" className={cn('flow-text', oona['item-title'])}>Clip Finance</a>
                </div>
                <div className="col s12 l6">
                  <a href="/work/advertum-cashback" className={cn(oona['no-underline'])}>
                    <img src="/images/work/advertum/advertum.webp" alt="Advertum Cashback" className={'responsive-img rounded-3xl'}/>
                  </a>
                  <a href="/work/advertum-cashback" className={cn('flow-text', oona['item-title'])}>Advertum
                    Cashback</a>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className={'text-main'}>
          <div className={cn('container', oona['container'])}>
            <section className={cn(oona['section'], oona['services'])}>
              <div className="row">
                <div className="col s12">
                  <h2 className={'tracking-tight'}>Our services</h2>
                </div>
              </div>
              <div className="row">
                <div className="col s12 l6 margin-on-medium-and-down">
                  <i className="icon-basic-cloud"></i><span className={cn('flow-text', oona['item-title'])}>Web2 cloud solutions</span>
                </div>
                <div className="col s12 l6">
                  <i className="icon-basic-star"></i><span
                    className={cn(oona['item-title'], 'flow-text')}>Visual Identity</span>
                </div>
              </div>
              <div className="row">
                <div className="col s12 l6 margin-on-medium-and-down">
                  <i className="icon-basic-server2"></i><span className={cn('flow-text', oona['item-title'])}>Data, Bigdata, Microservices</span>
                </div>
                <div className="col s12 l6">
                  <i className="icon-basic-elaboration-browser-star"></i><span
                    className={cn('flow-text', oona['item-title'])}>Web Design & UI/UX</span>
                </div>
              </div>
              <div className="row">
                <div className="col s12 l6 margin-on-medium-and-down">
                  <i className="icon-weather-lightning"></i><span className={cn('flow-text', oona['item-title'])}>Performance optimizations</span>
                </div>
                <div className="col s12 l6">
                  <i className="icon-basic-heart"></i><span className={cn('flow-text', oona['item-title'])}>A lot of passion to make your users happy</span>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className={'bg-white text-main'}>
          <div className={cn('container', oona['container'])}>
            <section className={cn(oona['section'], oona['blog-posts'])}>
              <div className="row">
                <div className="col s12">
                  <h2 className={'tracking-tight'}>Journal</h2>
                </div>
              </div>
              <div className="row">
                <div className="col s12 l6 margin-on-medium-and-down">
                  <a href="/great-displacement" className={cn(oona['no-underline'])}>
                    <svg viewBox="0 0 680 400" className="responsive-img rounded-3xl" style={{background: '#f8f8f8'}}>
                      {/* Grid */}
                      {[...Array(12)].map((_, i) => (
                        <line key={`v${i}`} x1={60 * i} y1="0" x2={60 * i} y2="400" stroke="#e5e5e5" strokeWidth="0.5" />
                      ))}
                      {[...Array(8)].map((_, i) => (
                        <line key={`h${i}`} x1="0" y1={50 * i} x2="680" y2={50 * i} stroke="#e5e5e5" strokeWidth="0.5" />
                      ))}
                      {/* Displacement curve */}
                      <path d="M40 320 Q120 310 180 280 Q240 250 300 180 Q360 110 420 70 Q480 30 560 20 Q600 15 640 12" fill="none" stroke="#1a1a1a" strokeWidth="2" />
                      <path d="M40 320 Q120 315 180 300 Q240 285 300 260 Q360 230 420 200 Q480 170 560 150 Q600 140 640 135" fill="none" stroke="#999" strokeWidth="1.5" strokeDasharray="6 4" />
                      {/* Nodes on curve */}
                      {[[180, 280], [300, 180], [420, 70], [560, 20]].map(([cx, cy], i) => (
                        <g key={`n${i}`}>
                          <circle cx={cx} cy={cy} r="5" fill="#1a1a1a" />
                          <circle cx={cx} cy={cy} r="12" fill="none" stroke="#1a1a1a" strokeWidth="0.8" />
                        </g>
                      ))}
                      {/* Vertical drop lines */}
                      {[[300, 180, 260], [420, 70, 200]].map(([x, y1, y2], i) => (
                        <line key={`d${i}`} x1={x} y1={y1} x2={x} y2={y2} stroke="#c00" strokeWidth="1" strokeDasharray="3 3" />
                      ))}
                      {/* Labels */}
                      <text x="50" y="30" fontSize="13" fontFamily="monospace" fill="#999">cognitive labor → cheap</text>
                      <text x="400" y="380" fontSize="13" fontFamily="monospace" fill="#999">physical labor → scarce</text>
                    </svg>
                  </a>
                  <div className="meta">
                    <time dateTime="2026-02-01">02/2026</time>
                    <span>&nbsp;· Мнение · Лонгрид</span>
                  </div>
                  <a href="/great-displacement" className={cn('flow-text', oona['item-title'])}>Великое вытеснение</a>
                </div>
                <div className="col s12 l6">
                  <a href="/harness-engineering" className={cn(oona['no-underline'])}>
                    <svg viewBox="0 0 680 400" className="responsive-img rounded-3xl" style={{background: '#f8f8f8'}}>
                      {/* Grid */}
                      {[...Array(12)].map((_, i) => (
                        <line key={`v${i}`} x1={60 * i} y1="0" x2={60 * i} y2="400" stroke="#e5e5e5" strokeWidth="0.5" />
                      ))}
                      {[...Array(8)].map((_, i) => (
                        <line key={`h${i}`} x1="0" y1={50 * i} x2="680" y2={50 * i} stroke="#e5e5e5" strokeWidth="0.5" />
                      ))}
                      {/* Architecture layers */}
                      {['Types', 'Config', 'Repo', 'Service', 'Runtime', 'UI'].map((label, i) => {
                        const x = 80 + i * 90;
                        const y = 160;
                        return (
                          <g key={label}>
                            <rect x={x} y={y} width="72" height="32" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
                            <text x={x + 36} y={y + 20} fontSize="10" fontFamily="monospace" fill="#1a1a1a" textAnchor="middle">{label}</text>
                            {i < 5 && <line x1={x + 72} y1={y + 16} x2={x + 90} y2={y + 16} stroke="#1a1a1a" strokeWidth="1" markerEnd="url(#arrow)" />}
                          </g>
                        );
                      })}
                      <defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#1a1a1a" /></marker></defs>
                      {/* Providers bracket */}
                      <rect x="80" y="240" width="612" height="28" rx="4" fill="none" stroke="#999" strokeWidth="1" strokeDasharray="4 3" />
                      <text x="340" y="258" fontSize="10" fontFamily="monospace" fill="#999" textAnchor="middle">Providers (auth, telemetry, connectors, feature flags)</text>
                      {/* Agent loop */}
                      <circle cx="340" cy="70" r="28" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
                      <text x="340" y="74" fontSize="10" fontFamily="monospace" fill="#1a1a1a" textAnchor="middle">Codex</text>
                      {/* Connections from agent to layers */}
                      {[170, 260, 350, 440, 530].map((x, i) => (
                        <line key={`c${i}`} x1="340" y1="98" x2={x} y2="160" stroke="#ddd" strokeWidth="0.8" />
                      ))}
                      {/* Feedback loop */}
                      <path d="M380 70 Q500 40 560 70 Q620 100 600 130 Q580 155 530 155" fill="none" stroke="#c00" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrow)" />
                      <text x="580" y="90" fontSize="9" fontFamily="monospace" fill="#c00">feedback</text>
                      {/* Stats */}
                      <text x="50" y="340" fontSize="11" fontFamily="monospace" fill="#999">1M loc · 1500 PRs · 3 engineers</text>
                      <text x="420" y="340" fontSize="11" fontFamily="monospace" fill="#999">0 lines hand-written</text>
                    </svg>
                  </a>
                  <div className="meta">
                    <time dateTime="2026-02-11">02/2026</time>
                    <span>&nbsp;· Инженерия · Перевод</span>
                  </div>
                  <a href="/harness-engineering" className={cn('flow-text', oona['item-title'])}>Harness-инженерия</a>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className={'bg-white text-main'}>
          <div className={cn('container', oona['container'])}>
            <section className={cn(oona['section'], oona['get-in-touch'], oona['get-in-touch'])}>
              <div className="row">
                <div className="col s12">
                  <h2 className={'tracking-tight'}>Get in touch</h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className={cn('flow-text', oona['item-title'])}>
                    Whether you like to start a new project, discuss a brilliant investment idea
                    or just have a small-talk chat, feel free to <a href="/contact" className="ajax-link">contact us</a>.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <img src="/images/bottom.jpg" alt="Get in touch" className="w-[400px]"/>
              </div>
            </section>
          </div>
        </div>

        {/*<script>*/}
        {/*  $.getScript('./assets/js/curves.js?v=1')*/}
        {/*  .done(function(script, status) {*/}
        {/*  //console.log(status);*/}
        {/*})*/}
        {/*  .fail(function(error) {*/}
        {/*  //console.error(error);*/}
        {/*  Materialize.toast('Curves script error: ' + error.statusText, App.CONFIG.toastSpeed, 'error');*/}
        {/*});*/}
        {/*</script>*/}
      </>
  )
}
