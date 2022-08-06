import React from 'react';

import * as style from './HomeStyle';
import fox from '../../img/fox.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <style.Container>
      <img
        src="https://imageup.me/images/a9dad55c-a6bd-4ff2-ae1c-eb774c788de4.png"
        alt=""
        width="200px"
        height="200px"
      />
      <style.Tittle>Crypto</style.Tittle>
      <style.SubTittle>O seu marktplace de NFTs no Brasil</style.SubTittle>
      <style.Input placeholder={'Login'} />
      <style.InputBottom placeholder={'Senha'} />
      <style.ContainerForgot>
        <style.TextForgot>Esqueceu sua senha?</style.TextForgot>
      </style.ContainerForgot>

      <Link to="/Feed">
        <style.ButtonLogin>Entrar</style.ButtonLogin>
      </Link>

      <style.Divisor></style.Divisor>
      <style.ButtonMetamask>
        <style.ButtonInsideMetamask>
          <h1>Entrar com a Metamask</h1>
          <img src={fox} alt="" width="25px" height="25px" />
        </style.ButtonInsideMetamask>
      </style.ButtonMetamask>
    </style.Container>
  );
}
