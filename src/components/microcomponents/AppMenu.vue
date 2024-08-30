<script>

export default {
    data() {
        return {
        };
    },
    props: {
        menu: Object
    },

    methods: {

    }
};
</script>

<template>
    <li><a href="">{{ menu.title }}</a><i class="bi bi-caret-down-fill align-middle" v-if="menu.dropdown"></i></li>
</template>

<style scoped>
a {
    text-decoration: none;
    color: #fff;
}

li {
    padding: 0px 20px 0px 0px;
    font-weight: bold;
}
</style>
