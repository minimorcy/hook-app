import { useState } from "react"
import { UserContext } from "./UserContext"

const user = {
    id: 123,
    name: 'Mike',
    email: 'mike@google.com'
}

export const UserProvider = ({children}) => 
{
    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
