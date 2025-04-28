import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoadin] = useState(true);

    
    const getImages = async() => {
        const newImages = await getGifs( category )
        setImages(newImages)
        setIsLoadin(false)
    }
    
     useEffect( () => {
         getImages();
     }, [])

     return {
        images,
        isLoading
     }

}
