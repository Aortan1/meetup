<template>

    <!--<v-container style="margin-top: 0;">-->

        <!--<v-layout row wrap>-->
            <!--<v-flex xs12 sm6 class="text-xs-center text-sm-right">-->
                <!--<v-btn large to="/meetups" class="info">Explore Meetups</v-btn>-->
            <!--</v-flex>-->
            <!--<v-flex xs12 sm6 class="text-xs-center text-sm-left">-->
                <!--<v-btn large to="/meetup/new" class="info">Organize Meetup</v-btn>-->
            <!--</v-flex>-->
        <!--</v-layout>-->
    <!--</v-container>-->


    <v-container mt-0>
    <!--<v-container  style="border: 2px double green; position: absolute; top: 60px;">-->
        <v-layout row wrap mb-2>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large to="/meetups" class="info">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large to="/meetup/new" class="info">Organize Meetup</v-btn>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex sx12>
                <v-carousel>
                    <v-carousel-item v-for="meetup in meetups" v-bind:src="meetup.imageUrl" :key="meetup.id">
                        <div class="title"> {{ meetup.title }}</div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'Home',
        data: function() {
            return {
                meetups:[
                    {imageUrl: 'http://maxpixel.freegreatpicture.com/static/photo/1x/Mount-Cook-River-New-Zealand-Alpine-Meltwater-340329.jpg', id: 'someid111', title: 'Mount Cook River, New Zealand'},
                    {imageUrl: 'http://maxpixel.freegreatpicture.com/static/photo/1x/Mountain-Nature-New-Zealand-View-Landscape-Lake-679068.jpg', id: 'someid112', title: 'Mountain Nature, New Zealand'},
                    {imageUrl: 'http://maxpixel.freegreatpicture.com/static/photo/1x/New-Zealand-Seascape-Sunrise-Landscape-Sunrise-1239727.jpg', id: 'someid113', title: 'Seascape Sunrise, New Zealand'}
                ]
            }
        }
    }
</script>

<style scoped>
    h1{
        color: green;
    }
    .title{
        background-color: rgba(0,0,0,0.7);
        color: rgba(255,255,255,0.8);
        font-size: 1.5em!important;
        padding: 10px;
        position: absolute;
        bottom: 60px;

    }

</style>