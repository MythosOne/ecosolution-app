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
    fullName: Yup.string().required('Required').min(2, 'Please enter fullname'),
    email: Yup.string().required('Required').email('Wrong Email'),
    phone: Yup.number().positive().required('Required'),
    description: Yup.string().max(200),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      description: '',
    },

    onSubmit: values => {
      setContact([...contact, { id: nanoid(), values }]);
      formik.resetForm({});
    },
    validationSchema: ContactUsSchema,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label>
        * Full name:
        <Input
          // type="text"
          name="fullName"
          onChange={formik.handleChange}
          value={formik.values.name}
          onError={formik.errors.fullName && formik.touched.fullName}
        />
        {formik.errors.fullName && formik.touched.fullName && (
          <ErrorMessage>Wrong Fullname</ErrorMessage>
        )}
      </Label>
      <Label>
        * E-mail:
        <Input
          // type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onError={formik.errors.email && formik.touched.email}
        />
        {formik.errors.email && formik.touched.email && (
          <ErrorMessage>Wrong Email</ErrorMessage>
        )}
      </Label>
      <Label>
        * Phone:
        <Input
          // type="phone"
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
          onError={formik.errors.phone && formik.touched.phone}
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
          // onClick={() => {
          //   console.log('SendButton clicked');
          // }}
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
