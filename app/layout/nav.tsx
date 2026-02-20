"use client";
import oona from '../assets/styles/oona/oona.module.scss'
import cn from "classnames";
import {useState} from "react";
import ResponsiveUtility from "@/app/layout/ResponsiveUtility";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn('navbar-fixed', oona['navbar-fixed'])}>
      <nav>
        <div className="nav-wrapper bg-accentBackground">
          <div className={cn(oona['container'], 'container')}>
            <div className="row">
              <div className="col s12 l6">
                <a href="/" className={oona['current-page']}>
                  <img
                    src="/images/advertum.webp"
                    alt=""
                    width={28}
                    height={28}
                    style={{ objectFit: 'contain', flexShrink: 0 }}
                  />
                  Advertum
                </a>
                {/*<ResponsiveUtility />*/}
                <span className="right show-on-medium-and-down hide-on-large-only">
                    <a href="#"
                       onClick={() => setOpen(!open)}
                       className={cn('sidenav-toggle')}>Menu</a>
                  </span>
              </div>
              <div className="col s12 l6">
                <ul className=" hide-on-med-and-down">
                  <li><a href="/work">Work</a></li>
                  <li><a href="/journal">Journal</a></li>
                </ul>
                {open && <div onClick={() => setOpen(false)} className={oona['side-nav-overlay']}></div>}
                <ul className={cn('side-nav', oona['side-nav'], open && oona['side-nav-open'])}>
                  <li><a href="/work">Work</a></li>
                  <li><a href="/journal">Journal</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
