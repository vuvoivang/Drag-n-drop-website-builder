import { Node, PageData } from 'display/editor/Viewport/Header';
import { fetchWithBuildifyToken } from './config';
import { generateUrlByService } from 'services';
import { ComponentData } from '@libs/interfaces';

const SERVICE_NAME = 'gen-code-service';

const genCode = (data: { nodes: Array<Node>; pages: Array<PageData>; components: Array<ComponentData>; theme: string; projectId: string }) => {
  return fetchWithBuildifyToken(generateUrlByService(SERVICE_NAME, 'gen-react-code'), 'POST', data);
};

const genCodeService = {
  genCode,
};
export default genCodeService;
