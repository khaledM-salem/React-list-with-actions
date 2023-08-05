import React, {PropsWithChildren} from 'react';
import styled from 'styled-components';

type PageProps = {
  title: string;
  description: string;
} & PropsWithChildren;

export const Page: React.FC<PageProps> = ({
  title,
  description,
  children
}) => (
  <Container>
    <Header>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Header>

    {children}
  </Container>
);

const Container = styled.div`
  padding: 2.4rem;
`;

const Header = styled.div`
  margin-bottom: 1.6rem;
`;

const Title = styled.h1`
  color: black;
  font-size: 1.8rem;
  margin-bottom: .4rem;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1rem;
`;
