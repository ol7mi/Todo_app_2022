import React, { useCallback, useState } from 'react'
import {MdAdd} from "react-icons/md";
import '../styles/TodoInsert.scss';

function TodoInsert({onInsert}) {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  },[]);
  // onChange 값이 새로 입력이 되는게 끝이라 비어있음, 값이 바뀌면 한번만 실행

  // onSubmit
  const onSubmit = useCallback(e => {
    onInsert(value);
    setValue('');
    e.preventDefault();
    //Submit이벤트는 브라우저에서 새로고침을 발생시키고 내보내줌(onSubmit)
  },[value]);
  // value 바뀐값 인지

  return (
    <form className='TodoInsert' onSubmit={onSubmit}> 
        <input placeholder='할 일을 입력하세요' 
          value={value}  // 내가 입력한 글씨 보이게
          onChange={onChange} />
        <button type='submit'><MdAdd /></button>
    </form>
  )
}

export default TodoInsert