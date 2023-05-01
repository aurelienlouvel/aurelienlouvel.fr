<template>
    <div>
        <Header/>
        <main ref="main" class="main grid">
            <h2 ref="alias" class="main__alias">(oré)</h2>

            <h5 ref="aboutNumber" class="main__number main--about">01</h5>
            <h3 ref="aboutContent" class="main__content main--about">
                I’m a front-end web developer <i>& designer,</i>
                studying at Gobelins Paris, France.
            </h3>

            <h5 ref="apprenticeshipNumber" class="main__number main--apprenticeship">02</h5>
            <h3 ref="apprenticeshipContent" class="main__content main--apprenticeship">
                Currently looking for a new
                apprenticeship starting in
                September 2023.
            </h3>

            <h5 ref="mediaNumber" class="main__number main--media">03</h5>
            <div class="main__content main--media col">
                <a ref="resumeContentLink" class="link media--resume" href="#">
                    <h3 ref="resumeContentText" class="link__text">Resume</h3>
                    <span ref="resumeContentArrow" class="link__arrow">↗</span>
                </a>
                <a ref="portfolioContentLink" class="link media--portfolio" href="#">
                    <h3 ref="portfolioContentText" class="link__text">Portfolio</h3>
                    <span ref="portfolioContentArrow" class="link__arrow">↗</span>
                </a>
            </div>

            <div class="main__title col">
                <div class="title--interactive row">
                    <h1 ref="titleInteractiveText" class="title__text">Interactive</h1>
                    <span ref="titleInteractiveSymbol" class="title__symbol">✧</span>
                </div>
                <div class="title--developer row">
                    <div class="title__pill">
                    </div>
                    <h1 ref="titleDeveloper" class="title__text">Developer</h1>
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

import gsap from "gsap"

import {onMounted, ref} from "vue"
import SplitType from "split-type"


const main = ref<HTMLElement | null>(null)
const alias = ref<HTMLElement | null>(null)
const aboutNumber = ref<HTMLElement | null>(null)
const aboutContent = ref<HTMLElement | null>(null)
const apprenticeshipNumber = ref<HTMLElement | null>(null)
const apprenticeshipContent = ref<HTMLElement | null>(null)
const mediaNumber = ref<HTMLElement | null>(null)
const resumeContentLink = ref<HTMLElement | null>(null)
const resumeContentText = ref<HTMLElement | null>(null)
const resumeContentArrow = ref<HTMLElement | null>(null)
const portfolioContentLink = ref<HTMLElement | null>(null)
const portfolioContentText = ref<HTMLElement | null>(null)
const portfolioContentArrow = ref<HTMLElement | null>(null)
const titleInteractiveText = ref<HTMLElement | null>(null)
const titleInteractiveSymbol = ref<HTMLElement | null>(null)
const titleDeveloper = ref<HTMLElement | null>(null)
let revealTimeline: gsap.core.Timeline
let context

function splitAlias(alias: HTMLElement | null): void {
    if (!alias) return

    const aliasText = alias.innerText
    const aliasTextArray = aliasText.split("")
    if (aliasTextArray) {
        let aliasLeft = aliasTextArray[0]
        let aliasRight = aliasTextArray.slice(1).join("")

        alias.innerHTML = `<span class="alias__left">${aliasLeft}</span><span class="alias__right">${aliasRight}</span>`
    }
}

function splitLink(link: HTMLElement) {
    let wrapper = link.querySelector(".line__wrapper")

    wrapper?.classList.add("line__wrapper--top")

    const wrapperClone = wrapper?.cloneNode(true) as HTMLElement

    wrapperClone?.classList.add("line__wrapper--bottom")

    wrapper?.parentNode?.insertBefore(wrapperClone, wrapper.nextSibling)
}

function splitIntoLines(element: HTMLElement): void {
    const wrapper = new SplitType(element, {
        types: "lines",
        lineClass: "line__wrapper"
    })
    const inner = new SplitType(wrapper.lines, {
        types: "lines",
        lineClass: "line__inner"
    })
}


onMounted(() => {

    if (main.value) {
        
        splitAlias(alias.value)

        const revealElements = [aboutNumber.value, apprenticeshipNumber.value, mediaNumber.value, aboutContent.value, apprenticeshipContent.value, resumeContentText.value, resumeContentArrow.value, portfolioContentText.value, portfolioContentArrow.value, titleInteractiveText, titleInteractiveSymbol, titleDeveloper.value]

        revealElements.forEach((element) => {
            if (element) {
                splitIntoLines(element)
            }
        })

        const linkElements = [resumeContentText.value, resumeContentArrow.value, portfolioContentText.value, portfolioContentArrow.value]

        linkElements.forEach((element) => {
            if (element) {
                splitLink(element)
            }
        })

        let splitElements = {
            about: {
                number: aboutNumber.value.querySelector(".line__inner"),
                content: aboutContent.value.querySelectorAll(".line__inner")
            },
            apprenticeship: {
                number: apprenticeshipNumber.value.querySelector(".line__inner"),
                content: apprenticeshipContent.value.querySelectorAll(".line__inner")
            },
            media: {
                number: mediaNumber.value.querySelector(".line__inner"),
                resume: [resumeContentText.value.querySelector(".line__wrapper--top .line__inner"), resumeContentArrow.value.querySelector(".line__wrapper--top .line__inner")],
                portfolio: [portfolioContentText.value.querySelector(".line__wrapper--top .line__inner"), portfolioContentArrow.value.querySelector(".line__wrapper--top .line__inner")]
            },
            title: {
                interactive: [titleInteractiveText.value.querySelector(".line__inner"), titleInteractiveSymbol.value.querySelectorAll(".line__inner")],
                developer: titleDeveloper.value.querySelector(".line__inner")
            }
        }

        //ANIMATION

        let revealTimeline = gsap.timeline({})

        revealTimeline.from([splitElements.about.number, splitElements.about.content, splitElements.apprenticeship.number, splitElements.apprenticeship.content, splitElements.media.number, splitElements.media.resume, splitElements.media.portfolio], {
            duration: 1.2,
            yPercent: 200,
            ease: "power4.out",
            skewY: 2,
            stagger: {
                amount: 0.4
            }
        }, 0)


        main.value.onclick = function () {
            revealTimeline.restart()
        }


        //MEDIA LINKS

        const mediaLinks = [resumeContentLink.value, portfolioContentLink.value]

        mediaLinks.forEach((link) => {
            if (link) {

                const elements = {
                    top: {
                        text: link.querySelector(".link__text .line__wrapper--top .line__inner"),
                        arrow: link.querySelector(".link__arrow .line__wrapper--top .line__inner")
                    },
                    bottom: {
                        text: link.querySelector(".link__text .line__wrapper--bottom .line__inner"),
                        arrow: link.querySelector(".link__arrow .line__wrapper--bottom .line__inner")
                    }
                }

                gsap.set([elements.bottom.text, elements.bottom.arrow], {
                    yPercent: 200,
                    skewY: 2
                })

                let textTimeline = gsap.timeline({
                    paused: true,
                    defaults: {
                        duration: .8,
                        ease: "power4.inOut"
                    },
                    onComplete: () => textTimeline.revert()
                })

                textTimeline.to(elements.top.text, {
                    yPercent: -200,
                    skewY: 2
                }, 0).to(elements.bottom.text, {
                    yPercent: 0,
                    skewY: 0
                }, 0)

                let arrowTimeline = gsap.timeline({
                    paused: true,
                    defaults: {
                        duration: .8,
                        ease: "power4.inOut",
                        delay: .06
                    },
                })

                arrowTimeline.to(elements.top.arrow, {
                    yPercent: -200
                }, 0).to(elements.bottom.arrow, {
                    yPercent: 0
                }, 0)

                link.addEventListener("mouseenter", () => {
                    textTimeline.play()
                    arrowTimeline.play()
                })

                link.addEventListener("mouseleave", () => {
                    textTimeline.reverse()
                    arrowTimeline.reverse()
                })
            }
        })


    }
})


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
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

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

    &#{$self}--media {
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

    &#{$self}--media {
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
        margin: 5px 0 10px;
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