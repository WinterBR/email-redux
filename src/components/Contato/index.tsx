import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { BotaoCancelarRemover, BotaoSalvar, BotaoEditar } from '../../styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  email: emailOriginal,
  nome: nomeOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.CardDeContato>
      <S.Infos>
        <S.Imagem
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
          alt="Foto do contato"
        />
        <S.ListaDeInfo>
          <S.Nome
            disabled={!estaEditando}
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
          />
          <S.Email
            disabled={!estaEditando}
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
          <S.Telefone
            disabled={!estaEditando}
            value={telefone}
            onChange={(evento) => setTelefone(evento.target.value)}
          />
        </S.ListaDeInfo>
      </S.Infos>
      <S.ContainerBotoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    telefone,
                    nome,
                    email,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              <img
                src="https://www.svgrepo.com/show/347932/save.svg"
                alt="Salvar"
                width="30px"
              />
            </BotaoSalvar>
            <BotaoCancelarRemover onClick={cancelarEdicao}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/219/219300.png"
                alt="Salvar"
                width="30px"
              />
            </BotaoCancelarRemover>
          </>
        ) : (
          <>
            <BotaoEditar onClick={() => setEstaEditando(true)}>
              <img
                src="https://cdn3.iconfinder.com/data/icons/feather-5/24/edit-512.png"
                alt="Editar"
                width="30px"
              />
            </BotaoEditar>
            <BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                alt="Remover"
                width="30px"
              />
            </BotaoCancelarRemover>
          </>
        )}
      </S.ContainerBotoes>
    </S.CardDeContato>
  )
}

export default Contato
