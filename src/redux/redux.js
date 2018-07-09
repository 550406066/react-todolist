/**
 * 习惯项Reducer
 * Created by BadWaka on 2017/3/15.
 * @param state 这里接收到的state只是单个的一个习惯项
 * @param action
 * @return {*}
 */
export const customItemReducer = (state, action) => {
    console.log('customItemReducer state = ', state, ' action = ', action);
    switch (action.type) {
        // 修改习惯项完成状态Action
        case 'CHANGE_CUSTOM_ITEM_COMPLETION_STATUS_ACTION':
            // 因为上一层customReducer会传所有的customItem进来，所以要判断action里的id和传入的state的id是不是相同
            if (action.id !== state.id) {
                return state;   // 如果不相同，直接返回原state
            }
            
            // 注意，Redux官方文档中严格指出不要直接修改state，所以下面这一句是错误的
            // state.completed = !state.completed; // 将completed置反

            // 需要使用Object.assign()新建副本，或者使用对象展开运算符
            // 这里使用对象展开运算符，大概的意思就是将一个对象的可枚举属性拷贝至另一个对象，本例中是state中的可枚举属性给一个新对象，这个新对象就是state的副本；之后修改这个新对象的completed属性，然后将这个新对象作为返回值；
            return {
                ...state,
                completed: !state.completed
            };
        // 别忘了返回一个默认的state
        default:
            return state;
    }
};


export const customListReducer = (state = [], action) => { // 这里使用ES6的语法，如果state是undefined的话，给state设置一个默认值；为什么要这样？因为reducer和store创建的时候会默认的发送初始化的action和用于检测的action；如果state是undefined，而reducer里又没有处理，直接返回了，就会在控制台里报错
    console.log('customListReducer state = ', state, ' action = ', action);
    switch (action.type) {
        /**
         * 添加customItem
         */
        case 'ADD_CUSTOM_ITEM_ACTION':
            // 返回一个新对象
            let newCustomItem = {
                id: action.id,  // id
                text: action.text,  // 文本内容
                completed: false    // 是否完成
            };
            // 复制一份state的副本，永远不要修改state，而是返回state的一份副本
            let newState = [...state];
            // console.log('newState', newState);
            newState.push(newCustomItem);   // 把新的习惯项添加到副本中
            return newState;    // 返回
        /**
         * 修改习惯项完成状态Action
         */
        // case 'CHANGE_CUSTOM_ITEM_COMPLETION_STATUS_ACTION':
        //     // 遍历state(这里得到的state是customList，是一个数组)，返回一个新数组
        //     return state.map((customItem) => {
        //         // 对每一项再调用customItemReducer
        //         return customItemReducer(customItem, action);
        //     });
        default:
            return state;
    }
};

