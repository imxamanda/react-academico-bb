import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import salaValidator from '@/validators/salaValidator'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: {errors} } = useForm()

    function salvar(dados) {
        const salas = JSON.parse(window.localStorage.getItem('salas')) || []
        cursos.push(dados)
        window.localStorage.setItem('salas', JSON.stringify(salas))
        push('/salas')
    }

    return (
        <Pagina titulo="Salas">
        <Form>
            <Form.Group className="mb-3" controlId="numero">
                <Form.Label>Número: </Form.Label>
                <Form.Control isInvalid={errors.numero} type="text" {...register('numero', salaValidator.numero)} />
                    {
                        errors.numero &&
                        <p className='text-danger'>{errors.numero.message}</p>
                    }
            </Form.Group>

            <Form.Group className="mb-3" controlId="capacidade">
                <Form.Label>Capacidade: </Form.Label>
                <Form.Control isInvalid={errors.capacidade} type="text" {...register('capacidade', salaValidator.capacidade)} />
                    {
                        errors.capacidade &&
                        <p className='text-danger'>{errors.capacidade.message}</p>
                    }
            </Form.Group>

            <Form.Group className="mb-3" controlId="tipo">
                <Form.Label>Tipo: </Form.Label>
                <Form.Control isInvalid={errors.tipo} type="text" {...register('tipo', salaValidator.tipo)} />
                    {
                        errors.tipo &&
                        <p className='text-danger'>{errors.tipo.message}</p>
                    }
            </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/salas">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form