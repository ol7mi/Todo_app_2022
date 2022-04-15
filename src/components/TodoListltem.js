import React from 'react';
import classNames from 'classnames'; //조건부 스타일링
import { MdCheckBox, MdRemoveCircleOutline,MdCheckBoxOutlineBlank} from "react-icons/md";
import '../styles/TodoListltem.scss';

function TodoListltem({todo,onToggle,onRemove}) {
    const {id, text, checked} = todo;

    return (
        <div className='TodoListltem'>
            <div className={classNames('Checkbox',{checked})} onClick={()=>onToggle(id)}>
                {checked ?  <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className='text'>{text}</div>
            </div>
            <div className='remove' onClick={()=>onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}
export default TodoListltem