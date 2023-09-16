import { createBoard } from '@wixc3/react-board';
import Classnames from 'classnames';

export default createBoard({
    name: 'ProyectionIncorporation',
    Board: () => (
        <div className="div1">
            <h1>Proyección</h1>
            <div className="div2">
                <div className="div3">
                    <label className="text">ID Proyección</label>
                    <label className="text">ID Sala</label>
                    <label className="text">ID Película</label>
                    <label className="text">Horario</label>
                    <label className="text">Fecha Inicio</label>
                    <label className="text">Fecha Fin</label>
                </div>
                <div className="div3">
                    <input className="input" />
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
