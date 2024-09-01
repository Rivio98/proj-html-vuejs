<script>
export default {

}
</script>
<template>
    <div class="container">
        <div class="row pt-5">
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
                </div>
            </div>
        </div>
        <div class="row mt-100 flex-wrap">
            <div class="col-6">
                <div class="col py-2">
                    <div class="cd">
                        <div class="image-wrapper">
                            <img src="../../assets/blog-570x570.jpg" alt="Movie Image">
                        </div>
                        <div class="content-wrapper">
                            <div class="lables justify-content-end">
                                <div class="lable-top">April 14,2020</div>
                            </div>
                            <div class="title text-light ps-3">
                                <h3>Hurry Animate Blue Strack New Movie</h3>
                            </div>
                            <div class="lables d-flex">
                                <div class="label-left">
                                    <h5>Details</h5>
                                </div>
                                <div class="lable-right">
                                    <h5>Share</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="row row-cols-2">
                    <div class="col py-3 px-3">
                        <div class="cd">
                            <div class="image-wrapper">
                                <img src="../../assets/blog2-300x300.jpg" alt="Movie Image">
                            </div>
                            <div class="content-wrapper">
                                <div class="lables justify-content-end">
                                    <div class="lable-top">April 14,2020</div>
                                </div>
                                <div class="title text-light ps-3">
                                    <h3>Hurry Animate Blue Strack New Movie</h3>
                                </div>
                                <div class="lables d-flex">
                                    <div class="label-left">
                                        <h5>Details</h5>
                                    </div>
                                    <div class="lable-right">
                                        <h5>Share</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col py-3 px-3">
                        <div class="cd">
                            <div class="image-wrapper">
                                <img src="../../assets/blog3-300x300.jpg" alt="Movie Image">
                            </div>
                            <div class="content-wrapper">
                                <div class="lables justify-content-end">
                                    <div class="lable-top">April 14,2020</div>
                                </div>
                                <div class="title text-light ps-3">
                                    <h3>Hurry Animate Blue Strack New Movie</h3>
                                </div>
                                <div class="lables d-flex">
                                    <div class="label-left">
                                        <h5>Details</h5>
                                    </div>
                                    <div class="lable-right">
                                        <h5>Share</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-2">
                    <div class="col py-3 px-3">
                        <div class="cd">
                            <div class="image-wrapper">
                                <img src="../../assets/blog4-300x300.jpg" alt=" Movie Image">
                            </div>
                            <div class="content-wrapper">
                                <div class="lables justify-content-end">
                                    <div class="lable-top">April 14,2020</div>
                                </div>
                                <div class="title text-light ps-3">
                                    <h3>Hurry Animate Blue Strack New Movie</h3>
                                </div>
                                <div class="lables d-flex">
                                    <div class="label-left">
                                        <h5>Details</h5>
                                    </div>
                                    <div class="lable-right">
                                        <h5>Share</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col py-3 px-3">
                        <div class="cd">
                            <div class="image-wrapper">
                                <img src="../../assets/blog5-300x300.jpg" alt="Movie Image">
                            </div>
                            <div class="content-wrapper">
                                <div class="lables justify-content-end">
                                    <div class="lable-top">April 14,2020</div>
                                </div>
                                <div class="title text-light ps-3">
                                    <h3>Hurry Animate Blue Strack New Movie</h3>
                                </div>
                                <div class="lables d-flex">
                                    <div class="label-left">
                                        <h5>Details</h5>
                                    </div>
                                    <div class="lable-right">
                                        <h5>Share</h5>
                                    </div>
                                </div>
                            </div>
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
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    transition: transform 0.3s ease;
}

.cd:hover {
    cursor: pointer;
}

.image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}

.image-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(19, 190, 19, 0.2) 0%, rgba(19, 190, 19, 0.6) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
}

.cd:hover .image-wrapper::before {
    opacity: 1;
}

.image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: opacity(50%);
}

.content-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
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
}

.label-left {
    color: white;
    background-color: #060F19;
    padding: 5px 15px;
    margin-bottom: 15px;
    border-radius: 0px 20px 20px 0px;
}

.lable-right {
    color: white;
    padding: 5px 15px;
    margin-bottom: 15px;
}

.lable-top {
    color: white;
    background-color: #13BE13;
    padding: 5px 15px;
    border-radius: 20px 0px 0px 20px;
    visibility: hidden;
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

.title p {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.cd:hover .title p {
    opacity: 1;
    visibility: visible;
}

.cd:hover .lable-top {
    visibility: visible;
}
</style>