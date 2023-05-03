<template>
    <canvas id="ballCanvas" ref="ball"></canvas>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue"
import {
    Engine,
    Render,
    Runner,
    Bodies,
    Composite, Body, Common, Vertices, Svg
} from "matter-js"
import "pathseg"
import decomp from "poly-decomp"

const ball = ref<HTMLElement | null>(null)

onMounted(() => {

    let element = document.querySelector(".title__pill") as HTMLElement

    let width = element?.clientWidth as number
    let height = element?.clientHeight as number

    Common.setDecomp(decomp)

    let engine = Engine.create()
    engine.timing.timeScale = 0.1
    let render = Render.create({
        canvas: ball.value as HTMLCanvasElement,
        engine: engine,
        options: {
            width: width,
            height: height,
            wireframes: false,
            background: "transparent"
        }
    })

    function createBall(width: number, height: number) {
        let body = Bodies.circle(
            width / 2,
            height / 2,
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

        Body.translate(body, {
            x: -4,
            y: -6
        }, [true])

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
            render:{
                fillStyle: "transparent",
            }
        }

        let borderThickness = 10
        let borderWidth = Number(window.getComputedStyle(element).getPropertyValue("border-width").replace("px", ""))

        let margin = (borderThickness - borderWidth)

        let leftPath = document.createElementNS("http://www.w3.org/2000/svg", "path")
        leftPath.setAttribute("d", `M 0 0, H${height}, A1 1, 90, 0 0, ${height} ${height} H0 V0`)

        let rightPath = document.createElementNS("http://www.w3.org/2000/svg", "path")
        rightPath.setAttribute("d", `M 0 0, H${height}, V${height} H0 A1 1, 90, 0 0, 0 0`)

        let leftArcVertices = Svg.pathToVertices(leftPath, 2)
        let rightArcVertices = Svg.pathToVertices(rightPath, 2)

        let left = Bodies.fromVertices(-margin, height / 2, leftArcVertices, borderOptions)
        let right = Bodies.fromVertices(width+margin, height / 2, rightArcVertices, borderOptions)
        let top = Bodies.rectangle(width / 2, -margin, width, borderThickness, borderOptions)
        let bottom = Bodies.rectangle(width / 2, height + margin, width, borderThickness, borderOptions)

        return {
            left: left,
            right: right,
            top: top,
            bottom: bottom,
        }
    }


    //WORLD

    let ballBody = createBall(width, height)
    let bordersBody = createBorders(width, height)

    Composite.add(engine.world, [
        ballBody,
        bordersBody.left,
        bordersBody.right,
        bordersBody.top,
        bordersBody.bottom,
    ])

    Render.run(render)

    let runner = Runner.create()
    Runner.run(runner, engine)

    //MOUSE
    function handleMouseEnter() {
        engine.timing.timeScale = 0.02
    }

    element.addEventListener("mouseenter", handleMouseEnter)

    function handleMouseLeave() {
        engine.timing.timeScale = 0.1
    }

    element.addEventListener("mouseleave", handleMouseLeave)

    //RESIZE
    function handleResize(canvas: HTMLElement, engine: Engine) {
        let width = canvas.clientWidth
        let height = canvas.clientHeight

        Composite.remove(engine.world, [
            ballBody,
            bordersBody.left,
            bordersBody.right,
            bordersBody.top,
            bordersBody.bottom
        ])

        ballBody = createBall(width, height)
        bordersBody = createBorders(width, height)

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

    //resize
    window.addEventListener("resize", () => handleResize(element as HTMLElement, engine))
})

</script>


<style lang="scss" scoped>

#ballCanvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: auto;
}
</style>