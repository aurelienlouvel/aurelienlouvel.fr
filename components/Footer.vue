<template>
    <footer class="footer grid">
        <p class="footer__title contact">Contact</p>
        <div class="footer__list contact">
            <a class="footer__link" href="mailto:louvel.aurelien.pro@gmail.com">(louvel.aurelien.pro@gmail.com)</a>
        </div>

        <p class="footer__title socials">Socials</p>
        <div class="footer__list socials">
            <a class="footer__link" href="https://bento.me/aurelienlouvel">(Bento)</a>
            <a class="footer__link" href="https://twitter.com/aurelienlouvel">(Twitter)</a>
            <a class="footer__link" href="https://www.linkedin.com/in/aurelienlouvel/">(LinkedIn)</a>
            <a class="footer__link" href="https://github.com/aurelienlouvel">(GitHub)</a>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>

.footer {
  position: absolute;
  bottom: 0;
  align-items: end;

  &__title {
    font-size: var(--font-size-tiny);
    font-weight: var(--font-weight-medium);
    justify-self: end;
    color: var(--color-neutral-20);

    &.contact {
      grid-column: 7/8;
    }

    &.socials {
      grid-column: 10/11;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 4px;

    &.contact {
      grid-column: 8/10;
    }
  }

  &__link {
    font-size: var(--font-size-tiny);
  }
}

</style>