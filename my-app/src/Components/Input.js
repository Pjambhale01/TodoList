import React from 'react'
import OutputOftodo from './Output'
import './Todolist.css'
const styleMe = {
    initList: {
        backgroundColor: 'yello',
        color: 'green'
    }
}


class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            description: '',
            task: '',
            taskdate: '',
            isDuepass: false
        }
    }
    Adddata = () => {
        this.setState({ list: [...this.state.list, { Task: this.state.task, Dis: this.state.description, Duedate: new Date(`${this.state.taskdate} 00:00`), checked: false }], task: '', description: '' })
    }
    handleChecked = (index) => {
        this.setState({ ...this.state, list: [...this.state.list.slice(0, index), { ...this.state.list[index], checked: !this.state.list[index].checked }, ...this.state.list.slice(index + 1)] })
    }
    DeleteItem = (index) => {
        this.setState({ list: [...this.state.list.slice(0, index), ...this.state.list.slice(index + 1)] })
    }
    render() {
        console.log(this.state)
        return (
            <div className={"container"}>
                <h1 style={{textAlign:'center'}}>Todo list</h1>
                <div className={"inside"}>
                    Enter task:
                    <input className={"task"} type="text" value={this.state.task} onChange={(val) => { this.setState({ task: val.target.value }) }} /><br></br>
                    Task Description:
                    <input className={"task"} type="text" value={this.state.description} onChange={(val) => { this.setState({ description: val.target.value }) }}></input><br></br>
                    Due date:
                    <input className={"task"} type="date" value={this.state.taskdate} onChange={(val) => { this.setState({ taskdate: val.target.value }) }}></input><br></br>
                    <div className={"listbtn"}>
                        <button className={"btn1"} onClick={() => { this.Adddata() }}>Enter</button><br></br>
                    Todo list:
                    </div>
                    <p>
                        {this.state.list.map((item, index) => {
                            return <li><input type="checkbox" checked={item.checked} onChange={() => { this.handleChecked(index) }}></input>
                            <span style={item.checked ? { textDecorationLine: "line-through" } : {}}>{`${item.Task} :  ${item.Dis} Planed : ${item.Duedate}`}</span>
                            {item.Duedate < new Date() && <span className={"pass"}>Duedate is passed</span> } 
                             <button className={"btn2"} onClick={() => { this.DeleteItem(index) }}>Delet</button>

                            </li>

                        })}</p>
                </div>
            </div>
        )
    }
}
export default Input