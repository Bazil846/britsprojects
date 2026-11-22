// Responsive image attributes for the site photos: a 640px version (public/photos/sm), a 1280px
// version for large photos (public/photos/md), the full file for big screens, and intrinsic
// width/height to stop layout shift. Sizes come from src/photo-sizes.json (regenerate it when
// photos are added).
import sizes from '../photo-sizes.json';

export function photo(src: string, sizesAttr = '100vw') {
  const s = (sizes as Record<string, number[]>)[src];
  if (!s) return { src };
  const [width, height, smallWidth, mediumWidth] = s;
  const variant = (dir: string) => src.replace('/photos/', `/photos/${dir}/`).replace(/\.(jpg|webp)$/, '.webp');
  const set = [`${variant('sm')} ${smallWidth}w`];
  if (mediumWidth) set.push(`${variant('md')} ${mediumWidth}w`);
  set.push(`${src} ${width}w`);
  return { src, width, height, srcset: set.join(', '), sizes: sizesAttr };
}
