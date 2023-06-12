import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import semestreValidator from '@/validators/semestreValidator'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: {errors} } = useForm()

    function salvar(dados) {
        const salas = JSON.parse(window.localStorage.getItem('semestres')) || []
        cursos.push(dados)
        window.localStorage.setItem('semestres', JSON.stringify(semestres))
        push('/semestres')
    }

    return (
        <Pagina titulo="Semestres">
        <Form>
            <Form.Group className="mb-3" controlId="nome">
                <Form.Label>Nome: </Form.Label>
                <Form.Control isInvalid={errors.nome} type="text" {...register('nome', semestreValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
            </Form.Group>

            <Form.Group className="mb-3" controlId="dt_inicio">
                <Form.Label>Data de Início: </Form.Label>
                <Form.Control isInvalid={errors.dt_inicio} type="text" {...register('dt_inicio', semestreValidator.dt_inicio)} />
                    {
                        errors.dt_inicio &&
                        <p className='text-danger'>{errors.dt_inicio.message}</p>
                    }
            </Form.Group>

            <Form.Group className="mb-3" controlId="dt_fim">
                <Form.Label>Data de Fim: </Form.Label>
                <Form.Control isInvalid={errors.dt_fim} type="text" {...register('dt_fim', semestreValidator.dt_fim)} />
                    {
                        errors.dt_fim &&
                        <p className='text-danger'>{errors.dt_fim.message}</p>
                    }
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