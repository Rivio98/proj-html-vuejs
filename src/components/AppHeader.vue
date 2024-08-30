<script>
import AppMenu from './AppMenu.vue';
export default {
    components: {
        AppMenu
    },
}
</script>
<template>
    <div class='container'>
        <div class="row py-3">
            <div class="col-6 d-flex">
                <div class="content text-light d-flex">
                    <i class="bi bi-envelope"></i>
                    <p class="ps-1">Superhit Top Movie</p>
                    <p class="txt-green ps-1">**King Star**</p>
                </div>
                <div class="content icons text-light d-flex ps-3">
                    <i class="bi bi-facebook ps-2"></i>
                    <i class="bi bi-twitter ps-2"></i>
                    <i class="bi bi-linkedin ps-2"></i>
                    <i class="bi bi-instagram ps-2"></i>
                    <i class="bi bi-google ps-2">+</i>
                </div>
            </div>
            <div class="col-6 align-items-center">
                <div class="content icons d-flex text-light justify-content-end">
                    <i class="bi bi-lock-fill"></i>
                    <p class="ps-1">Login</p>
                </div>
            </div>
        </div>
    </div>
    <hr class="divider">
    <SearchBar />
</template>

<style lang="scss" scoped></style>