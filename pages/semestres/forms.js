import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit } = useForm()

    function salvar(dados) {
        axios.post('/api/semestres', dados)
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