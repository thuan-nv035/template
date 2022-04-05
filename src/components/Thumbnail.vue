<template>
    <div>
        <div class = "d-flex">
            <div class="thumbnail " v-for = "(item, index) in images" :key="index">
                <img :src="item.img" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {

        },
        data() {
            return {
                images: [
                    {
                        id:1,
                        img: "https://lh3.googleusercontent.com/vxXt-bqwkZgl7PsQKQ8IdFXKKQacykCSCkvaKG5ceHzuicG134U7RFOGysooYq_gVzc8VpOhdcb643-jq6avhd5Kzk_DtMW2V_2aUkVW0zYZSyDCjy0u4O3tM7JqPCuc5kXSx4xZ-BjzDEZvnW_vUJBTrmjEmq96qy39ZBSbbaMO-2IYKKHGcruJFxmLsQodzWA0wXrkgrdOt189sRN72pKyJu4WFay8DEYw6y33LvKWGscn0I3TTK3FhLqsj_dgertMgt0pShNkBbnwoPC8Z4Ljl-NAelz_8eo7_p82liVgtVjlAJCOGgYtlHQZs6T3Rh2-UoYLpYS2KMo9om3X-Dr6RrJy5_PbUmwbl8uCAFZvwEPnCH6PfloGOUmoZrYfUAxrrGU8rK7nZ1OJFYKEdPReRwkRvuOHp1C39aGGAuPzmFfk1_iW9cWH92tn811HrqwOdcZP5tiOCy-uRW9pAJblb1sTRRLQvwi76jPjgI_OLQATgXeIwDjweEEcr4fsxQcfW2mbaNjo0xICbD3Rzw-ymhDFetdKlsmyBV17RxycfhmQdt7S4fqrexd5hIFq3dM5xvsXKz2ZvK4klfWw4g1_p2ohPvS7ixgaIyIRfQxgwkj3a33SS7s6KrMB9Ou0mq0aBbVJxQ8QqhwxLoqCy0anpo00o7FkprMK54qyx2DBLL3QC7Pt9iqAzN9qeaK70TXMOUn1pNXeL2pEgonWdEgkQ-E3GHn7R2Lu0M_tf2CxxAznQpHvmFWm0gaFLnIJc65z3meRe07TXGnpo4OkalG7yUq6z7a-lqrTEzz0JeW_Vg9CA64Z-GJkY0g2UXBaghE=s240-no?authuser=0"
                    },
                    {
                        id:2,
                        img: "https://lh3.googleusercontent.com/zQAsOOG1irMBnUpL41tSycLdWv2Qaa-uVHWy88GZzUXZIA9ECdQoh0VgyHnPgjoKpZzTIvq_RmXxw7zR2-_EuATHnqfaUrdQEeo8SMBJVp_vOZF_g8pTCYFnCnR05cC5HmXB2YGlb5m0Qa5YV4KqUwQkcqFEZDGy1kkTK5DFd_dAnEdjPU1rhynokrg8akjntOhuPSnaFDZuqd5L0Kck-DdUw52Xq3S1DZdW3cIaKfkjR1jRJd_qo2TMnmXUsjxUo3rwgl_eZKAIfifVhrHeK0KpN6ySu9d_lqu9C9plTy-bfu-QFriiC3aaIPnMaZ-uYIvbYvJoRzhjpBpS1MyZ_M71SKNOek2wP-A51pKEHcOkNIjzpk6028bB7oUj53E-PzBYHjFA9NAf1dCEYraxzSDpcmE5C26qWj9xhri7caKfEP28e05zkE32ILYS6P5tV8ULYdWUOdBotlLYebsd_n1Uy9Y3Twlb7DnuFnUcjgF-xDKXM0hHLszj9tEMiGgsU5rELTQ6mywlmGRLN41mUdS-PgO_2PX6ww6aV3QiWq2l3jGSggddhlecgO0XWFfvT3uc3ldqCGgPe9eA9LQGKI-JRA4AHfhSuPqccWBnb5ELavmScIFCjhwWsFNHIKK0D2P612C7QwWz21zP0HtYNMmG2FsZAaxgOgwni2ljPqekUr2a8Zphzi1vyKkYP8UodeiLuxH2oE5XcKhoaGClfum5Me8M2l28Bk5ECyCCnpdtwRgzUTpWvbccBws5XTzuc2SF5kPNVL8usBeCPr7wdBcq36G2ejoNB2mYEDNxdZhgDvc9yu040YcBME3lNHr8EkM=s240-no?authuser=0"
                    },
                    {
                        id:3,
                        img: "https://lh3.googleusercontent.com/SXKA8Ye6vO-HTuk67MRdhT07oaaT7BWRhEXcWIwZYxpYSm3WgGhv7Quwn7B0lUfmSREQVafsqO-byXRIqJs6_4qRdN-GGvXKkVAWNZDxEnDIdddX_12DwTsXJheThc1dnLa5NvA6x2McSeWYlOTXbQIt15-47ffCHSc1Z0JILJWBeZrNsGZ1_4Pv5OevPGeiWSj3XDQ6iqdZwHUxA4o8tNFgcqtXwCZLPExqLA_-C_xFxaDv5KDzMU9PSQzIBeBvSICF6zBhkuoR0egGEFfx2aoJ88AhFpurPMmTw09uIS10AnOXUXWbS21aoRLIJ3sHZE0hphGu3YhUuW9_6Lqh2gBLpea6BJ6RLmMKI6wmcunZqqaIqxaNTXFeycUjuHHr8X8dF23dMpIaJYUxLQM4PU47U2gfd24CTmhnFjiRZmhAg7O3o-byRWXsCjzUVk8QS1d_IprQh7Cq89o70SRnkC7iycUJcmNFu9e4ZA-HUeMLGQYc9gsYkaw-dCont4seePXgpb3WWbbA0IpSZtLqMFCcgKIGQq0Ey0t7-V8e1n4BRh9e_j1VRjSo-CHGaelk5Hc62oDWC-5YCQlEaQVTW279ZqzMJg_At5l5GGtRWV0T_lz2yqvYhxTIWyulS6N9-zVgfi5qQFnM9pl1so1dXaaka9lSXr_VAbCX0_9bt-KtGrvGPfL2mbX0IUCo00Z9hysgUh1M8VxBffxfR5r9EfP8jfab4SG6uZIo9hjl6WILm5_k5CFSquT7P-p27rNBGBfSUobtaAzLXVE9G4pldw2BMA9xUf87OUNrBI261Odsc0bI4FhBCVkaQcqiydhVLTA=s240-no?authuser=0"
                    },
                    {
                        id:4,
                        img: "https://lh3.googleusercontent.com/bm1EuDJrqhQQRE4yH229Oh2m4q7lcS_vu1BaMbEryMV3dQ-gCkYj9Wnq_a1foXjEVy5SfS4RKdYElILRGgoM8HSs4csF4lxwASnpDnbXdx2uUGI9WoNCPCxbvB-zGRx7jSf3XqgOB1uwf8Xa5ieTMiTlM298kh_CMuhcNBHxGBQ-yMUqfKZVE8vneWc0WERKQJzyImlhYlX67Yjgrl4XXnje9XIW-uE4qTcdpCQXT7Qkk7g2cXhVO3d26NtGP1LIC2OZUxsNyKBr-90TAcJlvbRZHTofXjA7d0h6-Pl0L5aCMryXHWITmDYKtmgSCwOjrT-K338k_cHnjRFm30RAp9hPTo_T4PGYr4nLu1UIRzrt5fnK5K6rIchy87hNOZ0rTkv7meRpuEdo6ZYIOdv31pland8RVx--7YLmGhxRCTNklmUq2XRnIsxfGZ94hPj0DE5JHFF-D44V7VY3OeyZs2u0SNWgCFyUZoe3HW3-oK7b9q1pgDJjIEyyUs_kmbyss9TNHrgZ2SCnw5myad0OGfbQzQIbr3sSPMI61SmpHSWkcdrzxAYhPJcIS3xNA4qZCvB2OvwMwcz8mvE54-VBwdtOaSSxA3RJY03Q5oPwH590q2pplW1Cyz0dFnEtThqNyxPBQKrrry6RFMHbyqdawPaUS0grwaSv5YvgF-DIa588p9_US2BcfTUb40lKUyRdaNjXjf3OlPCJ3jbbgklb9NiwsfJukvmfswWW37nRvg4ohwWj-echZ59WP9UpuLPpCHAazfxYx6JipcSThWoXSGtobv4VcGNpd-OewWF7iOjLQ89HacMdRChLtqyLxm0e8rI=s240-no?authuser=0"
                    },
                    {
                        id:5,
                        img: "https://lh3.googleusercontent.com/rFjEkbmgp5idctBM7maMjYfnK9IMH7oP2zDcYyDQ3vItqJGga3d0SlGdFz28kO7o1GWJ5771Fz9ltRyu9XzxZynXHLKn3VW-rRGvogCQBG9s05p8ZZD7s_HEok0BRAnkBowVSdEfi4aacjXn76IP0jqGR0JfsNdBjiKVLeEvpoEL9MU3mib3n025LKbdY75oVzvSu2JMV4IlbdD26OBj_zqchiW1tF9VYrvowmOoboZPa7ScApNv_C161o31oKMOiUKLgShRPxvyQatFb3lXg8SeLMwTGHq8wPU6so2-DQL7xwYC_oDb0xlZMjk6-vqReXyH3puNUlL3kEtIMNg5hLzwaPMVY5dV0-tmCD2FDj35IjALJFIKoOIeVGXBvQCUPNXQxBdvf0TBNmN_vnhQTHiaP_tjcJUu3hSS8mxcLGmQa12CCGTpogSN876cVh5qKv2iLiYKRNXXztTZuN-_lY9KkrsNqR05w_4QhOfYJYF0utjATLqUoTpuC90Fs2gUiCeAJMhigxtXg5-A3ZIpz_J33VHJkbL_8BpQm4PPXtekLIsTZbrUOOgXYKFu3FDfwOgGYEz60KZUL_4I7eG5iFhD_8I03JYwWQGuRfCeGx6yXcMCU6h9TsM43in53uBbpyaCVUvi8CICzlhUhlqLkCcbGwl83Wn1d83rL1WgQnxUoQUvAaAnVy4i_Zz0dsu6agc49YuQewjP_Z8W_i3Z_W0d_UxRyS1DDUB2K_uxiIM_AItJ7lG34DqYfdHeO8aaoGm-E029Dvi13Fsn3FduACAG1hKe-LllU7gMKNe6sYupIwaXsH2FPglKAu9hvw1HNkk=s240-no?authuser=0"
                    },
                    {
                        id:6,
                        img: "https://lh3.googleusercontent.com/kB8Y77k-HG_3uH4Z2HsaTNA0U6FpHHv4PmuGt3UDDrq4JKEBnB3By6tpKmx4yaSnvnUgzszVV1d4G8fWnF0R7cVxATBEJJ7X2JVN38I5WAwjrQqp3ocVCTN5xklLTD2Qw8prYUl3nRScrFzuQYm6CvaBEi_KvMdeS6z_YXiRUUpe9NX9BuTNIOhzejo2KTg6iJxMUuT0XM5xnmu_SRVe6dv16QueD8LBkiOOVUvrkQfzS52FcbejmvOGyC-pGPJuCYEsfGh0FT9wTyOUsQ9fFLs4TPR33bHfHAX37kV7RkPKgFc_qfuwWwQWD9Fggf9UUnYLUneCx5exOx_WeXFuDAZwjFCV9EOtF9ZcgFOr7n3EH6pFIg_L7s2ZwpMQ-SXU1dqF4poyhHUO18pohvO8WSBI8mius42_CnPI3u8VxK_kiznFUXnVgqTTXCI0SnSmsr3pGhd3aD-Dvcr2otvTCs6vwVGuYIAbOli25pg8Be-OPJ8kDo1JZBqbOlNJglW8E2tM8KUD8UZnnz_FbX_aM5beeljTq_IFXQtkd4KvJAUUKvIcmOumfKf22m7jImte4tPgIZjAb0lipxbAgh6IJa5265rT4MFXFlBQBLsRMR_wrzo9ILAmF72HPO2hQnhE-y7KvAmZyvjc6gLlPr3MmFkJAQbayhgVezL28djOnijSqJYD_N73JFU-tArfFNAZh6KVFZQDY6Y4a8qykajXAT1VGbpE4c38LX3UNsybbna0Z9OfOwGAQ7KGnCh77ei8BW5_qsyfDhZvMP2J3FA5EqKpLjYmbJzuLgg3OL6ZlYQCS6hIllCcou3jrFwXf33Plbc=s240-no?authuser=0"
                    },
                    {
                        id:7,
                        img: "https://lh3.googleusercontent.com/bm1EuDJrqhQQRE4yH229Oh2m4q7lcS_vu1BaMbEryMV3dQ-gCkYj9Wnq_a1foXjEVy5SfS4RKdYElILRGgoM8HSs4csF4lxwASnpDnbXdx2uUGI9WoNCPCxbvB-zGRx7jSf3XqgOB1uwf8Xa5ieTMiTlM298kh_CMuhcNBHxGBQ-yMUqfKZVE8vneWc0WERKQJzyImlhYlX67Yjgrl4XXnje9XIW-uE4qTcdpCQXT7Qkk7g2cXhVO3d26NtGP1LIC2OZUxsNyKBr-90TAcJlvbRZHTofXjA7d0h6-Pl0L5aCMryXHWITmDYKtmgSCwOjrT-K338k_cHnjRFm30RAp9hPTo_T4PGYr4nLu1UIRzrt5fnK5K6rIchy87hNOZ0rTkv7meRpuEdo6ZYIOdv31pland8RVx--7YLmGhxRCTNklmUq2XRnIsxfGZ94hPj0DE5JHFF-D44V7VY3OeyZs2u0SNWgCFyUZoe3HW3-oK7b9q1pgDJjIEyyUs_kmbyss9TNHrgZ2SCnw5myad0OGfbQzQIbr3sSPMI61SmpHSWkcdrzxAYhPJcIS3xNA4qZCvB2OvwMwcz8mvE54-VBwdtOaSSxA3RJY03Q5oPwH590q2pplW1Cyz0dFnEtThqNyxPBQKrrry6RFMHbyqdawPaUS0grwaSv5YvgF-DIa588p9_US2BcfTUb40lKUyRdaNjXjf3OlPCJ3jbbgklb9NiwsfJukvmfswWW37nRvg4ohwWj-echZ59WP9UpuLPpCHAazfxYx6JipcSThWoXSGtobv4VcGNpd-OewWF7iOjLQ89HacMdRChLtqyLxm0e8rI=s240-no?authuser=0"
                    },
                    {
                        id:8,
                        img: "https://lh3.googleusercontent.com/SXKA8Ye6vO-HTuk67MRdhT07oaaT7BWRhEXcWIwZYxpYSm3WgGhv7Quwn7B0lUfmSREQVafsqO-byXRIqJs6_4qRdN-GGvXKkVAWNZDxEnDIdddX_12DwTsXJheThc1dnLa5NvA6x2McSeWYlOTXbQIt15-47ffCHSc1Z0JILJWBeZrNsGZ1_4Pv5OevPGeiWSj3XDQ6iqdZwHUxA4o8tNFgcqtXwCZLPExqLA_-C_xFxaDv5KDzMU9PSQzIBeBvSICF6zBhkuoR0egGEFfx2aoJ88AhFpurPMmTw09uIS10AnOXUXWbS21aoRLIJ3sHZE0hphGu3YhUuW9_6Lqh2gBLpea6BJ6RLmMKI6wmcunZqqaIqxaNTXFeycUjuHHr8X8dF23dMpIaJYUxLQM4PU47U2gfd24CTmhnFjiRZmhAg7O3o-byRWXsCjzUVk8QS1d_IprQh7Cq89o70SRnkC7iycUJcmNFu9e4ZA-HUeMLGQYc9gsYkaw-dCont4seePXgpb3WWbbA0IpSZtLqMFCcgKIGQq0Ey0t7-V8e1n4BRh9e_j1VRjSo-CHGaelk5Hc62oDWC-5YCQlEaQVTW279ZqzMJg_At5l5GGtRWV0T_lz2yqvYhxTIWyulS6N9-zVgfi5qQFnM9pl1so1dXaaka9lSXr_VAbCX0_9bt-KtGrvGPfL2mbX0IUCo00Z9hysgUh1M8VxBffxfR5r9EfP8jfab4SG6uZIo9hjl6WILm5_k5CFSquT7P-p27rNBGBfSUobtaAzLXVE9G4pldw2BMA9xUf87OUNrBI261Odsc0bI4FhBCVkaQcqiydhVLTA=s240-no?authuser=0"
                    }
                ]
            }
        }
    }
</script>

<style>
    .thumbnail {
        width: 240px;
    }
    .thumbnail img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
