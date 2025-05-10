<template>
  <div class="gradient">
    <slot />
  </div>
</template>

<style scoped>
.gradient {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-image:
    linear-gradient(
        242deg,
        rgba(19, 19, 19, 0.04) 0%,
        rgba(19, 19, 19, 0.04) 65%,
        rgba(130, 130, 130, 0.04) 65%,
        rgba(130, 130, 130, 0.04) 100%
    ),
    linear-gradient(
        49deg,
        rgba(193, 193, 193, 0.04) 0%,
        rgba(193, 193, 193, 0.04) 72%,
        rgba(136, 136, 136, 0.04) 72%,
        rgba(136, 136, 136, 0.04) 100%
    ),
    linear-gradient(
        78deg,
        rgba(37, 37, 37, 0.04) 0%,
        rgba(37, 37, 37, 0.04) 90%,
        rgba(40, 40, 40, 0.04) 90%,
        rgba(40, 40, 40, 0.04) 100%
    ),
    linear-gradient(
        310deg,
        rgba(233, 233, 233, 0.04) 0%,
        rgba(233, 233, 233, 0.04) 25%,
        rgba(47, 47, 47, 0.04) 25%,
        rgba(47, 47, 47, 0.04) 100%
    ),
    linear-gradient(
        90deg,
        rgb(10, 179, 203),
        rgb(52, 104, 240)
    );
}
</style>