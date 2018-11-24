import React from 'react';
import PropTypes from 'prop-types';
import QrcodeIcon from 'mdi-react/QrcodeIcon';


const FromGroup = ({ onClick, data }) => (
  <div className="form form--horizontal">
    <div className="form__form-group">
      <span className="form__form-group-label">RAW Transaction</span>
      <div className="form__form-group-field">
        <input
          name="textarea"
          type="text"
          value={data}
        />
        <button
          className={`form__form-group-button${true ? ' active' : ''}`}
          onClick={onClick}
        ><QrcodeIcon />
        </button>
      </div>
    </div>
    <div className="form__form-group">
      <span className="form__form-group-label">Hex transaction</span>
      <div className="form__form-group-field">
        <textarea
          name="textarea"
          type="text"
          value={data}
        />
      </div>
    </div>
  </div>
);

FromGroup.propTypes = {
  onClick: PropTypes.func.isRequired,
  data: PropTypes.string,
};

FromGroup.defaultProps = {
  data: '',
};

export default FromGroup;
