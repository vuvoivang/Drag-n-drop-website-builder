import { useRouter } from 'next/router';

const useAppNavigate = () => {
  const router = useRouter();
  return (url, as = undefined, options = {}) => {
    router.push(url, as, {
      ...options,
    });
  };
};
export default useAppNavigate;
