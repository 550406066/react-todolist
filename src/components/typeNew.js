
import React from 'react';
class TypeNew extends React.Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd(e){
        e.preventDefault();
        var inputDom=this.refs.inputnew.value;
        var newthing=inputDom.trim();

        var rows=this.props.todo;
        if(newthing!==""){
            rows.push({val:newthing,state:false});
            this.props.onAdd(rows)
            console.log(rows)
        }

        this.refs.inputnew.value=""
    }
    render () {
        return (
            <form onSubmit={this.handleAdd}>
                <label>
                    任务列表：
                    <input type="text" ref="inputnew" placeholder="输入任务名称按回车键确认"  autoComplete="off" />
                </label>

                <button onClick={this.handleAdd}>添加任务</button>
            </form>
        );
    }
}

export default TypeNew
