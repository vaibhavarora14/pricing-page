import React from 'react';
import { head, modal, modalOuter, overlay } from './modal.style';

const Modal = (props) => {
    return (
        <>
            {props.show &&
                <div style={modalOuter}>
                    <div style={overlay}></div>
                    <div style={{ ...modal, ...props.style }}>
                        <div style={{ marginBottom: '2rem' }}>
                            <div style={head}>
                                {props.title}
                                <img
                                    alt="close"
                                    src="/icons/close.svg"
                                    style={{ position: 'absolute', right: '1rem', width: '1.5rem' }}
                                    onClick={() => props.onClose && props.onClose.call()}
                                />
                            </div>
                            {props.children}
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Modal;