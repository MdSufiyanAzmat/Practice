import {useState, useEffect} from 'react'

function LoadMore(){
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    async function fetchProducts(){
        try{
            setLoading(true)
            // i wanna change the count * 10 into just 10 and will do after this code
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count*10}`)
            const data = await response.json();
            if(data && data.products && data.products.length){
                setProducts((prevData) => [...prevData, ...data.products])
                setLoading(false)
            }
            console.log(data)
        }
        catch(e){
            console.log(e.message)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchProducts();
    }, [count]);

    if(loading){
        return <div>Loading...</div>
    }
 
    return (
        <>
            <div className="Container flex flex-col gap-5 m-2 justify-center items-center">
            
            <div className="products-container  grid gap-10 grid-cols-4 ">
                {
                    products && products.length ? 
                    products.map(item=>
                    <div className="products border-2 border-black" key={item.id}>
                        <img
                        src={item.thumbnail}
                        alt={item.title}
                        />
                        <p className="bg-red-800 p-3 font-bold text-white flex justify-center">{item.title}</p>
                    </div>)
                    
                    :null
                }
            </div>
            <div className="btn-container flex justify-center bg-blue-500 px-5 py-2 rounded text-white font-bold hover:cursor-pointer">
                <button onClick={()=>setCount(count + 1)}>Load More</button>
            </div>
                </div>  
        </>
    )
}

export default LoadMore;