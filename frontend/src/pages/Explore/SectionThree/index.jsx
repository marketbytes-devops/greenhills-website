import { useState, useEffect } from 'react';
import { fetchExploreSectionThreeData, fetchExploreSectionThreeTitle } from '../../../helpers/apiService';

const SectionThree = () => {
    const [images, setImages] = useState([]);
    const [sectionData, setSectionData] = useState({ title: '', description: '' });
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    useEffect(() => {
        fetchExploreSectionThreeTitle()
            .then((response) => {
                const titleData = Array.isArray(response.data) && response.data.length > 0 ? response.data[0] : {};
                setSectionData({
                    title: titleData.title || '',
                    description: titleData.description || ''
                });
            })
            .catch((error) => {
                console.error('Error fetching title data:', error);
                setSectionData({ title: '', description: '' });
            });

        fetchExploreSectionThreeData()
            .then((response) => {
                setImages(Array.isArray(response.data) ? response.data : []);
            })
            .catch((error) => {
                console.error('Error fetching images:', error);
                setImages([]);
            });
    }, []);

    const openModal = (index) => setSelectedImageIndex(index);
    const closeModal = () => setSelectedImageIndex(null);
    const showNextImage = () => {
        setSelectedImageIndex((prev) => (prev + 1) % images.length);
    };
    const showPreviousImage = () => {
        setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleKeyDown = (e) => {
        if (selectedImageIndex === null) return;
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'ArrowLeft') showPreviousImage();
        if (e.key === 'Escape') closeModal();
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex]);

    if (!images.length && !sectionData.title && !sectionData.description) {
        return <div></div>;
    }

    return (
        <>
            {(sectionData.title || sectionData.description) && (
                <div className="text-center max-w-4xl mx-auto">
                    {sectionData.title && (
                        <div
                            className="pb-10 space-y-6"
                            dangerouslySetInnerHTML={{ __html: sectionData.title }}
                        />
                    )}
                    {sectionData.description && (
                        <div
                            className="pb-10"
                            dangerouslySetInnerHTML={{ __html: sectionData.description }}
                        />
                    )}
                </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className="relative overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => openModal(index)}
                    >
                        <img
                            src={image.image || '/placeholder-image.jpg'}
                            alt={image.title || 'Gallery Image'}
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                            onError={(e) => { e.target.src = '/placeholder-image.jpg'; }}
                        />
                    </div>
                ))}
            </div>

            {selectedImageIndex !== null && (
                <div className="fixed inset-0 bg-secondaryBlack bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative max-w-4xl w-full bg-secondaryBlack/50 mx-4">
                        <button
                            className="absolute bg-secondaryBlack py-0.5 px-2.5 rounded-full top-4 right-4 text-white text-2xl font-bold hover:text-gray-300"
                            onClick={closeModal}
                            aria-label="Close Modal"
                        >
                            ×
                        </button>
                        <img
                            src={images[selectedImageIndex].image || '/placeholder-image.jpg'}
                            alt={images[selectedImageIndex].title || 'Selected Image'}
                            className="w-full h-auto max-h-[80vh] object-cover"
                            onError={(e) => { e.target.src = '/placeholder-image.jpg'; }}
                        />
                        <button
                            className="absolute bg-secondaryBlack p-2 left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300"
                            onClick={showPreviousImage}
                            aria-label="Previous Image"
                        >
                            ‹
                        </button>
                        <button
                            className="absolute bg-secondaryBlack p-2 right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300"
                            onClick={showNextImage}
                            aria-label="Next Image"
                        >
                            ›
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default SectionThree;