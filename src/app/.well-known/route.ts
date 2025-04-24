import { NextResponse } from "next/server";
import siteConfig from "../env";

export async function GET() {
  // Mengekspos konfigurasi situs yang dapat diakses publik
  const publicConfig = {
    siteUrl: siteConfig.baseUrl,
    siteName: siteConfig.siteName,
    contact: siteConfig.contact,
    social: siteConfig.social,
  };

  return NextResponse.json(publicConfig);
}
