<template>
  <CenterCard>
    <form @submit.prevent="handleSubmit">
      <provet-stack gap="m">
        <provet-input
          expand
          id="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          required
          :value="email"
          :error="emailError"
          @input="handleEmailChange"
        ></provet-input>
        <Password
          expand
          id="password"
          label="Password"
          placeholder="Create a password"
          required
          :value="password"
          :error="passwordError"
          @input="handlePasswordChange"
        />
        <provet-checkbox
          :value="subscribeToNewsletter"
          label="I want to receive occasional updates about the product"
          @change="handleSubscribeToNewsletter"
        ></provet-checkbox>
        <provet-stack direction="horizontal" justify-content="end">
          <provet-button
            type="submit"
            variant="primary"
            :loading="isSubmitting"
          >
            Sign up
          </provet-button>
        </provet-stack>
      </provet-stack>
    </form>
  </CenterCard>
</template>

<script setup lang="ts">
const {
  email, 
  password, 
  emailError, 
  passwordError, 
  validateEmail, 
  validatePassword, 
  handleEmailChange, 
  handlePasswordChange 
} = useFormValidation();

const { 
  isSubmitting, 
  subscribeToNewsletter,
  handleSubscribeToNewsletter,
  submitUserData 
} = useUserSignup();

const handleSubmit = async () => {
  await submitUserData(email.value, password.value, validateEmail, validatePassword);
};
</script>
