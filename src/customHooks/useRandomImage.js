import { useEffect, useState } from 'react'

const useRandomImage = () => {
    const [image,setImage]=useState(0)

    const images=['https://m.media-amazon.com/images/I/3150P3KQFlL._SY445_SX342_QL70_FMwebp_.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmdJEp6uHq_r58ypfR6QctqTXTeCl9PNhqaiSCgf4zZhXJDaD4IZACbHqy8bA-e-_2GGc&usqp=CAU','https://m.media-amazon.com/images/I/418aHSujcPL._SX300_SY300_QL70_FMwebp_.jpg','https://m.media-amazon.com/images/I/41QssaE9gfL._SX300_SY300_QL70_FMwebp_.jpg','https://m.media-amazon.com/images/I/31O8D6p7sfL._SY445_SX342_QL70_FMwebp_.jpg',''];
    const randomImage=()=>{
        const index=Math.floor(Math.random()*images.length);
        setImage(index)
    }

    useEffect(()=>{
   randomImage()
    },[])

  return image;
}

export default useRandomImage