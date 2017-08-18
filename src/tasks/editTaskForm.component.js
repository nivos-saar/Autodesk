import React from 'react'

export default class EditTaskForm extends React.Component{
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
        
        const assignees = this.state.assignees.map((assignee) => {
            return <option className="divider" selected={assignee == taskToEdit.assignee}> {assignee} </option>
        });
        return (
            <form>
                <div className="form-group">
                    <label>Description: </label>
                    <input className="form-control" name="description" type="text" ref="description" placeholder={taskToEdit.description} />
                </div>
                <div className="form-group">
                    <label>Assignees:</label>
                    <select className="form-control" ref="assignee">
                        {assignees}
                    </select>
                </div>
                <div className="form-group">
                    <label>Due Date: </label>
                    <input className="form-control" name="dueDate" type="date" ref="dueDate"/>
                </div>
		
                <input type="submit" onClick={this._editTask.bind(this)} className="btn btn-primary" value="edit task" data-dismiss="modal"/> 
			</form>
		);
	}

	_editTask(e){
		e.preventDefault();
        const task = { description: this.refs.description.value, assignee: this.refs.assignee.value, dueDate: this.refs.dueDate.value, id: this.props.taskToEdit.currentId, isCompleted: this.props.taskToEdit.isCompleted };
		this.props.editAction(task);
	}
}