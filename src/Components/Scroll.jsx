import { useState, useEffect } from 'react'

function Scroll() {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScrollPercentage = () => {
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollPercentage((howMuchScrolled/height)*100);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)

        return () => {
            window.removeEventListener('scroll', handleScrollPercentage)
        }
    }, [])


    return (

        <>
            <div className="Scroll-Indicator z-20">
                <div className="bg-green-800 text-white w-full h-20 flex items-center justify-center fixed top-0">
                    <h1 className="font-bold text-3xl">Custom Scroll Indicator</h1>
                </div> 
                <div className="bg-green-200 w-full h-5 fixed top-20">
                    <div className="bg-red-400 " style={{height: "20px", width: `${scrollPercentage}%`}}></div>
                </div>
                <div className="px-[50%]">
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p> <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p><p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p><p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p><p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p><p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p><p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p><p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p><p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p><p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p><p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p><p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                    <p>hii</p>
                </div>
            </div>
        </>
    )
}

export default Scroll;