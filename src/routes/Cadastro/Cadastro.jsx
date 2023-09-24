import './style.css'

export default function Cadastro() {


  return (
    <form action="" method="GET">
        <div>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
        </div>
        <div>
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required />
        </div>
        <div>
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" required />
        </div>
        <div>
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" required />
        </div>
        <div>
            <button type="submit">Cadastrar</button>
        </div>
    </form>   
  );
}
