import React, {useState}from 'react'
import {InputGroup, FormControl, Button, Navbar, Form, NavLink, Nav, Card, CardDeck, Dropdown, Span} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import './style_estoque.css'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'
import logo_2 from '../logo/logo_2.png'
import { render } from "react-dom";
import Abas from '../Abas/Abas';
require('../Abas/Abas.css');
//import Produtos from '../Produtos'

function Coleção() {
  return (
     <Abas>
      <div label="Verão">
        See ya later, <em>Alligator</em>!
      </div>
      <div label="Inverno">
        After 'while, <em>Crocodile</em>!
      </div>
      <div label="Primaveira">
        Nothing to see here, this tab is <em>extinct</em>!
      </div>
      <div label="Outono">
        Nothing to see here, this tab is <em>extinct</em>!
      </div>
    </Abas>
  );
}
        




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div class = "container-fluid"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#E4F0E0',
    display: 'flex',
    height: 250,
    color: 'black',
  },
  
}));

export default  function Login() {
     
  const history = useHistory()
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
  function decontarSubmit(){
    history.push('/descontar_produtos')
  }
  return (
    <div className = " back h-100 d-flex flex-column ">
        <div className = "d-flex flex-column ">
            <Navbar style = {{background: 'rgb(248, 248, 248)'}}>
                <div className="img" id = "logo-estoque"> <img src={logo_2}/></div>

                <Nav className="mr-auto "  style={{color: 'black', fontSize: '20px'}}>
                    <Nav.Link onClick = {() => productsSubmit()} >Cadastrar Produtos <span class="border border-danger"></span> </Nav.Link>
                    <Nav.Link onClick = {() => decontarSubmit()} >Descontar Produtos</Nav.Link>
                    <Nav.Link onClick = {() => registerSubmit()} >Registrar novos usuários</Nav.Link>
                    <Dropdown>
                        <Dropdown.Toggle style = {{background: 'none', border: '0', color:'#F20732', fontSize: '20px'}} id="dropdown-basic">
                            Redes Sociais
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item target="_blank" href="https://www.instagram.com/cpe.jr/">Instagram</Dropdown.Item>
                            <Dropdown.Item href="https://www.facebook.com/cpejr/"  target="_blank">Facebook</Dropdown.Item>
                            <Dropdown.Item href="https://www.linkedin.com/company/cpe-jr"  target="_blank">Linkedin</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Pesquisar" className="mr-sm-2" />
                <Button style={{ background: '#F20505', color: 'white', border: '0'}}  className="mr-sm-2">Buscar</Button>
                <Button style={{ background: '#0439D9', color: 'white', border: '0'}}  className="mr-sm-2" onClick = {() => loginSubmit()}>Logout</Button>
                </Form>
            </Navbar>
        </div> 
       
        
        <div className={classes.root} id = "back">
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            id = "filtro"
          >
            <Tab label="Tudo" {...a11yProps(0)} />
            <Tab label="Camisas" {...a11yProps(1)} />
            <Tab label="Vestido" {...a11yProps(2)} />
            <Tab label="Short" {...a11yProps(3)} />
            <Tab label="Camiseta" {...a11yProps(4)} />
            <Tab label="Calça" {...a11yProps(5)} />
            <Tab label="Tênis" {...a11yProps(6)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Coleção></Coleção>
          </TabPanel>
          <TabPanel value={value} index={1}>
          </TabPanel>
          <TabPanel value={value} index={2}>
          </TabPanel>
          <TabPanel value={value} index={3}>
          </TabPanel>
          <TabPanel value={value} index={4}>
          </TabPanel>
          <TabPanel value={value} index={5}>
          </TabPanel>
          <TabPanel value={value} index={6}>
          </TabPanel>
        </div>
    </div>
    );
}
