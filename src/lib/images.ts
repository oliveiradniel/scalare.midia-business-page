import manifest from '#/content/images.json';

export type ImageName = keyof typeof manifest;
type ImageFormat = 'avif' | 'webp' | 'png' | 'jpg';

export function imageInfo(name: ImageName) {
  return manifest[name];
}

export function imageUrl(name: ImageName, width: number, format: ImageFormat) {
  const { hash } = manifest[name];
  return `/img/${name}-${width}.${hash}.${format}`;
}

export function imageSrcSet(name: ImageName, format: 'avif' | 'webp') {
  return manifest[name].widths
    .map((w) => `${imageUrl(name, w, format)} ${w}w`)
    .join(', ');
}

export function imageFallback(name: ImageName) {
  const { fallback, fallbackWidth } = manifest[name];
  return imageUrl(name, fallbackWidth, fallback as ImageFormat);
}

/** Link de preload para a imagem LCP (vai no head da rota). */
export function imagePreload(name: ImageName, sizes: string) {
  return {
    rel: 'preload',
    as: 'image',
    type: 'image/avif',
    imageSrcSet: imageSrcSet(name, 'avif'),
    imageSizes: sizes,
    fetchPriority: 'high',
  } as const;
}
