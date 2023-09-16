import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'AdminLogin',
    Board: () => (
        <div className="div1">
            <h1>CineTEC</h1>Usuario
            <input className="text" />
            Contraseña
            <input type="password" className="text" />
            <button>Ingresar</button>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasBackgroundColor: '#312f2f',
    },
});
