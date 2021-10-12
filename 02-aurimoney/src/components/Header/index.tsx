import { Container, Content, Logo } from './styles'

import logoIcon from '../../assets/logo-image.svg'

interface HeaderProps {
  openTransactionModal: () => void
}

export const Header = ({ openTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logoIcon} alt="Logo aurimoney" />
          AuriMoney
        </Logo>

        <button onClick={openTransactionModal}>Nova transação</button>
      </Content>
    </Container>
  )
}
