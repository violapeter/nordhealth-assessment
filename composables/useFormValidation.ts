import type { NordEvent } from "@provetcloud/web-components/lib/src/common/events";
import { ref } from 'vue';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function useFormValidation() {
  const email = ref('');
  const password = ref('');
  const emailError = ref('');
  const passwordError = ref('');

  const validateEmail = () => {
    if (!email.value) {
      emailError.value = 'Email is required';
    } else if (!EMAIL_REGEX.test(email.value)) {
      emailError.value = 'Please enter a valid email address';
    } else {
      emailError.value = '';
    }
    return emailError.value === '';
  };

  const handleEmailChange = (event: NordEvent) => {
    const target = event.target as HTMLInputElement;
    email.value = target.value;
    validateEmail();
  };

  const validatePassword = () => {
    if (!password.value) {
      passwordError.value = 'Password is required';
    } else if (password.value.length < 8) {
      passwordError.value = 'Password must be at least 8 characters long';
    } else {
      passwordError.value = '';
    }
    return passwordError.value === '';
  };

  const handlePasswordChange = (event: NordEvent) => {
    const target = event.target as HTMLInputElement;
    password.value = target.value;
    validatePassword();
  };

  return {
    email,
    password,
    emailError,
    passwordError,
    validateEmail,
    validatePassword,
    handleEmailChange,
    handlePasswordChange
  };
}