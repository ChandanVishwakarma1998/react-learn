import React ,{useState, useEffect}from 'react'

function App() {
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [data, setData] = useState([])
  const [scrolledPercentage, setScrolledPercentage] = useState(0)

  

    //  let url = "https://dummyjson.com/products?limit=100"
     async function fetchData () {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products?limit=100");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if(data && data.products && data.products.length >0){
          setData(data.products)
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
useEffect(() =>{
    fetchData();
  }, [])
  
  const handleScroll = () => {
    console.log(
      document.body.scrollTop ,
      document.documentElement.scrollTop ,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    )

    const howMuchScrolled =
    document.body.scrollTop ||  document.documentElement.scrollTop;

    const height =  document.documentElement.scrollHeight -       document.documentElement.clientHeight

    setScrolledPercentage((howMuchScrolled/height)*100)
    
  }

useEffect(() => {
   window.addEventListener("scroll" , handleScroll)

  return () => {
    window.removeEventListener("scroll" , handleScroll)
  }
}, [])



  if (errorMsg) {
    return <div className='w-full h-screen text-blue-700 text-center pt-60 text-2xl font-semibold'>Error ! {errorMsg}</div>;
  }

  if (loading) {
    return <div className='w-full h-screen text-red-700 text-center pt-60 text-2xl font-semibold'>Loading data ! Pleaae wait</div>;
  }




  return (
    <div className=''>
      <div className=' w-full fixed  text-center bg-[#075b0a] z-1 top-0  '>
        <h1 className=' font-semibold text-2xl text-white p-3 '>Scroll Indicator</h1>
         <div className='w-full h-3 bg-[#aaf900]'>
          <div className="h-3 bg-[#8b02b5]"
           style={{width : `${scrolledPercentage}%`}}
          ></div>
         </div>
        </div>
        <div className=" flex flex-col items-center  gap-1">
          {
            data && data.length >0 ?
            data.map((dataItem , i) => <p key={i} className='pt-2' >{dataItem.title}</p>):
            null 
          }
        </div>
    </div>
  )
}

export default App