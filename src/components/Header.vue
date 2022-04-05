<template>
    <div>
        <div class="header pt-3">
            <div class="container">
                <div class="row wrapper">
                    <div class="col">
                        <div class="thumb">
                            <img src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/275232822_960601454613474_2633550841039708472_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=HfLbKD-HxzYAX89ycfg&tn=o4gH4qkm81xHNQZ0&_nc_ht=scontent-xsp1-1.xx&oh=03_AVJxLBUTTWq6Zcu4IMe9RcwWySa5vYDrKS2WwrH1zZpKgA&oe=62731A64" alt="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="menu ">
                            <ul class = "d-flex  justify-content-between mt-3">
                                <li class = "text-uppercase">Sản phẩm</li>
                                <li class = "text-uppercase">Về nông thảo</li>
                                <li class = "text-uppercase">blog</li>
                                <li class = "text-uppercase">Liên hệ</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="menu-right d-flex">
                            <div class="search">
                                <i class="fa-solid icon fa-magnifying-glass"></i>
                            </div>
                            <div class="cart">
                                <button type="button" class="btn  position-relative" style = "border-radius: 50%; background: #356C07; color: #fff;">
                                    <img src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/275181950_485608069943194_9014988547549372433_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=hGvHbwreW2oAX-UlBpk&_nc_ht=scontent-xsp1-3.xx&oh=03_AVLY-uH4WCKTYEceNs9VzWFzJ2gXNE7cVAI9O59UrMvmKQ&oe=6270774F" alt="">
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        0
                                    <span class="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {
            // HelloWorld
        },
        data() {
            return {
                menu: [

                ]
            }
        }
    }
</script>

<style>
    li {
        list-style: none;
    }
    .wrapper {
        justify-content: space-between;
    }
    .menu ul {
        justify-content: space-around;
        align-items: center;
    }
    .menu-right {
        float: right;
    }
    .search {
        margin-right: 20px;
    }
    .icon {
        border: 1px solid #ccc;
        border-radius: 50% ;
        padding: 10px;
        background: #cccccc;
    }
</style>
