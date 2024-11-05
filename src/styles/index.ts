import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Anton", sans-serif;
    font-weight: 300;
    font-style: normal;
    list-style: none;
    letter-spacing: 1px;
  }

  body {
    background: linear-gradient(to bottom right, #023e8a, #8fd3fe 50%, #023e8a);
  }
`
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
`
export default EstiloGlobal

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  height: 60px;
  width: 60px;
  background-color: #2f3640;
  border-radius: 100%;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background: linear-gradient(to bottom right, #a9fda2, #21fc0d);
  border: 5px solid #228c22;
`
export const BotaoCancelarRemover = styled(Botao)`
  background: linear-gradient(to bottom right, #ee8b6e, #ff0000);
  border: 5px solid #800000;
`
export const BotaoEditar = styled(Botao)`
  background: linear-gradient(to bottom right, #fdfd96, #ffff00);
  border: 5px solid #edc001;
`
