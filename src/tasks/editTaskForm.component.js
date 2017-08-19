import React from 'react'
import UndoRedo from '../redux/undoRedoContainer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class EditTaskForm extends React.Component {
    constructor() {
        super();
        this.state = {
            assignees: ["Niv Saar", "Daniel Gefen", "Gal Shelef", "Ron Meldiner"]
        }
    }

    render() {
        const taskToEdit = this.props.taskToEdit;
        if (!taskToEdit) {
            return (null);
        }

        const assignees = this.state.assignees.map((assignee, index) => {
            return <option className="divider" key={index} selected={assignee == this.props.assignee}> {assignee} </option>
        });
        console.log(this.props);
        return (
            <form key={taskToEdit.id}>
                <div className="form-group">
                    <label>Description: </label>
                    <input className="form-control" name="description" type="text" onChange={this._onChangeDesc.bind(this)} ref="description" value={this.props.description} />
                </div>
                <div className="form-group">
                    <label>Assignees:</label>
                    <select className="form-control" ref="assignee" onChange={this._onChangeAssignee.bind(this)}>
                        {assignees}
                    </select>
                </div>
                <div className="form-group">
                    <label>Due Date: </label>
                    <input className="form-control" name="dueDate" type="date" ref="dueDate" value={this.props.dueDate} onChange={this._onChangeDueDate.bind(this)} />
                </div>
                <div className="form-group">
                    <input type="submit" onClick={this._editTask.bind(this)} className="btn btn-primary" value="edit task" data-dismiss="modal"/>
                </div>
                <div className="form-group">
                    <UndoRedo />
                </div>
            </form>
        );
    }

    componentWillReceiveProps(nextProps) {
        // Update the store for new task props
        console.log(nextProps, this.props)
        if (this.props.id != nextProps.taskToEdit.id) {
            this.props.reset()
            this.props.doEdit(nextProps.taskToEdit)
        }
        
    }

    _editTask(e) {
        e.preventDefault();
        const task = { description: this.refs.description.value, assignee: this.refs.assignee.value, dueDate: this.refs.dueDate.value, id: this.props.taskToEdit.id, isCompleted: this.props.taskToEdit.isCompleted };
        this.props.editAction(task);
    }

    _onChangeDesc(e) {
        this.props.changeDescription(e.target.value);
    }

    _onChangeAssignee(e) {
        this.props.changeAssignee(e.target.value);
    }

    _onChangeDueDate(e) {
        this.props.changeDueDate(e.target.value);
    }
    
}

// Actions.
import { doEdit, changeDescription, changeAssignee, changeDueDate } from '../redux/actions'
import { ActionCreators as UndoActionCreators } from 'redux-undo'

// Props of the state.
function stateToProps(state) {
    return {
        description: state.edit.present.description,
        dueDate: state.edit.present.dueDate,
        assignee: state.edit.present.assignee,
        id: state.edit.present.id
    };
}

// Events to dispatch on the state.
function dispatchToProps(dispatch) {
    return bindActionCreators({ doEdit, changeDescription, changeAssignee, changeDueDate, reset: UndoActionCreators.clearHistory }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(EditTaskForm);