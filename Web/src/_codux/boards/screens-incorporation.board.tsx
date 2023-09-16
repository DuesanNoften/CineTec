import { createBoard } from '@wixc3/react-board';
import Classnames from 'classnames';

export default createBoard({
    name: 'ScreensIncorporation',
    Board: () => (
        <div className="div1">
            <h1>Sala</h1>
            <div className="div2">
                <div className="div3">
                    <label className="text">ID Sala</label>
                    <label className="text">ID Sucursal</label>
                    <label className="text">Nombre</label>
                    <label className="text">Filas</label>
                    <label className="text">Columna</label>
                </div>
                <div className="div3">
                    <input className="input" />
                    <input className="input" />
                    <input className="input" />
                    <input className="input" />
                    <input className="input" />
                </div>
            </div>
            <button>Añadir</button>
        </div>
    ),
    isSnippet: true,
});
