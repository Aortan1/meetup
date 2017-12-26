<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large router to="/meetup/new" class="info">Organize Meetup</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex sx12>
                <v-carousel>
                    <v-carousel-item v-for="meetup in meetups" v-bind:src="meetup.imageUrl" :key="meetup.id"></v-carousel-item>
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

<style>
    h1{
        color: green;
    }

</style>