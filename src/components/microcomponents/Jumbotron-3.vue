<script>
export default {


}
</script>
<template>
    <div class="container my-5">
        <div id="jumbo-3">
            <div class="content">
                <div class="inputs">
                    <input type="text" class="user-input" placeholder="First Name">
                    <input type="text" class="user-input" placeholder="Last Name">
                    <input type="text" class="user-input" placeholder="Email Adress">
                </div>
                <div class="button-group text-center pt-5">
                    <button type="button" class="subscribe rounded-5">
                        <p>Subscribe</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
#jumbo-3 {
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(../../assets/form-bg-1.png);
    background-size: cover;
    background-repeat: no-repeat;
}

.content {
    color: white;
}

.subscribe {
    color: #fff;
    background-color: #060F19;
    padding: 10px 30px;
    margin-top: 20px;
    border: none;
}

.user-input {
    background-color: #13BE13;
    border: 1px solid #fff;
    padding: 10px;
    border-radius: 25px;
    margin: 20px;
}
</style>
