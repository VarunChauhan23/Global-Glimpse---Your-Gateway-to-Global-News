import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const notify = (message, type, mode) => {

  if (type === 'error') {
      toast.error(`${message}!`, {
          position: "top-center",
          theme: `${mode}`
      });
  };

  if (type === 'success') {
      toast.success(`${message}!`, {
          position: "top-center",
          theme: `${mode}`
      });
  };
}

export default notify;