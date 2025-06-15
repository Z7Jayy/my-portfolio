// src/components/ImageWrapper.tsx
import Image from 'next/image';

interface ImageWrapperProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
}

export default function ImageWrapper({
                                         src,
                                         alt,
                                         width = 500,
                                         height = 300,
                                         className = ''
                                     }: ImageWrapperProps) {
    return (
        <div className={`relative ${className}`}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAFhQHQwUJVBAAAAABJRU5ErkJggg=="
            />
        </div>
    );
}