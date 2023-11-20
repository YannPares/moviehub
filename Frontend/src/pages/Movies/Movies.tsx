import {useNavigate } from 'react-router-dom'
import './movies.css'

const navigate  = useNavigate()
const Movies = () => {

    const handleLogout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('userImg')
        navigate('/')
    }
    return (
        <>
            <div className="display-panel">
                <div className="card-main">

                    <div className="display-panel-content">

                        <div className="movies-swiper">
                            <div className="movie">
                                movie
                            </div>
                            <div className="movie">
                                movie
                            </div>
                            <div className="movie">
                                movie
                            </div>
                            <div className="movie">
                                movie
                            </div>
                            {/* <button onClick={addMovie}><p className="modal-text">Addmovie</p></button> */}
                            
                        </div>
                    </div>
                    <button onClick={handleLogout}><p className="modal-text">Logout</p></button>
                </div>
            </div>  
             </>
    )
}


export default Movies