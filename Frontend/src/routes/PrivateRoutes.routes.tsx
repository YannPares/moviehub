import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../hooks/AuthContext"

interface PrivateRoutesProps {
    children: React.ReactNode;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ children }) => {
    const { state } = useContext(AuthContext)
    const isAuthenticated = state.isAuthenticated

    return isAuthenticated ? children : <Navigate to={"/"} />
}

export default PrivateRoutes