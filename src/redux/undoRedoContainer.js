import React from 'react';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
    <p>
        <button className="btn btn-info" onClick={onUndo} disabled={!canUndo}>
            Undo
    </button>
        <button className="btn btn-info" onClick={onRedo} disabled={!canRedo}>
            Redo
    </button>
    </p>
)

const mapStateToProps = (state) => {
    return {
        canUndo: state.edit.past.length > 0,
        canRedo: state.edit.future.length > 0
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUndo: (e) => {
            e.preventDefault();
            dispatch(UndoActionCreators.undo())
        },
        onRedo: (e) => {
            e.preventDefault();
            dispatch(UndoActionCreators.redo())
        }
    }
}

UndoRedo = connect(
    mapStateToProps,
    mapDispatchToProps
)(UndoRedo)

export default UndoRedo;