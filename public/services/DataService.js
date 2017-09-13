'use strict';

angular.module('niApp.data', ['ngRoute'])
    .factory('DataService', [
        function () {


            var instance = {
                autocompleteCountries: {
                    'Russia': '/components/img/svg/ru.svg'
                },
                cntList: [
                    'russia'
                ],
                cntData: {
                    'russia': {
                        full: 'Russia',
                        icon: '/components/img/svg/ru.svg'
                    }
                }
            };

            instance.countries = countries;
            instance.list = function(){
                var object = {}
                for (var i=0; i<instance.countries.length; i++){
                    object[instance.countries[i].name] = '';
                }

                return object;
            };

            instance.getUrl = function(cntName){
                for (var i=0; i<instance.countries.length; i++){
                    if (instance.countries[i].name == cntName)
                        return instance.countries[i].url
                }
                return null;
            };

            instance.setCurrentCountry = function(countryUrl){
                for (var i=0; i<instance.countries.length; i++){
                    if (instance.countries[i].url == countryUrl)
                        instance.currentCountry = instance.countries[i];
                }
            };

            instance.setCurrentRegion = function(regionUrl){
                for (var i=0; i<instance.currentCountry.regions.length; i++){
                    if (instance.currentCountry.regions[i].url == regionUrl)
                        instance.currentRegion = instance.currentCountry.regions[i];
                }
            };

            instance.findCountry = function(countryUrl){
                for (var i=0; i<instance.countries.length; i++){
                    if (instance.countries[i].url == countryUrl)
                        return true;
                }
                return false
            };

            instance.findRegion = function(countryUrl, regionUrl){
                for (var i=0; i<instance.countries.length; i++){
                    if (instance.countries[i].url == countryUrl)
                        for (var i1=0; i1<instance.countries[i].regions.length; i1++){
                            if (instance.countries[i].regions[i1].url == regionUrl)
                                return true;
                        }
                }

                return false;
            };

            instance.currentCountry = {};
            instance.currentRegion = {};
            return instance;

        }]);
