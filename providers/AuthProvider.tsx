import React from "react"

const AuthContext = React.createContext(null);

const AuthProvider = ({children}) => {

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };