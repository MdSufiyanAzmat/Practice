import { useState, useEffect } from 'react'

function useLocalStorage(key, defaultValue){
    const [value, setValue] = useState(()=>{
        let currentValue;
        try{
            currentValue = JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue))
        }catch(error){
            console.log(error)
            currentValue = defaultValue;
        }
        return currentValue;
    })
    
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[key, value])

    return [value, setValue];
}

function Toggle() {
    const [theme, setTheme] = useLocalStorage("theme", "dark");

    const handleClick = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    console.log(theme)

    return (
        <div className={theme === 'dark' ? 'bg-black text-white' : ''}>
            <h1>Hello World! Current theme: {theme}</h1>
            <button onClick={handleClick}>Change Theme</button>
        </div>
    )
}

export default Toggle;