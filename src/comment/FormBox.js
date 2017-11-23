import React from 'react'
import FormTitle from './FormTitle'
import FormContent from './FormContent'

class FormBox extends React.Component {
  render() {
    return (
      <div>
        <FormTitle />
        <FormContent />
      </div>
    )
  }
}

export default FormBox
