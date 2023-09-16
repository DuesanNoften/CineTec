import { createBoard } from '@wixc3/react-board';
import { ActionsAdmin } from '../../../components/actions-admin/actions-admin';

export default createBoard({
    name: 'ActionsAdmin',
    Board: () => <ActionsAdmin />,
    isSnippet: true,
});
