
export const getGifs = async(category) => {

    const apiKey = 'LoTh8YUJzHl0gPh1Mn8J6768uTrOSYZO';
    const call = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`);

    const {data} = await call.json();

    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;

}