(function () {
    angular.module('app').controller('homeController',
        [
            function () {
                var vm = this;
                vm.testListMega = [
                    {
                        title: "HEADPHONES",
                        items: [
                            {
                                nameRoute: "fullsize-headphone",
                                name: "Fullsize Headphone"
                            },
                            {
                                nameRoute: "inear-headphone",
                                name: "Inear Headphone"
                            },
                            {
                                nameRoute: "earbud-headphone",
                                name: "Earbud Headphone"
                            },
                            {
                                nameRoute: "portable-headphone",
                                name: "Portable Headphone"
                            },
                            {
                                nameRoute: "bluetooth-headphone",
                                name: "bluetooth Headphone"
                            }
                        ]
                    },
                    {
                        title: "DAC / HEADAMP",
                        items: [
                            {
                                nameRoute: "fullsize-headphone",
                                name: "Fullsize Headphone"
                            },
                            {
                                nameRoute: "inear-headphone",
                                name: "Inear Headphone"
                            },
                            {
                                nameRoute: "earbud-headphone",
                                name: "Earbud Headphone"
                            },
                            {
                                nameRoute: "portable-headphone",
                                name: "Portable Headphone"
                            },
                            {
                                nameRoute: "bluetooth-headphone",
                                name: "bluetooth Headphone"
                            }
                        ]
                    },
                    {
                        title: "MUSIC PLAYER",
                        items: [
                            {
                                nameRoute: "fullsize-headphone",
                                name: "Fullsize Headphone"
                            },
                            {
                                nameRoute: "inear-headphone",
                                name: "Inear Headphone"
                            },
                            {
                                nameRoute: "earbud-headphone",
                                name: "Earbud Headphone"
                            },
                            {
                                nameRoute: "portable-headphone",
                                name: "Portable Headphone"
                            },
                            {
                                nameRoute: "bluetooth-headphone",
                                name: "bluetooth Headphone"
                            }
                        ]
                    },
                    {
                        title: "AUDIO ACCESSORIES",
                        items: [
                            {
                                nameRoute: "fullsize-headphone",
                                name: "Fullsize Headphone"
                            },
                            {
                                nameRoute: "inear-headphone",
                                name: "Inear Headphone"
                            },
                            {
                                nameRoute: "earbud-headphone",
                                name: "Earbud Headphone"
                            },
                            {
                                nameRoute: "portable-headphone",
                                name: "Portable Headphone"
                            },
                            {
                                nameRoute: "bluetooth-headphone",
                                name: "bluetooth Headphone"
                            }
                        ]
                    }
                ];
                vm.testProducts = {
                    commingProducts: [
                        {
                            status: "Comming",
                            productImage: 'assets/images/mouse1.png',
                            brand: 'LEOPOLD',
                            name: 'FC900R Blue Grey Edition',
                            priceNumber: 3190000
                        },
                        {
                            status: "HOT",
                            productImage: 'assets/images/keyboard.jpg',
                            brand: 'LEOPOLD',
                            name: 'FC900R Blue Grey Edition',
                            priceNumber: 3190000
                        },
                        {
                            productImage: 'assets/images/keyboard.jpg',
                            brand: 'LEOPOLD',
                            name: 'FC900R Blue Grey Edition',
                            priceNumber: 3190000
                        },
                        {
                            status: "HOT",
                            productImage: 'assets/images/keyboard.jpg',
                            brand: 'LEOPOLD',
                            name: 'FC900R Blue Grey Edition',
                            priceNumber: 3190000
                        },
                        {
                            productImage: 'assets/images/lg-34uc98.png',
                            brand: 'LEOPOLD',
                            name: 'FC900R Blue Grey Edition',
                            priceNumber: 3190000
                        },
                        {
                            status: "New",
                            productImage: 'assets/images/dreamwave-harmony.png',
                            brand: 'LEOPOLD',
                            name: 'FC900R Blue Grey Edition',
                            priceNumber: 3190000
                        },
                        {
                            productImage: 'assets/images/dreamwave-survivor.png',
                            brand: 'LEOPOLD',
                            name: 'FC900R Blue Grey Edition',
                            priceNumber: 3190000
                        }
                    ],
                    bestSellerProducts: [
                        {
                            productImage: 'assets/images/fiio.jpg',
                            brand: 'LEOPOLD',
                            name: 'FC900R Blue Grey Edition',
                            priceNumber: 3190000
                        },
                        {
                            status: "Comming",
                            productImage: 'assets/images/headphone.png',
                            brand: 'LEOPOLD',
                            name: 'FC900R Blue Grey Edition',
                            priceNumber: 3190000
                        },
                        {
                            productImage: 'assets/images/keyboard.jpg',
                            brand: 'LEOPOLD',
                            name: 'FC900R Blue Grey Edition',
                            priceNumber: 3190000
                        },
                        {
                            productImage: 'assets/images/keyboard.jpg',
                            brand: 'LEOPOLD',
                            name: 'FC900R Blue Grey Edition',
                            priceNumber: 3190000
                        },
                        {
                            status: "HOT",
                            productImage: 'assets/images/keyboard.jpg',
                            brand: 'LEOPOLD',
                            name: 'FC900R Blue Grey Edition',
                            priceNumber: 3190000
                        },
                        {
                            productImage: 'assets/images/razer-pad.png',
                            brand: 'LEOPOLD',
                            name: 'FC900R Blue Grey Edition',
                            priceNumber: 3190000
                        },
                        {
                            status: "Comming",
                            productImage: 'assets/images/razer-pc.png',
                            brand: 'LEOPOLD',
                            name: 'FC900R Blue Grey Edition',
                            priceNumber: 3190000
                        }
                    ]
                };
                vm.testBrands = {
                    all: "audio",
                    slide: [
                        {
                            image: "assets/images/svg-icon/brands/computer/asrock-logo.svg",
                            name: "ASRock"
                        },
                        {
                            image: "assets/images/svg-icon/brands/computer/asus-logo.svg",
                            name: "ASUS"
                        },
                        {
                            image: "assets/images/svg-icon/brands/computer/avexir-logo.svg",
                            name: "AVEXIR"
                        },
                        {
                            image: "assets/images/svg-icon/brands/computer/benq-logo.svg",
                            name: "BENQ"
                        },
                        {
                            image: "assets/images/svg-icon/brands/speaker/razer-logo.svg",
                            name: "Razer"
                        },
                        {
                            image: "assets/images/svg-icon/brands/computer/asrock-logo.svg",
                            name: "ASRock"
                        },
                        {
                            image: "assets/images/svg-icon/brands/computer/asrock-logo.svg",
                            name: "ASRock"
                        },
                        {
                            image: "assets/images/svg-icon/brands/computer/asrock-logo.svg",
                            name: "ASRock"
                        }
                    ]
                }
            }]);
} ());