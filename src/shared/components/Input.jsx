import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class Input extends PureComponent {
  static propTypes = {
    ref: PropTypes.func.isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType(
      PropTypes.string,
      PropTypes.number,
    ),
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    name: 'text',
    type: 'text',
    label: 'Your text',
    value: '',
    placeholder: 'Enter text',
  };

  render() {
    const {
      ref, name, type, label, value, placeholder,
    } = this.props;

    return (
      <div className="form__form-group">
        <span className="form__form-group-label">{label}</span>
        <div className="form__form-group-field">
          <input
            name={name}
            type={type}
            ref={ref}
            defaultValue={value}
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  }
}

export default Input;
