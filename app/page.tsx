"use client";
import cn from "classnames";
import oona from './assets/styles/oona/oona.module.scss'
// import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className={cn(oona['container'], oona['intro'], 'container intro')}>
        <div className={cn('row')}>
          <div className="col s12 l6 offset-l6">
            <p className={cn('flow-text intro-text', oona['intro-text'])}>
              Advertum is a cutting edge design and development studio that exists to create challenging and engaging
              visual concepts.
            </p>
          </div>
        </div>
      </div>

      {/*<div id="curves" className="hero"></div>*/}

      <div className={cn(oona['container'], 'container')}>
        <section className={cn(oona['section'], oona['latest-projects'], 'latest-projects')}>
          <div className="row">
            <div className="col s12">
              <h2>Latest projects</h2>
            </div>
          </div>
          <div className="row">
            <div className="col s12 l6 margin-on-medium-and-down">
              <a href="/work/clip-finance" className={cn(oona['no-underline'])}>
                <img src="/images/work/clip/clip.webp" alt="Clip Finance" className="responsive-img"/>
              </a>
              <a href="/work/clip-finance" className={cn(oona['flow-text'], 'flow-text')}>Clip Finance</a>
            </div>
            <div className="col s12 l6">
              <a href="/work/advertum-cashback" className={cn(oona['no-underline'])}>
                <img src="/images/work/advertum/advertum.webp" alt="Advertum Cashback" className="responsive-img"/>
              </a>
              <a href="/work/advertum-cashback" className={cn(oona['flow-text'], 'flow-text')}>Advertum Cashback</a>
            </div>
          </div>
        </section>

        <section className={cn(oona['section'], oona['services'])}>
          <div className="row">
            <div className="col s12">
              <h2>Our services</h2>
            </div>
          </div>
          <div className="row">
            <div className="col s12 l6 margin-on-medium-and-down">
              <i className="icon-basic-cloud"></i><span className={cn(oona['flow-text'], 'flow-text')}>Web2 cloud solutions</span>
            </div>
            <div className="col s12 l6">
              <i className="icon-basic-star"></i><span
              className={cn(oona['flow-text'], 'flow-text')}>Visual Identity</span>
            </div>
          </div>
          <div className="row">
            <div className="col s12 l6 margin-on-medium-and-down">
              <i className="icon-basic-server2"></i><span className={cn(oona['flow-text'], 'flow-text')}>Data, Bigdata, Microservices</span>
            </div>
            <div className="col s12 l6">
              <i className="icon-basic-elaboration-browser-star"></i><span
              className={cn(oona['flow-text'], 'flow-text')}>Web Design & UI/UX</span>
            </div>
          </div>
          <div className="row">
            <div className="col s12 l6 margin-on-medium-and-down">
              <i className="icon-weather-lightning"></i><span className={cn(oona['flow-text'], 'flow-text')}>Performance optimizations</span>
            </div>
            <div className="col s12 l6">
              <i className="icon-basic-heart"></i><span className={cn(oona['flow-text'], 'flow-text')}>A lot of passion to make your users happy</span>
            </div>
          </div>
        </section>

        <section className={cn(oona['section'], oona['blog-posts'], oona['blog-posts'])}>
          <div className="row">
            <div className="col s12">
              <h2>Advertum Blog</h2>
            </div>
          </div>
          <div className="row">
            <div className="col s12 l6 margin-on-medium-and-down">
              <a href="/blog/the-crucial-role-of-modern-and-striking-illustrations-in-it-product-marketing"
                 className={cn(oona['no-underline'])}>
                <img src="/images/blog/bicycle.jpg" alt="Marketing and Illustration" className="responsive-img"/>
              </a>
              <div className="meta">
                <time dateTime="2022-08-01T21:00">08/01/2022</time>
                <span>&nbsp;by Daniil</span></div>
              <a href="#" className={cn(oona['flow-text'], 'flow-text')}>Marketing and Illustration</a>
            </div>
            <div className="col s12 l6">
              <a href="#/blog/2023-successful-cases" className={cn(oona['no-underline'])}>
                <img src="/images/blog/mountain.jpg" alt="2023-successful-cases" className="responsive-img"/>
              </a>
              <div className="meta">
                <time dateTime="2023-12-15T21:00">12/12/2023</time>
                <span>&nbsp;by Nikolai</span></div>
              <a href="#" className={cn(oona['flow-text'], 'flow-text')}>2023: Successful Cases</a>
            </div>
          </div>
        </section>

        <section className={cn(oona['section'], oona['get-in-touch'], oona['get-in-touch'])}>
          <div className="row">
            <div className="col s12">
              <h2>Get in touch</h2>
            </div>
          </div>
          <div className="row">
            <div className="col s12 l6">
              <p className={cn(oona['flow-text'], 'flow-text')}>
                Whether you like to start a new project, discuss a brilliant investment idea
                or just have a small-talk chat, feel free to <a href="/contact" className="ajax-link">contact us</a>.
              </p>
            </div>
          </div>
        </section>

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
