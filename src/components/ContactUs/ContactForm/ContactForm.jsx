import React, { useState } from 'react';
import { useFormik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import {
  Form,
  Label,
  Input,
  InputMessage,
  BlockBtn,
  SendBtn,
  ButtonImg,
} from './ContactForm.styled';
import { ArrowRightImg } from 'icons/IconsComponent';

export const ContactForm = () => {
  const [contact, setContact] = useState([]);
    // console.log(contact)

  const ContactUsSchema = Yup.object().shape({
    fullName: Yup.string().required('Required').min(2, 'Wrong Fullname'),
    email: Yup.string().required('Required').email('Wrong Email'),
    phone: Yup.number().positive().required('Required'),
    description: Yup.string().required('Required').max(200),
  });

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
    validationSchema: ContactUsSchema,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label>
        * Full name:
        <Input
          type="text"
          name="fullName"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </Label>
      <Label>
        * E-mail:
        <Input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </Label>
      <Label>
        * Phone:
        <Input
          type="phone"
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
      </Label>
      <Label>
        * Message:
        <InputMessage
          name="description"
          maxLength={200}
          placeholder="Your message"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
      </Label>
      <BlockBtn>
        <SendBtn
          type="submit"
          onClick={() => {
            console.log('SendButton clicked');
          }}
        >
          Send
          <ButtonImg>
            <ArrowRightImg width={'16'} height={'16'} />
          </ButtonImg>
        </SendBtn>
      </BlockBtn>
    </Form>
  );
};
