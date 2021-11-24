import { toast } from 'react-toastify';

export const showNotification = (type: string) =>
  toast.info(
    type === 'session' ? 'New session added!' : 'Details have been added!🎉',
    {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      theme: 'dark',
    }
  );
