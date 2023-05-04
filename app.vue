<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>

<script lang="ts" setup>

useHead({
    link:[
        { rel: 'icon', type: 'image/svg+xml', href: '/images/favicons/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
    ]
})
useSeoMeta({
    title: "(oré) ✧ Aurélien Louvel",
    description: "Front-end web developer & designer at Gobelins Paris, passionate about creating memorable user experiences and beautiful websites.",
    ogType: "website",
    ogUrl: "https://aurelienlouvel.fr",
    ogTitle: "Aurélien Louvel",
    ogDescription: "Front-end web developer & designer at Gobelins Paris, passionate about creating memorable user experiences and beautiful websites.e",
    ogImage: "https://example.com/image.png",
    twitterTitle: "Aurélien Louvel",
    twitterDescription: "Front-end web developer & designer at Gobelins Paris, passionate about creating memorable user experiences and beautiful websites.",
    twitterSite: "@aurelienlouvel",
    twitterCreator: "@aurelienlouvel",
    twitterCard: "summary_large_image",
})
</script>

