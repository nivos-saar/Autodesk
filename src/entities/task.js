class Task {
    constructor(id, description, assignee, dueDate, isCompleted = true) {
        this.id = id;
        this.description = description;
        this.assignee = assignee;
        this.dueDate = dueDate;
        this.isCompleted = isCompleted;
    }
}