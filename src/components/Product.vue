<template>
    <div>
        <div class="container mt-3">
            <div class="nav">
                <span>Trang chủ</span>
                <i class="fa-solid fa-chevron-right"></i>
                <span>Sản phẩm</span>
                <i class="fa-solid fa-chevron-right"></i>
                <span>Thảo dược</span>
            </div>
            <div class="listProduct">
                <div class=" listProductItem">
                    <div class="items" v-for="(item, index) in products" :key="index">
                        <div class="item ">
                            <div class="thumb">
                                <img :src="item.thumb" alt="">
                                <div class="discount" v-if="item.discount">
                                    <span>50%</span>
                                </div>
                                <div v-if="item.buy" class="selling">
                                    <a>Mua Ngay</a>
                                </div>
                            </div>
                            <div class="content">
                                <div class="title">
                                    <h3>{{item.name}}</h3>
                                </div>
                                <div class="money d-flex">
                                    <p class="currentMoney">{{item.currentMoney | formatCurrency}}</p>
                                    <p class="current">{{item.current | formatCurrency}}</p>
                                    <img :src="item.icon" alt="">
                                </div>
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
        components: {},
        data() {
            return {
                products: [
                    {
                        id: 1,
                        name: "Thảo dược cao cà gai leo lên Yên Thủy - 250g",
                        discount: true,
                        currentMoney: 220000,
                        current: 250000,
                        icon: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/275181950_485608069943194_9014988547549372433_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=hGvHbwreW2oAX-UlBpk&_nc_ht=scontent-xsp1-3.xx&oh=03_AVLY-uH4WCKTYEceNs9VzWFzJ2gXNE7cVAI9O59UrMvmKQ&oe=6270774F",
                        thumb: "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/275450731_1911248322405939_4287913534318486517_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=aa7_zslgpGYAX-Zue0D&_nc_ht=scontent-xsp1-1.xx&oh=03_AVJOVhJXHSxUunC9fLu2znrIqgG_RhNZclpSO4B4B6x91A&oe=627328A4",
                        buy: true,
                    },
                    {
                        id: 2,
                        name: "Thảo dược cao cà gai leo lên Yên Thủy - 250g",
                        discount: false,
                        currentMoney: 220000,
                        current: 250000,
                        icon: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/275181950_485608069943194_9014988547549372433_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=hGvHbwreW2oAX-UlBpk&_nc_ht=scontent-xsp1-3.xx&oh=03_AVLY-uH4WCKTYEceNs9VzWFzJ2gXNE7cVAI9O59UrMvmKQ&oe=6270774F",
                        thumb: "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/275450731_1911248322405939_4287913534318486517_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=aa7_zslgpGYAX-Zue0D&_nc_ht=scontent-xsp1-1.xx&oh=03_AVJOVhJXHSxUunC9fLu2znrIqgG_RhNZclpSO4B4B6x91A&oe=627328A4",
                        buy: true,
                    },
                    {
                        id: 3,
                        name: "Thảo dược cao cà gai leo lên Yên Thủy - 250g",
                        discount: true,
                        currentMoney: 220000,
                        current: 250000,
                        icon: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/275181950_485608069943194_9014988547549372433_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=hGvHbwreW2oAX-UlBpk&_nc_ht=scontent-xsp1-3.xx&oh=03_AVLY-uH4WCKTYEceNs9VzWFzJ2gXNE7cVAI9O59UrMvmKQ&oe=6270774F",
                        thumb: "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/275450731_1911248322405939_4287913534318486517_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=aa7_zslgpGYAX-Zue0D&_nc_ht=scontent-xsp1-1.xx&oh=03_AVJOVhJXHSxUunC9fLu2znrIqgG_RhNZclpSO4B4B6x91A&oe=627328A4",
                        buy: false,
                    },
                    {
                        id: 4,
                        name: "Thảo dược cao cà gai leo lên Yên Thủy - 250g",
                        discount: true,
                        currentMoney: 220000,
                        current: 250000,
                        icon: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/275181950_485608069943194_9014988547549372433_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=hGvHbwreW2oAX-UlBpk&_nc_ht=scontent-xsp1-3.xx&oh=03_AVLY-uH4WCKTYEceNs9VzWFzJ2gXNE7cVAI9O59UrMvmKQ&oe=6270774F",
                        thumb: "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/275450731_1911248322405939_4287913534318486517_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=aa7_zslgpGYAX-Zue0D&_nc_ht=scontent-xsp1-1.xx&oh=03_AVJOVhJXHSxUunC9fLu2znrIqgG_RhNZclpSO4B4B6x91A&oe=627328A4",
                        buy: false,
                    },
                    {
                        id: 5,
                        name: "Thảo dược cao cà gai leo lên Yên Thủy - 250g",
                        discount: true,
                        currentMoney: 220000,
                        current: 250000,
                        icon: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/275181950_485608069943194_9014988547549372433_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=hGvHbwreW2oAX-UlBpk&_nc_ht=scontent-xsp1-3.xx&oh=03_AVLY-uH4WCKTYEceNs9VzWFzJ2gXNE7cVAI9O59UrMvmKQ&oe=6270774F",
                        thumb: "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/275450731_1911248322405939_4287913534318486517_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=aa7_zslgpGYAX-Zue0D&_nc_ht=scontent-xsp1-1.xx&oh=03_AVJOVhJXHSxUunC9fLu2znrIqgG_RhNZclpSO4B4B6x91A&oe=627328A4",
                        buy: true,
                    },
                    {
                        id: 6,
                        name: "Thảo dược cao cà gai leo lên Yên Thủy - 250g",
                        discount: false,
                        currentMoney: 220000,
                        current: 250000,
                        icon: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/275181950_485608069943194_9014988547549372433_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=hGvHbwreW2oAX-UlBpk&_nc_ht=scontent-xsp1-3.xx&oh=03_AVLY-uH4WCKTYEceNs9VzWFzJ2gXNE7cVAI9O59UrMvmKQ&oe=6270774F",
                        thumb: "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/275450731_1911248322405939_4287913534318486517_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=aa7_zslgpGYAX-Zue0D&_nc_ht=scontent-xsp1-1.xx&oh=03_AVJOVhJXHSxUunC9fLu2znrIqgG_RhNZclpSO4B4B6x91A&oe=627328A4",
                        buy: true,
                    },
                    {
                        id: 7,
                        name: "Thảo dược cao cà gai leo lên Yên Thủy - 250g",
                        discount: false,
                        currentMoney: 220000,
                        current: 250000,
                        icon: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/275181950_485608069943194_9014988547549372433_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=hGvHbwreW2oAX-UlBpk&_nc_ht=scontent-xsp1-3.xx&oh=03_AVLY-uH4WCKTYEceNs9VzWFzJ2gXNE7cVAI9O59UrMvmKQ&oe=6270774F",
                        thumb: "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/275450731_1911248322405939_4287913534318486517_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=aa7_zslgpGYAX-Zue0D&_nc_ht=scontent-xsp1-1.xx&oh=03_AVJOVhJXHSxUunC9fLu2znrIqgG_RhNZclpSO4B4B6x91A&oe=627328A4",
                        buy: true,
                    },
                    {
                        id: 8,
                        name: "Thảo dược cao cà gai leo lên Yên Thủy - 250g",
                        discount: false,
                        currentMoney: 220000,
                        current: 250000,
                        icon: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/275181950_485608069943194_9014988547549372433_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=hGvHbwreW2oAX-UlBpk&_nc_ht=scontent-xsp1-3.xx&oh=03_AVLY-uH4WCKTYEceNs9VzWFzJ2gXNE7cVAI9O59UrMvmKQ&oe=6270774F",
                        thumb: "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/275450731_1911248322405939_4287913534318486517_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=aa7_zslgpGYAX-Zue0D&_nc_ht=scontent-xsp1-1.xx&oh=03_AVJOVhJXHSxUunC9fLu2znrIqgG_RhNZclpSO4B4B6x91A&oe=627328A4",
                        buy: true,
                    },
                    {
                        id: 9,
                        name: "Thảo dược cao cà gai leo lên Yên Thủy - 250g",
                        discount: false,
                        currentMoney: 220000,
                        current: 250000,
                        icon: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/275181950_485608069943194_9014988547549372433_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=hGvHbwreW2oAX-UlBpk&_nc_ht=scontent-xsp1-3.xx&oh=03_AVLY-uH4WCKTYEceNs9VzWFzJ2gXNE7cVAI9O59UrMvmKQ&oe=6270774F",
                        thumb: "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/275450731_1911248322405939_4287913534318486517_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=aa7_zslgpGYAX-Zue0D&_nc_ht=scontent-xsp1-1.xx&oh=03_AVJOVhJXHSxUunC9fLu2znrIqgG_RhNZclpSO4B4B6x91A&oe=627328A4",
                        buy: true,
                    },
                    {
                        id: 10,
                        name: "Thảo dược cao cà gai leo lên Yên Thủy - 250g",
                        discount: false,
                        currentMoney: 220000,
                        current: 250000,
                        icon: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/275181950_485608069943194_9014988547549372433_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=hGvHbwreW2oAX-UlBpk&_nc_ht=scontent-xsp1-3.xx&oh=03_AVLY-uH4WCKTYEceNs9VzWFzJ2gXNE7cVAI9O59UrMvmKQ&oe=6270774F",
                        thumb: "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/275450731_1911248322405939_4287913534318486517_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=aa7_zslgpGYAX-Zue0D&_nc_ht=scontent-xsp1-1.xx&oh=03_AVJOVhJXHSxUunC9fLu2znrIqgG_RhNZclpSO4B4B6x91A&oe=627328A4",
                        buy: true,
                    },
                    {
                        id: 11,
                        name: "Thảo dược cao cà gai leo lên Yên Thủy - 250g",
                        discount: false,
                        currentMoney: 220000,
                        current: 250000,
                        icon: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/275181950_485608069943194_9014988547549372433_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=hGvHbwreW2oAX-UlBpk&_nc_ht=scontent-xsp1-3.xx&oh=03_AVLY-uH4WCKTYEceNs9VzWFzJ2gXNE7cVAI9O59UrMvmKQ&oe=6270774F",
                        thumb: "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/275450731_1911248322405939_4287913534318486517_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=aa7_zslgpGYAX-Zue0D&_nc_ht=scontent-xsp1-1.xx&oh=03_AVJOVhJXHSxUunC9fLu2znrIqgG_RhNZclpSO4B4B6x91A&oe=627328A4",
                        buy: true,
                    },
                    {
                        id: 12,
                        name: "Thảo dược cao cà gai leo lên Yên Thủy - 250g",
                        discount: false,
                        currentMoney: 220000,
                        current: 250000,
                        icon: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/275181950_485608069943194_9014988547549372433_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=hGvHbwreW2oAX-UlBpk&_nc_ht=scontent-xsp1-3.xx&oh=03_AVLY-uH4WCKTYEceNs9VzWFzJ2gXNE7cVAI9O59UrMvmKQ&oe=6270774F",
                        thumb: "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/275450731_1911248322405939_4287913534318486517_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=aa7_zslgpGYAX-Zue0D&_nc_ht=scontent-xsp1-1.xx&oh=03_AVJOVhJXHSxUunC9fLu2znrIqgG_RhNZclpSO4B4B6x91A&oe=627328A4",
                        buy: true,
                    },
                    {
                        id: 13,
                        name: "Thảo dược cao cà gai leo lên Yên Thủy - 250g",
                        discount: false,
                        currentMoney: 220000,
                        current: 250000,
                        icon: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/275181950_485608069943194_9014988547549372433_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=hGvHbwreW2oAX-UlBpk&_nc_ht=scontent-xsp1-3.xx&oh=03_AVLY-uH4WCKTYEceNs9VzWFzJ2gXNE7cVAI9O59UrMvmKQ&oe=6270774F",
                        thumb: "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/275450731_1911248322405939_4287913534318486517_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=aa7_zslgpGYAX-Zue0D&_nc_ht=scontent-xsp1-1.xx&oh=03_AVJOVhJXHSxUunC9fLu2znrIqgG_RhNZclpSO4B4B6x91A&oe=627328A4",
                        buy: true,
                    },
                    {
                        id: 14,
                        name: "Thảo dược cao cà gai leo lên Yên Thủy - 250g",
                        discount: false,
                        currentMoney: 220000,
                        current: 250000,
                        icon: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/275181950_485608069943194_9014988547549372433_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=hGvHbwreW2oAX-UlBpk&_nc_ht=scontent-xsp1-3.xx&oh=03_AVLY-uH4WCKTYEceNs9VzWFzJ2gXNE7cVAI9O59UrMvmKQ&oe=6270774F",
                        thumb: "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/275450731_1911248322405939_4287913534318486517_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=aa7_zslgpGYAX-Zue0D&_nc_ht=scontent-xsp1-1.xx&oh=03_AVJOVhJXHSxUunC9fLu2znrIqgG_RhNZclpSO4B4B6x91A&oe=627328A4",
                        buy: true,
                    },
                    {
                        id: 15,
                        name: "Thảo dược cao cà gai leo lên Yên Thủy - 250g",
                        discount: false,
                        currentMoney: 220000,
                        current: 250000,
                        icon: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/275181950_485608069943194_9014988547549372433_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=hGvHbwreW2oAX-UlBpk&_nc_ht=scontent-xsp1-3.xx&oh=03_AVLY-uH4WCKTYEceNs9VzWFzJ2gXNE7cVAI9O59UrMvmKQ&oe=6270774F",
                        thumb: "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/275450731_1911248322405939_4287913534318486517_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=aa7_zslgpGYAX-Zue0D&_nc_ht=scontent-xsp1-1.xx&oh=03_AVJOVhJXHSxUunC9fLu2znrIqgG_RhNZclpSO4B4B6x91A&oe=627328A4",
                        buy: true,
                    },
                    {
                        id: 16,
                        name: "Thảo dược cao cà gai leo lên Yên Thủy - 250g",
                        discount: false,
                        currentMoney: 220000,
                        current: 250000,
                        icon: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/275181950_485608069943194_9014988547549372433_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=hGvHbwreW2oAX-UlBpk&_nc_ht=scontent-xsp1-3.xx&oh=03_AVLY-uH4WCKTYEceNs9VzWFzJ2gXNE7cVAI9O59UrMvmKQ&oe=6270774F",
                        thumb: "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/275450731_1911248322405939_4287913534318486517_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=aa7_zslgpGYAX-Zue0D&_nc_ht=scontent-xsp1-1.xx&oh=03_AVJOVhJXHSxUunC9fLu2znrIqgG_RhNZclpSO4B4B6x91A&oe=627328A4",
                        buy: true,
                    },

                ]
            }
        }
    }
</script>

<style>
    .nav {
        margin-bottom: 20px;
    }

    .nav span {
        margin-right: 5px;
    }

    .nav i {
        margin-top: 5px;
        margin-right: 5px;
    }

    .thumb {
        position: relative;
    }

    .thumb img {
        /*width: 100%;*/
    }

    .discount {
        position: absolute;
        top: 0;
        /*right: 10px;*/
        right: 0;
        background: red;
        color: white;
        padding: 10px;
        border-radius: 4px;
    }

    .selling {
        position: absolute;
        bottom: 0;
        margin: auto;
        cursor: pointer;
        width: 100%;
        text-align: center;
        background: red;
        color: white;
        padding: 10px;
        opacity: 0.7;
        display: block;
        width: 100%;
    }

    .selling a {
        text-decoration: none;
        display: block;
        width: 100%;
    }

    .listProductItem {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .content {

    }

    .title h3 {
        font-size: 16px;
        font-weight: 400;
        color: #4f4f4f;
    }

    .item {
        box-shadow: 3px 4px 0 0 rgba(255, 255, 255, 0.6);
        padding: 0 8px;
        margin-bottom: 15px;
    }


    .content {
        padding: 10px;
    }

    .items {
        display: flex;
        flex-wrap: wrap;
    }

    .currentMoney {
        color: #E10000;
        font-size: 18px;
        font-weight: 700;
    }
    .current {
        font-size: 14px;
        font-weight: 400;
        opacity: 0.4;
        text-decoration-line: line-through;
        margin-left: 5px;
        margin-top: 2px;
    }

    .money {
        justify-content: space-between;
    }
</style>
