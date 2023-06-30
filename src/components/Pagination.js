export default function Pagination(props) {
  return (
    <div style={{textAlign: 'center'}}>
      <button type="button" onClick={props.prev}>prev</button>
      <button type="button" onClick={() => { props.jump(1) }}>1</button>
      <button type="button" onClick={() => { props.jump(2) }}>2</button>
      <button type="button" onClick={() => { props.jump(3) }}>3</button>
      <button type="button" onClick={() => { props.jump(4) }}>4</button>
      <button type="button" onClick={() => { props.jump(5) }}>5</button>
      <button type="button" onClick={props.next}>next</button>
    </div>  
  )
}