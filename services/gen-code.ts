import { Node, PageData } from 'display/editor/Viewport/Header';
import { fetchWithBuildifyToken } from './config';

const genCode = (data: { nodes: Array<Node>; pages: Array<PageData> }) => {
  return fetchWithBuildifyToken('gen-code-service/api/gen-react-code', 'POST', data);
};

const genCodeService = {
  genCode,
};
export default genCodeService;
