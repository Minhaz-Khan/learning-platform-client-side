import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const Signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateProfileCurrentUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }
    const updateEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = { login, user, googleLogin, githubLogin, Signup, updateProfileCurrentUser, updateEmail }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;