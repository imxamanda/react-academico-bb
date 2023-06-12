import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import professorValidator from '@/validators/professorValidator'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: {errors} } = useForm()

    function salvar(dados) {
        const cursos = JSON.parse(window.localStorage.getItem('professores')) || []
        cursos.push(dados)
        window.localStorage.setItem('professores', JSON.stringify(alunos))
        push('/professores')
    }

    return (
        <Pagina titulo="Professor">
        <Form>
        <Form.Label>Nome: </Form.Label>
        <Form.Group className="mb-3" controlId="nome">
                    <Form.Control isInvalid={errors.nome} type="text" {...register('nome', professorValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control isInvalid={errors.cpf} type="text" {...register('cpf', professorValidator.cpf)} />
                    {
                        errors.cpf &&
                        <p className='text-danger'>{errors.cpf.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="matricula">
                    <Form.Label>Matricula: </Form.Label>
                    <Form.Control isInvalid={errors.matricula} type="text" {...register('matricula', professorValidator.matricula)} />
                    {
                        errors.matricula &&
                        <p className='text-danger'>{errors.matricula.message}</p>
                    }
                </Form.Group>

            <Form.Group className="mb-3" controlId="salario">
                <Form.Label>Salário: </Form.Label>
                <Form.Control type="text" {...register('salario')} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                    <Form.Label>email: </Form.Label>
                    <Form.Control isInvalid={errors.email} type="text" {...register('email',  professorValidator.email)} />
                    {
                        errors.email &&
                        <p className='text-danger'>{errors.email.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control isInvalid={errors.telefone} type="text" {...register('telefone', professorValidator.telefone)} />
                    {
                        errors.telefone &&
                        <p className='text-danger'>{errors.telefone.message}</p>
                    }
                </Form.Group>


            <Form.Group className="mb-3" controlId="cep">
                <Form.Label>CEP: </Form.Label>
                <Form.Control type="text" {...register('cep')} />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="logadouro">
                <Form.Label>Logadouro: </Form.Label>
                <Form.Control type="text" {...register('logadouro')} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="numero">
                <Form.Label>Número: </Form.Label>
                <Form.Control type="text" {...register('numero')} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="bairro">
                <Form.Label>Bairro: </Form.Label>
                <Form.Control type="text" {...register('bairro')} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="complemento">
                <Form.Label>Complemento: </Form.Label>
                <Form.Control type="text" {...register('complemento')} />
            </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/professores">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form