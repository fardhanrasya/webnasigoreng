import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-amber-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Halaman Tidak Ditemukan</h2>
      <p className="text-gray-600 max-w-md mb-8">
        Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah
        dipindahkan. Silakan kembali ke halaman utama atau coba salah satu
        tautan di bawah ini.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="px-6 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
        >
          Kembali ke Beranda
        </Link>
        <Link
          href="/menu"
          className="px-6 py-2 border border-amber-500 text-amber-500 rounded-md hover:bg-amber-50 transition-colors"
        >
          Lihat Menu Kami
        </Link>
      </div>
    </div>
  );
}
