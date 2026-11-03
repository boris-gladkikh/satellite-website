import Image from 'next/image';
import styles from './MediaTile.module.css';

// An image at a fixed aspect ratio, or the placeholder tile when there's no image.
export default function MediaTile({ src, alt = '', ratio = '1', label = 'Image', sizes, priority, className = '' }) {
  return (
    <div className={`${styles.tile} ${src ? '' : 'placeholder-tile'} ${className}`} style={{ aspectRatio: ratio }}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={styles.image} />
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
}
