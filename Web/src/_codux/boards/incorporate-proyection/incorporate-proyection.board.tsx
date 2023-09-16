import { createBoard } from '@wixc3/react-board';
import { IncorporateProyection } from '../../../components/incorporate-proyection/incorporate-proyection';

export default createBoard({
    name: 'IncorporateProyection',
    Board: () => <IncorporateProyection />,
    isSnippet: true,
});
