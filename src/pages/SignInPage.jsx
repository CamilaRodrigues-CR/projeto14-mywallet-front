import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from "react"
import apiAuth from "../services/apiAuth"


export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" })
  const navigate = useNavigate()

  function handleSignIn(e){
    setForm({...form, [e.target.name]: e.target.value})
  }

  function signIn(e) {
    e.preventDefault()

    apiAuth.signIn(form)
      .then(res => {
        console.log(res.data)
        navigate("/home")
      })
      .catch(err => {
        console.log(err.response.data)
        alert(err.response.message)
      })
  }

  return (
    <SingInContainer>
      <form onSubmit={signIn}>
        <MyWalletLogo />
        <input
          name="email"
          placeholder="E-mail"
          type="email"
          value={form.email}
          onChange={handleSignIn}
          required
        />
        <input
          name="password"
          placeholder="Senha"
          type="password"
          autocomplete="new-password"
          value={form.password}
          onChange={handleSignIn}
          required
        />

        <button type="submit">Entrar</button>
      </form>

      <Link to="/cadastro">
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
