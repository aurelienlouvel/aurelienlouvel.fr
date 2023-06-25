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
    description: "Product Designer at GOBELINS Paris, passionate about creating beautiful and memorable experiences.",
    ogType: "website",
    ogUrl: "https://aurelienlouvel.fr",
    ogTitle: "Aurélien Louvel",
    ogDescription: "Product Designer at GOBELINS Paris, passionate about creating beautiful and memorable experiences.",
    ogImage: "https://example.com/image.png",
    twitterTitle: "Aurélien Louvel",
    twitterDescription: "Product Designer at GOBELINS Paris, passionate about creating beautiful and memorable experiences.",
    twitterSite: "@aurelienlouvel",
    twitterCreator: "@aurelienlouvel",
    twitterCard: "summary_large_image",
})
</script>

