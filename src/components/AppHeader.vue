<script>
import AppMenu from './microcomponents/AppMenu.vue';
import { store } from '../store';

export default {
    data() {
        return {
            store
        };
    },
    components: {
        AppMenu
    },
}
</script>
<template>
    <div class='container'>
        <div class="row py-3">
            <div class="col-6 d-flex">
                <div class="content text-light d-flex align-items-center">
                    <i class="bi bi-envelope"></i>
                    <p class="ps-1">Superhit Top Movie</p>
                    <p class="txt-green ps-1">**King Star**</p>
                </div>
                <div class="content-icons text-light d-flex ps-3 align-items-center justify-content-center">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-google-plus-g"></i>
                </div>
            </div>
            <div class="col-6 align-items-center">
                <div class="content-icons d-flex text-light justify-content-end align-items-center">
                    <i class="fa-solid fa-lock"></i>
                    <p class="ps-1">Login</p>
                </div>
            </div>
        </div>
    </div>
    <hr class="divider">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-6">
                <div class="content py-3">
                    <img src="../assets/cropped-logo.png" alt="">
                </div>
            </div>
            <div class=" col-6">
                <div class="content">
                    <div class="search-container justify-content-end">
                        <div>
                            <input placeholder="Search.." />
                            <button class="text-light button-green">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr class="divider">
    <div class="container">
        <div class="row py-4">
            <div class="col-10">
                <div class="content text-light ">
                    <ul class="list-unstyled d-flex">

                        <AppMenu v-for="menu in store.menus" :key="menu" :menu="menu" />

                    </ul>
                </div>
            </div>
            <div class="col-2">
                <div class="content-counter text-light d-flex">
                    <i class="bi bi-basket"></i>
                    <p class="counter">0</p>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.search-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
}

.search-wrapper {
    display: flex;
    align-items: center;
}

.search-container input {
    padding: 10px;
    background-color: transparent;
    color: #fff;
    width: 200px;
    border-top: 1px solid rgba(106, 104, 104, 0.388);
    border-bottom: 1px solid rgba(106, 104, 104, 0.388);
    border-right: 0px;
    border-left: 0px;
}


.content-counter {
    position: relative;
    display: inline-block;
    justify-content: end;
}

.counter {
    position: absolute;
    top: -10px;
    right: -5px;
    background-color: #13BE13;
    color: white;
    border-radius: 50%;
    padding: 2px 5px;
    font-size: 12px;
    line-height: 1;
    text-align: center;
}

.content-icons i {
    margin-left: 15px;
    font-size: 15px;
    padding: 7px 10px;
}

i:hover {
    color: #fff;
    background-color: transparent;
    border-radius: 50%;
    width: 27px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.fa-facebook-f {
    color: #4267B2;
}

.fa-facebook-f:hover {
    background-color: #4267B2;
}

.fa-twitter {
    color: #1DA1F2;
}

.fa-twitter:hover {
    background-color: #1DA1F2;
}

.fa-linkedin-in {
    color: #0A66C2;
}

.fa-linkedin-in:hover {
    background-color: #0A66C2;

}

.fa-instagram {
    color: #FD1D1D;
}

.fa-instagram:hover {
    background-color: #FD1D1D;

}

.fa-google-plus-g {
    color: #db4a39;
}

.fa-google-plus-g:hover {
    background-color: #db4a39;
}
</style>