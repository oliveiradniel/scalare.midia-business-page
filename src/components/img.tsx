import type { ComponentProps } from 'react';

import {
  imageFallback,
  imageInfo,
  imageSrcSet,
  type ImageName,
} from '#/lib/images';

type ImgProps = Omit<
  ComponentProps<'img'>,
  'src' | 'srcSet' | 'sizes' | 'width' | 'height' | 'alt'
> & {
  name: ImageName;
  /** Largura em que a imagem é desenhada em cada breakpoint. */
  sizes: string;
  /** Texto alternativo; use "" para imagem decorativa. */
  alt: string;
  /** Imagem LCP: carrega cedo e com prioridade alta. */
  priority?: boolean;
};

/** `<picture>` com AVIF + WebP + fallback, gerado por scripts/optimize-images.mjs. */
export function Img({ name, sizes, alt, priority, ...props }: ImgProps) {
  const { width, height } = imageInfo(name);

  return (
    // contents: o <picture> não interfere no layout. Os <source> precisam de
    // hidden, senão viram itens de flex/grid e somam gap.
    <picture className="contents [&>source]:hidden">
      <source type="image/avif" srcSet={imageSrcSet(name, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={imageSrcSet(name, 'webp')} sizes={sizes} />
      <img
        src={imageFallback(name)}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : undefined}
        {...props}
      />
    </picture>
  );
}
