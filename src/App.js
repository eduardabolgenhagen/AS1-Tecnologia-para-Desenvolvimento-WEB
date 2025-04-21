import './App.css';
import { useState } from 'react';

function App() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleLogin = () => {
    if (email === "eduardo.lino@pucpr.br" && senha === "123456") {
      setMensagem("Acessado com sucesso!");
    } else {
      setMensagem("Usuário ou senha incorretos!");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>
        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}></input>
        <button onClick={handleLogin}>Acessar</button>
        <label>{mensagem}</label>
      </header>
    </div>
  );
}

export default App;
