import classNames from 'classnames';
import styles from './actions-admin.module.scss';

export interface ActionsAdminProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ActionsAdmin = ({ className }: ActionsAdminProps) => {
    return (
        <div className={classNames(styles.root, className, 'div1')}>
            <button>Proyecciones</button>
            <button>Películas</button>
            <button>Sucursales</button>
            <button>Salas</button>
        </div>
    );
};
