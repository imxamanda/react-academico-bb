import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [semestres, setSemestres] = useState([])

    useEffect(() => {
        getAll()
    }, [])
     
    function getAll(){
        axios.get('api/semestres').then(resultado => {
            setSemestres(resultado.data)
        })
    }

    function excluir(id){
        if (confirm('Deseja realmente excluir o registro?')){
        axios.delete('/api/semestres/' + id )
        getAll()
    }
}

    return (
        <Pagina titulo="Semestres">

            <Link href="/semestres/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Número</th>
                        <th>Capacidade</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {semestres.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/semestres/' + item.id}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.dt_inicio}</td>
                            <td>{item.dt_fim}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index