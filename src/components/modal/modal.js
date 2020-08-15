import React from 'react';
import { head, modal, modalOuter, overlay, cross } from './modal.style';

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
                                    style={cross}
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