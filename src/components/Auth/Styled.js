import styled from 'styled-components'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import { Button, ButtonLink } from 'components/Button'

export const StyledGrid = styled(Grid)`
  padding-right: 0;
  padding-left: 0;
`;

export const SubContainer = styled(Col) `
  margin: 0 auto;
  border: 2px solid #e4e4e4;
  min-height: 22rem;
  border-radius: .25rem;
`

export const StyledButton = styled(Button) `
  width: 6rem;
`

export const StyledButtonLink = styled(ButtonLink) `
  width: 6rem;
`

export const Div = styled.div`
  margin: 1rem auto;
  text-align: ${props => props.align ? props.align : 'inherit'};
`

export const Container = styled.div`
  padding: 1.5rem 0;
  max-width: 95rem;
  margin: 1rem auto 0 auto;
`

export const TopContainer = styled(Row) `
  padding-bottom: 1rem;
  border-bottom: 1px solid #e4e4e4;
`

export const BottomContainer = styled(Row) `
  padding-top: 0.5rem;
`

export const Question = styled.span `
  line-height: 3;
`