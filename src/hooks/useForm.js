/* eslint-disable linebreak-style */
import { useState } from 'react';

function useForm(valorInicial) {
  const [values, setValues] = useState(valorInicial);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(infoDigitada) {
    const { value } = infoDigitada.target;
    setValue(
      infoDigitada.target.getAttribute('data'),
      value,
    );
  }

  return {
    handleChange,
    setValues,
    values,
  };
}

export default useForm;
