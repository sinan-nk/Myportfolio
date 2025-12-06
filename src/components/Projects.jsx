import Image from 'next/image'


const projects = [
{ title: 'Ecommerce', description: 'Short desc', image: '/project1.png', url: 'https://lint-react-frontend.vercel.app/' },
]


export default function Projects() {
return (
<section id="projects">
<h2 className="text-2xl font-semibold">Projects</h2>
<div className="mt-6 grid md:grid-cols-2 gap-6">
{projects.map((p) => (
<a key={p.title} href={p.url} className="group block border rounded overflow-hidden">
<div className="h-48 relative">
<Image src={p.image} alt={p.title} fill style={{ objectFit: 'cover' }} />
</div>
<div className="p-4">
<h3 className="font-semibold">{p.title}</h3>
{/* <p className="text-slate-600 mt-2">{p.description}</p> */}
</div>
</a>
))}
</div>
</section>
)
}