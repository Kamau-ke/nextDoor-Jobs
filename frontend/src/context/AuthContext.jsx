import { createContext, useEffect, useState } from "react";
import axios from "axios"; 

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [email, setEmail]=useState(null)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/users/me", {
          withCredentials: true,
        });

        const email = res.data.user.userEmail;


        setEmail(email);
      } catch (error) {
        console.log("Failed to fetch user", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
