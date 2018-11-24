import React from 'react';

import { Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';


const FromGroup = () => (
  <div className="form form--horizontal">
    <div className="form__form-group">
      <span className="form__form-group-label">RAW Transaction</span>
      <div className="form__form-group-field">
        <Field
          name="textarea"
          component="textarea"
          type="text"
        />
      </div>
    </div>
    <Button color="danger">Decode</Button>
    <Button color="success" outline>Publish</Button>
    <div className="form__form-group">
      <span className="form__form-group-label">Decode transaction</span>
      <div className="form__form-group-field">
        <Field
          name="textarea"
          component="textarea"
          type="text"
        />
      </div>
    </div>
  </div>
);

export default reduxForm({
  form: 'horizontal_form', // a unique identifier for this form
})(FromGroup);
