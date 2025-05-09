import { useEffect,useState } from "react";
import { getGifs } from "../helpers/getGifs";
import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && ( <h2 className="">Loading...</h2>)
            }

            <div className="card-grid">
            {
                images.map( (image) => (
                    //forma tradicional una a una
                    // <GifItem key={ id } 
                    // title={title} url={url} 
                    // />
                    // Desestructura y pasa todas las propiedades del objeto 
                    // image como props al componente GifItem
                    <GifItem key={ image.id } 
                    {...image} 
                    />
                ))
            }
            </div>
        </>
    )

}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}