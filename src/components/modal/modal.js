import React from 'react';
import { head, modal, modalOuter, overlay } from './modal.style';

const Modal = (props) => {
    return (
        <>
            {props.show &&
                <div style={modalOuter}>
                    <div style={overlay}></div>
                    <div style={{ ...modal, ...props.style }}>
                        <div style={head}>
                            {props.title}
                            {/* cross icons */}
                        </div>
                        {props.children}
                    </div>
                </div>
            }
        </>
    );
}

export default Modal;