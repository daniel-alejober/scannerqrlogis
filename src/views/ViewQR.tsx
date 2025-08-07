import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ViewQR = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getIdContador = async () => {
      try {
        const data = await axios.get(
          `${import.meta.env.VITE_BACKENDURL}/${params.id}`
        );
        console.log(data);
        if (data) {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getIdContador();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Cargando....</div>;
};

export default ViewQR;
