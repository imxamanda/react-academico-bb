import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()
    
    useEffect(() => {
        if(query.id){
            axios.get('/api/semestres/' + query.id).then(resultado => {
                const semestres = resultado.data

                for(let atributo in semestres){
                    setValue(atributo, semestres[atributo])
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/semestres/' + query.id, dados)
        push('/semestres')
    }

    return (
        <Pagina titulo="Semestres">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="dt_inicio">
                    <Form.Label>Data de Início: </Form.Label>
                    <Form.Control type="text" {...register('dt_inicio')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="dt_fim">
                    <Form.Label>Data de Fim: </Form.Label>
                    <Form.Control type="text" {...register('dt_fim')} />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/semestres">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form
