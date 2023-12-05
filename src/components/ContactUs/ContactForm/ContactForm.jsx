import React, { useState } from 'react';
import { useFormik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import {
  Form,
  Label,
  Input,
  InputDescription,
  SendBtn,
  ButtonImg,
} from './ContactForm.styled';
import { ArrowRightImg } from '../../../icons/IconsComponent';

export const ContactForm = () => {
  const [contact, setContact] = useState([]);

  const SignupSchema = Yup.object().shape({
    fullName: Yup.string().required('Required').min(2, 'Wrong Fullname'),
    email: Yup.string().required('Required').email('Wrong Email'),
    phone: Yup.number().positive().required('Required'),
    description: Yup.string().required('Required').max(200)
  })

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      description: '',
    },
    onSubmit: values => {
      setContact({ id: nanoid(), ...values });
      formik.resetForm();
    },
    validationSchema: { SignupSchema },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label>Full name:</Label>
      <Input
        type="text"
        name="fullName"
        onChange={formik.handleChange}
        value={formik.values.name}
      ></Input>
      <Label>E-mail:</Label>
      <Input
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      ></Input>
      <Label>Phone:</Label>
      <Input
        type="phone"
        name="phone"
        onChange={formik.handleChange}
        value={formik.values.phone}
      ></Input>
      <Label>Description:</Label>
      <InputDescription
        name="description"
        editable
        multiline
        placeholder="Your message"
        onChange={formik.handleChange}
        value={formik.values.description}
      ></InputDescription>
      <SendBtn
        type="submit"
        onClick={() => {
          console.log('SendButton clicked');
        }}
      >
        Send
        <ButtonImg>
          <ArrowRightImg />
        </ButtonImg>
      </SendBtn>
    </Form>
  );
};
