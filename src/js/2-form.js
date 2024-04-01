const form = document.querySelector('.feedback-form');

const emailInput = form.querySelector('input[name="email"]');

const messageInput = form.querySelector('textarea[name="message"]');

const saveFormState = () => {

  const formData = {

    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const fillFormFromLocalStorage = () => {

  const savedFormData = localStorage.getItem('feedback-form-state');

  if (savedFormData) {
    const { email, message } = JSON.parse(savedFormData);
    emailInput.value = email;
    messageInput.value = message;
  }
};

form.addEventListener('input', saveFormState);

fillFormFromLocalStorage();

form.addEventListener('submit', event => {

  event.preventDefault();
  

  if (emailInput.value.trim() !== '' && messageInput.value.trim() !== '') {

    console.log({

      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    });
    
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
  }
});
