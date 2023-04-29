<template>
    <div>
        <Header/>
        <main class="main grid">
            <h2 class="main__alias">(oré)</h2>

            <h5 class="main__number main--about">01</h5>
            <h3 class="main__content main--about">I’m a front-end web developer <i>& designer,</i> studying at
                Gobelins Paris, France.
            </h3>

            <h5 class="main__number main--apprenticeship">02</h5>
            <h3 class="main__content main--apprenticeship">Currently looking for a new apprenticeship starting in
                September
                2023.</h3>

            <h5 class="main__number main--document">03</h5>
            <div class="main__content main--document col">
                <a class="link document--resume" href="#">
                    <h3 class="link__name">Resume</h3>
                    <span class="link__arrow">↗</span>
                </a>
                <a class="link document--portfolio" href="#">
                    <h3 class="link__name">Portfolio</h3>
                    <span class="link__arrow">↗</span>
                </a>
            </div>

            <div class="main__title col">
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
.main {
  $self: &;
  position: absolute;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100%;
  grid-template-rows: 0.175fr 0.225fr auto;

  @media screen and (max-width: 900px) {
    grid-template-rows: 0.225fr 0.075fr  0.175fr 0.225fr 0.125fr 0.5fr;
  }

  pointer-events: none;

  &__alias {
    grid-area: 2/1/3/3;

    @media screen and (max-width: 900px) {
      grid-area: 1/1/2/7;
      align-self: end;
      justify-self: end;
    }
  }

  &__number {
    padding: 1px 0;
    justify-self: end;

    @media screen and (max-width: 900px) {
      justify-self: start;
    }

    &#{$self}--about {
      grid-area: 2/2/3/3;

      @media screen and (max-width: 900px) {
        grid-area: 2/1/3/2;
      }
    }

    &#{$self}--apprenticeship {
      grid-area: 2/6/3/7;

      @media screen and (max-width: 900px) {
        grid-area: 3/1/4/2;
      }
    }

    &#{$self}--document {
      grid-area: 3/6/4/7;

      @media screen and (max-width: 900px) {
        grid-area: 4/1/5/2;
      }
    }
  }

  &__content {

    &#{$self}--about {
      max-width: 36ch;
      grid-area: 2/3/3/7;

      @media screen and (max-width: 900px) {
        grid-area: 2/2/3/7;
      }
    }

    &#{$self}--apprenticeship {
      max-width: 26ch;
      grid-area: 2/7/3/10;
      @media screen and (max-width: 900px) {
        grid-area: 3/2/4/7;
      }
    }

    &#{$self}--document {
      grid-area: 3/7/4/10;

      @media screen and (max-width: 900px) {
        grid-area: 4/5/5/7;
      }
    }
  }

  &__title {
    grid-area: 3/1/4/8;
    align-self: end;
    width: fit-content;
    gap: 8px;

    @media screen and (max-width: 900px) {
      grid-area: 6/1/7/7;
      gap: 6px;
    }

    .title {

      &--interactive {
        color: var(--color-neutral-20);
      }

      &--developer {
        gap: 8px;

        @media screen and (max-width: 400px) {
          gap: 6px;
        }
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
        width: 10vw;
        max-width: 164px;
        margin-top: 4px;
        border: 4px solid var(--color-neutral-0);
        border-radius: max(5vw, 5vh);

        @media screen and (min-width: 1600px) {
          border-width: 5px;
        }

        @media screen and (max-width: 900px) {
          width: 24vw;
          max-width: 360px;

          border-width: 5px;
        }

        @media screen and (max-width: 600px) {
          border-width: 4px;
        }

        @media screen and (max-width: 420px) {
          margin-top: 2px;

          border-width: 3px;
        }
      }
    }
  }
}

</style>