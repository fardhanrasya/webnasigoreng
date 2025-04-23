"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const Breadcrumbs = () => {
  const pathname = usePathname();

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
        const isLast = index === paths.length - 1;

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
    </div>
  );
};

export default Breadcrumbs;
