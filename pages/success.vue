<script setup lang="ts">
const router = useRouter();
const userEmail = ref('');
const isSubscribed = ref(false);

onMounted(() => {
  try {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      userEmail.value = userData.email || '';
      isSubscribed.value = userData.subscribeToNewsletter || false;
    }
  } catch (error) {
    console.error('Error retrieving user data:', error);
  }
});

const goToHome = () => {
  router.push('/');
};
</script>

<template>
  <CenterCard>
    <provet-stack align-items="center" justify-content="center">
      <provet-icon name="interface-checked-circle" size="xl" color="var(--n-color-status-success)"></provet-icon>

      <h1>Success!</h1>
      <span>Thank you for signing up! Your account has been created.</span>

      <div v-if="userEmail">
        <span>
          We've sent a confirmation email to <strong>{{ userEmail }}</strong>
        </span>
      </div>

      <div v-if="isSubscribed">

        <provet-icon
          name="interface-checked-small"
          color="var(--n-color-text-weaker)"
        ></provet-icon>
        <span>
          You'll receive occasional updates about our product.
        </span>
      </div>

      <provet-button variant="primary" @click="goToHome">
        Return to Home
      </provet-button>
    </provet-stack>
  </CenterCard>
</template>

<style scoped>

</style>