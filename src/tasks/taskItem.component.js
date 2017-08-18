import React from 'react'

export default class TaskItem extends React.Component {
    render() {
        return (
            <li className="list-group-item">
                <input type="checkbox" onChange={this._toggleCheckbox.bind(this)} checked={this.props.checked} />
                {/* If the checkbox is checked, decorate with line-through */}
                {this.props.checked && <label><del>
                    Task to do {this.props.task.id} by {this.props.task.assignee} till {this.props.task.dueDate}. {this.props.task.description}
                </del></label>}

                {!this.props.checked && <label>
                    Task to do {this.props.task.id} by {this.props.task.assignee} till {this.props.task.dueDate}. {this.props.task.description}
                </label>}


                <span className="badge float-right"><button type="button" className="btn btn-info btn-xs"
                    data-target={`#${this.props.taskEditorModalId}`} data-toggle="modal" onClick={this._setEditTaskId.bind(this)}>edit</button></span>
            </li>
        );
    }

    _toggleCheckbox() {
        this.props.toggleTask(this.props.task.id);
    }
    _setEditTaskId() {
        this.props.setEditTaskId(this.props.task.id);
    }
}