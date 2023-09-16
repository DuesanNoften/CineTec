import { createBoard } from '@wixc3/react-board';
import { IncorporateLocation } from '../../../components/incorporate-location/incorporate-location';

export default createBoard({
    name: 'IncorporateLocation',
    Board: () => <IncorporateLocation />,
    isSnippet: true,
});
