"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Suspense } from "react";

const BreadcrumbsContent = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Mendapatkan parameter kategori dan halaman untuk menu
  const kategori = searchParams.get("kategori");
  const page = searchParams.get("page");
  const isMenuPage = pathname === "/menu";

  // Menghapus slash di awal
  const path = pathname.startsWith("/") ? pathname.substring(1) : pathname;

  const paths = path.split("/").filter(Boolean);

  // Jika tidak ada path, cukup kembalikan beranda
  if (paths.length === 0) {
    return (
      <div className="flex items-center py-2 text-sm">
        <Link href="/" className="text-gray-500 hover:text-gray-700">
          Beranda
        </Link>
      </div>
    );
  }

  // Fungsi untuk mengubah slug ke teks yang lebih manusiawi
  const slugToText = (slug: string): string => {
    // Ganti hyphen dengan spasi dan kapitalisasi setiap kata
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="flex items-center py-2 text-sm">
      <Link href="/" className="text-gray-500 hover:text-gray-700">
        Beranda
      </Link>

      {paths.map((item, index) => {
        // Buatkan URL untuk breadcrumb ini
        const href = "/" + paths.slice(0, index + 1).join("/");

        // Ubah slug untuk tampilan
        const displayText = slugToText(item);

        // Jika ini adalah item terakhir, jangan buat tautan
        const isLast = index === paths.length - 1 && !isMenuPage;

        return (
          <div key={index} className="flex items-center">
            <ChevronRight className="mx-2 text-gray-400" size={16} />
            {isLast ? (
              <span className="font-medium text-gray-900">{displayText}</span>
            ) : (
              <Link href={href} className="text-gray-500 hover:text-gray-700">
                {displayText}
              </Link>
            )}
          </div>
        );
      })}

      {/* Tambahkan breadcrumb untuk kategori jika ada */}
      {isMenuPage && kategori && kategori !== "all" && (
        <div className="flex items-center">
          <ChevronRight className="mx-2 text-gray-400" size={16} />
          {!page || page === "1" ? (
            <span className="font-medium text-gray-900">{kategori}</span>
          ) : (
            <Link
              href={`/menu?kategori=${kategori}`}
              className="text-gray-500 hover:text-gray-700"
            >
              {kategori}
            </Link>
          )}
        </div>
      )}

      {/* Tambahkan breadcrumb untuk halaman jika ada dan lebih dari 1 */}
      {isMenuPage && page && page !== "1" && (
        <div className="flex items-center">
          <ChevronRight className="mx-2 text-gray-400" size={16} />
          <span className="font-medium text-gray-900">Halaman {page}</span>
        </div>
      )}
    </div>
  );
};

const Breadcrumbs = () => {
  return (
    <Suspense fallback={<div className="py-2 text-sm">Memuat navigasi...</div>}>
      <BreadcrumbsContent />
    </Suspense>
  );
};

export default Breadcrumbs;
