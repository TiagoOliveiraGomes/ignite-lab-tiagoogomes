import { gql, useMutation } from '@apollo/client'
import React, { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../../components/logo'
import './styles.css'

const CREATE_SUBSCRIBER_MUTATION = gql`
    mutation CreateSubscriber($name:String!, $email:String!) {
        createSubscriber(data: {name: $name, email: $email}) {
            id
        }
    }
`

export function Subscribe() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const  [createSubscriber, {loading}] = useMutation(CREATE_SUBSCRIBER_MUTATION)

    async function handleSubscribe(event:FormEvent){
        event.preventDefault()
    
        await createSubscriber({
            variables: {
                name,
                email,
            }
        })

        navigate('/event')
    }

  return (
    <div className='Container-Subscribe'>

        <div className='info-home'>
            <div className='info'>
                <Logo />

                <h1>
                    Construa uma <strong>aplicação completa</strong>, do zero, com <strong>React JS</strong>
                </h1>
                <p>
                Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                </p>
            </div>

            <div className='container-Form'>
                <strong>Inscreva-se gratuitamente</strong>
                <form onSubmit={handleSubscribe}>
                    <input 
                    type="text" 
                    placeholder='Digite seu nome completo' 
                    onChange={event=> setName(event.target.value)}
                    />
                    <input 
                    type="email" 
                    placeholder='Digite seu email' 
                    onChange={event=> setEmail(event.target.value)}
                    />
                    <button disabled={loading} type='submit'>
                        Garantir minha vaga
                    </button>
                </form>
            </div>
        </div>

        <img 
        className='mt-10'
        src="/src/assets/code-mockup.png" 
        alt="" 
        />

    </div>
  )
}

