import React, {useState}from 'react';
import logo from '../../logo.svg';
import './style_registro.css'
import {InputGroup, FormControl, Button} from 'react-bootstrap'
import { AccountCircle, VpnKey } from '@material-ui/icons'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import BuildIcon from '@material-ui/icons/Build'
import {useHistory} from 'react-router-dom'

export default  function Login() {
 
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")  
  const history = useHistory()
 
  function registerSubmit(){
    history.push('/login')
  }


  return (
    <div className = " back h-100 d-flex flex-column ">
      <h1 className="text-center" style={{ color: '#F20732', textAlign: 'center'}}>Loja IN</h1>
      <div className="registro d-flex justify-content-center flex-column">
        
        <h1 className="text-center mb-5" style={{ color: '#fff'}}>Registrar</h1>

        <div className="d-flex justify-content-center flex-column">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <AccountBoxIcon/>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Nome"
              aria-label="Nome"
              aria-describedby="basic-addon1"
              onChange={(e) => setUserName(e.target.value)}
             
            />
          </InputGroup>
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
                <BuildIcon/>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Cargo"
              aria-label="Cargo"
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
          <Button  onClick = {() => registerSubmit()} style={{ background: '#F20732', color: 'white', border: '0'}}  className="mt-4  mx-auto">Registrar</Button>
        </div>
      </div>
    </div>
  );
}



