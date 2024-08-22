<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <div class="footer__col">
                    <router-link class="logo" to="/">
                        <img src="@/assets/images/logo.svg" alt="logo">
                    </router-link>  
                    <div class="footer__col-text">
                        <p>INTEFRA is a Russian platform that brings together leading Italian brands of clothing, shoes and accessories.</p>
                        <p>INTEFRA.RU - since 2012 - 100% original products</p>
                    </div>
                </div>
                <div class="footer__col">
                    <div class="footer__address">
                        <div class="footer__address-item">
                            <div class="footer__address-location">
                                <h3 class="footer__address-country">Office in Russia</h3>
                                <div class="footer__address-text">
                                    <p>Moscow, Kutuzovsky pr. 2</p>
                                    <p>St. Petersburg, Bolshoy Prospekt P.S. 13</p>
                                </div>
                            </div>
                            <img src="@/assets/images/footer/location-img.png" alt="location-img">
                        </div>
                        <div class="footer__address-item">
                            <div class="footer__address-location">
                                <h3 class="footer__address-country">Office in Italy</h3>
                                <div class="footer__address-text">
                                    <p>Milano, Via Manzoni 23</p>
                                </div>
                            </div>
                            <img src="@/assets/images/footer/location-img.png" alt="location-img">
                        </div>
                    </div>
                    <ul class="footer__socials-list">
                        <li class="footer__socials-item">
                            <a href="#">
                                <img src="@/assets/images/footer/instagram.svg" alt="instagram">
                            </a>
                        </li>
                        <li class="footer__socials-item">
                            <a href="#">
                                <img src="@/assets/images/footer/telegram.svg" alt="telegram">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>