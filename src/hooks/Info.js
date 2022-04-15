import React,{useState, useEffect} from 'react'
// useEffect - componentDidMount(),componentDidUpdata() 화면에 그려지고 난 후 나오는 대신 쓸 수 있음

function Info() {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(()=>{
        console.log("랜더링이 완료되었습니다.");
        console.log({name,nickname});
    },[name,nickname]);



    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    }



    return (
        <div>
            <div>Info</div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div> <b>이름: </b> {name}</div>
                <div> <b>닉네임: </b> {nickname}</div>
            </div>
        </div>
    )
}

export default Info;