import { fetchWithBuildifyToken } from './config';

const signIn = (data: { username: string; password: string }) => {
  return fetchWithBuildifyToken('user-service/api/sign-in', 'POST', data);
};

const signUp = (data: { username: string; password: string, fullName: string; email: string, }) => {
    return fetchWithBuildifyToken('user-service/api/sign-up', 'POST', data);
  };

const userService = {
  signIn,
  signUp,
};
export default userService;
