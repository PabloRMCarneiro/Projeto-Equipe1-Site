import React, {useState}from 'react'
import {InputGroup, FormControl, Button, Navbar, Form, NavLink, Nav, Card, CardDeck, Dropdown} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import './style_estoque.css'


export default  function Login() {
 
     
    const history = useHistory()
 
    
  function registerSubmit(){
    history.push('/registro')
  }
  function productsSubmit(){
    history.push('/novos_produtos')
  }
  function colectionSubmit(){
    history.push('/colecao')
  }
  function loginSubmit(){
    history.push('/login')
  }
  return (
    <div className = " back h-100 d-flex flex-column ">
        <div className = "d-flex flex-column ">
            <Navbar bg="dark" variant="dark">
                    <Navbar.Brand  className = "justify-content-center " href="#home" style={{color: '#F20732', border: '0', fontSize:'25px'}}>Loja IN</Navbar.Brand>
                <Nav className="mr-auto" >
                    <Nav.Link onClick = {() => productsSubmit()} style={{color: 'white'}}>Cadastrar Produtos</Nav.Link>
                    <Nav.Link onClick = {() => colectionSubmit()} style={{color: 'white'}}>Coleção</Nav.Link>
                    <Nav.Link onClick = {() => registerSubmit()} style={{color: 'white'}}>Registrar novos usuários</Nav.Link>
                    <Dropdown>
                        <Dropdown.Toggle style = {{background: 'none', border: '0'}} id="dropdown-basic">
                            Redes Sociais
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Instagram</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Facebook</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Twitter</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" />
                <Button style={{ background: '#F20732', color: 'white', border: '0'}}  className="mr-sm-2">Buscar</Button>
                <Button style={{ background: '#0439D9', color: 'white', border: '0'}}  className="mr-sm-2" onClick = {() => loginSubmit()}>Logout</Button>
                </Form>
            </Navbar>
        </div> 
        <div className = "mt-3 mx-5 d-flex flex-column " style = {{fontSize: '20px'}} >
            <Nav className="justify-content-center " activeKey="/home">
                <Nav.Item>
                <Nav.Link eventKey="link-0">Verão</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="link-1">Primavera</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="link-2">Outono</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="link-3">Inverno</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    </div>
    );
}
