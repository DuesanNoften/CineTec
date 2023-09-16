import classNames from 'classnames';
import styles from './incorporate-proyection.module.scss';

export interface IncorporateProyectionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const IncorporateProyection = ({ className }: IncorporateProyectionProps) => {
    return (
        <div className={classNames(styles.root, className, 'div1')}>
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
    );
};
