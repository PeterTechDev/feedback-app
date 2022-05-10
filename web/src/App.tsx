interface ButtonProps {
  tex?: string;
}

function Button(props: ButtonProps) {
  return <button className="bg-violet-500 p-3 h-10 rounded text-violet-100 hover:bg-green-400 transition-colors ">{props.text ?? 'Default'}</button>;
}

function App() {
  return (
    <div className="flex gap-2">
      <Button text="eita" />
      <Button text="olha" />
      <Button text="clique" />
    </div>
  );
}

export default App;
