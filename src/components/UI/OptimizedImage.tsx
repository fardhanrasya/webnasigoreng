import React, { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  objectFit = "cover",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        width: width
          ? typeof width === "number"
            ? `${width}px`
            : width
          : "100%",
        height: height
          ? typeof height === "number"
            ? `${height}px`
            : height
          : "auto",
      }}
    >
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          aria-hidden="true"
        />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full transition-opacity duration-300 ${
          objectFit === "cover"
            ? "object-cover"
            : objectFit === "contain"
            ? "object-contain"
            : objectFit === "fill"
            ? "object-fill"
            : objectFit === "none"
            ? "object-none"
            : "object-scale-down"
        } ${isLoaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};

export default OptimizedImage;
