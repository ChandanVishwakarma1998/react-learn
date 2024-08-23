// import { useEffect, useState } from 'react'
// import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'



// function App() {
//   const [images, setImages] = useState([])
//   const [currentImgSlide, setCurrentImgSlide] = useState(0)
//   const [loding, setLoding] = useState(false)
//   const [errorMsg, setErrorMsg] = useState(null)

//   const fetchImg = async(url)=> {
//     try {
//         setLoding(true)
//         const response = await fetch("https://picsum.photos/v2/list")
//         const data = await response.json();

//         if(data){
//           setImages(data);
//           setLoding(false);
//         }
//     } catch (e) {
//       setErrorMsg(e.message)
//       setLoding(false)
//     }

//     const handlePrevImg = () => {
//       setCurrentImgSlide(currentImgSlide === 0 ? images.length - 1
//         :currentImgSlide -1)
//     }
//     const handleNextImg = () => {
//       setCurrentImgSlide(currentImgSlide === images.length - 1 ? 0 
//         :currentImgSlide + 1)
//     }
//    useEffect(() => {
//     if(url !== "") fetchImg(url)
//      }
//    , [url])
   
//    if(loding){
//     return <div> Loading data ! Please wait</div>
//    }

//    if(errorMsg !== null){
//     return <div>Error occured ! {errorMsg}</div>
//    }

  

//   return (
//     <div className="w-full h-full bg-black">
//       <div className="imageContainer">
//       <BsArrowLeftCircleFill
//       className='arrow arrow-left'
//       onClick={handlePrevImg}/>
//       {images && images.length>1 ? 
//       images.map((image , index) => (
//        <img
//        key={image.id}
//        alt={image.download_url}
//        src={image.download_urll}
//        className={currentImgSlide === index ? "current-img"
//         :"current-img hide-current-img" } 
//        />

//       ))
      
//       :"null"}
//       <BsArrowRightCircleFill
//       className='arrow arrow-right'
//       onClick={handleNextImg}/>
//       <span className='indicators'>
//         {images && images.length>1 ? 
//         images.map((_,index) => (
//           <button
//           key={index}
//           className={currentImgSlide === index ? "current-indicators":
//             "current-indicators inactive-indicators"}
//             onClick={setCurrentImgSlide(index)}
//           ></button>
//         ))
//          :"null"}
//       </span>
//       </div>
//       </div>
     
    
//   )
// }
// }

// export default App 
import {useEffect, useState} from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

function App() {
  const [images, setImages] = useState([])
  const [currentImgSlide, setCurrentImgSlide] = useState(0)
  const [loding, setLoding] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  let page="1" 
  let limit="10"
  let url ="https://picsum.photos/v2/list"
  // https://picsum.photos/v2/list?page=1&limit=10
  async function fetchImg(url) {
    try {
      setLoding(true)
      const response= await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json()
      console.log(data)
         
          if (data){
            setImages(data)
            setLoding(false)
          }
    } catch (e) {
      setErrorMsg(e.message)
      setLoding(false)
    }
  }
     const handlePrevImg = () => {
      setCurrentImgSlide(currentImgSlide === 0 ? images.length - 1
        :currentImgSlide -1)
    }
    const handleNextImg = () => {
      setCurrentImgSlide(currentImgSlide === images.length - 1 ? 0 
        :currentImgSlide + 1)
    }
   useEffect(() => {
    if(url !== "") fetchImg(url);
     } , [url])
   
   if(loding){
    return <div className='w-full h h-screen flex justify-center items-center  font-bold text-3xl'> Loading data ! Please wait</div>
   }

   if(errorMsg !== null){
    return <div className='w-full h h-screenflex justify-center items-center'>Error occured ! {errorMsg}</div>
  }
  



  return (
    <div className="w-full h-screen bg-slate-200 flex flex-col justify-center items-center ">
      <h1 className='text-4xl font-extrabold  text-gray-500 pb-4'>Image Caoursel</h1>
      <div className="w-10/12 h-5/6 bg-red-500 rounded-2xl relative flex  justify-center items-center">  
     {/* <div className="flex items-center ml-3">  */}
     <BsArrowLeftCircleFill
      size={35}
      className='absolute left-2 fill-slate-100'
      onClick={handlePrevImg}
      />
             {images && images.length ? 
      images.map((image , index) => (
       <img
       key={image.id}
       alt={image.download_url}
       src={image.download_url}
       className={currentImgSlide === index ? "w-full h-full rounded-2xl"
        :"hidden" } 
       />

      ))
      
      :"null"}
      
      <BsArrowRightCircleFill
      size={35}
      className='absolute right-2 fill-slate-100'
      onClick={handleNextImg}
      />
      <span className='flex absolute bottom-3 justify-center items-center mx-auto'>
        {images && images.length ? 
        images.map((_,index) => (
          <button
          key={index}
          className={currentImgSlide === index ? "h-5 w-5 rounded-3xl bg-neutral-700 m-1    cursor-pointer border-none outline-none":
            "h-4 w-4 rounded-3xl bg-white m-1 cursor-pointer border-none outline-none"}
            onClick={() => setCurrentImgSlide(index)}
          ></button>
        ))
         :"null"}
      </span>
      </div>
     
    </div>
  )
}

export default App