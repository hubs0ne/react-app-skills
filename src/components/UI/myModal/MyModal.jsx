import React from 'react';
import stls from './MyModal.module.css';

const MyModal = ({ children, visible, setVisible }) => {

    const rootClass = [stls.myModal]

    if (visible) {
        rootClass.push(stls.active)
    }

    return (
        <div 
        className={rootClass.join(' ')}
        onClick={() => setVisible(false)}
        >
            <div
            className={stls.myModalContent}
            onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default MyModal;
