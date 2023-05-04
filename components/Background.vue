<template>
    <canvas id="canvas"></canvas>
</template>

<script>
export default {
  name: 'Background',
};
</script>

<style scoped>
#canvas {
    width: 100%;
    height: 100dvh;

    @media screen and (max-height: 400px) {
        height: 140dvh;
    }

}

</style>