import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './artigos.css';

const Artigo = ({ tarefa, deletarTarefa }) => {


    const deletar = (id) => {
        deletarTarefa(id);

    }
    return (
        <ul>
            <TransitionGroup >
                {tarefa.map((tarefa, index) => {
                    return (
                        <CSSTransition key={index} timeout={100} classNames="item" >
                            <li data-id={tarefa.id}>
                                <h2>{tarefa.titulo}</h2>
                                <div className='container-descricao'>
                                    <p>{tarefa.descricao}</p>
                                    <button data-id={tarefa.id}
                                        onClick={(event) => { deletar(tarefa.id) }}>Deletar</button>
                                </div>
                            </li>
                        </CSSTransition>
                    )
                })}

            </TransitionGroup>
        </ul>
    )
}

export default Artigo;