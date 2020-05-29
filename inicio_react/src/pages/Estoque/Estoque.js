import React, {useState}from 'react'
import {InputGroup, FormControl, Button, Navbar, Form, NavLink, Nav, Card, CardDeck, Dropdown, Span} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import ReactDOM from 'react-dom';
import Produto from '../Produtos/Produto'
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
require('../Produtos/Produto.css');


ReactDOM.render(
  <Produto id = "01" nome = "Camisa Longa" quantidade = "25" tamanho = "m" imgg ="Imagem" />,
  document.getElementById('root')
);


function Coleção() {
  return (
     <Abas>
      <div label="Verão">
        <Produto id = "v1" nome = "Camisa Infantil" quantidade = "25" tamanho = "M" imgg = { <img src='/Imagens/blusainfantil.jpg'/>}/>
        <Produto id = "v2" nome = "Camisa AnimalPrint" quantidade = "25" tamanho = "M" imgg = { <img src='/Imagens/animalprintcro.jpg'/>}/>
        <Produto id = "v3" nome = "Camiseta Infantil Branca" quantidade = "25" tamanho = "M" imgg = { <img src='/Imagens/camisetainfantilbranca.jpg'/>}/>
        <Produto id = "v4" nome = "Camiseta Masculina Cinza" quantidade = "1" tamanho = "P" imgg = { <img src='/Imagens/camisetamasculinacinza.jpg'/>}/>
        <Produto id = "v5" nome = "Short Masculino Jacaré" quantidade = "25" tamanho = "M" imgg = { <img src='/Imagens/shortmasculinojacare.jpg'/>}/>
        <Produto id = "v6" nome = "Short Masculino Latas" quantidade = "1" tamanho = "P" imgg = { <img src='/Imagens/shortmasculinolatas.jpg'/>}/>
        <Produto id = "v7" nome = "Calça Feminina Colorida" quantidade = "25" tamanho = "M" imgg = { <img src='/Imagens/calcafemininacolorida.jpg'/>}/>
        <Produto id = "v8" nome = "Vestido Estampado" quantidade = "1" tamanho = "P" imgg = { <img src='/Imagens/vestestamp.jpg'/>}/>
        <Produto id = "v9" nome = "Tênis Branco" quantidade = "1" tamanho = "P" imgg = { <img src='/Imagens/tenisbranco.jpg'/>}/>
        <Produto id = "v10" nome = "Tênis Infantil Floral" quantidade = "1" tamanho = "P" imgg = { <img src='/Imagens/teniscinfantilfloral.jpg'/>}/>
        <Produto id = "v11" nome = "Tênis Masculino Preto Nike" quantidade = "1" tamanho = "P" imgg = { <img src='/Imagens/tenismasculinopretonike.jpg'/>}/>
      </div>
      <div label="Inverno">
        <Produto id = "i1" nome = "Blusa de Frio Feminina" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/blusadefriofeminina.jpg'/>}/>
        <Produto id = "i2" nome = "Calça Moletom Masculina" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/calcamasculinamoletom.jpg'/>}/>
        <Produto id = "i3" nome = "Moletom Adidas" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/moletomadidas.jpg'/>}/>
        <Produto id = "i4" nome = "Moletom Colorido" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/moletomcolorido.jpg'/>}/>
        <Produto id = "i5" nome = "Camiseta Feminina Preta" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/camisetafemininapreta.jpg'/>}/>
        <Produto id = "i6" nome = "Camiseta Masculina Rosa" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/camisetamasculinarosa.jpg'/>}/>
        <Produto id = "i7" nome = "Short Feminino Couro" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/shortfemininocouro.jpg'/>}/>
        <Produto id = "i8" nome = "Tênis Masculino Cinza" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/tenismasculinocinza.jpg'/>}/>
        <Produto id = "i9" nome = "Tênis Rosa Glitter" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/tenisrosaglitter.jpg'/>}/>
        <Produto id = "i10" nome = "Vestido Verde" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/dressgreen.jpg'/>}/>
      </div>
      <div label="Primavera">
        <Produto id = "p1" nome = "Calça Jeans" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/calcajeans.jpg'/>}/> 
        <Produto id = "p2" nome = "Calça Pantacourt" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/pantacourt.jpg'/>}/>
        <Produto id = "p3" nome = "Camisa Feminina Onçinha" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/camisetafemininaanimalprint.jpg'/>}/>
        <Produto id = "p4" nome = "Camisa Colorcoat" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/colorcoat.jpg'/>}/>
        <Produto id = "p5" nome = "Camiseta Friends Branca" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/camisetafriendsbranca.jpg'/>}/>
        <Produto id = "p6" nome = "Short Masculino Tubarão" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/shortmasculinotubarao.jpg'/>}/>
        <Produto id = "p7" nome = "Short Masculino Unicórnio " quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/shortmasculinounicornio.jpg'/>}/>
        <Produto id = "p8" nome = "Tênis Colorido Feminino" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/teniscoloridofeminino.jpg'/>}/>
        <Produto id = "p9" nome = "Tênis Infantil" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/tenisinfantil.jpg'/>}/>
        <Produto id = "p10" nome = "Vestido Infantil" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/vestidoinfantil.jpg'/>}/>   
      </div>
      <div label="Outono">
        <Produto id = "o1" nome = "Calça Masculina Militar" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/calcamasculinamilitar.jpg'/>}/>
        <Produto id = "o2" nome = "Calça Masculina Verde" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/calcamasculinaverde.jpg'/>}/>  
        <Produto id = "o3" nome = "Camisa Masculina Justa" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/camisamasculinajusta.jpg'/>}/>
        <Produto id = "o4" nome = "Camisa Feminina Trabalho" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/camisetafemininatrabalho.jpg'/>}/>
        <Produto id = "05" nome = "Camiseta Infantil Marrom" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/camisetainfantilmarrom.jpg'/>}/>
        <Produto id = "o6" nome = "Camiseta Masculina Vermelha" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/camisetamasculinavermelha.jpg'/>}/>
        <Produto id = "o7" nome = "Bermuda Jeans" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/bermjeans.jpg'/>}/>
        <Produto id = "o8" nome = "Short Feminino Adidas" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/shortfemininoadidas.jpg'/>}/>
        <Produto id = "o9" nome = "Tênis Masculino Militar" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/tenismasculinomilitar.jpg'/>}/>
        <Produto id = "010" nome = "Tênis Preto Feminino" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/tenispretofeminino.jpg'/>}/>
      </div>
    </Abas>
  );
}






function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div className = "container-fluid"
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
function Camisa() {
  return (
     <Abas>
      <div label="Verão">
        <Produto id = "v1" nome = "Camisa Infantil" quantidade = "25" tamanho = "M" imgg = { <img src='/Imagens/blusainfantil.jpg'/>}/>
        <Produto id = "v2" nome = "Camisa AnimalPrint" quantidade = "25" tamanho = "M" imgg = { <img src='/Imagens/animalprintcro.jpg'/>}/>
      </div>
      <div label="Inverno">
        <Produto id = "i1" nome = "Blusa de Frio Feminina" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/blusadefriofeminina.jpg'/>}/>
        <Produto id = "i3" nome = "Moletom Adidas" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/moletomadidas.jpg'/>}/>
        <Produto id = "i4" nome = "Moletom Colorido" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/moletomcolorido.jpg'/>}/>
      </div>
      <div label="Primavera">
        <Produto id = "p3" nome = "Camisa Feminina Onçinha" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/camisetafemininaanimalprint.jpg'/>}/>
        <Produto id = "p4" nome = "Camisa Colorcoat" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/colorcoat.jpg'/>}/>       
      </div>
      <div label="Outono">       
        <Produto id = "o3" nome = "Camisa Masculina Justa" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/camisamasculinajusta.jpg'/>}/>
        <Produto id = "o4" nome = "Camisa Feminina Trabalho" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/camisetafemininatrabalho.jpg'/>}/>
      </div>
    </Abas>
  );
}
function Vestido() {
  return (
     <Abas>
      <div label="Verão">
        <Produto id = "v8" nome = "Vestido Estampado" quantidade = "1" tamanho = "P" imgg = { <img src='/Imagens/vestestamp.jpg'/>}/>
      </div>
      <div label="Inverno">
        <Produto id = "i10" nome = "Vestido Verde" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/dressgreen.jpg'/>}/>
      </div>
      <div label="Primavera">
        <Produto id = "p10" nome = "Vestido Infantil" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/vestidoinfantil.jpg'/>}/>   
      </div>
      <div label="Outono">
      </div>
    </Abas>
  );
}
function Short() {
  return (
     <Abas>
      <div label="Verão">
        <Produto id = "v5" nome = "Short Masculino Jacaré" quantidade = "25" tamanho = "M" imgg = { <img src='/Imagens/shortmasculinojacare.jpg'/>}/>
        <Produto id = "v6" nome = "Short Masculino Latas" quantidade = "1" tamanho = "P" imgg = { <img src='/Imagens/shortmasculinolatas.jpg'/>}/>
      </div>
      <div label="Inverno">
        <Produto id = "i7" nome = "Short Feminino Couro" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/shortfemininocouro.jpg'/>}/>
      </div>
      <div label="Primavera">
        <Produto id = "p6" nome = "Short Masculino Tubarão" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/shortmasculinotubarao.jpg'/>}/>
        <Produto id = "p7" nome = "Short Masculino Unicórnio " quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/shortmasculinounicornio.jpg'/>}/>   
      </div>
      <div label="Outono">
        <Produto id = "o8" nome = "Short Feminino Adidas" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/shortfemininoadidas.jpg'/>}/>
      </div>
    </Abas>
  );
}
function Camiseta() {
  return (
     <Abas>
      <div label="Verão">
        <Produto id = "v3" nome = "Camiseta Infantil Branca" quantidade = "25" tamanho = "M" imgg = { <img src='/Imagens/camisetainfantilbranca.jpg'/>}/>
        <Produto id = "v4" nome = "Camiseta Masculina Cinza" quantidade = "1" tamanho = "P" imgg = { <img src='/Imagens/camisetamasculinacinza.jpg'/>}/>
      </div>
      <div label="Inverno">
        <Produto id = "i5" nome = "Camiseta Feminina Preta" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/camisetafemininapreta.jpg'/>}/>
        <Produto id = "i6" nome = "Camiseta Masculina Rosa" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/camisetamasculinarosa.jpg'/>}/>
      </div>
      <div label="Primavera">
        <Produto id = "p5" nome = "Camiseta Friends Branca" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/camisetafriendsbranca.jpg'/>}/>
      </div>
      <div label="Outono">
        <Produto id = "05" nome = "Camiseta Infantil Marrom" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/camisetainfantilmarrom.jpg'/>}/>
        <Produto id = "o6" nome = "Camiseta Masculina Vermelha" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/camisetamasculinavermelha.jpg'/>}/>
      </div>
    </Abas>
  );
}

function Calça() {
  return (
     <Abas>
      <div label="Verão">
        <Produto id = "v7" nome = "Calça Feminina Colorida" quantidade = "25" tamanho = "M" imgg = { <img src='/Imagens/calcafemininacolorida.jpg'/>}/>
      </div>
      <div label="Inverno">
        <Produto id = "i2" nome = "Calça Moletom Masculina" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/calcamasculinamoletom.jpg'/>}/>
      </div>
      <div label="Primavera">
        <Produto id = "p1" nome = "Calça Jeans" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/calcajeans.jpg'/>}/> 
        <Produto id = "p2" nome = "Calça Pantacourt" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/pantacourt.jpg'/>}/>
      </div>
      <div label="Outono">
        <Produto id = "o1" nome = "Calça Masculina Militar" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/calcamasculinamilitar.jpg'/>}/>
        <Produto id = "o2" nome = "Calça Masculina Verde" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/calcamasculinaverde.jpg'/>}/>  
      </div>
    </Abas>
  );
}

function Tênis() {
  return (
     <Abas>
      <div label="Verão">
        <Produto id = "v9" nome = "Tênis Branco" quantidade = "1" tamanho = "P" imgg = { <img src='/Imagens/tenisbranco.jpg'/>}/>
        <Produto id = "v10" nome = "Tênis Infantil Floral" quantidade = "1" tamanho = "P" imgg = { <img src='/Imagens/teniscinfantilfloral.jpg'/>}/>
        <Produto id = "v11" nome = "Tênis Masculino Preto Nike" quantidade = "1" tamanho = "P" imgg = { <img src='/Imagens/tenismasculinopretonike.jpg'/>}/>
      </div>
      <div label="Inverno">
        <Produto id = "i8" nome = "Tênis Masculino Cinza" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/tenismasculinocinza.jpg'/>}/>
        <Produto id = "i9" nome = "Tênis Rosa Glitter" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/tenisrosaglitter.jpg'/>}/>
      </div>
      <div label="Primavera">
        <Produto id = "p8" nome = "Tênis Colorido Feminino" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/teniscoloridofeminino.jpg'/>}/>
        <Produto id = "p9" nome = "Tênis Infantil" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/tenisinfantil.jpg'/>}/>
      </div>
      <div label="Outono">
        <Produto id = "o9" nome = "Tênis Masculino Militar" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/tenismasculinomilitar.jpg'/>}/>
        <Produto id = "010" nome = "Tênis Preto Feminino" quantidade = "3" tamanho = "M/G/GG" imgg = { <img src='/Imagens/tenispretofeminino.jpg'/>}/>
      </div>
    </Abas>
  );
}





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
            <Navbar id='navbarzinha' collapseOnSelect expand="lg" style = {{background:'linear-gradient(to bottom, rgb(83, 83, 204), rgb(185, 70, 70))'}}>
                <Navbar.Brand href="#siteDaLoja">
                  <div className="img" id = "logo-estoque"> <img src={logo_2}/></div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className= "mr-auto" style={{color: '', fontSize: '20px', justifyContent:'space-evenly'}}>
                    <Nav.Link onClick = {() => productsSubmit()} style = {{color: 'white'}}>Cadastrar Produtos</Nav.Link>
                    <Nav.Link onClick = {() => decontarSubmit()} style = {{color: 'white'}}>Descontar Produtos</Nav.Link>
                    <Nav.Link onClick = {() => registerSubmit()} style = {{color: 'white'}}>Registrar novos usuários</Nav.Link>
                </Nav>
                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle style = {{background: 'none', border: '0', fontWeight:'bold', color:'black', opacity:'70%', fontSize: '20px'}} id="dropdown-basic">
                            Redes Sociais
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item target="_blank" href="https://www.instagram.com/cpe.jr/">Instagram</Dropdown.Item>
                            <Dropdown.Item href="https://www.facebook.com/cpejr/"  target="_blank">Facebook</Dropdown.Item>
                            <Dropdown.Item href="https://www.linkedin.com/company/cpe-jr"  target="_blank">Linkedin</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                 <Button style={{ background: 'red', color: 'white', border: '0'}}  className="mr-sm-2" onClick = {() => loginSubmit()}>Logout</Button>
                </Nav>
                </Navbar.Collapse>
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
            <Camisa></Camisa>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Vestido></Vestido>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Short></Short>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Camiseta></Camiseta>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Calça></Calça>
          </TabPanel>
          <TabPanel value={value} index={6}>
            <Tênis></Tênis>
          </TabPanel>
        </div>
    </div>
    );
}
