import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'AdminActions',
    Board: () => (
        <div className="div1">
            <button>Proyecciones</button>
            <button>Películas</button>
            <button>Sucursales</button>
            <button>Salas</button>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 304,
    },
});
