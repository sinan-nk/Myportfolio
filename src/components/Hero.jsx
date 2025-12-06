import Image from 'next/image'


export default function Hero() {
return (
<section id="home" className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
Hi, I'm Mohammed Sinan NK
</h1>
<p className="mt-4 text-lg text-slate-600">
I build accessible, performant web apps. Currently focused on Next.js and UI.
</p>
<div className="mt-6 flex gap-4">
<a href="#projects" className="px-4 py-2 rounded bg-slate-900 text-white">See projects</a>
<a href="#contact" className="px-4 py-2 rounded border">Get in touch</a>
</div>
</div>
<div className="flex justify-center">
{/* Add a profile image to public/profile.jpg */}
<div className="w-56 h-56 rounded-full overflow-hidden shadow-lg">
<Image src="/developer.jpg" alt="Profile" width={224} height={224} />
</div>
</div>
</section>
)
}