import React from 'react';
import styles from './Dropdown.module.scss'

type CardPropsType = {
    children: React.ReactNode
}

export const DropdownCard = React.memo(({children}: CardPropsType) => {
    return (
        <div className={styles.card}>
            {children}
        </div>
    );
});

