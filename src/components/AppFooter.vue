<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <div class="bg-wrap pb-5">
        <div class="container">
            <div class="main-footer pt-5">
                <div class="row row-cols-4 text-light">
                    <div class="col">
                        <h5 class="mb-4">{{ store.footerMenus[0].title }}</h5>
                        <p>{{ store.footerMenus[0].link }}</p>
                        <div class="content-icons text-light d-flex mt-3">
                            <i v-for="(social, index) in store.footerMenus[0].socials" :key="index"
                                :class="[social]"></i>
                        </div>
                    </div>
                    <div class="col">
                        <h5 class="mb-4">{{ store.footerMenus[1].title }}</h5>
                        <ul v-for="movie, index in store.footerMenus[1].link" :key="index" class="list-unstyled">
                            <li>{{ movie }}</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h5 class="mb-4">{{ store.footerMenus[2].title }}</h5>
                        <ul v-for="info, index in store.footerMenus[2].link" :key="index" class="list-unstyled">
                            <li>{{ info }}</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h5 class="mb-4">{{ store.footerMenus[3].title }}</h5>
                        <div v-for="(card, index) in store.footerMenus[3].content" :key="index" class="row mb-3">
                            <div class="col-4">
                                <img :src="card.src" :alt="card.title">
                            </div>
                            <div class="col-8">
                                <h6>{{ card.title }}</h6>
                                <p>{{ card.overview }}</p>
                                <p>{{ card.date }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bottom-footer text-light">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-4">
                    <ul class="list-unstyled d-flex">
                        <li>Term and Conditions</li>
                        <li>Policy</li>
                        <li>About</li>
                    </ul>
                </div>
                <div class="col-4 text-end">
                    <p>&copy;2020<span class="txt-green">@Themepul</span>All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.bg-wrap {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bg-wrap::before {
    content: "";
    background-image: url(../assets/ft-bg.jpg);
    background-size: cover;
    background-position: center;
    opacity: 0.1;
    position: absolute;
    inset: 0;
    z-index: -1;
}

.image-container {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
}

.image-container img {
    width: 100px;
    height: auto;
    margin-right: 10px;
}

.image-info h5 {
    margin: 0;
    font-size: 16px;
}

.image-info p {
    margin: 0;
    font-size: 14px;
    color: #666;
}

.image-info small {
    display: block;
    font-size: 12px;
    color: #999;
}

.content-icons {
    display: flex;
}

.fa-facebook-f {
    background-color: #4267B2;
}


.fa-twitter {
    background-color: #1DA1F2;
}


.fa-linkedin-in {
    background-color: #0A66C2;
}


.fa-instagram {
    background-color: #FD1D1D;
}

.fa-google-plus-g {
    background-color: #db4a39;
}

i {
    color: #fff;
    background-color: transparent;
    border-radius: 50%;
    width: 27px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    margin-right: 15px;
}

img {
    width: 100%;
}

.bottom-footer {
    background-color: #060F19;
    padding-top: 15px;
}

.bottom-footer li {
    margin-right: 30px;
}
</style>
