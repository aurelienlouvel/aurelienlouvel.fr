<template>
    <header class="header grid">
        <a class="header__logo" href="https://aurelienlouvel.fr">
            <svg fill="none" height="18" viewBox="0 0 14 18" width="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.52423 1.16855C3.89575 0.452385 4.65519 0 5.48592 0H11.8068C13.0181 0 14 0.946435 14 2.11392V15.8823C14 18.0062 11.1148 18.8037 9.9469 17.0027L6.41962 11.5632C6.01883 10.9451 5.31597 10.5696 4.55976 10.5696H2.19607C0.565654 10.5696 -0.494767 8.91586 0.234376 7.51031L3.52423 1.16855Z"
                      fill="#040810"/>
            </svg>
        </a>
        <p class="header__label">©2023</p>
    </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>

.header {
  position: absolute;
  top: 0;

  &__logo {
    width: fit-content;
  }

  &__label {
    font-style: italic;
    grid-column: 12;
    justify-self: end;
  }
}

</style>