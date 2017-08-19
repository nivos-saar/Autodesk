import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import undoable from 'redux-undo';
// Components
import TaskForm from '../tasks/taskForm.component';
import EditTaskForm from '../tasks/editTaskForm.component';
import TasksList from '../tasks/tasksList.component';
// Actions.
import { addTodo, toggleTodo, editTodo, setEditTaskId } from '../redux/actions'

// Main app component.
class Todo extends React.Component {

    render() {
        // The next/last task that was edited.
        const taskToEdit = this.props.tasksTodo.find((task) => { return task.id == this.props.taskIdToEdit });
        const taskEditorModalId = "editTaskModal";
        return (
            <div>
                <h3>Task List</h3>
                <div className="panel-body">
                    <TasksList tasks={this.props.tasksTodo} toggleTask={this.props.toggleAction}
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


// Props of the state.
function stateToProps(state) {
    return {
        tasksTodo: state.todo.tasksTodo,
        currentId: state.todo.currentId,
        taskIdToEdit: state.todo.taskIdToEdit
    };
}

// Events to dispatch on the state.
function dispatchToProps(dispatch) {
    return bindActionCreators({
        addAction: addTodo,
        toggleAction: toggleTodo,
        editAction: editTodo,
        setEditTaskId: setEditTaskId
    }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(Todo);