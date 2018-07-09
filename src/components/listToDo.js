
import React from 'react';
class ListToDO extends React.Component {
    constructor(props) {
        super(props);
        this.handleDel=this.handleDel.bind(this);
        // this.handleStateChange=this.handleStateChange.bind(this);
    }
    handleDel(e){
        var delIndex = e.target.getAttribute('data-key');
        this.props.todo.splice(delIndex, 1);
        this.props.onDel(this.props.todo);
    }
    //这里有问题当我写在onChange的时候就会自动调用~~
    // handleStateChange(index){
    //     let isDone=!this.props.todo[index].state;
    //     //this.props.changeState(0,isDone)
    //     }
    render () {
        return (
            <ul id="todo-list">
             {
                 // this.props.todo 获取父组件传递过来的数据
                 // {/* 遍历数据 */}
                 this.props.todo.map( (item, i) =>{
                     return (
                         <li key={i}>
                             <input type="checkbox" checked={item.state} onChange={()=>this.props.changeState(i)} />
                             <span className={item.state?"finish" : "waiting"}>{item.val}</span>
                             <button className="destroy" onClick={this.handleDel} data-key={i}>delete</button>

                          </li>
                      );
                 })
             }
           </ul>
        );
    }
}

export default ListToDO
