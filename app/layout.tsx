import type {Metadata} from 'next'
import {Inter, Roboto_Mono} from 'next/font/google'
import cn from 'classnames';
import './assets/styles/globals.css'
import './assets/styles/materialize.css'
import './assets/styles/linea.min.css'
import oona from './assets/styles/oona/oona.module.scss'
import Nav from "@/app/layout/nav";
import Footer from "@/app/layout/footer";

const inter = Inter({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Advertum • design and development',
  description: 'Advertum is a cutting edge design and development studio that exists to create challenging and engaging visual concepts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={cn(robotoMono.className, oona['page-home'])}>
    <Nav/>
    <main id="main">
      {children}
    </main>
    <Footer/>
    </body>
    </html>
  )
}
