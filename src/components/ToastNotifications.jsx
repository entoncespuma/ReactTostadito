import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToastNotifications() {
  const showSuccessNotification = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000, // Notificación se cierra después de 3 segundos
    });
  };

  const showErrorNotification = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  return (
    <div>
      <ToastContainer />
      {/* Esta es solo una prueba */}
      <button onClick={() => showSuccessNotification("Producto agregado al carrito")}>
        Mostrar éxito
      </button>
      <button onClick={() => showErrorNotification("Error al agregar el producto")}>
        Mostrar error
      </button>
    </div>
  );
}

export default ToastNotifications;
