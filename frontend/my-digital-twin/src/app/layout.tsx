import './globals.css'
// 1. Import the fonts
import { Space_Grotesk, Space_Mono } from 'next/font/google'

// 2. Configure them
const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-grotesk', // We will use this variable in Tailwind
    display: 'swap',
})

const spaceMono = Space_Mono({
    subsets: ['latin'],
    weight: ['400', '700'], // Import regular and bold
    variable: '--font-mono',
    display: 'swap',
})

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        {/* 3. Inject them into the body class */}
        <body className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}>
        {children}
        </body>
        </html>
    )
}