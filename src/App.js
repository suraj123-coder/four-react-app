function App() {
  return (
    <>
      <h1>props demo</h1>
      <ListDemo/>
       
    </>
  );
}

function ListDemo() {
  let data ="Hello Universe";
  let list=["delhi","culcutta", "mumabai"];
  return(
    <>
      <h1>{data}</h1>

      {list.forEach((item)=>item)}

      {/** map is input/output */}
      {/** OUTPUT BCZ OF THIS */}

      {list.map((item)=>item)}
    </>
  );
}

export default App;
