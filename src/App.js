import { Login } from './components/Login';

function App() {
  const onSubmit = (values) => {
    alert(JSON.stringify(values))
  };

  return (
    <Login onSubmit={onSubmit} />
  );
}

export default App;
