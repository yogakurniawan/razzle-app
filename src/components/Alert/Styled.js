import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #e9ecef;
  border-top-left-radius: .3rem;
  border-top-right-radius: .3rem;
`

export const Title = styled.h3`
  margin: 0 auto;
  line-height: 1.5;
`

export const Body = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
  text-align: center;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-top: 1px solid #e9ecef;
  > button {
    margin: 0 0.5rem;
  }
`

