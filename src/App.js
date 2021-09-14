import { Login } from './components/Login';
import GlobalStyles from './styles/globals';

import * as S from './styles';

function App() {
  const onSubmit = (values) => {
    alert(JSON.stringify(values))
  };

  return (
    <>
      <GlobalStyles />
      <S.Wrapper>
        <Login onSubmit={onSubmit} />
      </S.Wrapper>
    </>
  );
}

export default App;
