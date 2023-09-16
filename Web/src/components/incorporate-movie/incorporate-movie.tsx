import classNames from 'classnames';
import styles from './incorporate-movie.module.scss';

export interface IncorporateMovieProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const IncorporateMovie = ({ className }: IncorporateMovieProps) => {
    return (
        <div className={classNames(styles.root, className, 'div1')}>
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
    );
};
