import React, { useState } from 'react';
import { useFormik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import {
  Form,
  Label,
  Input,
  ErrorMessage,
  InputMessage,
  BlockBtn,
  SendBtn,
  ButtonImg,
} from './ContactForm.styled';
import { ArrowRightImg } from 'icons/IconsComponent';

export const ContactForm = () => {
  const [contact, setContact] = useState([]);

  const ContactUsSchema = Yup.object().shape({
    name: Yup.string().required('Required').min(2),
    email: Yup.string().required('Required').email(),
    phone: Yup.number().positive().required('Required'),
    description: Yup.string().max(200),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      description: '',
    },

    onSubmit: values => {
      setContact([...contact, { id: nanoid(), values }]);
      formik.resetForm();
    },
    validationSchema: ContactUsSchema,
    
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label>
        * Full name:
        <Input
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.errors.name && formik.touched.name}
        />
        {formik.errors.name && formik.touched.name && (
          <ErrorMessage>Wrong name</ErrorMessage>
        )}
      </Label>
      <Label>
        * E-mail:
        <Input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email && formik.touched.email}
        />
        {formik.errors.email && formik.touched.email && (
          <ErrorMessage>Wrong Email</ErrorMessage>
        )}
      </Label>
      <Label>
        * Phone:
        <Input
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
          error={formik.errors.phone && formik.touched.phone}
        />
        {formik.errors.phone && formik.touched.phone && (
          <ErrorMessage>Wrong Phone</ErrorMessage>
        )}
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
