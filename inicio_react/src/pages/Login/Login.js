import React, {useState}from 'react';
import './style_login.css'
import {InputGroup, FormControl, Button} from 'react-bootstrap'
import { AccountCircle, VpnKey } from '@material-ui/icons'
import {useHistory} from 'react-router-dom'
import logo_1 from '../logo/logo_1.png'

export default  function Login() {
  const usuario = 'leticiaaraujo@cpejr.com.br'
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

    <div className = "back_login h-100 d-flex flex-column ">
      <div className="img" id = "logo-login"> <img src={logo_1}/></div>
       
      <div className="login d-flex justify-content-center flex-column">
        <h1 className="text-center mb-5" style={{ color: '#fff'}}>Login</h1>

        <div className="d-flex justify-content-center flex-column" id = 'input'>
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
          <Button  onClick = {() => handleSubmit()} style={{background: 'white', border: 0, color: 'rgb(56, 56, 56)'}} className="mt-4 col-3 mx-auto shadow-lg " size="lg">Entrar</Button>
          <Button  onClick = {() => registerSubmit()} style={{ background: '#F20505', color: 'white', border: '0'}}  className="mt-4  mx-auto shadow-lg" size="lg">Registrar</Button>
        </div>
      </div>
    </div>
  );
}



