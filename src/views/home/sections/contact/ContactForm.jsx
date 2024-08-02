import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, Button, Form } from 'antd'

const { TextArea } = Input

const ContactForm = () => {
  const [form] = Form.useForm()

  const handleSubmit = (values) => {
    console.log(values)
    // Here you would typically send the form data to your backend
    form.resetFields()
  }

  return (
    <ContactFormStyled>
      <Form
        form={form}
        name="contact"
        onFinish={handleSubmit}
        layout="vertical"
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' }
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="message"
          rules={[{ required: true, message: 'Please input your message!' }]}
        >
          <TextArea
            placeholder="Message"
            autoSize={{ minRows: 6, maxRows: 8 }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </ContactFormStyled>
  )
}

export default ContactForm

const ContactFormStyled = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  .ant-form-item {
    margin-bottom: 1rem;
  }

  .ant-input {
    background-color: ${pr => pr.theme.colors.black};
    color: ${pr => pr.theme.colors.offWhite};
    border-color: ${pr => pr.theme.colors.primary};
  }

  .ant-btn-primary {
    background-color: ${pr => pr.theme.colors.primary};
    border-color: ${pr => pr.theme.colors.primary};
  }

  @media ${pr => pr.theme.devices.mobile} {
    width: 90%;
  }
`