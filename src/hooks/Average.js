import React,{useState, useRef, useCallback, useMemo} from 'react'

const getAverage = lists => {
    console.log('평균값 계산중..');
    if(lists.length === 0) return 0;
    const sum = lists.reduce((a, b) => a + b);
    return sum / lists.length;
};

function Average() {
    const [lists, setLists] = useState([]);
    const [number, setNumber] = useState('');

    const inputEl = useRef(null);


    // onChange
    const onChange = useCallback(e => {
        console.log('컴포넌트가 처음 렌더링 될 때만 함수 생성..');
        setNumber(e.target.value)
    },[]); 
    // []비어있으면 컴포넌트가 처음 렌더링 될 때만 함수 생성
    // []배열값이 들어가 있으면 바뀔때마다 useCallback실행



    // button
    const onInsert = useCallback(e => {
        console.log('number 혹은 list가 바뀌었을 때만 함수 생성');
        const nextLists = lists.concat(parseInt(number));
        setLists(nextLists);
        setNumber(''); /* 초기화 */
        inputEl.current.focus(); /* 인풋에 포커스가 가게끔 */
    },[number,lists]);


    // avg 일반
    const avg = useMemo(() => getAverage(lists),
    [lists]);


    return (
        <div>
            <div>Average</div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {lists.map((list, index) => (
                    <li key={index}>{list}</li>
                ))}
            </ul>
            <div> <b>평균값:</b> {avg} </div>
        </div>
    )
}
// useRef 아이디처럼 사용
// useCallback 함수 재사용할때 사용하는 거   (랜더링 성능 최적화)
// useMemo 일반값(숫자문자객체 이런거) 재사용 (랜더링 성능 최적화)
export default Average;