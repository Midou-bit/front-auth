import { useEffect } from "react";
import { useNavigate } from "react-router";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      const token = JSON.parse(localStorage.getItem("auth"))?.token;
      try {
        await fetch("https://offers-api.digistos.com/api/auth/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
