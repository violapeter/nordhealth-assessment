import { ref } from 'vue';
import { useRouter } from 'nuxt/app';
import type { NordEvent } from "@provetcloud/web-components/lib/src/common/events";

export function useUserSignup() {
  const router = useRouter();
  const isSubmitting = ref(false);
  const subscribeToNewsletter = ref(false);

  const submitUserData = async (email: string, password: string, validateEmail: () => boolean, validatePassword: () => boolean) => {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!isEmailValid || !isPasswordValid) {
      return false;
    }

    isSubmitting.value = true;

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const userData = {
        email,
        subscribeToNewsletter: subscribeToNewsletter.value
      };

      localStorage.setItem('userData', JSON.stringify(userData));

      await router.push('/success');
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    } finally {
      isSubmitting.value = false;
    }
  };

  const handleSubscribeToNewsletter = (event: NordEvent) => {
    const target = event.target as HTMLInputElement
    subscribeToNewsletter.value = target.checked
  }

  return {
    isSubmitting,
    subscribeToNewsletter,
    handleSubscribeToNewsletter,
    submitUserData
  };
}