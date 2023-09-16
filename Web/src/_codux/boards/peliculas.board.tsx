import { createBoard } from '@wixc3/react-board';
import Classnames from 'classnames';

export default createBoard({
    name: 'MoviesIncorporation',
    Board: () => (
        <div className="div1">
            <h1>Película</h1>
            <div className="div2">
                <div className="div3">
                    <label className="text">ID Película</label>
                    <label className="text">Clasificación</label>
                    <label className="text">Directores</label>
                    <label className="text">Protagonistas</label>
                    <label className="text">Nombre Original</label>
                    <label className="text">Nombre Comercial</label>
                    <label className="text">Imagen</label>
                    <label className="text">Duración</label>
                </div>
                <div className="div3">
                    <input className="input" />
                    <input className="input" />
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
