import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Website Checklist',
  description: 'This site provides what services and functionalities, we offer to customers while design and delivery our product. It will be always inclined towards the customer needs, we are helpful in design progress.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav><ul><li>Website Checklist</li></ul></nav>
        {children}
        <footer></footer>
      </body>
    </html>
  )
}
