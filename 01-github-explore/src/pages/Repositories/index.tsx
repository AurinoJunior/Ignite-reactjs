import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'

import githubApi from '../../services/githubApi'
import logo from '../../assets/logo-github.svg'

import { Header, RepositoryInfo, Issues } from './RepositoriesStyles'

interface RepositoryParams {
  repository_name: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    avatar_url: string;
    login: string;
  }
}

interface Issue {
  id: number;
  title: string;
  html_url:string;
  user: {
    login: string;
  }
}

const Repositories: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null)
  const [issues, setIssues] = useState<Issue[]>([])

  const { params } = useRouteMatch<RepositoryParams>()

  useEffect(() => {
    async function loadData () {
      const [repositoryRes, issuesRes] = await Promise.all([
        githubApi.get(`repos/${params.repository_name}`),
        githubApi.get(`repos/${params.repository_name}/issues`)
      ])

      setRepository(repositoryRes.data)
      setIssues(issuesRes.data)
    }

    loadData()
  }, [params.repository_name])
  /* Quando alterar o valor de repository_name fazer uma nova chamada a api
  para pegar os novos valores do repositorio */

  return (
    <>
      <Header>
        <img src={logo} alt="Logotipo github explore"/>
        <Link to="/">
          <span className="icon-back">{'<'}</span>
          voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <h2>{repository.full_name}</h2>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <span className="icon-rep">{'>'}</span>
          </a>
        ))}
      </Issues>
    </>
  )
}

export default Repositories
