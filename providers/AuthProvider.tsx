import React from "react";
import app from "../realmApp";

const AuthContext = React.createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = React.useState(app.currentUser);

    const signUp = async (email: string, password: string) => {

        await app.emailPasswordAuth.registerUser({email, password});
    };

    return (
        <AuthContext.Provider
            value={signUp}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };