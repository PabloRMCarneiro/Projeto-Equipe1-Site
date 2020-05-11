import React, {useState}from 'react';
import logo from '../../logo.svg';
import './style_login.css'
import {InputGroup, FormControl, Button} from 'react-bootstrap'
import { AccountCircle, VpnKey } from '@material-ui/icons'
import {useHistory} from 'react-router-dom'

export default  function Login() {
  const usuario = 'pablocarneiro@cpejr.com.br'
  const senha = '123456789'

  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  
  const history = useHistory()
  console.log(username, " ", password)
  
  function handleSubmit(){
      if(username === usuario && password === senha){
        alert('Acesso Liberado')
        history.push('/estoque')
      }else{
        if(username !== usuario){
          alert('Usuário Inválido')
        }
        else if (password !== senha){
          alert('Senha Inválida')
        }
      }
  }
  function registerSubmit(){
    history.push('/registro')
  }


  return (
    <div className = " back h-100 d-flex flex-column ">
      <h1 className="text-center" style={{ color: '#F20732', textAlign: 'center'}}>Loja IN</h1>
      <div className="login d-flex justify-content-center flex-column">
        
        <h1 className="text-center mb-5" style={{ color: '#fff'}}>Login</h1>

        <div className="d-flex justify-content-center flex-column">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <AccountCircle/>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="E-mail"
              aria-label="E-mail"
              aria-describedby="basic-addon1"
              onChange={(e) => setUserName(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <VpnKey/></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Senha"
              aria-label="Senha"
              aria-describedby="basic-addon1"
              type = "password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <Button  onClick = {() => handleSubmit()} variant = "dark" className="mt-4 col-3 mx-auto">Entrar</Button>
          <Button  onClick = {() => registerSubmit()} style={{ background: '#F20732', color: 'white', border: '0'}}  className="mt-4  mx-auto">Registrar</Button>
        </div>
      </div>
    </div>
  );
}



