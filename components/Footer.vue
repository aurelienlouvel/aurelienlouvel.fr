<template>
    <footer class="footer grid">
        <h5 class="footer__title footer--contact">Contact</h5>
        <div class="footer__links footer--contact col">
            <a class="link" href="mailto:louvel.aurelien.pro@gmail.com"
               target="_blank">(louvel.aurelien.pro@gmail.com)</a>
        </div>

        <h5 class="footer__title footer--socials">Socials</h5>
        <div class="footer__links footer--socials col">
            <a class="link" href="https://bento.me/aurelienlouvel" target="_blank">(Bento)</a>
            <a class="link" href="https://twitter.com/aurelienlouvel" target="_blank">(Twitter)</a>
            <a class="link" href="https://www.linkedin.com/in/aurelienlouvel/" target="_blank">(LinkedIn)</a>
            <a class="link" href="https://github.com/aurelienlouvel" target="_blank">(GitHub)</a>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">

.footer {
  $self: &;
  position: absolute;
  bottom: 0;
  align-items: end;

  pointer-events: none;

  @media screen and (max-width: 1200px) {
    grid-template-rows: repeat(2, auto);
  }

  @media screen and (max-width: 900px) {
    height: 100dvh;
    grid-template-rows: 0.225fr 0.075fr  0.175fr 0.225fr 0.125fr 0.5fr;
  }

  &__title {
    justify-self: end;

    @media screen and (max-width: 1200px) {
      display: none;
    }

    &#{$self}--contact {
      grid-column: 8/9;
    }

    &#{$self}--socials {
      grid-column: 11/12;
    }
  }

  &__links {
    &#{$self}--contact {
      grid-column: 9/11;
      @media screen and (max-width: 1200px) {
        grid-area: 2/7/3/10;
      }

      @media screen and (max-width: 900px) {
        grid-area: 5/1/6/3;
      }
    }

    &#{$self}--socials {
      grid-column: 12/13;

      @media screen and (max-width: 1200px) {
        grid-area: 1/7/2/10;
      }

      @media screen and (max-width: 900px) {
        grid-area: 5/5/6/7;
      }
    }
  }
}

</style>