<template>
    <div>
        <Header/>
        <main>
            <p class="alias">(oré)</p>

            <h4 class="one">01</h4>
            <h3 class="about">I’m a front-end web developer <i>& designer,</i><br>studying at Gobelins Paris, France.</h3>

            <h4 class="two">02</h4>
            <h3 class="apprenticeship">Currently looking for a new<br>apprenticeship starting in<br>September 2023.</h3>

            <h4 class="three">03</h4>
            <div class="document__list">
                <a href="#" class="document__link">
                    <h3 class="document__name resume">Resume</h3>
                    <span class="document__arrow">↗</span>
                </a>
                <a href="#" class="document__link">
                    <h3 class="document__name portfolio">Portfolio</h3>
                    <span class="document__arrow">↗</span>
                </a>
            </div>

            <div class="title">
                <div class="title__row">
                    <h1 class="title__text">Interactive</h1>
                    <div class="title__symbol">
                        <h2>✧</h2>
                        <h2>✦</h2>
                    </div>
                </div>
                <div class="title__row">
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
<script setup lang="ts">
import Header from "~/components/Header.vue"
import Footer from "~/components/Footer.vue"
import Background from "~/components/Background.vue"
</script>