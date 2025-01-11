import './globals.css'
import Sidebar from './components/Sidebar'

export const metadata = {
  title: 'Yolfry Tubiñez',
  description: 'Innovator in Blockchain & Web3 | Specialist in Operations Management & Digital Strategy | Business Development Expert',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <div style={{ display: 'flex' }}>
          {/* Barra lateral fija */}
          <Sidebar />

          {/* Contenido principal */}
          <div style={{ flex: 1 }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
