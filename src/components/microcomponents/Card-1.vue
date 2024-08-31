<script>
export default {

}
</script>
<template>
    <div class="container">
        <div class="row pt-3">
            <div class="col-12">
                <div class="content text-light d-flex justify-content-between">
                    <div class="d-flex justify-content-between w-100">
                        <div class="ps-3 pb-2 b-green">
                            <h3>New Movie</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni aut at
                                perferendis
                                corrupti
                                ipsum
                            </p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center point">
                        <i class="fa-solid fa-angles-left mx-1"></i>
                        <i class="fa-solid fa-angles-right"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-cols-3 mt-100">
            <div class="col">
                <div class="cd card-one">
                    <div class="score text-end mt-3 pe-3">
                        <i class="fa-solid fa-star"><span class="text-light ps-1">0/10</span></i>
                    </div>
                    <div class="title text-light ps-3">
                        <h3>Hurry Animate Blue Strack New Movie</h3>
                        <h5 class="py-2">Category: Top Rating</h5>
                    </div>
                    <div class="lables d-flex">
                        <div class="label-left">
                            <h5>Details</h5>
                        </div>
                        <div class="lable-right">
                            <h5>381 Views</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="cd card-two">
                    <div class="score text-end mt-3 pe-3">
                        <i class="fa-solid fa-star"><span class="text-light ps-1">4/10</span></i>
                    </div>
                    <div class="title text-light ps-3">
                        <h3>Quissque Auctor Movie In Strack</h3>
                        <h5 class="py-2">Category: Coming Soon</h5>
                    </div>
                    <div class="lables d-flex">
                        <div class="label-left">
                            <h5>Details</h5>
                        </div>
                        <div class="lable-right">
                            <h5>381 Views</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="cd card-three">
                    <div class="score text-end mt-3 pe-3">
                        <i class="fa-solid fa-star"><span class="text-light ps-1">0/10</span></i>
                    </div>
                    <div class="title text-light ps-3">
                        <h3>New Movie Quisque In Strack</h3>
                        <h5 class="py-2">Category: Latest Movie</h5>
                    </div>
                    <div class="lables d-flex">
                        <div class="label-left">
                            <h5>Details</h5>
                        </div>
                        <div class="lable-right">
                            <h5>381 Views</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style scoped>
.b-green {
    width: 100%;
    border-left: 4px solid #13BE13;
    border-bottom: 2px solid #182028;
}

.cd {
    width: 100%;
    height: 500px;
    border-radius: 30px;
    background-size: cover;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 20px 0px;
    box-sizing: border-box;
    align-content: space-between;
    opacity: 40%;
}

.cd:hover {
    transform: scale(1.2);
    z-index: 2;
    opacity: 100%;
}

.score {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
}

.title {
    color: white;
    margin-top: auto;
    text-align: start;
}

.lables {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    align-items: center;
}

.label-left,
.lable-right {
    color: white;
    background-color: #060F19;
    padding: 5px 15px;
}

.label-left {
    border-radius: 0px 20px 20px 0px;
}

.lable-right {
    border-radius: 20px 0px 0px 20px;
}

.card-one {
    background-image: url(../../assets/1.jpg);
}

.card-two {
    background-image: url(../../assets/2.jpg);
}

.card-three {
    background-image: url(../../assets/5.jpg);
}

.fa-star {
    color: #15BE14;
}

.fa-angles-left,
.fa-angles-right {
    padding: 5px;
    color: #13BE13;
    border-radius: 50%;
    border: 2px solid #182028;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>