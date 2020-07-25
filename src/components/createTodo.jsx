import React, { Component } from 'react'
import axios from 'axios';

class CreateTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo_desc: "", todo_resp: "", todo_priority: "", completed: false
        }
    }
    onChangedesc = (e) => {
        this.setState({ todo_desc: e.target.value })
    }
    onChangeresp = (e) => {
        this.setState({ todo_resp: e.target.value })
    }
    onChangepriority = (e) => {
        this.setState({ todo_priority: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(` submitted:`)
        console.log(`Todo Description: ${this.state.todo_desc}`)
        console.log(`Todo Responsible: ${this.state.todo_resp}`)
        console.log(`Todo Priority: ${this.state.todo_priority}`)
        console.log(`Todo Completed: ${this.state.completed}`)

        const newTodo = {
            todo_desc: this.state.todo_desc,
            todo_resp: this.state.todo_resp,
            todo_priority: this.state.todo_priority,
            completed: this.state.completed
        }

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({ todo_desc: '', todo_resp: '', todo_priority: '', completed: false })
    }
    render() {
        return (
            <div style={{ marginTop: 30 }}>
                <h3> Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        Description: <input type="text" className="form-control" value={this.state.todo_desc} onChange={this.onChangedesc} /><br />
                        Responsible: <input type="text" className="form-control" value={this.state.todo_resp} onChange={this.onChangeresp} /><br />
                        Priority :
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" value='Low' name='priorityOptions' id="priorityLow"
                                checked={this.state.todo_priority === "Low"} onChange={this.onChangepriority} />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" value='Medium' name='priorityOptions' id="priorityMedium"
                                checked={this.state.todo_priority === "Medium"} onChange={this.onChangepriority} />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" value='High' name='priorityOptions' id="priorityHigh"
                                checked={this.state.todo_priority === "High"} onChange={this.onChangepriority} />
                            <label className="form-check-label">High</label>
                        </div> <br /><br />
                        <div className="form-group"><input type="submit" value="Create Todo" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateTodo