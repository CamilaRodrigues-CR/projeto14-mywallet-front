import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from "react"
import apiAuth from "../services/apiAuth"

export default function SignUpPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [confirmPassword, setConfirmPassword] = useState({confirmPassword: ""});

  const navigate = useNavigate()
  

  function handleSignUp (e){
    setForm({...form, [e.target.name]: e.target.value})
    setConfirmPassword({[e.target.name]: e.target.value})
  }

  function signUp(e) {
    e.preventDefault()

    if (form.password !== confirmPassword.confirmPassword) {
      return alert("As senhas devem ser iguais!")
    }
  

      apiAuth.signUp(form)
        .then(res => {
          console.log(res.data)
          navigate("/")
        })
        .catch(err => {
          console.log(err.response.data)
          alert(err.response.message)
        })
  }


  return (
    <SingUpContainer>
      <form onSubmit={signUp}>
        <MyWalletLogo />
        <input name="name" placeholder="Nome" type="text" required value={form.name} onChange={handleSignUp}/>
        <input name="email" placeholder="E-mail" type="email" required value={form.email} onChange={handleSignUp}/>
        <input name="password" placeholder="Senha" type="password" autocomplete="new-password" required value={form.password} onChange={handleSignUp}/>
        <input name="confirmPassword" placeholder="Confirme a senha" type="password" autocomplete="new-password" required value={confirmPassword.confirmPassword} onChange={handleSignUp}/>
        <button>Cadastrar</button>
      </form>

      <Link to="/" >
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
