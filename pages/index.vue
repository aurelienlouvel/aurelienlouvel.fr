<template>
    <div>
        <Header/>
        <main class="home grid">
            <h2 class="home__alias">(oré)</h2>

            <h5 class="home__number home--about">01</h5>
            <h3 class="home__content home--about">I’m a front-end web developer <i>& designer,</i><br>studying at
                Gobelins Paris, France.
            </h3>

            <h5 class="home__number home--apprenticeship">02</h5>
            <h3 class="home__content home--apprenticeship">Currently looking for a new<br>apprenticeship starting in<br>September
                2023.</h3>

            <h5 class="home__number home--document">03</h5>
            <div class="home__content home--document col">
                <a class="link document--resume" href="#">
                    <h3 class="link__name">Resume</h3>
                    <span class="link__arrow">↗</span>
                </a>
                <a class="link document--portfolio" href="#">
                    <h3 class="link__name">Portfolio</h3>
                    <span class="link__arrow">↗</span>
                </a>
            </div>

            <div class="home__title">
                <div class="title--interactive row">
                    <h1 class="title__text">Interactive</h1>
                    <div class="title__symbol">
                        <span>✧</span>
                        <span>✦</span>
                    </div>
                </div>
                <div class="title--developer row">
                    <div class="title__pill">
                    </div>
                    <h1 class="title__text">Developer</h1>
                </div>
            </div>
        </main>
        <Footer/>
        <Background/>
    </div>
</template>

<script lang="ts" setup>
import Header from "~/components/Header.vue"
import Footer from "~/components/Footer.vue"
import Background from "~/components/Background.vue"
</script>

<style lang="scss">
.home {
  $self: &;
  position: absolute;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100%;
  grid-template-rows: 0.175fr 0.225fr auto;

  pointer-events: none;

  &__alias {
    grid-area: 2/1/3/3;
  }

  &__number {
    padding: 1px 0;
    justify-self: end;

    &#{$self}--about {
      grid-area: 2/2/3/3;
    }

    &#{$self}--apprenticeship {
      grid-area: 2/6/3/7;
    }

    &#{$self}--document {
      grid-area: 3/6/4/7;
    }
  }

  &__content {

    &#{$self}--about {
      grid-area: 2/3/3/6;
    }

    &#{$self}--apprenticeship {
      grid-area: 2/7/3/10;
    }

    &#{$self}--document {
      grid-area: 3/7/4/10;
    }
  }

  &__title {
    grid-area: 3/1/4/8;
    align-self: end;
    width: fit-content;

    .title {

      &--interactive {
        color: var(--color-neutral-20);
      }

      &--developer {
        gap: 14px;
      }

      &__symbol {
        position: relative;
        height: fit-content;

        span {
          position: absolute;
          top: 0;
          left: 0;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1;

          &:nth-child(2) {
            opacity: 0
          }
        }
      }

      &__pill {
        border: 4px solid var(--color-neutral-0);
        border-radius: max(5vw, 5vh);
        width: 24vw;
        max-width: 164px;
        margin: 4px 0 12px;
      }
    }
  }
}

</style>