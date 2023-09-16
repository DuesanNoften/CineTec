import { createBoard } from '@wixc3/react-board';
import Classnames from 'classnames';

export default createBoard({
    name: 'LocationIncorporation',
    Board: () => (
        <div className="div1">
            <h1>Sucursal</h1>
            <div className="div2">
                <div className="div3">
                    <label className="text">ID Sucursal</label>
                    <label className="text">Nombre</label>
                    <label className="text">Lugar</label>
                    <label className="text">Número de Salas</label>
                </div>
                <div className="div3">
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
