import React from 'react'

import { CardStyle } from './styles'

interface CardProps {
  className?: string;
  type: string;
  image: string;
  alt: string;
  value: number;
}

export const Card = (props: CardProps) => {
  const { className, type, image, alt, value } = props

  return (
    <CardStyle className={className}>
      <header>
        <p>{type}</p>
        <img src={image} alt={alt} />
      </header>

      <strong>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(value)}
      </strong>
    </CardStyle>
  )
}
