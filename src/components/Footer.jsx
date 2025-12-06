export default function Footer() {
return (
<footer className="border-t mt-12 py-6">
<div className="container flex items-center justify-between">
<div>© {new Date().getFullYear()} Your Name</div>
<div className="flex gap-4">
<a href="#">GitHub</a>
<a href="#">LinkedIn</a>
</div>
</div>
</footer>
)
}