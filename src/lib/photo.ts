// Responsive image attributes for the site photos: a 640px version (public/photos/sm) for phones and
// thumbnails, the full file for larger screens, and intrinsic width/height to stop layout shift.
// Sizes come from src/photo-sizes.json (regenerate it when photos are added).
import sizes from '../photo-sizes.json';

export function photo(src: string, sizesAttr = '100vw') {
  const s = (sizes as Record<string, number[]>)[src];
  if (!s) return { src };
  const [width, height, smallWidth] = s;
  const small = src.replace('/photos/', '/photos/sm/').replace(/\.(jpg|webp)$/, '.webp');
  return { src, width, height, srcset: `${small} ${smallWidth}w, ${src} ${width}w`, sizes: sizesAttr };
}
