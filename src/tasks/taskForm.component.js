import React from 'react'

export default class TaskForm extends React.Component {
    constructor() {
        super();
        this.state = {
            assignees: ["Niv Saar", "Daniel Gefen", "Gal Shelef", "Ron Meldiner"]
        }
    }
    
    render() {
        const assignees = this.state.assignees.map((assignee) => {
            return <option className="divider"> {assignee} </option>
        });

        return (
            <form>
                <div className="form-group">
                    <label>Description: </label>
                    <input className="form-control" name="description" type="text" ref="description" />
                </div>
                <div className="form-group">
                    <label>Assignees:</label>
                    <select className="form-control" ref="assignee">
                        {assignees}
                    </select>
                </div>
                <div className="form-group">
                    <label>Due Date: </label>
                    <input className="form-control" name="dueDate" type="date" ref="dueDate" />
                </div>

                <button type="submit" className="btn btn-primary" onClick={this._submitNewTask.bind(this)} data-dismiss="modal">add new task</button>
            </form>
        )
    }

    _submitNewTask(e) {
        e.preventDefault();
        const task = { description: this.refs.description.value, assignee: this.refs.assignee.value, dueDate: this.refs.dueDate.value }
        this.props.addAction(task);
    }
}