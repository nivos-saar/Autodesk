﻿import React from 'react'
import TasksList from '../tasks/tasksList.component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TaskForm from '../tasks/taskForm.component'
import EditTaskForm from '../tasks/editTaskForm.component'

// Main app component.
class Todo extends React.Component {

    render() {
        // The next/last task that was edited.
        const taskToEdit = this.props.tasksTodo.find((task) => { return task.id == this.props.taskIdToEdit });
        const taskEditorModalId = "editTaskModal";
        return (
            <div>
                <h3>Task List</h3>
                <div>
                    <TasksList tasks={this.props.tasksTodo} toggleEditForm={this.props.toggleEditForm} toggleTask={this.props.toggleAction}
                        setEditTaskId={this.props.setEditTaskId} taskEditorModalId={taskEditorModalId}/>
                    <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#addTaskModal">Add new Task</button>
                </div>



                <div id="addTaskModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Add new Task</h4>
                            </div>
                            <div className="modal-body">
                                <TaskForm addAction={this.props.addAction} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div id={taskEditorModalId} className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Edit Task</h4>
                            </div>
                            <div className="modal-body">
                                <EditTaskForm taskToEdit={taskToEdit} editAction={this.props.editAction} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

// Actions.
import { addTodo, toggleTodo, editTodo, toggleEditForm, toggleAddForm, setEditTaskId } from '../redux/actions'

// Props of the state.
function stateToProps(state) {
    return {
        tasksTodo: state.tasksTodo,
        currentId: state.currentId,
        taskIdToEdit: state.taskIdToEdit,
        showEditTaskForm: state.showEditTaskForm,
        showAddNewTaskForm: state.showAddNewTaskForm
    };
}

// Events to dispatch on the state.
function dispatchToProps(dispatch) {
    return bindActionCreators({
        addAction: addTodo,
        toggleAction: toggleTodo,
        editAction: editTodo,
        setEditTaskId: setEditTaskId,
        toggleEditAction: toggleEditForm,
        toggleAddAction: toggleAddForm
    }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(Todo);