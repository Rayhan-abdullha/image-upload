import React from 'react'

const GalleryList = ({images}) => {
  return (
      <>
        {images.length > 0 ? (
                images.map((image, index) => (
                <div key={index} className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden shadow-md">
                    <img
                    src={image}
                    alt={`Uploaded image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    />
                </div>
                ))
            ) : (
                <p className="col-span-full text-center text-gray-500">No images found.</p>
        )}
      </>
  )
}

export default GalleryList