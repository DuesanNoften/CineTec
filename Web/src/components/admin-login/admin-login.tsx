import classNames from 'classnames';
import styles from './admin-login.module.scss';

export interface AdminLoginProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AdminLogin = ({ className }: AdminLoginProps) => {
    return <div className={classNames(styles.root, className)}>AdminLogin</div>;
};
