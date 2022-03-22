import React, { useState, useEffect } from 'react';
import './todo.css';
import Formulario from './formulario/formulario';
import Artigo from './artigos/artigos';

const Todo = () => {

    const [tarefa, setTarefa] = useState([]);


    useEffect(() => {
        const tarefas = localStorage.getItem('tarefa');
        if (tarefas) {
            console.log(tarefas);
            setTarefa([...JSON.parse(tarefas)]);
        }

    }, []);

    useEffect(() => {

        localStorage.setItem('tarefa', JSON.stringify(tarefa));
    }, [tarefa])

    function enviarTarefa(titulo, descricao, id) {
        setTarefa([...tarefa, { titulo, descricao, id }]);

    }

    function deletarTarefa(id) {
        setTarefa(tarefa.filter(tarefa => tarefa.id !== id));

    }


    return (
        <main>
            <h1>Meus artigos</h1>
            <Formulario enviarTarefa={enviarTarefa} tarefa={tarefa} />
            <Artigo tarefa={tarefa} deletarTarefa={deletarTarefa} />
        </main>
    );
}

export default Todo;