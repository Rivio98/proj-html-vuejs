<script>
import Jumbotron1 from './microcomponents/Jumbotron-1.vue';
import VideoPlayer from './microcomponents/VideoPlayer.vue';
import Jumbotron2 from './microcomponents/Jumbotron-2.vue';
import Card1 from './microcomponents/Card-1.vue';
import Card2 from './microcomponents/Card-2.vue';
import Card3 from './microcomponents/Card-3.vue';

export default {
    components: {
        Jumbotron1,
        Card1,
        VideoPlayer,
        Jumbotron2,
        Card2,
        Card3

    },
}
</script>
<template>
    <Jumbotron1 />
    <Card1 />
    <VideoPlayer />
    <Jumbotron2 />
    <Card2 />
    <Card3 />
</template>

<style lang="">

</style>