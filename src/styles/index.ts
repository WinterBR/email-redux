import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    list-style: none;
    letter-spacing: 1.5px;
  }

  body {
  background: linear-gradient(to bottom right, #fff, #dddddd);
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
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: rgb(0, 0, 0, 0);
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: rgb(0, 0, 0, 0);
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: rgb(0, 0, 0, 0);
`
export const BotaoEditar = styled(Botao)`
  background-color: rgb(0, 0, 0, 0);
`
