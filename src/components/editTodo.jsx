import React, {Component} from 'react';
import axios from 'axios';

export default class EditTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todo_desc: '', todo_resp: '', todo_priority: '', completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    todo_desc: response.data.todo_desc,
                    todo_resp: response.data.todo_resp,
                    todo_priority: response.data.todo_priority,
                    completed: response.data.completed
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    onChangeDesc = (e) => {
        this.setState({
            todo_desc: e.target.value
        });
    }

    onChangeResp = (e) => {
        this.setState({
            todo_resp: e.target.value
        });
    }

    onChangePriority = (e) => {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onChangeCompleted = (e) => {
        this.setState({
            completed: !this.state.completed
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            todo_desc: this.state.todo_desc,
            todo_resp: this.state.todo_resp,
            todo_priority: this.state.todo_priority,
            completed: this.state.completed
        };
        axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Update Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text" className="form-control" value={this.state.todo_desc} onChange={this.onChangeDesc}/>
                    </div> 
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input  type="text" className="form-control" value={this.state.todo_resp} onChange={this.onChangeResp}/>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" type="radio" name="priorityOptions" id="priorityLow" value="Low" 
                                   checked={this.state.todo_priority==='Low'} onChange={this.onChangePriority}/>
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" type="radio" name="priorityOptions" id="priorityMedium" value="Medium"
                                    checked={this.state.todo_priority==='Medium'} onChange={this.onChangePriority}/>
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" type="radio" name="priorityOptions" id="priorityHigh" value="High"
                                    checked={this.state.todo_priority==='High'} onChange={this.onChangePriority}/>
                            <label className="form-check-label">High</label>
                        </div>
                        <div className="form-check">
                            <input  type="checkbox" className="form-check-input" id="completedCheckbox" name="completedCheckbox"
                                    onChange={this.onChangeCompleted} checked={this.state.completed} value={this.state.completed}/>
                            <label className="form-check-label" htmlFor="completedCheckbox">Completed</label>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Update Todo" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}