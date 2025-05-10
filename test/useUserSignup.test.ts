import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { useUserSignup } from '~/composables/useUserSignup';
import type { Mock } from 'vitest';
import { useRouter } from 'nuxt/app';

const pushMock = vi.fn();

vi.mock('nuxt/app', () => ({
  useRouter: () => ({
    push: pushMock
  })
}));

describe('useUserSignup', () => {
  let userSignup: ReturnType<typeof useUserSignup>;
  let mockValidateEmail: Mock;
  let mockValidatePassword: Mock;
  let localStorageSpy: any;

  beforeEach(() => {
    mockValidateEmail = vi.fn().mockReturnValue(true);
    mockValidatePassword = vi.fn().mockReturnValue(true);

    localStorageSpy = vi.spyOn(Storage.prototype, 'setItem');

    userSignup = useUserSignup();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should set isSubmitting to true during submission', async () => {
    const submissionPromise = userSignup.submitUserData('test@example.com', 'password123', mockValidateEmail, mockValidatePassword);

    expect(userSignup.isSubmitting.value).toBe(true);

    await submissionPromise;

    expect(userSignup.isSubmitting.value).toBe(false);
  });

  it('should validate email and password before submission', async () => {
    await userSignup.submitUserData('test@example.com', 'password123', mockValidateEmail, mockValidatePassword);

    expect(mockValidateEmail).toHaveBeenCalled();
    expect(mockValidatePassword).toHaveBeenCalled();
  });

  it('should not proceed with submission if validation fails', async () => {
    mockValidateEmail.mockReturnValue(false);

    const result = await userSignup.submitUserData('invalid-email', 'password123', mockValidateEmail, mockValidatePassword);

    expect(result).toBe(false);
    expect(localStorageSpy).not.toHaveBeenCalled();
    expect(pushMock).not.toHaveBeenCalled();
  });

  it('should store user data in localStorage and navigate to success page on successful submission', async () => {
    const email = 'test@example.com';
    userSignup.handleSubscribeToNewsletter({ target: { checked: true } } as any);
    const result = await userSignup.submitUserData(email, 'password123', mockValidateEmail, mockValidatePassword);

    expect(result).toBe(true);

    expect(localStorageSpy).toHaveBeenCalledWith(
      'userData',
      JSON.stringify({
        email,
        subscribeToNewsletter: userSignup.subscribeToNewsletter.value
      })
    );

    expect(pushMock).toHaveBeenCalledWith('/success');
  });

  it('should handle errors during submission', async () => {
    const error = new Error('Submission failed');
    localStorageSpy.mockImplementation(() => {
      throw error;
    });
    
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    
    const result = await userSignup.submitUserData('test@example.com', 'password123', mockValidateEmail, mockValidatePassword);
    
    expect(result).toBe(false);
    expect(consoleSpy).toHaveBeenCalledWith('Signup error:', error);
    expect(userSignup.isSubmitting.value).toBe(false);
  });
});