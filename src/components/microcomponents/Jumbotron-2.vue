<script>
export default {


}
</script>
<template>
    <div id="jumbo-2">
        <div class="content text-light text-center">
            <h5 class="txt-green">COMING SOON MOVIE</h5>
            <h1>MAX STILL</h1>
            <div class="justify-content-center bg-shadow py-1 px-3">
                <h5>JON PLAYER <span class="txt-green">&</span> EMILY ROSE</h5>
                <p>THE COUNTDOWN IS FINISHED!</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
#jumbo-2 {
    height: 650px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

#jumbo-2::before {
    content: "";
    background-image: url(../../assets/coming-bg.jpg);
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    position: absolute;
    inset: 0;
    z-index: -1;
}

.content {
    position: relative;
    text-align: center;
    color: white;
    margin-left: 300px;
}

.button-green {
    padding: 5px 20px;
    margin-top: 20px;
}

.bg-shadow {
    background-color: #060F19;
}
</style>
