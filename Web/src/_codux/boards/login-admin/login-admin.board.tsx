import { createBoard } from '@wixc3/react-board';
import { LoginAdmin } from '../../../components/login-admin/login-admin';

export default createBoard({
    name: 'LoginAdmin',
    Board: () => <LoginAdmin />,
    isSnippet: true,
});
