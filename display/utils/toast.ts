import { toast } from 'react-toastify';

const defaultOptions = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

const success = (msg, options?) => {
  toast.success(msg, {
    ...defaultOptions,
    ...options,
  });
};

const error = (msg, options?) => {
  toast.error(msg, {
    ...defaultOptions,
    ...options,
  });
};

const toastMessage = {
  success,
  error,
};
export default toastMessage;
