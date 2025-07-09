import { useState } from 'react';

type SmartImageProps = {
    src: string;
    alt: string;
    className?: string;
    placeholderClass?: string;
}

const SmartImage: React.FC<SmartImageProps> = ({ src, alt, className = '', placeholderClass = '' }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!loaded && (
        <div className={`absolute inset-0 bg-gray-200 animate-pulse ${placeholderClass}`} />
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-900 ease-in-out w-full h-full object-cover ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default SmartImage;