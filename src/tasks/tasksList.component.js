import React from 'react';
import TaskItem from './taskItem.component';
import EditTaskForm from './editTaskForm.component';
import ReactDOM from 'react-dom';

export default class TasksList extends React.Component {
    render() {
        let tasksToDo = this.props.tasks
            // Filter the tasks that need to be done.
            .filter((task) => { return !task.isCompleted })
            // Map them to a component.
            .map((task) => {
                return < TaskItem task={task} key={task.id} toggleTask={this.props.toggleTask}
                    setEditTaskId={this.props.setEditTaskId} taskEditorModalId={this.props.taskEditorModalId} />
            });
        let tasksCompleted = this.props.tasks
            // Filter the tasks which completed.
            .filter((task) => { return task.isCompleted })
            // Map them to a component.
            .map((task) => {
                return < TaskItem task={task} key={task.id} toggleTask={this.props.toggleTask} checked={true}
                    setEditTaskId={this.props.setEditTaskId} taskEditorModalId={this.props.taskEditorModalId}/>
            });

        return (
            <div>
                <div>
                    <b>Tasks To Complete:</b>
                    <ul className="list-group">
                        {tasksToDo}
                    </ul>
                </div>

                <div>
                    <b>Tasks Completed:</b>
                    <ul className="list-group">
                        {tasksCompleted}
                    </ul>
                </div>
            </div>
        );
    }
}



