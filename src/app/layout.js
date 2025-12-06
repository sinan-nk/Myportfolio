import './globals.css'


export const metadata = {
title: 'Your Name — Portfolio',
description: 'A short description about you — developer, designer, whatever.',
}


export default function RootLayout({ children }) {
return (
<html lang="en">
<body className="flex items-center justify-center min-h-screen m-0 p-0 bg-white">
{children}
</body>
</html>
)
}