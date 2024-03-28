"use client";

import {Roboto_Mono} from 'next/font/google'
import cn from 'classnames';
import oona from '../assets/styles/oona/oona.module.scss'
import React from "react";
import {usePathname} from "next/navigation";

const robotoMono = Roboto_Mono({subsets: ['latin']})

export default function Body({children}: { children: React.ReactNode }) {
  const pathname = usePathname()
  const pageClass = pathname === '/work' ? 'page-work' : 'page-home';

  return (
    <body className={cn(robotoMono.className, oona[pageClass], 'bg-accentBackground')}>
    {children}
    </body>
  )
}
