import React from 'react'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
    return(
        <div>
            <div>
              <Input placeholder='hello' value={props.inputValue} onChange={props.handleInputChange} style={{ width: '300px' }} />
              <Button type='primary' onClick={props.handleButtonClick}>提交</Button>
            </div>
            <List
              style={{ width: '300px' }}
              size="small"
              bordered
              dataSource={props.list}
              renderItem={(item, index) => <List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>}
            />
          </div>
    )
}

// class TodoListUI extends Component {
    
//     render() {
//         return (
//           <div>
//             <div>
//               <Input placeholder='hello' value={this.props.inputValue} onChange={this.props.handleInputChange} style={{ width: '300px' }} />
//               <Button type='primary' onClick={this.props.handleButtonClick}>提交</Button>
//             </div>
//             <List
//               style={{ width: '300px' }}
//               size="small"
//               bordered
//               dataSource={this.props.list}
//               renderItem={(item, index) => <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>}
//             />
//           </div>
//         )
//       }
// }

export default TodoListUI