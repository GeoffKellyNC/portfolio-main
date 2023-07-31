import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, Button } from 'antd'

const initialValues = {
    name: '',
    email: '',
    message: ''
}

const ContactForm = () => {
    const [values, setValues] = useState(initialValues)
    const [nameStatus, setNameStatus] = useState('valid')
    const [emailStatus, setEmailStatus] = useState('valid')
    const [messageStatus, setMessageStatus] = useState('valid')


    const { TextArea } = Input

    const handleChange = e => {
        console.log(e.target.value)
        const { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(values)
    }

  return (
    <ContactFormStyled>
        <Input 
            placeholder = 'Name' 
            style = {{marginBottom: '1rem'}}
            name = 'name'
            value = {values.name}
            onChange = {handleChange}
            status = {nameStatus}
        />
        <Input 
            placeholder = 'Email' 
            style = {{marginBottom: '1rem'}}
            name = 'email'
            value = {values.email}
            onChange = {handleChange}
            status = {emailStatus}
        />
        <TextArea
            placeholder = 'Message'
            name = 'message'
            value = {values.message}
            onChange = {handleChange}
            autoSize = {{ minRows: 6, maxRows: 8 }}
            status = {messageStatus}
        />
        <Button
            type = 'primary'
            onClick = {handleSubmit}
            style = {{marginTop: '1rem'}}
        > Submit </Button>
    </ContactFormStyled>
  )
}

export default ContactForm

const ContactFormStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    gap: 1rem;


`