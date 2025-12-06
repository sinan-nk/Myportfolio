export default function About() {
return (
<section id="about">
<h2 className="text-2xl font-semibold">About</h2>
<p className="mt-3 text-slate-600">
Short bio about your background, tech stack, and what you love building. Keep it 2–3 lines.
</p>
<div className="mt-4 grid md:grid-cols-3 gap-4">
<div className="p-4 border rounded">HTML/CSS</div>
<div className="p-4 border rounded">React / Next.js</div>
<div className="p-4 border rounded">Design / Figma</div>
</div>
</section>
)
}