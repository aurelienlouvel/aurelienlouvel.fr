<template>
    <div>
        <header ref="header" class="header grid">
            <a ref="logo" class="header__logo" href="https://aurelienlouvel.fr">
                <svg fill="none" height="18" viewBox="0 0 14 18" width="14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.52423 1.16855C3.89575 0.452385 4.65519 0 5.48592 0H11.8068C13.0181 0 14 0.946435 14 2.11392V15.8823C14 18.0062 11.1148 18.8037 9.9469 17.0027L6.41962 11.5632C6.01883 10.9451 5.31597 10.5696 4.55976 10.5696H2.19607C0.565654 10.5696 -0.494767 8.91586 0.234376 7.51031L3.52423 1.16855Z"
                          fill="#040810"/>
                </svg>
            </a>
            <h4 ref="label" class="header__label">©2023</h4>
        </header>
        <main ref="main" class="main grid">
            <h2 ref="alias" class="main__alias">(oré)</h2>

            <h5 ref="aboutTitle" class="main__number main--about">01</h5>
            <h3 ref="aboutContent" class="main__content main--about">
                I’m a front-end web developer <i>& designer,</i>
                studying at Gobelins Paris, France.
            </h3>

            <h5 ref="apprenticeshipTitle" class="main__number main--apprenticeship">02</h5>
            <h3 ref="apprenticeshipContent" class="main__content main--apprenticeship">
                Currently looking for a new
                apprenticeship starting in
                September 2023.
            </h3>

            <h5 ref="mediaTitle" class="main__number main--media">03</h5>
            <div class="main__content main--media col">
                <a ref="resumeContentLink" class="link media--resume"
                   href="https://aurelienlouvel.fr/medias/CV_AURELIEN_LOUVEL_2023.pdf" target="_blank">
                    <h3 ref="resumeContentText" class="link__text">Resume</h3>
                    <span ref="resumeContentArrow" class="link__arrow">↗</span>
                </a>
                <a ref="portfolioContentLink" class="link media--portfolio"
                   href="https://aurelienlouvel.fr/medias/DOSSIER_TECHNIQUE_AURELIEN_LOUVEL_2023.pdf" target="_blank">
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
                    <div ref="pill" class="title__pill">
                        <canvas id="ballCanvas" ref="ball"></canvas>
                        <h6 ref="counter" class="title__counter">000</h6>
                    </div>
                    <h1 ref="titleDeveloper" class="title__text">Developer</h1>
                </div>
            </div>
        </main>
        <footer ref="footer" class="footer grid">
            <h5 ref="footerContactTitle" class="footer__title footer--contact">Contact</h5>
            <div ref="footerContactLinks" class="footer__links footer--contact col">
                <a class="link" href="mailto:louvel.aurelien.pro@gmail.com"
                   target="_blank">(louvel.aurelien.pro@gmail.com)</a>
            </div>
            <h5 ref="footerSocialsTitle" class="footer__title footer--socials">Socials</h5>
            <div ref="footerSocialsLinks" class="footer__links footer--socials col">
                <a class="link" href="https://bento.me/aurelienlouvel" target="_blank">(Bento)</a>
                <a class="link" href="https://twitter.com/aurelienlouvel" target="_blank">(Twitter)</a>
                <a class="link" href="https://www.linkedin.com/in/aurelienlouvel/" target="_blank">(LinkedIn)</a>
                <a class="link" href="https://github.com/aurelienlouvel" target="_blank">(GitHub)</a>
            </div>
        </footer>
        <Background/>
    </div>
</template>

<script lang="ts" setup>
import Background from "~/components/Background.vue"

import gsap from "gsap"

import {onMounted, ref} from "vue"
import {splitAlias, splitIntoLines, splitClone} from "~/utils/splitElements"
import {
    Engine,
    Render,
    Runner,
    Bodies,
    Composite, Body, Common, Svg
} from "matter-js"
import "pathseg"
import decomp from "poly-decomp"


const header = ref<HTMLElement | null>(null)
const main = ref<HTMLElement | null>(null)
const footer = ref<HTMLElement | null>(null)

const pill = ref<HTMLElement | null>(null)
const ball = ref<HTMLElement | null>(null)
const counter = ref<HTMLElement | null>(null)
const logo = ref<HTMLElement | null>(null)
const label = ref<HTMLElement | null>(null)
const alias = ref<HTMLElement | null>(null)
const aboutTitle = ref<HTMLElement | null>(null)
const aboutContent = ref<HTMLElement | null>(null)
const apprenticeshipTitle = ref<HTMLElement | null>(null)
const apprenticeshipContent = ref<HTMLElement | null>(null)
const mediaTitle = ref<HTMLElement | null>(null)
const resumeContentLink = ref<HTMLElement | null>(null)
const resumeContentText = ref<HTMLElement | null>(null)
const resumeContentArrow = ref<HTMLElement | null>(null)
const portfolioContentLink = ref<HTMLElement | null>(null)
const portfolioContentText = ref<HTMLElement | null>(null)
const portfolioContentArrow = ref<HTMLElement | null>(null)
const titleInteractiveText = ref<HTMLElement | null>(null)
const titleInteractiveSymbol = ref<HTMLElement | null>(null)
const titleDeveloper = ref<HTMLElement | null>(null)
const footerContactTitle = ref<HTMLElement | null>(null)
const footerContactLinks = ref<HTMLElement | null>(null)
const footerSocialsTitle = ref<HTMLElement | null>(null)
const footerSocialsLinks = ref<HTMLElement | null>(null)


onMounted(() => {

    //SPLIT ELEMENTS

    splitAlias(alias.value as HTMLElement)

    const mainElements = [counter.value, label.value, alias.value, aboutTitle.value, apprenticeshipTitle.value, mediaTitle.value, aboutContent.value, apprenticeshipContent.value, resumeContentText.value, resumeContentArrow.value, portfolioContentText.value, portfolioContentArrow.value, titleInteractiveText.value, titleInteractiveSymbol.value, titleDeveloper.value]

    mainElements.forEach((element) => {
        if (element) {
            splitIntoLines(element as HTMLElement)
        }
    })

    const mainLinks = [resumeContentText.value, resumeContentArrow.value, portfolioContentText.value, portfolioContentArrow.value]

    mainLinks.forEach((element) => {
        if (element) {
            splitClone(element)
        }
    })

    const footerElements = [footerContactTitle.value, footerContactLinks.value?.querySelectorAll(".link"), footerSocialsTitle.value, footerSocialsLinks.value?.querySelectorAll(".link")]

    footerElements.forEach((element) => {
        if (element) {
            splitIntoLines(element as HTMLElement)
        }
    })

    const footerLinks = [...footerContactLinks.value?.querySelectorAll(".link"), ...footerSocialsLinks.value?.querySelectorAll(".link")]

    footerLinks.forEach((element) => {
        if (element) {
            splitClone(element)
        }
    })

    let splitElements = {
        counter: counter.value?.querySelector(".line__inner"),
        logo: logo.value,
        label: label.value?.querySelector(".line__inner"),
        alias: {
            left: alias.value?.querySelector(".alias__left"),
            content: alias.value?.querySelector(".alias__content"),
            right: alias.value?.querySelector(".alias__right")
        },
        about: {
            title: aboutTitle.value?.querySelector(".line__inner"),
            content: aboutContent.value?.querySelectorAll(".line__inner")
        },
        apprenticeship: {
            title: apprenticeshipTitle.value?.querySelector(".line__inner"),
            content: apprenticeshipContent.value?.querySelectorAll(".line__inner")
        },
        media: {
            title: mediaTitle.value?.querySelector(".line__inner"),
            resume: [resumeContentText.value?.querySelector(".line__wrapper--top .line__inner"), resumeContentArrow.value?.querySelector(".line__wrapper--top .line__inner")],
            portfolio: [portfolioContentText.value?.querySelector(".line__wrapper--top .line__inner"), portfolioContentArrow.value?.querySelector(".line__wrapper--top .line__inner")]
        },
        title: {
            interactiveText: titleInteractiveText.value?.querySelector(".line__inner"),
            interactiveSymbol: titleInteractiveSymbol.value?.querySelectorAll(".line__inner"),
            developer: titleDeveloper.value?.querySelector(".line__inner")
        },
        contact: {
            title: footerContactTitle.value?.querySelector(".line__inner"),
            links: footerContactLinks.value?.querySelectorAll(".line__wrapper--top .line__inner")
        },
        socials: {
            title: footerSocialsTitle.value?.querySelector(".line__inner"),
            links: footerSocialsLinks.value?.querySelectorAll(".line__wrapper--top .line__inner")
        }
    }

    gsap.set(splitElements.alias.right, {
        x: -splitElements.alias.content.offsetWidth
    })


    //BALL

    let width = pill.value?.clientWidth as number
    let height = pill.value?.clientHeight as number

    Common.setDecomp(decomp)

    let engine = Engine.create()
    engine.timing.timeScale = 0.14
    let render = Render.create({
        canvas: ball.value,
        engine: engine,
        options: {
            width: width,
            height: height,
            wireframes: false,
            background: "transparent",
            pixelRatio: "auto"
        }
    })

    let borderWidth = Number(window.getComputedStyle(pill.value).getPropertyValue("border-width").replace("px", ""))


    function createBall(width: number, height: number) {
        let body = Bodies.circle(
            borderWidth + height / 2,
            height - (borderWidth + 6),
            height / 4,
            {
                restitution: 1,
                friction: 0,
                frictionAir: 0,
                frictionStatic: 0,
                inertia: Infinity,
                render: {
                    fillStyle: "#040810"
                }
            })

        Body.setStatic(body, true)
        return body
    }

    function createBorders(width: number, height: number) {
        let borderOptions = {
            isStatic: true,
            restitution: 1,
            friction: 0,
            frictionAir: 0,
            frictionStatic: 0,
            inertia: Infinity,
            render: {
                fillStyle: "transparent"
            }
        }

        let borderThickness = 10
        let margin = (borderThickness - borderWidth)

        let leftPath = document.createElementNS("http://www.w3.org/2000/svg", "path")
        leftPath.setAttribute("d", `M 0 0, H${height}, A1 1, 90, 0 0, ${height} ${height} H0 V0`)

        let rightPath = document.createElementNS("http://www.w3.org/2000/svg", "path")
        rightPath.setAttribute("d", `M 0 0, H${height}, V${height} H0 A1 1, 90, 0 0, 0 0`)

        let leftArcVertices = Svg.pathToVertices(leftPath, 2)
        let rightArcVertices = Svg.pathToVertices(rightPath, 2)

        let left = Bodies.fromVertices(-margin, height / 2, leftArcVertices, borderOptions)
        let right = Bodies.fromVertices(width + margin, height / 2, rightArcVertices, borderOptions)
        let top = Bodies.rectangle(width / 2, -margin, width, borderThickness, borderOptions)
        let bottom = Bodies.rectangle(width / 2, height + margin, width, borderThickness, borderOptions)

        return {
            left: left,
            right: right,
            top: top,
            bottom: bottom
        }
    }

    let ballBody = createBall(width, height)
    let bordersBody = createBorders(width, height)

    Composite.add(engine.world, [
        ballBody,
        bordersBody.left,
        bordersBody.right,
        bordersBody.top,
        bordersBody.bottom
    ])

    Render.run(render)

    let runner = Runner.create()
    Runner.run(runner, engine)

    //MOUSE
    function handleMouseEnter() {
        engine.timing.timeScale = 0.02
    }

    pill.value?.addEventListener("mouseenter", handleMouseEnter)

    function handleMouseLeave() {
        engine.timing.timeScale = 0.14
    }

    pill.value?.addEventListener("mouseleave", handleMouseLeave)

    //RESIZE
    function handleResize(element: HTMLElement, engine: Engine) {
        let width = element.clientWidth
        let height = element.clientHeight

        Composite.clear(engine.world, false)

        ballBody = createBall(width, height)
        bordersBody = createBorders(width, height)

        Body.setStatic(ballBody, false)
        Body.applyForce(ballBody, {
            x: ballBody.position.x,
            y: ballBody.position.y
        }, {
            x: 0.028 * Math.pow(width / 100, 2.4),
            y: -0.014 * Math.pow(width / 100, 2.4)
        })

        Composite.add(engine.world, [
            ballBody,
            bordersBody.left,
            bordersBody.right,
            bordersBody.top,
            bordersBody.bottom
        ])

        render.canvas.width = width
        render.canvas.height = height
    }

    window.addEventListener("resize", () => handleResize(pill.value, engine))

    //ANIMATION

    let pillTimeline: gsap.core.Timeline, counterAppearTimeline: gsap.core.Timeline,
        counterUpdateTimeline: gsap.core.Timeline,
        counterDisappearTimeline: gsap.core.Timeline, revealTimeline: gsap.core.Timeline


    revealTimeline = gsap.timeline({
        paused: true
    })

    counterDisappearTimeline = gsap.timeline({
        paused: true
    })

    counterUpdateTimeline = gsap.timeline({
        paused: true,
        onComplete: () => {
            counterDisappearTimeline.play()
            revealTimeline.play()
        }
    })

    counterAppearTimeline = gsap.timeline({
        paused: true
    })

    pillTimeline = gsap.timeline({
        onComplete: () => {
            counterAppearTimeline.play()
            counterUpdateTimeline.play()
        }
    })

    pillTimeline.to([header.value, main.value, footer.value], {
        opacity: 1
    }, 0)

    counterAppearTimeline.from(splitElements.counter, {
        yPercent: 120,
        skewX: -8,
        duration: 1.2,
        ease: "power4.inOut"
    }, 0)

    counterDisappearTimeline.to(counter.value, {
        x: pill.value.offsetWidth - counter.value.offsetWidth - 6,
        duration: 1.2,
        ease: "power3.inOut"
    }).to(splitElements.counter, {
        yPercent: -120,
        skewX: -8,
        duration: 1.2,
        ease: "power4.inOut"
    })

    //COUNTER

    let progress = {
        value: 0
    }

    counterUpdateTimeline.to(progress, {
        value: 100,
        duration: 2.6,
        ease: "power3.inOut",
        onUpdate: () => {
            updateCounter()
        }
    }, 0)

    function updateCounter() {
        splitElements.counter.innerHTML = String(progress.value.toFixed(0)).padStart(3, "0")
    }


    //REVEAL

    revealTimeline.from([splitElements.title.interactiveText, splitElements.title.interactiveSymbol], {
        yPercent: 140,
        skewX: 8,
        duration: 3.6,
        ease: "power4.inOut",
        stagger: {
            amount: 0.32
        }
    }, 0)

    revealTimeline.from(ball.value, {
        yPercent: 140,
        duration: 3.6,
        ease: "power4.inOut"
    }, 0)

    revealTimeline.add(() => {
        Body.setStatic(ballBody, false)
        Body.applyForce(ballBody, {
            x: ballBody.position.x,
            y: ballBody.position.y
        }, {
            x: 0.028 * Math.pow(pill.value.clientWidth / 100, 2.4),
            y: -0.014 * Math.pow(pill.value.clientWidth / 100, 2.4)
        })
    }, 1.8)

    revealTimeline.from(splitElements.title.developer, {
        yPercent: 140,
        skewX: 8,
        duration: 3.2,
        ease: "power4.inOut"
    }, 0.32)

    revealTimeline.from([splitElements.alias.left, splitElements.alias.right], {
        duration: 1.2,
        yPercent: 140,
        ease: "power4.inOut"
    }, 1.8)

    revealTimeline.to(splitElements.alias.right, {
        duration: 1.6,
        x: 0,
        ease: "power4.inOut"
    }, 2.2)

    revealTimeline.from(splitElements.alias.content, {
        duration: 1.6,
        xPercent: -120,
        ease: "power4.inOut"
    }, 2.2)

    revealTimeline.from(splitElements.logo, {
        transformOrigin: "center left",
        scaleX: 0,
        duration: 1.6,
        ease: "power4.inOut"
    }, 2.2)

    revealTimeline.from(splitElements.label, {
        xPercent: -120,
        skewX: 20,
        duration: 2.4,
        ease: "power4.inOut"
    }, 1.8)

    revealTimeline.from([splitElements.about.title, splitElements.about.content, splitElements.apprenticeship.title, splitElements.apprenticeship.content, splitElements.media.title, splitElements.media.resume, splitElements.media.portfolio, splitElements.contact.title, splitElements.contact.links, splitElements.socials.title, splitElements.socials.links], {
        duration: 1.6,
        yPercent: 200,
        ease: "power4.out",
        skewY: 2,
        stagger: {
            amount: 0.32
        }
    }, 2.8)


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
                    duration: 1.2,
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
                    duration: 1.2,
                    ease: "power4.inOut",
                    delay: .06
                }
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


    //FOOTER LINKS

    footerLinks.forEach((link) => {
        if (link) {
            const elements = {
                top: link.querySelector(".line__wrapper--top .line__inner"),
                bottom: link.querySelector(".line__wrapper--bottom .line__inner")
            }

            let timeline = gsap.timeline({
                paused: true,
                defaults: {
                    duration: 1.2,
                    ease: "power4.inOut"
                }
            })

            gsap.set(elements.bottom, {
                yPercent: 200,
                skewY: 2
            })

            timeline.to(elements.top, {
                yPercent: -200,
                skewY: 2
            }, 0).to(elements.bottom, {
                yPercent: 0,
                skewY: 0
            }, 0)

            link.addEventListener("mouseenter", () => {
                timeline.play()
            })

            link.addEventListener("mouseleave", () => {
                timeline.reverse()
            })
        }
    })
})


</script>

<style lang="scss">

.header {
  z-index: 4;
  position: absolute;
  top: 0;
  pointer-events: none;
  opacity: 0;


  &__logo {
    width: fit-content;
    height: fit-content;
  }

  &__label {
    grid-column-start: none;
    justify-self: end;
  }
}

.main {
  $self: &;
  position: absolute;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100%;
  grid-template-rows: 0.175fr 0.225fr auto;
  opacity: 0;

  @media screen and (max-width: 900px) {
    grid-template-rows: 0.225fr 0.075fr  0.175fr 0.225fr 0.125fr 0.5fr;
  }

  pointer-events: none;

  &__alias {
    position: relative;
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
    margin-bottom: -4px;

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
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          height: min(6.5vw, 6.5vh);
          aspect-ratio: 14/6;
          margin: 0.8%;
          border: 4px solid var(--color-neutral-0);
          border-radius: max(5vw, 5vh);

          @media screen and (max-width: 900px) {
              height: min(12vw, 8vh);
          }

          @media screen and (max-width: 600px) {
              height: min(11vw, 8vh);
              border-width: 3px;
          }

          @media screen and (max-width: 320px) {
              border-width: 2px;
          }


        #ballCanvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: auto;
        }
      }

      &__counter {
        width: fit-content;
        padding: 6% 14% 3%;
        font-weight: var(--font-weight-medium);
      }
    }
  }
}


.footer {
  $self: &;
  position: absolute;
  bottom: 0;
  align-items: end;
  pointer-events: none;
  opacity: 0;


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