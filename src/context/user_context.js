import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const UserContext=React.createContext();

export const UserProvider = ({children}) => {
    const {isAuthenticated, loginWithRedirect, logout, user, isLoading}=useAuth0();

    const[myUser, setMyUser]=React.useState(null);
    React.useEffect(() => {
        console.log(`user : ${user}`);
        console.log(`isAuthenticated: $P{isAuthenticated}`);
        console.log(`isLoading: ${isLoading}`)
    }, [isAuthenticated])

    return <UserContext.Provider value={{loginWithRedirect, logout, myUser}}>
    {children}
    </UserContext.Provider>
}

export {UserContext}

export const useUserContext = () => {
    return React.useContext(UserContext);
}