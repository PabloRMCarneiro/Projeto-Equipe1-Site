import React, {useState}from 'react';
import logo from '../../logo.svg';
import './style_novos_produtos.css'
import {InputGroup, FormControl, Button, Form} from 'react-bootstrap'
import { AccountCircle, VpnKey } from '@material-ui/icons'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import BuildIcon from '@material-ui/icons/Build'
import {useHistory} from 'react-router-dom'
import logo_2 from '../logo/logo_2.png'

export default  function Login() {
 
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")  
    const history = useHistory()
    
    function productsSubmit(){
        history.push('/estoque')
  }


  return (
    <div className = "h-100 d-flex flex-column ">
      <div className="img" id = "logo-produtos">
        <img src={logo_2}/><h1 className="text-center " style={{ color: '#fff'}}>Cadastrar Produtos</h1>
      </div>

      <div className=" products d-flex justify-content-center flex-column">
      
        <div className="d-flex justify-content-center flex-column">
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label style= {{fontWeight:'bold', color: 'white'}}>Tipo de Produto</Form.Label>
              <Form.Control as="select" custom>
                <option>Camisa</option>
                <option>Vestido</option>
                <option>Short</option>
                <option>Camiseta</option>
                <option>Calça</option>
                <option>Tênis</option>
              </Form.Control>
            </Form.Group>
          </Form>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Nome do Produto"
              aria-label="Nome do Produto"
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
              aria-describedby="basic-addon1"
              onChange={(e) => setPassword(e.target.value)}
              
            />
          </InputGroup>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label style= {{fontWeight:'bold', color: 'white'}}>Coleção</Form.Label>
              <Form.Control as="select" custom>
                <option>Verão</option>
                <option>Inverno</option>
                <option>Primavera</option>
                <option>Outono</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <Form >
          <div className="mb-3" >
            <Form.File id="formcheck-api-regular" >
              <Form.File.Label style= {{fontWeight:'bold', color: 'white'}} >Foto do Produto</Form.File.Label>
              <Form.File.Input />
            </Form.File>
          </div>
          </Form>
          <Button  onClick = {() => productsSubmit()} style={{ background: '#F20732', color: 'white', border: '0'}}  className=" mx-auto" size="lg" >Cadastrar</Button>
        </div>
      </div>
    </div>
  );
}


