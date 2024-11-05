import styled from 'styled-components'

export const FormContato = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 40px;
  margin-bottom: 40px;

  input {
    padding: 8px 16px;
    width: 100%;
  }
`
export const Botao = styled.button`
  display: flex;
  justify-content: center;
  align-itens: center;
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
  margin-left: 76%;
  background: linear-gradient(to bottom right, #a9fda2, #21fc0d);
  border: 5px solid #228c22;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`
