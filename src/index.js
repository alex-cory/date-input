import React from 'react'
import { render } from 'react-dom'
import { Page } from 'components'
import { observable } from 'mobx'
import styled from 'styled-components'
import EmailAutocompleteInput from './EmailAutocompleteInput'


const Col = styled.div`
  display:        flex;
  flex-direction: column;
  color:          white;
`

const Title = styled.h1`
  text-shadow: 1px 1px grey;
  font-weight: 100;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
`

const Input = styled(EmailAutocompleteInput)`
  font-family:      Helvetica, Arial, sans-serif;
  letter-spacing:   0.5px;
  line-height:      1.3em;
  display:          inline-block;
  box-sizing:       border-box;
  background-color: off-white;
  border-radius:    5px;
  outline:          none;
  border:           1px solid lightgray;
  border-image:     initial;
  padding:          0.5rem;
  border-radius:    3px;
  background:       white;
  width:            100%;
  font-size:        12pt;
`

const Row = styled.h4`
  display: flex;
  flex-direction: row;
  font-weight: 100;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  letter-spacing: 1px;
  justify-content: center;
  align-items: center;
`

const Link = styled.a.attrs({
  href: 'https://github.com/alex-cory'
})`
  margin: 0 3px;
  color: #ea6b2b;
  text-decoration: none;
`

const Love = styled.span`
  &:before {
    content: '❤';
    color: #ea6b2b;
    margin: 0 3px;
  }
`

const email = observable('')

render(
  <Page>
    <Col>
      <Title>Email Autocomplete Input</Title>
      <Input value={email} onChange={value => email.set(value)} />
      <Row>Made with <Love /> by <Link>@alex-cory</Link></Row>
    </Col>
  </Page>,
  document.getElementById('root')
)