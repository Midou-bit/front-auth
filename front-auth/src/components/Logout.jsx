import { useEffect } from "react";
import { useNavigate } from "react-router";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await fetch("https://offers-api.digistos.com/api/auth/logout", {
          method: "POST",
          credentials: "include",
        });
      } catch (err) {
        console.error(err);
      }

      localStorage.removeItem("auth");
      navigate("/connexion");
    };

    handleLogout();
  }, [navigate]);

  return null;
};

export default Logout;
