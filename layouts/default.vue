<template>
  <div class="container">
    <Background>
      <provet-header>
        <h1 class="n-typescale-l">Sign up</h1>
        <provet-button-group slot="end" variant="spaced">
          <provet-button target="_blank" href="https://violapeter.hu">
            Visit the author website
          </provet-button>
        </provet-button-group>
      </provet-header>
      <main class="main">
        <slot />
      </main>
      <provet-footer>
        <div class="footer">
          NordHealth Technical Assessment
        </div>
      </provet-footer>
    </Background>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

.main {
  flex: 1;
}

.footer {
  color: var(--n-color-text-weaker);
  font-size: var(--n-font-size-s);
  min-width: calc(var(--n-space-xxl) * 2);
  flex: 1;
}
</style>
