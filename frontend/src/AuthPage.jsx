import axios from 'axios';

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post('http://localhost:3001/authenticate', { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log('error', e));
  };

  return (
    <div className="ndc-background">
      <form onSubmit={onSubmit} className="ndc-form-card">
        <div className="ndc-form-title">Seja bem-vindo ao chat da TE 👋</div>

        <div className="ndc-form-subtitle">Coloque seu nome</div>

        <div className="ndc-auth">
          <div className="ndc-auth-label">Nome de usuário</div>
          <input className="ndc-auth-input" name="username" />
          <button className="ndc-auth-button" type="submit">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
