import React, {useState}from 'react';
import logo from '../../logo.svg';
import './style_login.css'
import {InputGroup, FormControl, Button} from 'react-bootstrap'
import { AccountCircle, VpnKey } from '@material-ui/icons'
import {useHistory} from 'react-router-dom'

export default  function Login() {
  const usuario = 'Pablo'
  const senha = 'React'

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
          alert('E-amil Inválido')
        }
        else if (password !== senha){
          alert('Senha Inválida')
        }
      }
  }
  function handleRegister(){
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
          <Button  onClick = {() => handleSubmit()} style={{ color: '#fff', background: '#0439D9', border: '0'}} className="mt-4 col-3 mx-auto">Entrar</Button>
          <Button  onClick = {() => handleRegister()} style={{ color: '#fff', background: '#F20732', border: '0'}} className="mt-4 mx-auto">Registrar</Button>
        </div>
      </div>
    </div>
  );
}



