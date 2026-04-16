import { useState, useEffect } from 'react'
import { Thumb } from './Thumb/Thumb'

import styles from './ProductMedia.module.css'

export function ProductMedia({ images, name }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setCurrentIndex(0)
  }, [images])

  if (!images?.length) return null

  const currentImage = images[currentIndex]

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryMain}>
        <img src={currentImage} alt={name} />
      </div>
      {images.length > 1 && (
        <div className={styles.thumbs}>
          {images.map((img, index) => (
            <Thumb
              key={index}
              img={img}
              isActive={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
              name={name}
            />
          ))}
        </div>
      )}
    </div>
  )
}
