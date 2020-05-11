import React, {useState}from 'react';
import logo from '../../logo.svg';
import './style_novos_produtos.css'
import {InputGroup, FormControl, Button} from 'react-bootstrap'
import { AccountCircle, VpnKey } from '@material-ui/icons'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import BuildIcon from '@material-ui/icons/Build'
import {useHistory} from 'react-router-dom'

export default  function Login() {
 
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")  
    const history = useHistory()
    
    function productsSubmit(){
        history.push('/estoque')
  }


  return (
    <div className = " back h-100 d-flex flex-column ">
      <h1 className="text-center" style={{ color: '#F20732', textAlign: 'center'}}>Loja IN</h1>
      <div className="products d-flex justify-content-center flex-column">
        
        <h1 className="text-center mb-5" style={{ color: '#fff'}}>Cadastrar Produtos</h1>

        <div className="d-flex justify-content-center flex-column">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Tipo de produto"
              aria-label="Tipo de produto"
              aria-describedby="basic-addon1"
              onChange={(e) => setUserName(e.target.value)}
              
             
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Código do Produto"
              aria-label="Código do Produto"
              aria-describedby="basic-addon1"
              onChange={(e) => setUserName(e.target.value)}
              
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Quantidade"
              aria-label="Quantidade"
              type = "number"
              aria-describedby="basic-addon1"
              onChange={(e) => setUserName(e.target.value)}
            
            />
            </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Tamanho"
              aria-label="Tamanho"
              type = "number"
              aria-describedby="basic-addon1"
              onChange={(e) => setPassword(e.target.value)}
              
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Coleção"
              aria-label="Coleção"
              aria-describedby="basic-addon1"
              onChange={(e) => setPassword(e.target.value)}
              
            />
          </InputGroup>
          <Button  onClick = {() => productsSubmit()} style={{ background: '#F20732', color: 'white', border: '0'}}  className="mt-4  mx-auto">Cadastrar</Button>
        </div>
      </div>
    </div>
  );
}


