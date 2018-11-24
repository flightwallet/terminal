import React from 'react';
import QrcodeIcon from 'mdi-react/QrcodeIcon';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';


const FromGroup = props => (
  <div className="form form--horizontal">
    <button onClick={() => props.dispatch(('textarea', 'asdasd'))}>
      asdas
    </button>
    <div className="form__form-group">
      <span className="form__form-group-label">RAW Transaction</span>
      <div className="form__form-group-field">
        <Field
          name="defaultInput"
          component="input"
          type="text"
          placeholder="0100000001d2cbf123aaf43915f890a6786a50c95cf16666ce4e86e3"
        />
        <button
          className={`form__form-group-button${true ? ' active' : ''}`}
          onClick={props.onClick}
        ><QrcodeIcon />
        </button>
      </div>
    </div>
    <div className="form__form-group">
      <span className="form__form-group-label">Hex Transaction</span>
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

FromGroup.propTypes = {
  onClick: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};


export default reduxForm({
  form: 'horizontal_form', // a unique identifier for this form
})(FromGroup);
