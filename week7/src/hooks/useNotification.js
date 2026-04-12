import { useSetRecoilState } from 'recoil';
import { notificationAtom } from '../recoil/notificationAtom';

export const useNotification = () => {
  const setNotification = useSetRecoilState(notificationAtom);

  const showNotification = (message, type = 'info') => {
    setNotification({
      message,
      type,
      isVisible: true,
    });

    // Auto-hide after 3 seconds
    setTimeout(() => {
      setNotification((prev) => ({
        ...prev,
        isVisible: false,
      }));
    }, 3000);
  };

  return { showNotification };
};
