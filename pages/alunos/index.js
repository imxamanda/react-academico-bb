import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        getAll()
    }, [])
     
    function getAll(){
        axios.get('api/alunos').then(resultado => {
            setAlunos(resultado.data)
        })
    }

    function excluir(id){
        if (confirm('Deseja realmente excluir o registro?')){
        axios.delete('/api/alunos/' + id )
        getAll()
    }
}

    return (
        <Pagina titulo="Alunos">

            <Link href="/alunos/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Matricula</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>CEP</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {alunos.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/alunos/' + item.id}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.matricula}</td>
                            <td>{item.email}</td>
                            <td>{item.telefone}</td>
                            <td>{item.cep}</td>
                        
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index