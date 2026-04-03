import { useState, useCallback } from "react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  /** Set to "eager" for LCP/above-fold images */
  loading?: "lazy" | "eager";
}

const ImageWithFallback = ({ src, fallbackSrc, alt, className, loading = "lazy", ...props }: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback(() => {
    if (!hasError && fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    } else {
      setHasError(true);
    }
  }, [hasError, fallbackSrc]);

  if (hasError && !fallbackSrc) {
    return (
      <div className={`flex items-center justify-center bg-muted ${className || ""}`} {...props}>
        <span className="text-xs text-muted-foreground font-body">Image unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  );
};

export default ImageWithFallback;
