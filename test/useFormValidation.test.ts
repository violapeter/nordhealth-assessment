import { describe, it, expect, beforeEach } from 'vitest';
import { useFormValidation } from '~/composables/useFormValidation';

const createMockEvent = (value: string) => ({
  target: {
    value
  }
});

describe('useFormValidation', () => {
  let formValidation: ReturnType<typeof useFormValidation>;

  beforeEach(() => {
    formValidation = useFormValidation();
  });

  describe('email validation', () => {
    it('should set error when email is empty', () => {
      formValidation.email.value = '';
      const isValid = formValidation.validateEmail();
      
      expect(isValid).toBe(false);
      expect(formValidation.emailError.value).toBe('Email is required');
    });

    it('should set error when email format is invalid', () => {
      formValidation.email.value = 'invalid-email';
      const isValid = formValidation.validateEmail();
      
      expect(isValid).toBe(false);
      expect(formValidation.emailError.value).toBe('Please enter a valid email address');
    });

    it('should clear error when email is valid', () => {
      formValidation.email.value = 'test@example.com';
      const isValid = formValidation.validateEmail();
      
      expect(isValid).toBe(true);
      expect(formValidation.emailError.value).toBe('');
    });

    it('should update email value and validate on handleEmailChange', () => {
      const event = createMockEvent('test@example.com');
      formValidation.handleEmailChange(event as any);
      
      expect(formValidation.email.value).toBe('test@example.com');
      expect(formValidation.emailError.value).toBe('');
    });
  });

  describe('password validation', () => {
    it('should set error when password is empty', () => {
      formValidation.password.value = '';
      const isValid = formValidation.validatePassword();
      
      expect(isValid).toBe(false);
      expect(formValidation.passwordError.value).toBe('Password is required');
    });

    it('should set error when password is too short', () => {
      formValidation.password.value = '1234567';
      const isValid = formValidation.validatePassword();
      
      expect(isValid).toBe(false);
      expect(formValidation.passwordError.value).toBe('Password must be at least 8 characters long');
    });

    it('should clear error when password is valid', () => {
      formValidation.password.value = '12345678';
      const isValid = formValidation.validatePassword();
      
      expect(isValid).toBe(true);
      expect(formValidation.passwordError.value).toBe('');
    });

    it('should update password value and validate on handlePasswordChange', () => {
      const event = createMockEvent('12345678');
      formValidation.handlePasswordChange(event as any);
      
      expect(formValidation.password.value).toBe('12345678');
      expect(formValidation.passwordError.value).toBe('');
    });
  });
});