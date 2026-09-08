import { useState } from "react";
import Styles from './Cadastro.module.css';
import {Link} from 'react-router-dom';

function Cadastro() {
    const [nome, setNome] = useState("");
    const [torra, setTorra] = useState("");
    const [ml, setMl] = useState(0);
    const [preco, setPreco] = useState(0.0);
    const [precoFormatado, setPrecoFormatado] = useState("");
    const [descricao, setDescricao] = useState("");
    const [mensagem, setMensagem] = useState("");

        //--
        function formatarPreco(preco){
            preco = preco.replace(/\D/g, "");

            const numero = Number(preco) / 100;

            setPreco(numero);

            setPrecoFormatado(
                numero.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                })
            );
        }

    async function cadastrar() {
//  └─ sem (e) aqui: nada a tratar, o valor já está no estado

        //validação dos dados
        if(nome == null || torra == null || ml == null || preco == null || descricao == null){
            window.alert("Preencha todos os campos");
            return;
        }

        if(nome.trim() == ""){
            window.alert("Nome do café");
            return;
        }

        if(torra == "vazio"){
            window.alert("Selecione o tipo de torra");
            return;
        }

        if(ml == 0){
            window.alert("Selecione a quantidade em ml");
            return;
        }

        if(preco == 0.0){
            window.alert("Informe o preço do café");
            return;
        }

        if(descricao.trim() == ""){
            window.alert("Faça uma descrição do café");
            return;
        }

        const resposta = await fetch(
            "http://localhost:8080/cafe",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    nome: nome,
                    torra: torra,
                    ml: ml,
                    preco: preco,
                    descricao: descricao
                })
            }
        );

        if (!resposta.ok) {
//          └─ status fora de 200–299: deu errado
            setMensagem("Erro " + resposta.status);
            return;
        }

        const dados = await resposta.json();
//      └─ converte o corpo JSON da resposta em objeto JS
        setMensagem(dados.mensagem);
//      └─ a resposta do servidor vira estado — e vira tela

        //Limpando os campos
        setNome("");
        setTorra("");
        setMl(0);
        setPrecoFormatado("");
        setDescricao("");

    }

    return (
    <div className={Styles.container}>
        <div className={Styles.box}>
            <input
                className={Styles.input}
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <select
                className={Styles.select}
                value={ml}
                onChange={(e) => setMl(Number(e.target.value))}
            >
                <option value={0}>Selecione a quantidade</option>
                <option value={100}>100 ml</option>
                <option value={250}>250 ml</option>
                <option value={300}>300 ml</option>
            </select>

            <select
                className={Styles.select}
                value={torra}
                onChange={(e) => setTorra(e.target.value)}
            >
                <option value="vazio">Selecione a torra</option>
                <option value="Fraco">Fraco</option>
                <option value="Médio">Médio</option>
                <option value="Forte">Forte</option>
            </select>

            <input
                className={Styles.input}
                type="text"
                placeholder="Preço"
                value={precoFormatado}
                onChange={(e) => formatarPreco(e.target.value)}
            />

            <input
                className={Styles.input}
                type="text"
                placeholder="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />

            <button className={Styles.button} onClick={cadastrar}>Enviar</button>

            {/*└─ o clique dispara a função; o valor sai do estado*/}
            <p className={Styles.mensagem}>{mensagem}</p>
        </div>
        <Link className={Styles.buttonCardapio} to="/Listagem">Listagem</Link>
    </div>  
)
}

export default Cadastro;