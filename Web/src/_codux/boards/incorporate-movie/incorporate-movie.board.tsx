import { createBoard } from '@wixc3/react-board';
import { IncorporateMovie } from '../../../components/incorporate-movie/incorporate-movie';

export default createBoard({
    name: 'IncorporateMovie',
    Board: () => <IncorporateMovie />,
    isSnippet: true,
});
