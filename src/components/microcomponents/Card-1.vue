<script>
export default {

}
</script>
<template>
    <div class="container pt-5">
        <div class="row g-5">
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
                    <div class="d-flex align-items-center">
                        <i class="bi bi-chevron-left"></i>
                        <i class="bi bi-chevron-right"></i>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <img src="../../assets/1.jpg" class="card-img-top" alt="...">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk
                            of
                            the
                            card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk
                            of
                            the
                            card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk
                            of
                            the
                            card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.b-green {
    width: 100%;
    border-left: 4px solid #13BE13;
    border-bottom: 2px solid grey;

    .bi-chevron-right,
    .bi-chevron-left {
        padding: 10px;
        border: 1px solid #13BE13;
    }
}
</style>