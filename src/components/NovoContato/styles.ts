import styled from 'styled-components'

export const FormContato = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 40px;
  margin-bottom: 40px;
  color: black;

  input {
    padding: 8px 16px;
    width: 100%;
    outline: none;
    background-color: rgb(0, 0, 0, 0);
  }

  input:focus {
    border-bottom: 2px solid black;
  }
`
export const Botao = styled.button`
  display: flex;
  justify-content: center;
  align-itens: center;
  padding: 5px;
  width: 50px;
  margin-left: 76%;
  background-color: rgb(0, 0, 0, 0);
  font-weight: bold;
  cursor: pointer;
  border: 0;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  color: black;
  border: 0;
  border-color: black;
  width: 100%;
`
