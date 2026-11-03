// Client-side check using the browser's built-in constraint validation,
// with friendlier messages. Returns { fieldName: message } for invalid fields.
const messages = {
  valueMissing: { email: 'Enter your email address.', name: 'Enter your name.', message: 'Enter a message.' },
  typeMismatch: { email: 'Enter a valid email address.' },
};

export function validateForm(form) {
  const errors = {};
  for (const el of form.elements) {
    if (!el.name || !el.willValidate || el.checkValidity()) continue;
    const kind = el.validity.valueMissing ? 'valueMissing' : 'typeMismatch';
    errors[el.name] = messages[kind]?.[el.name] ?? el.validationMessage;
  }
  return errors;
}
