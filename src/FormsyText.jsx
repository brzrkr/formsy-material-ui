import React from 'react';
import keycode from 'keycode';
import Formsy from 'formsy-react';
import TextField from 'material-ui/lib/text-field';
import { _setMuiComponentAndMaybeFocus } from './utils';

let FormsyText = React.createClass({
  mixins: [ Formsy.Mixin ],

  propTypes: {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func
  },

  handleBlur: function handleBlur(event) {
    this.setValue(event.currentTarget.value);
    if (this.props.onBlur) this.props.onBlur(event);
  },

  handleKeyDown: function handleKeyDown(event) {
    if (keycode(event) === 'enter') this.handleEnterKeyDown(event);
    if (this.props.onKeyDown) this.props.onKeyDown(event, event.currentTarget.value);
  },

  handleEnterKeyDown: function handleEnterKeyDown(event) {
    this.setValue(event.currentTarget.value);
    if (this.props.onEnterKeyDown) this.props.onEnterKeyDown(event, event.currentTarget.value);
  },

  _setMuiComponentAndMaybeFocus: _setMuiComponentAndMaybeFocus,

  render: function () {
    return (
      <TextField
        {...this.props}
        ref={this._setMuiComponentAndMaybeFocus}
        defaultValue={this.props.value}
        onBlur={this.handleBlur}
        onFocus={this.props.onFocus}
        onKeyDown={this.handleKeyDown}
        errorText={this.getErrorMessage()}
      />
    );
  }
});

module.exports = FormsyText;
