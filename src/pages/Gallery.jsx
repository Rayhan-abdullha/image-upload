import React, { useEffect, useState } from 'react'
import MainLayout from '../layout/MainLayout';
import GalleryList from '../components/GalleryList';
import LoadingSpinner from '../components/LoadingSpinner';

export const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch image data from the API
  useEffect(() => {
    const fetchImages = async () => {
        try {
            setLoading(true)
            const res = await fetch('http://localhost:4000/images');
            const data = await res.json();
            const imageUrls = data.images.map(image => `http://localhost:4000${image}`);
            setImages(imageUrls)
      } catch (error) {
            console.error('Error fetching images:', error);
      } finally {
            setLoading(false)
      }
    };

    fetchImages();
  }, []); 

  return (
      <MainLayout>
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Uploaded Images</h1>
            {loading ? (
                  <div className='flex justify-center items-center h-[70vh]'>
                      <LoadingSpinner className='w-8 h-8'/>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <GalleryList images={images} />
                </div>
            )}
        </div>
    </MainLayout>
  )
}
