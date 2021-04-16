import React from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { passConfirmValidation as validation } from '../../utils';

const RegistrationForm = ({ onSubmit, isLoading }) => {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
      first_name: '',
      last_name: '',
      is_active: true,
    },
    validationSchema: validation,
    onSubmit: ({ confirmPassword, ...data }) => onSubmit(data),
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <fieldset disabled={isLoading}>
        <Form.Group>
          <Form.Label>{t('username')}</Form.Label>
          <Form.Control
            name="username"
            value={formik.values.username}
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.errors.username}
            isValid={formik.touched.username && !formik.errors.username}
            required
          />
          <Form.Control.Feedback type="invalid">{formik.errors.username}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>{t('password')}</Form.Label>
          <Form.Control
            autoComplete="new-password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.errors.password}
            isValid={formik.touched.password && !formik.errors.password}
            required
          />
          <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>{t('confirmPassword')}</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.errors.confirmPassword}
            isValid={formik.touched.confirmPassword && !formik.errors.confirmPassword}
            required
          />
          <Form.Control.Feedback type="invalid">{formik.errors.confirmPassword}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>{t('firstName')}</Form.Label>
          <Form.Control
            name="first_name"
            value={formik.values.first_name}
            type="text"
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>{t('lastName')}</Form.Label>
          <Form.Control
            name="last_name"
            value={formik.values.last_name}
            type="text"
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            id="is_active"
            type="switch"
            value={formik.values.name}
            defaultChecked
            label={t('activeUser')}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Button className="d-inline-flex align-items-center" variant="primary" type="submit" disabled={!formik.isValid || isLoading}>
          <Spinner className="mr-1" size="sm" animation="border" variant="light" hidden={!isLoading} />
          {t('buttons.confirmCreate')}
        </Button>
      </fieldset>
    </Form>
  );
};

export default RegistrationForm;
