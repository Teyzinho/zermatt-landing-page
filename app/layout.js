import './globals.css'

import { Montserrat } from 'next/font/google'
import { Montserrat_Alternates } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Zermatt',
  description: 'Conheça Zermatt',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}