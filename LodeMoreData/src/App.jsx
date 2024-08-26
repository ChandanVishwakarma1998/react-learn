import { useState , useEffect } from 'react'
import { LuShoppingCart , LuAlignJustify } from "react-icons/lu";
// import ItemsCard from  "./Components/ItemsCard"



function App() {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const [disabledButton, setDisabledButton] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=9&skip=${count === 0 ? 0 : count * 9}`)

      const result   = await response.json() ;
        
      if (result && result.products && result.products.length) {
        setProducts(() => [ ...result.products])
        setLoading(false)
      }
      console.log(result);
    } catch (e) {
      setErrorMsg(e.massage)
      setLoading(false)
    }
  }
useEffect(() => {
   fetchProduct()
}, [count])

useEffect(() => {
 if (products && products.length === 194)setDisabledButton(true)
}, [products])

if(loading){
  return <div className="flex justify-center items-center text-3xl font-semibold">Loading data ! Please wait.</div>
}
if(errorMsg) {
  return  <div className="flex justify-center items-center text-3xl font-semibold"> Error Occured</div>
}
  
 

  return (
    <div className=" w-full max-h-full flex flex-col bg-slate-300">
      <div className=" bg-blue-300 h-16  relative flex  justify-center items-center">
        < LuAlignJustify
        className=' absolute left-7' 
         size={30}/>
        <h1 className='text-2xl font-bold text-blue-950'>Products</h1>
        <LuShoppingCart 
         className=' absolute right-7' 
        size={30}/>

      </div>
      <div 
      className=" grid grid-cols-3 gap-2 w-full  ">
        { products && products.length  ? 
          products.map((product) => (
            <div className="flex-col md:flex-col justify-evenly flex gap-4 items-start mx-4 py-9"
            key={product.id}>
              <div className="flex bg-white rounded-lg shadow dark:bg-blue-950 flex-col md:flex-row">
                 <div className="relative w-full md:w-48 flex justify-center items-center">
                  <img src={product.thumbnail} alt={product.category}
                    className="object-scale-down w-full h-60 md:h-full rounded-t-lg  md:rounded-l-lg md:rounded-t-none"/>
                 </div>
                 <form className="flex-auto p-6">
                   <div className="flex flex-wrap">
                   <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">{product.title}</h1>
                  <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">{product.price} ₹. </div>
                  <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">{product.availabilityStatus}</div>
                  </div>
                  <div className="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
                  {/* <div class="flex space-x-2">
         <h3 className='text-center font-thin text-black '>{product.description}</h3>
                  
                </div> */}
                <a href="#"
                    className="hidden ml-auto text-sm text-gray-500 underline md:block dark:text-gray-300">{product.brand}
                </a>
            </div>
            <div className="flex mb-4 text-sm font-medium">
                <button type="button"
                    className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">Buy
                    now</button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Free shipping on all states in INDIA . order fast.</p>
           </form>
         </div>
        </div>
        // <ItemsCard 
        // key = {product.id}
        // thumbnail={product.thumbnail}
        // category = {product.category}
        //  title ={product.title}
        //  price ={product.price}
        //  brand ={product.brand}
        // />
          ) ): null}
           </div>   
<div className="flex justify-center">


  <button 
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-6 mb-6 rounded"
  disabled = {disabledButton} 
  onClick={() => setCount(count-1)}>
Load Previous Product
  </button>  
  <button 
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-6 mb-6 rounded"
  disabled = {disabledButton} 
  onClick={() => setCount(count+1)}>
Load More Product
  </button>
  {disabledButton ?<p>you have reached to limit of 100  products</p> : null }
      
      </div>

    </div>
  )
}

export default App
