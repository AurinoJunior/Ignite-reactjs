import React, { FormEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import githubApi from '../../services/githubApi'
import logo from '../../assets/logo-github.svg'

import { Title, Form, Repositories, Error } from './DashboardStyles'

interface Repository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    avatar_url: string;
    login: string;
    html_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [inputErr, setInputErr] = useState('')
  const [newRepo, setNewRepo] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem('@githubExplore:')
    if (storageRepositories) {
      return JSON.parse(storageRepositories)
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem('@githubExplore:', JSON.stringify(repositories))
  }, [repositories])

  async function handleAddRepository (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!newRepo) {
      setInputErr('Digite o autor/nome do repositorio')
      return
    }

    try {
      const { data } = await githubApi.get(`repos/${newRepo}`)

      const repository = data as Repository

      setRepositories([...repositories, repository])
      setNewRepo('')
      setInputErr('')
    } catch (err) {
      setInputErr('Repositorio não encontrado')
    }
  }

  return (
    <>
      <img src={logo} alt='Logotipo github explore'/>
      <Title>Explore repositórios no Github.</Title>
      <Form
        action=""
        onSubmit={handleAddRepository}
      >
        <input
          className={inputErr ? 'has-error' : ''}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder='Digite o nome do repositorio'
          type='text'
          value={newRepo}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputErr &&
        <Error>{inputErr}</Error>
      }

      <Repositories>
        {repositories.map(repository => (
          <Link key={repository.id} to={`/repositories/${repository.full_name}`}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <span className="icon-rep">{'>'}</span>
          </Link>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard
