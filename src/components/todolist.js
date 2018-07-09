
import React from 'react';
import TypeNew from './typeNew'
import ListTodo from './listToDo'
import "./base.css"

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.changeState = this.changeState.bind(this);
        this.state ={  todolist: []}

    }
    handleChange(row){
        this.setState({
            todolist:row
        })

    }
    changeState(index){
        let data = this.state.todolist;
        data[index].state=!data[index].state
        this.setState({
            todolist:data
        })
console.log(this.state.todolist)
    }

    render () {
        return (
            <div>
                <TypeNew  onAdd={this.handleChange} todo={this.state.todolist}/>
                <ListTodo onDel={this.handleChange} changeState={this.changeState} todo={this.state.todolist}/>
            </div>
        );
    }
}




// 将 TodoList 组件渲染到页面
export default TodoList
