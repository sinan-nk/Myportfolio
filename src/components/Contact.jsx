'use client'
import { useState } from 'react'


export default function Contact() {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [sent, setSent] = useState(false)


function submit(e) {
e.preventDefault()
// For quick demo, we'll use mailto. Replace this with an API route for production.
const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
window.location.href = `mailto:your.email@example.com?subject=Portfolio contact from ${name}&body=${body}`
setSent(true)
}


return (
<section id="contact">
<h2 className="text-2xl font-semibold">Contact</h2>
<form onSubmit={submit} className="mt-4 grid gap-3 max-w-xl">
<input required value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" className="p-3 border rounded" />
<input required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your email" type="email" className="p-3 border rounded" />
<textarea required value={message} onChange={(e)=>setMessage(e.target.value)} rows={6} placeholder="Message" className="p-3 border rounded" />
<div className="flex items-center gap-4">
<button className="px-4 py-2 bg-slate-900 text-white rounded">Send</button>
{sent && <span className="text-green-600">Opening mail app...</span>}
</div>
</form>
</section>
)
}