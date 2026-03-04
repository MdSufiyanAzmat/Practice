import { useState } from 'react'

export default function Tab({ tabsContent, onChange }) {

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(getCurrentIndex) {
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex)
    }
    
    return (


        <>
            <div className="wrapper flex flex-col justify-center items-center gap-20">
                <div className="heading flex gap-10 bg-red-700 text-xl font-bold text-white">
                    {
                        tabsContent.map((tabItem, item) => {
                            return(
                            <div className={`font-bold flex px-10 py-2 ${currentTabIndex === item ? 'bg-blue-800' : ''}`} 
                                 onClick={() => handleOnClick(item)} key={tabItem.label}>
                                <span className="label">{tabItem.label}</span>
                            </div>
                            )
                        })
                    }
                </div>
                <div className="content bg-gray-200 font-bold rounded px-10 py-10">
                    {
                        tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
                    }
                </div>
            </div>
        </>
    )
}