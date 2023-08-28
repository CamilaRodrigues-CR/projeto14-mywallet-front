import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from "react"
import apiAuth from "../services/apiAuth"


export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" })
  const navigate = useNavigate()

  function handleSignIn(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function signIn(e) {
    e.preventDefault()

    apiAuth.signIn(form)
      .then(res => {
        console.log(res.data)
        navigate("/home")

        const { name,token } = res.data
        localStorage.setItem("token", token)

      })
      .catch(err => {
        console.log(err.response.data)
        alert(err.response.data)
      })

  }

  return (
    <SingInContainer>
      <form onSubmit={signIn}>
        <MyWalletLogo />
        <input
          data-test="email"
          name="email"
          placeholder="E-mail"
          type="email"
          value={form.email}
          onChange={handleSignIn}
          required
        />
        <input
          data-test="password"
          name="password"
          placeholder="Senha"
          type="password"
          autocomplete="new-password"
          value={form.password}
          onChange={handleSignIn}
          required
        />

        <button data-test="sign-in-submit" type="submit">Entrar</button>
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
