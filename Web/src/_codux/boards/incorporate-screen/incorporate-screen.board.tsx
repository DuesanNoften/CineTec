import { createBoard } from '@wixc3/react-board';
import { IncorporateScreen } from '../../../components/incorporate-screen/incorporate-screen';

export default createBoard({
    name: 'IncorporateScreen',
    Board: () => <IncorporateScreen />,
    isSnippet: true,
});
