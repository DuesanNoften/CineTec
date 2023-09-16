import classNames from 'classnames';
import styles from './incorporate-screen.module.scss';

export interface IncorporateScreenProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const IncorporateScreen = ({ className }: IncorporateScreenProps) => {
    return (
        <div className={classNames(styles.root, className, 'div1')}>
            <h1>Sucursal</h1>
            <div className="div2">
                <div className="div3">
                    <label className="text">ID Sala</label>
                    <label className="text">ID Sucursal</label>
                    <label className="text">Nombre</label>
                    <label className="text">Filas</label>
                    <label className="text">Columnas</label>
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
    );
};
