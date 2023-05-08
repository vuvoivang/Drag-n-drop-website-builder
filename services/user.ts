import { generateUrlByService } from 'services';
import { fetchWithBuildifyToken } from './config';

const SERVICE_NAME = 'user-service';

export type PROJECT = {
  id: string;
  name: string;
  compressString: string;
  createdTime: number;
  updatedTime: number;
  type: number;
};
export enum PROJECT_TYPE {
  LANDING,
  CMS,
}
export const MAPPING_PROJECT_TYPE_TO_STRING = {
  [PROJECT_TYPE.LANDING]: 'Landing Page',
  [PROJECT_TYPE.CMS]: 'Content Management System',
};


const signIn = (data: { username: string; password: string }) => {
  return fetchWithBuildifyToken(generateUrlByService(SERVICE_NAME, 'sign-in'), 'POST', data);
};

const signUp = (data: { username: string; password: string; fullName: string; email?: string }) => {
  return fetchWithBuildifyToken(generateUrlByService(SERVICE_NAME, 'sign-up'), 'POST', data);
};

const getInfo = () => {
  return fetchWithBuildifyToken(generateUrlByService(SERVICE_NAME, 'user'), 'GET');
};

const updateUser = (data: { password: string; fullName: string; email: string }) => {
  return fetchWithBuildifyToken(generateUrlByService(SERVICE_NAME, 'user'), 'PUT', data);
};

const signOut = () => {
  // remove token
  return localStorage.removeItem('buildify-token');
};

const getProjectById = (data: { id: number }): PROJECT => {
  return fetchWithBuildifyToken(generateUrlByService(SERVICE_NAME, 'project'), 'GET', data) as unknown as PROJECT;
};

const getListProject = (): { projects: PROJECT[] } => {
  return fetchWithBuildifyToken(generateUrlByService(SERVICE_NAME, 'project/list'), 'GET') as unknown as {
    projects: PROJECT[];
  };
};

const createNewProject = (data: { name: string; type: number; createdTime: number }) => {
  return fetchWithBuildifyToken(generateUrlByService(SERVICE_NAME, 'project'), 'POST', data);
};

const updateProject = (data: PROJECT) => {
  return fetchWithBuildifyToken(generateUrlByService(SERVICE_NAME, 'project'), 'PUT', data);
};

const deleteProject = (data: { id: number }) => {
  return fetchWithBuildifyToken(generateUrlByService(SERVICE_NAME, 'project'), 'DELETE', data);
};

const userService = {
  signIn,
  signUp,
  getInfo,
  updateUser,
  signOut,
  getProjectById,
  getListProject,
  createNewProject,
  updateProject,
  deleteProject,
};
export default userService;
