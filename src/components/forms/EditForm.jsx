import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { userNameValidation as validation } from '../../utils';

const EditForm = ({ onSubmit, isLoading, initialValues }) => {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues,
    validationSchema: validation,
    onSubmit,
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
            required
          />
          <Form.Control.Feedback type="invalid">{formik.errors.username}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>{t('firstName')}</Form.Label>
          <Form.Control
            name="firstName"
            value={formik.values.firstName}
            type="text"
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>{t('lastName')}</Form.Label>
          <Form.Control
            name="lastName"
            value={formik.values.lastName}
            type="text"
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            id="isActive"
            type="switch"
            value={formik.values.isActive}
            checked={formik.values.isActive}
            label={t('activeUser')}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <input className="btn btn-primary" type="submit" value={t('buttons.confirmEdit')} disabled={!!formik.errors.username} />
      </fieldset>
    </Form>
  );
};

export default EditForm;
