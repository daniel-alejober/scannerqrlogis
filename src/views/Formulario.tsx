import axios from "axios";
import { useState } from "react";
import QRCode from "qrcode";

const Formulario = () => {
  const [name, setName] = useState("");

  const generateCode = (id: string) => {
    const urlActivo = `http://localhost:5173/${id}`;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    QRCode.toDataURL(urlActivo, (err: any, url: any) => {
      if (err) return console.log(err);
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = id;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await axios.post(`${import.meta.env.VITE_BACKENDURL}`, {
        nombre: name,
      });
      if (data) {
        setName("");
        generateCode(data.data.registro._id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-w-screen min-h-screen max-h-screen max-w-xs flex items-center justify-center">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Compañia
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Compañia"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
