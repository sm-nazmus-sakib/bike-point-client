import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "./../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  // Google Sign in
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
  };

  // GitHub Sign in
  const signInUsingGitHub = () => {
    setIsLoading(true);
    const GitHubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, GitHubProvider).finally(() =>
      setIsLoading(false)
    );
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // LogOut
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  // get email
  const getName = (event) => {
    setName(event?.target?.value);
  };
  // get name
  const getEmail = (event) => {
    setEmail(event?.target?.value);
  };
  // get password
  const getPassword = (event) => {
    setPassword(event?.target?.value);
  };

  // Email  sign in
  const signInWithEmail = (e) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // set user name
  const setNameAndImage = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  // sign up with email
  const signUp = (e) => {
    e.preventDefault();

    // setUser(email, password)
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setNameAndImage();
        hanldeUserInfoRegister(result.user.email);

        alert("user been created");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //Add User in DB
  const hanldeUserInfoRegister = (email) => {
    fetch("http://localhost:5000/addUserInfo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  //Admin
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
      .then((res) => res.json())

      .then((data) => {
      
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);

  return {
    user,
    setUser,
    isLoading,
    signInUsingGoogle,
    logOut,
    signInUsingGitHub,
    getPassword,
    getEmail,
    signInWithEmail,
    error,
    setError,
    signUp,
    setNameAndImage,
    getName,
    isAdmin,
    hanldeUserInfoRegister,
  };
};

export default useFirebase;
