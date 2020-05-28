import React, {Component} from 'react'
import './Produto.css'

export default class Produto extends Component{

    state = {
        id: this.props.id,
        nome: this.props.nome,
        tamanho: this.props.tamanho,
        quantidade: this.props.quantidade,
        imgg: this.props.imgg
    }
    constructor(props){
        super(props)

        this.setId = this.setId.bind(this)
        this.setNome = this.setNome.bind(this)
        this.setTamanho = this.setTamanho.bind(this)
        this.setQuantidade = this.setQuantidade.bind(this)
        this.setImg = this.setImg.bind(this)

        
    }

    setId(e){
        this.setState({id : e.target.value})
    }
    setNome(e){
        this.setState({nome : e.target.value})
    }
    setTamanho(e){
        this.setState({tamanho : e.target.value})
    }
    setQuantidade(e){
        this.setState({quantidade : e.target.value})
    }
    setImg(e){
        this.setState(
            { imgg: e.taget.value }
        )
    }

    render(){
        const {id, nome, tamanho,quantidade, imgg} = this.state
        return(
            <div className = "bloco">
                <p>  {imgg} </p>
                <h5> {nome} </h5>
                <p> ID: {id} </p>
                <p> Tamanho: {tamanho} </p>
                <p> Quantidade: {quantidade} </p>
                
            </div>
        )
    }
} 
