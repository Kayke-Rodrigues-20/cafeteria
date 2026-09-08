import { useState, useEffect } from "react"
import Style from './Listagem.module.css'
import { Link } from "react-router-dom"

import americano from '../assets/cafe-americano.png'
import espresso from '../assets/cafe-espresso.png'
import flatWhite from '../assets/cafe-flat-white.png'
import latte from '../assets/cafe-latte.png'
import macchiato from '../assets/cafe-macchiato.png'

function Listagem (){

    const [cafe, setCafe] = useState([]);
    //const [mensagem, setMensagem] = useState("");
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    const API = "http://localhost:8080"

useEffect(() => {
   async function listar(){
        try {
            const response = await fetch(`${API}/cafe`)
            if(!response.ok){
                setMensagem("Erro: " + response.status);
                return;
            }

            const dados = await response.json();
            setCafe(dados);
        } catch (err) {
            setMensagem("Erro ao realizar listagem: " + err.message);
            setErro(err.message);
        } finally{
            setCarregando(false);
        }
   }
   listar();
}, [])

    if(carregando) {
        return <p style={{textAlign: "center"}}>Carregando lista...</p>
    }

    if(erro){
        return <p>Erro ao carregar lista</p>
    }

    const imagem = {
        "café espresso": espresso,
        "café latte": latte,
        "café americano": americano,
        "café macchiato": macchiato,
        "café flat white": flatWhite
    };

    return (
        <div style={{ padding: '20px' }}>

            <div className={Style.nav}>
                <h2>CAFÉS</h2>
                <Link className={Style.buttonCadastro} to="/Cadastro">Cadastro</Link>
            </div>

            <ul className={Style.gridContainerStyle} >
                
                {cafe.map((c) => {

                     const nomeCafe = c.nome.toLowerCase().trim();
                     const srcImagem = imagem[nomeCafe];
                    console.log("Imagem encontrada:", srcImagem);
                     return (
                    <li key={c.id} style={produtoCardStyle}>
                        <img src={srcImagem} alt={c.nome} width="250px" height="250px" /> <br/>
                        <strong><p className={Style.p}>{c.nome.toUpperCase()} - {c.torra.toUpperCase()}</p></strong>
                        <p className={Style.p}>R$ {c.preco}</p>
                        <p className={Style.p}>{c.descricao}</p>
                    </li>
                     );
                })}
            </ul>
        </div>
    )
}

const produtoCardStyle = {
  border: '1px solid #ccc',
  padding: '15px',
  borderRadius: '8px',
  textAlign: 'center',
  backgroundColor: '#f9f9f9'
};

export default Listagem