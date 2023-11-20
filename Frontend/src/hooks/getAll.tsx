import { useEffect, useState } from "react"


 export const getMovies = () => {
    const [movies, setMovies] = useState([])
    // const { addToCart } = useCart()
  
    const url = 'http://localhost:3000/movies'//que sea variable de entorno, no estring
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


export const getUsers = () => {
  const [users, setusers] = useState([])
  const url = 'http://localhost:3000/users' //que sea variable de entorno, no estring
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setusers(data)
    }
    getUsers();
  }, [])
  
  return users;
}

export const getGenres = () => {
  const [genres, setgenres] = useState([])
  // const { addToCart } = useCart()

  const url = 'http://localhost:3000/genres' //que sea variable de entorno, no estring
  useEffect(() => {
    const getGenres = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setgenres(data)
    }
    getGenres();
  }, [])
  
  return genres;
}
