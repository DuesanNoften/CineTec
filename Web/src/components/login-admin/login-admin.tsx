import classNames from 'classnames';
import styles from './login-admin.module.scss';

export interface LoginAdminProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const LoginAdmin = ({ className }: LoginAdminProps) => {
    return (
        <div className={classNames(className, 'div1')}>
            <h1>CineTEC </h1>Usuario
            <input className="text" />
            Contraseña
            <input type="password" className="text" />
            <button>Ingresar</button>
        </div>
    );
};
