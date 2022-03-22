import React, { useState, useEffect } from 'react';
import './formulario.css';

const Formulario = ({ enviarTarefa, tarefa }) => {

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [id, setId] = useState(1);


    useEffect(() => {
        if (tarefa.length > 0) {
            setId(tarefa[tarefa.length - 1].id + 1);

        }
    }, [tarefa])




    const capturarTitulo = (event) => {
        setTitulo(event.target.value);
    }

    const capturarDescricao = (event) => {
        setDescricao(event.target.value);

    }

    const capturartarefa = (event) => {
        event.preventDefault();
        if (titulo.trim() === '') return;
        enviarTarefa(titulo, descricao, id);
    }



    return (
        <form onSubmit={capturartarefa}>
            <input
                type="text"
                name="titulo"
                placeholder='titulo'
                required
                onChange={capturarTitulo}
            />
            <textarea
                name="descricao"
                placeholder='Descrição'
                onChange={capturarDescricao}></textarea>
            <button type='submit'>Add artigo</button>
        </form>
    )
}

export default Formulario;
