import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const Slider = ({url, limit = 10, page=1}) =>{

    const [image, setImage] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const handlePrevious = () =>{
        setSlideIndex(slideIndex === 0 ? image.length - 1 : slideIndex - 1)
    }

    const handleNext = () =>{
        setSlideIndex(slideIndex === image.length - 1 ? 0 : slideIndex + 1)
    }

    async function fetchImages(getUrl){
        try{
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if(data){
                setImage(data);
                setLoading(false);
            }
             
        }catch(e){
            setError(e.message);
            setLoading(false);
        }
    }

    useEffect(() =>{
        if(url !== '') fetchImages(url)
    }, [url])

    if(loading) 
        return <div>Loading...</div>
    if(error !== null){
        return <div>Error: Occured Please Retry. {error}</div>
    }

    return(
        <div className='relative w-[600px] h-[450px] bg-gray-200 rounded-lg overflow-hidden shadow-lg mx-auto'>
            
            {/* Images Container */}
            <div className='relative w-full h-full'>
                {image && image.length > 0 ? 
                    image.map((index, item) => (
                        <img 
                            key={item.id}
                            src={item.download_url}
                            alt={item.author}
                            className='absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out'
                            style={{
                                objectFit: 'cover',
                                borderRadius: '10px',
                                opacity: slideIndex === index ? 1 : 0,
                                transform: slideIndex === index ? 'scale(1)' : 'scale(1.05)',
                                zIndex: slideIndex === index ? 1 : 0
                            }}
                        />
                    ))
                    : null
                }
            </div>

            {/* Left Arrow - Positioned inside the image */}
            <button 
                onClick={handlePrevious}
                className='absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 rounded-full p-1 transition-all duration-300'
                style={{backdropFilter: 'blur(4px)'}}
            >
                <BsArrowLeftCircleFill size={40} className='text-white' />
            </button>

            {/* Right Arrow - Positioned inside the image */}
            <button 
                onClick={handleNext}
                className='absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 rounded-full p-1 transition-all duration-300'
                style={{backdropFilter: 'blur(4px)'}}
            >
                <BsArrowRightCircleFill size={40} className='text-white' />
            </button>

            {/* Slide Counter */}
            <span className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full z-10 backdrop-blur-sm'>
                {slideIndex + 1} / {image.length}
            </span>

            {/* Dots Indicator */}
            <div className='absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 z-10'>
                {image && image.length > 0 ? 
                    image.map((_, index) => (
                        <button 
                            key={index} 
                            onClick={() => setSlideIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                slideIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                            }`}
                        />
                    ))
                    : null
                }
            </div>

        </div>
    )
}

export default Slider;