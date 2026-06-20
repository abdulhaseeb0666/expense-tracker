import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { getCurrentUser } from "../../services/authService";
import Modal from "../../components/common/Modal";

const OAuthSuccess = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  useEffect(() => {
    const handleOAuth = async () => {
      const token = new URLSearchParams(
        window.location.search
      ).get("token");

      if (!token) {
        navigate("/");
        return;
      }

      localStorage.setItem("token", token);

      try {
        const data = await getCurrentUser();
        setUser(data.user);

        navigate("/dashboard");
      } catch (error) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    handleOAuth();
  }, [navigate, setUser]);

  return (
    <Modal isOpen={true} onClose={() => {}}>
      <div>Signing you in...</div>
    </Modal>
  );
};

export default OAuthSuccess;