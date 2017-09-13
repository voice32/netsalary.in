'use strict';

angular.module('niApp.calc', ['ngRoute', 'ngSanitize'])
    .directive('selectRegion', ['$timeout', 'DataService', function ($timeout, DataService) {
        return {
            link: function (scope, element, attrs) {
                scope.$on('regionsloaded', function () {
                    $timeout(function () {
                        $('select').material_select();
                        if (scope.$parent.$parent.region) {
                            $('.select-dropdown').val(scope.$parent.$parent.region.name);
                        }
                    }, 0, false);
                });
                scope.$watch('region', function (newValue, oldValue) {
                    if (newValue != null) {
                        DataService.setCurrentRegion(newValue);
                        scope.$parent.$parent.region = DataService.currentRegion;
                    }
                }, true);
            }
        };
    }])
    .controller('CalcCtrl', ['$scope', '$routeParams', '$location', '$window', 'DataService', function ($scope, $routeParams, $location, $window, DataService) {
        $('#newCountry').autocomplete({
            data: DataService.list()
        });

        $scope.$on('$includeContentLoaded', function (event) {
            $window.ga('send', 'pageview', {page: $location.url()});
            $scope.$broadcast('regionsloaded');
        });

        $scope.selectCountry = function () {
            var url = DataService.getUrl($scope.newCountry);
            if ($scope.newCountry.length && url != null) {
                $location.url(url);
            }
        };

        if ((DataService.findCountry($routeParams.country.toLowerCase()) && !$routeParams.region) || ($routeParams.region && DataService.findRegion($routeParams.country.toLowerCase(), $routeParams.region.toLowerCase()))) {
            $scope.found = true;
            DataService.setCurrentCountry($routeParams.country.toLowerCase());
            $scope.country = DataService.currentCountry;
            $scope.region = null;

            if ($routeParams.region) {
                DataService.setCurrentRegion($routeParams.region.toLowerCase());
                $scope.region = DataService.currentRegion;

            }

            $(function () {
                $('meta[name=description]').remove();
                if (!$scope.region) {
                    $(document).attr("title", $scope.country.title);
                    $('title').after('<meta name="description" content="' + $scope.country.description + '">');
                } else {
                    $(document).attr("title", $scope.region.title);
                    $('title').after('<meta name="description" content="' + $scope.region.description + '">');
                }
            });


            $scope.$watch('region', function (newValue, oldValue, scope) {
                if (newValue === oldValue) {
                    return;
                }
                ;
                scope.calculate();
                $(document).ready(function () {
                    $('.collapsible').collapsible();
                });
            });

            $scope.newCountry = '';

            $scope.calc = {
                federal: 0,
                regional: 0,
                surtax: 0,
                result: 0,
                tax: 0,
                effectiveRate: 0
            };

            $scope.calculate = function () {
                if (typeof $scope.calc.gross != "undefined" && $scope.calc.gross > 0) {
                    if ($scope.country.rates.flat) {
                        $scope.calc.federal = $scope.calc.gross * $scope.country.rates.rate;
                    } else {
                        $scope.calc.federal = 0;
                        for (var i = 0; i < $scope.country.rates.rates.length; i++) {
                            var tierTax = 0;
                            if ($scope.calc.gross > $scope.country.rates.rates[i].min) {
                                tierTax = Math.min($scope.calc.gross - $scope.country.rates.rates[i].min, $scope.country.rates.rates[i].max - $scope.country.rates.rates[i].min) * $scope.country.rates.rates[i].rate;
                                $scope.calc.federal = $scope.calc.federal + tierTax;
                            }
                        }
                        if ($scope.country.rates.exemptAmount > 0) {
                            $scope.calc.federal = Math.max($scope.calc.federal - ($scope.country.rates.exemptAmount * $scope.country.rates.exemptRate), 0);
                        }
                    }

                    if ($scope.region) {
                        if ($scope.region.rates.flat) {
                            $scope.calc.regional = $scope.calc.gross = $scope.region.rates.rate;
                        } else {
                            $scope.calc.regional = 0;

                            for (var i = 0; i < $scope.region.rates.rates.length; i++) {
                                var tierTax = 0;
                                if ($scope.calc.gross > $scope.region.rates.rates[i].min) {
                                    tierTax = Math.min($scope.calc.gross - $scope.region.rates.rates[i].min, $scope.region.rates.rates[i].max - $scope.region.rates.rates[i].min) * $scope.region.rates.rates[i].rate;
                                    $scope.calc.regional = $scope.calc.regional + tierTax;
                                }
                            }
                            if ($scope.region.rates.exemptAmount > 0) {
                                $scope.calc.regional = Math.max($scope.calc.regional - ($scope.region.rates.exemptAmount * $scope.region.rates.exemptRate), 0);
                            }

                            switch ($scope.region.url) {
                                case 'ontario':
                                    if ($scope.calc.regional >= 5739) {
                                        $scope.calc.surtax = (($scope.calc.regional - 4484) * 0.2) + (($scope.calc.regional - 5739) * 0.36);
                                    } else if ($scope.calc.regional >= 4484) {
                                        $scope.calc.surtax = ($scope.calc.regional - 4484) * 0.2;
                                    } else {
                                        $scope.calc.surtax = 0;
                                    }
                                    break;
                                case 'prince_edward_island':
                                    if ($scope.calc.regional >= 12500) {
                                        $scope.calc.surtax = ($scope.calc.regional - 12500) * 0.1;
                                    } else {
                                        $scope.calc.surtax = 0;
                                    }
                                    break;
                                case 'quebec':
                                    $scope.calc.federal = $scope.calc.federal * 0.835;
                            }

                            $scope.calc.regional = $scope.calc.regional + $scope.calc.surtax;
                        }
                    }

                    $scope.calc.tax = Math.round($scope.calc.federal + $scope.calc.regional);
                    $scope.calc.result = Math.round($scope.calc.gross - $scope.calc.tax);
                    $scope.calc.effectiveRate = (($scope.calc.tax / $scope.calc.gross) * 100).toFixed(2);
                }
            };


        } else {
            $(function () {
                $(document).attr("title", "Net salary calculator");
                $('meta[name=description]').remove();
                $('title').after('<meta name="description" content="Simple personal income tax and net salary calculator">');
            });

            $scope.found = false;
            $scope.countries = DataService.countries;
        }

    }]);