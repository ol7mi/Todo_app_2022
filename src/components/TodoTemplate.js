import React from 'react';
import '../styles/TodoTemplate.scss';


function TodoTemplate({children}) { // App.js : TodoTemplate -> children 안에 내용을 전달받아 내보내줌.
    return (
        <div className='TodoTemplate'>
            <div className='app-title'>일정관리</div>
            <div className='content'>{children}</div>
        </div>
    )
}

export default TodoTemplate