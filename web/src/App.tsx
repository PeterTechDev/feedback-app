interface ButtonProps {
  text: string;
}

function Button(props: ButtonProps) {
  return <button className="bg-violet-500 p-3">{props.text}</button>;
}

function App() {
  return (
    <div>
      <Button text="eita" />
      <Button text="olha" />
      <Button text="clique" />
    </div>
  );
}

export default App;
