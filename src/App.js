function App() {
  return (
    <>
      <h1>props demo</h1>

       {/** Calling the MessageDemo(1, 'abcd') */}
      <MessageDemo name="vitthal"/>
      <MessageDemo name="Suraj"/>
      <MessageDemo name="Suhas"/>
      <MessageDemo name="Akash"/>
    </>
  );
}

function MessageDemo(props) {
  return(
    <>
      <h1>Hello {props.name}</h1>
    </>
  );
}

export default App;
