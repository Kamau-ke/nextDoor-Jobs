import { createContext, useEffect, useState } from "react";
import axios from "axios"; 

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null); 
  const [email, setEmail]=useState(null)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/users/me", {
          withCredentials: true,
        });
        
        console.log( res.data.userEmail);
        
        const email = res.data.userEmail
        const id=res.data.userId

        setUserId(id)
        setEmail(email);

      } catch (error) {
        console.log("Failed to fetch user", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ email, setEmail, userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};
