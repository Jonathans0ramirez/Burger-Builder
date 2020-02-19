import React from 'react';

import classes from './Modal.module.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Auxiliary>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Auxiliary>
);

function showPropHasChanged(prevMovie, nextMovie) {
    return prevMovie.show === nextMovie.show;
  }

export default React.memo(modal, showPropHasChanged);