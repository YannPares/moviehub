import { useEffect, useState } from "react"


const getMovies = () => {
    const [movies, setMovies] = useState([])
    // const { addToCart } = useCart()
  
    const url = 'http://localhost:3000/movies'
    useEffect(() => {
      const getmovies = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data)
      }
      getmovies();
    }, [])
    
    return movies;
}

export default getMovies