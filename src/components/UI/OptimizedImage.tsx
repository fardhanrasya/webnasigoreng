"use client";

import { useState } from "react";
import Image from "next/image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  priority?: boolean;
  quality?: number;
  sizes?: string;
  style?: React.CSSProperties;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  objectFit = "cover",
  priority = false,
  quality = 75,
  sizes,
  style,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Untuk gambar lokal atau SVG yang diimpor langsung
  if (typeof src === "object") {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={{
          objectFit,
          ...style,
        }}
        priority={priority}
        quality={quality}
        sizes={sizes}
      />
    );
  }

  // Tentukan objectPosition berdasarkan objectFit
  const objectPosition = objectFit === "cover" ? "center" : undefined;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "auto",
        ...style,
      }}
    >
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          aria-hidden="true"
        />
      )}

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          objectFit,
          objectPosition,
        }}
        priority={priority}
        quality={quality}
        sizes={sizes}
      />
    </div>
  );
};

export default OptimizedImage;
