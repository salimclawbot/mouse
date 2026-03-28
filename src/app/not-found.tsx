import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Page Not Found</h1>
      <p className="text-slate-600 mb-6">The page you are looking for does not exist.</p>
      <Link href="/" className="bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors">
        Back to Home
      </Link>
    </div>
  );
}
