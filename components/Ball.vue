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
    Composite
} from "matter-js"

const ball = ref<HTMLElement | null>(null)

onMounted(() => {

    let element = document.querySelector(".title__pill") as HTMLElement

    let width = ball.value?.offsetWidth as number
    let height = ball.value?.offsetHeight as number

    let engine = Engine.create()
    let render = Render.create({
        // canvas: ball.value,
        element: element,
        engine: engine,
        options: {
            width: width,
            height: height,
            wireframes: false,
            background: "transparent"
        }
    })

    //ball

    let ballBody = Bodies.circle(
        width / 2,
        height / 2,
        height / 3,
        {
            restitution: 1,
            friction: 0,
            frictionAir: 0,
            density: 0.01,
            render: {
                fillStyle: "#040810"
            }
        })

    Composite.add(engine.world, [
        ballBody
    ])

    //borders

    let borderOptions = {
        isStatic: true,
        restitution: 1,
        friction: 0,
        frictionAir: 0,
        frictionStatic: 0,
        inertia: Infinity,
    }

    let borderThickness = 10
    let borderWidth = Number(window.getComputedStyle(element).getPropertyValue("border-width").replace("px", ""))

    let margin = (borderThickness - borderWidth)

    let leftBorder = Bodies.rectangle(-margin, height / 2, borderThickness, height, borderOptions)
    let rightBorder = Bodies.rectangle(width + margin, height / 2, borderThickness, height, borderOptions)
    let topBorder = Bodies.rectangle(width / 2, -margin, width, borderThickness, borderOptions)
    let bottomBorder = Bodies.rectangle(width / 2, height + margin, width, borderThickness, borderOptions)

    Composite.add(engine.world, [
        leftBorder,
        rightBorder,
        topBorder,
        bottomBorder
    ])

    Render.run(render)

    let runner = Runner.create()
    Runner.run(runner, engine)
})

</script>


<style lang="scss" scoped>


#ballCanvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>