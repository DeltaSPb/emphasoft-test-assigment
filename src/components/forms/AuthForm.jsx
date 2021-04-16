import React from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { authValidation as validation } from '../../utils';
import { useLoginMutation } from '../../api/authApi';

const AuthForm = () => {
  const [login, { isLoading }] = useLoginMutation();
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validateOnBlur: true,
    validationSchema: validation,
    onSubmit: (data) => login(data),
  });

  return (
    <Form className="border shadow-lg p-3 bg-white rounded" onSubmit={formik.handleSubmit}>
      <fieldset disabled={isLoading}>
        <Form.Group>
          <Form.Label><b>{t('username')}</b></Form.Label>
          <Form.Control
            name="username"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.username}
            isInvalid={formik.errors.username}
            required
          />
          <Form.Control.Feedback type="invalid">{formik.errors.username}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label><b>{t('password')}</b></Form.Label>
          <Form.Control
            name="password"
            type="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            isInvalid={formik.errors.password}
            required
          />
          <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
        </Form.Group>
        <Button className="d-inline-flex align-items-center" variant="primary" type="submit" disabled={!formik.isValid || isLoading}>
          <Spinner className="mr-1" size="sm" animation="border" variant="light" hidden={!isLoading} />
          {t('buttons.login')}
        </Button>
      </fieldset>
    </Form>
  );
};

export default AuthForm;
