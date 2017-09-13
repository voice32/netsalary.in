/**
 * Created by rinat.maksutov on 27.12.2016.
 */
var countries = [
    {
        name: "Canada",
        url: "canada",
        flag: '/components/img/svg/ca.svg',
        currency: 'CAD',
        text: "In Canada there are two types of tax applied to the salary income: federal and provincial. Both rates are progressive, meaning that they vary depending on how much a person earns. Each province has their own income bands and applied rates.<br/>" +
        "Federal tax rates range from 15% to 33% with non-taxable amount of 11,474 CAD.",
        disclaimer: "Please note that estimations provided above are indicative, because the exact tax rate and net income may depend on your personal circumstances. For precise pesonal income tax estimates you should consult with the <a href='http://www.cra-arc.gc.ca/' target='_blank'>Canadian tax authority</a> or professional tax consultants.",
        rates: {
            flat: false,
            exemptAmount: 11474,
            exemptRate: 0.15,
            rates: [
                {
                    min: 0,
                    max: 45282,
                    rate: 0.15
                },
                {
                    min: 45282,
                    max: 90563,
                    rate: 0.205
                },
                {
                    min: 90563,
                    max: 140388,
                    rate: 0.26
                },
                {
                    min: 140388,
                    max: 200000,
                    rate: 0.29
                },
                {
                    min: 200000,
                    max: +Infinity,
                    rate: 0.33
                }
            ]
        },
        title: "Net salary calculator - Canada",
        description: "Simple personal income tax and net salary calculator for Canada",
        regionLabel: "Province",
        regions: [
            {
                name: "Alberta",
                url: "alberta",
                code: 'ab',
                text: 'Personal income tax rate in Alberta varies from 10% to 15% with basic personal amount of 18,451 CAD (non-taxable).',
                title: "Net salary calculator - Alberta, Canada",
                description: "Simple personal income tax and net salary calculator for Alberta province, Canada",
                rates: {
                    flat: false,
                    exemptAmount: 18451,
                    exemptRate: 0.1,
                    rates: [
                        {
                            min: 0,
                            max: 125000,
                            rate: 0.1
                        },
                        {
                            min: 125000,
                            max: 150000,
                            rate: 0.12
                        },
                        {
                            min: 150000,
                            max: 200000,
                            rate: 0.13
                        },
                        {
                            min: 200000,
                            max: 300000,
                            rate: 0.14
                        },
                        {
                            min: 300000,
                            max: +Infinity,
                            rate: 0.15
                        }
                    ]
                }
            },
            {
                name: "British Columbia",
                url: "british_columbia",
                code: 'bc',
                text: 'Personal income tax rate in British Columbia varies from 5.06% to 14.7% with basic personal amount of 10,027 CAD (non-taxable).',
                title: "Net salary calculator - British Columbia, Canada",
                description: "Simple personal income tax and net salary calculator for British Columbia province, Canada",
                rates: {
                    flat: false,
                    exemptAmount: 10027,
                    exemptRate: 0.0506,
                    rates: [
                        {
                            min: 0,
                            max: 38210,
                            rate: 0.0506
                        },
                        {
                            min: 38210,
                            max: 76421,
                            rate: 0.077
                        },
                        {
                            min: 76421,
                            max: 87741,
                            rate: 0.105
                        },
                        {
                            min: 87741,
                            max: 106543,
                            rate: 0.1229
                        },
                        {
                            min: 106543,
                            max: +Infinity,
                            rate: 0.1470
                        }
                    ]
                }
            },
            {
                name: "Manitoba",
                url: "manitoba",
                code: 'mb',
                text: 'Personal income tax rate in Manitoba varies from 10.8% to 17,4% with basic personal amount of 9,134 CAD (non-taxable).',
                title: "Net salary calculator - Manitoba, Canada",
                description: "Simple personal income tax and net salary calculator for Manitoba province, Canada",
                rates: {
                    flat: false,
                    exemptAmount: 9134,
                    exemptRate: 0.108,
                    rates: [
                        {
                            min: 0,
                            max: 31000,
                            rate: 0.108
                        },
                        {
                            min: 31000,
                            max: 67000,
                            rate: 0.1275
                        },
                        {
                            min: 67000,
                            max: +Infinity,
                            rate: 0.174
                        }
                    ]
                }
            },
            {
                name: "New Brunswick",
                url: "new_brunswick",
                code: 'nb',
                text: 'Personal income tax rate in New Brunswick varies from about 10% to 25.75% with basic personal amount of 9,758 CAD (non-taxable).',
                title: "Net salary calculator - New Brunswick, Canada",
                description: "Simple personal income tax and net salary calculator for New Brunswick province, Canada",
                rates: {
                    flat: false,
                    exemptAmount: 9758,
                    exemptRate: 0.0968,
                    rates: [
                        {
                            min: 0,
                            max: 40492,
                            rate: 0.0968
                        },
                        {
                            min: 40492,
                            max: 80985,
                            rate: 0.1482
                        },
                        {
                            min: 80985,
                            max: 131664,
                            rate: 0.1652
                        },
                        {
                            min: 131664,
                            max: 150000,
                            rate: 0.1784
                        },
                        {
                            min: 150000,
                            max: 250000,
                            rate: 0.21
                        },
                        {
                            min: 250000,
                            max: +Infinity,
                            rate: 0.2575
                        }
                    ]
                }
            },
            {
                name: "Newfoundland",
                url: "newfoundland",
                code: 'nl',
                text: 'Personal income tax rate in Newfoundland varies from 7.7% to 15.3% with basic personal amount of 8,802 CAD (non-taxable).',
                title: "Net salary calculator - Newfoundland, Canada",
                description: "Simple personal income tax and net salary calculator for Newfoundland province, Canada",
                rates: {
                    flat: false,
                    exemptAmount: 8802,
                    exemptRate: 0.077,
                    rates: [
                        {
                            min: 0,
                            max: 35148,
                            rate: 0.077
                        },
                        {
                            min: 35148,
                            max: 70295,
                            rate: 0.125
                        },
                        {
                            min: 70295,
                            max: 125500,
                            rate: 0.133
                        },
                        {
                            min: 125500,
                            max: 175700,
                            rate: 0.143
                        },
                        {
                            min: 175700,
                            max: +Infinity,
                            rate: 0.153
                        }
                    ]
                }
            },
            {
                name: "Nova Scotia",
                url: "nova_scotia",
                code: 'ns',
                text: 'Personal income tax rate in Nova Scotia varies from 8.79% to 21% with basic personal amount of 8,481 CAD (non-taxable).',
                title: "Net salary calculator - Nova Scotia, Canada",
                description: "Simple personal income tax and net salary calculator for Nova Scotia province, Canada",
                rates: {
                    flat: false,
                    exemptAmount: 8481,
                    exemptRate: 0.0879,
                    rates: [
                        {
                            min: 0,
                            max: 29590,
                            rate: 0.0879
                        },
                        {
                            min: 29590,
                            max: 59180,
                            rate: 0.1495
                        },
                        {
                            min: 59180,
                            max: 93000,
                            rate: 0.1667
                        },
                        {
                            min: 93000,
                            max: 150000,
                            rate: 0.1750
                        },
                        {
                            min: 150000,
                            max: +Infinity,
                            rate: 0.21
                        }
                    ]
                }
            },
            {
                name: "Northwest Territories",
                url: "northwest_territories",
                code: 'nt',
                text: 'Personal income tax rate in Northwest Territories varies from 5.9% to 14.05% with basic personal amount of 14,081 CAD (non-taxable).',
                title: "Net salary calculator - Northwest Territories, Canada",
                description: "Simple personal income tax and net salary calculator for Northwest Territories, Canada",
                rates: {
                    flat: false,
                    exemptAmount: 14081,
                    exemptRate: 0.059,
                    rates: [
                        {
                            min: 0,
                            max: 41011,
                            rate: 0.059
                        },
                        {
                            min: 41011,
                            max: 82024,
                            rate: 0.086
                        },
                        {
                            min: 82024,
                            max: 133353,
                            rate: 0.1220
                        },
                        {
                            min: 133353,
                            max: +Infinity,
                            rate: 0.1405
                        }
                    ]
                }
            },
            {
                name: "Nunavut",
                url: "nunavut",
                code: 'nt',
                text: 'Personal income tax rate in Nunavut varies from 4% to 11.5% with basic personal amount of 12,947 CAD (non-taxable).',
                title: "Net salary calculator - Nunavut, Canada",
                description: "Simple personal income tax and net salary calculator for Nunavut province, Canada",
                rates: {
                    flat: false,
                    exemptAmount: 12947,
                    exemptRate: 0.04,
                    rates: [
                        {
                            min: 0,
                            max: 43176,
                            rate: 0.04
                        },
                        {
                            min: 43176,
                            max: 86351,
                            rate: 0.07
                        },
                        {
                            min: 86351,
                            max: 140388,
                            rate: 0.09
                        },
                        {
                            min: 140388,
                            max: +Infinity,
                            rate: 0.115
                        }
                    ]
                }
            },
            {
                name: "Ontario",
                url: "ontario",
                code: 'on',
                text: 'Personal income tax rate in Ontario varies from 10% to 15% with basic personal amount of 10,011 CAD (non-taxable).',
                title: "Net salary calculator - Ontario, Canada",
                description: "Simple personal income tax and net salary calculator for Ontario province, Canada",
                rates: {
                    flat: false,
                    exemptAmount: 10011,
                    exemptRate: 0.0505,
                    rates: [
                        {
                            min: 0,
                            max: 41536,
                            rate: 0.0505
                        },
                        {
                            min: 41536,
                            max: 83075,
                            rate: 0.0915
                        },
                        {
                            min: 83075,
                            max: 150000,
                            rate: 0.1116
                        },
                        {
                            min: 150000,
                            max: 220000,
                            rate: 0.1216
                        },
                        {
                            min: 220000,
                            max: +Infinity,
                            rate: 0.1316
                        }
                    ],
                    surtax: [
                        {
                            min: 150000,
                            max: 220000,
                            rate: 0.1216
                        },
                        {
                            min: 220000,
                            max: +Infinity,
                            rate: 0.1316
                        }
                    ]
                }
            },
            {
                name: "Prince Edward Island",
                url: "prince_edward_island",
                code: 'pe',
                text: 'Personal income tax rate in Prince Edward Island varies from 9.8% to 16.7% with basic personal amount of 7,708 CAD (non-taxable).',
                title: "Net salary calculator - Prince Edward Island, Canada",
                description: "Simple personal income tax and net salary calculator for Prince Edward Island, Canada",
                rates: {
                    flat: false,
                    exemptAmount: 7708,
                    exemptRate: 0.098,
                    rates: [
                        {
                            min: 0,
                            max: 31984,
                            rate: 0.098
                        },
                        {
                            min: 31984,
                            max: 63969,
                            rate: 0.138
                        },
                        {
                            min: 63969,
                            max: +Infinity,
                            rate: 0.167
                        }
                    ]
                }
            },
            {
                name: "Quebec",
                url: "quebec",
                code: 'qc',
                text: 'Personal income tax rate in Quebec varies from 16% to 25.75% with basic personal amount of 11,550 CAD (non-taxable).',
                title: "Net salary calculator - Quebec, Canada",
                description: "Simple personal income tax and net salary calculator for Quebec province, Canada",
                rates: {
                    flat: false,
                    exemptAmount: 11550,
                    exemptRate: 0.20,
                    rates: [
                        {
                            min: 0,
                            max: 42390,
                            rate: 0.16
                        },
                        {
                            min: 42390,
                            max: 84780,
                            rate: 0.20
                        },
                        {
                            min: 84780,
                            max: 103150,
                            rate: 0.24
                        },
                        {
                            min: 103150,
                            max: +Infinity,
                            rate: 0.2575
                        }
                    ]
                }
            },
            {
                name: "Saskatchewan",
                url: "saskatchewan",
                code: 'sk',
                text: 'Personal income tax rate in Saskatchewan varies from 11% to 15% with basic personal amount of 15,843 CAD (non-taxable).',
                title: "Net salary calculator - Saskatchewan, Canada",
                description: "Simple personal income tax and net salary calculator for Saskatchewan province, Canada",
                rates: {
                    flat: false,
                    exemptAmount: 15843,
                    exemptRate: 0.11,
                    rates: [
                        {
                            min: 0,
                            max: 44601,
                            rate: 0.11
                        },
                        {
                            min: 44601,
                            max: 127430,
                            rate: 0.13
                        },
                        {
                            min: 127430,
                            max: +Infinity,
                            rate: 0.15
                        }
                    ]
                }
            },
            {
                name: "Yukon",
                url: "yukon",
                code: 'yt',
                text: 'Personal income tax rate in Yukon varies from 6.4% to 15% with basic personal amount of 11,474 CAD (non-taxable).',
                title: "Net salary calculator - Yukon, Canada",
                description: "Simple personal income tax and net salary calculator for Yukon province, Canada",
                rates: {
                    flat: false,
                    exemptAmount: 11474,
                    exemptRate: 0.064,
                    rates: [
                        {
                            min: 0,
                            max: 45282,
                            rate: 0.064
                        },
                        {
                            min: 45282,
                            max: 90563,
                            rate: 0.09
                        },
                        {
                            min: 90563,
                            max: 140388,
                            rate: 0.109
                        },
                        {
                            min: 140388,
                            max: 500000,
                            rate: 0.128
                        },
                        {
                            min: 500000,
                            max: +Infinity,
                            rate: 0.15
                        }
                    ]
                }
            }
        ]
    },
    {
        name: "Russian Federation",
        url: "russia",
        flag: '/components/img/svg/ru.svg',
        currency: 'RUB',
        text: "In Russia personal income tax rate for salary is 13% flat. However, for other types of personal income the rate can be different.",
        disclaimer: "Please note that estimations provided above are indicative, because the exact tax rate and net income may depend on your personal circumstances. For precise pesonal income tax estimates you should consult with the <a href='https://www.nalog.ru/' target='_blank'>Russian tax authority</a> or professional tax consultants.",
        regions: [],
        rates: {
            flat: true,
            rate: 0.13
        },
        title: "Net salary calculator - Russia",
        description: "Simple personal income tax and net salary calculator for Russia"
    },
    {
        name: "United Arab Emirates",
        url: "united_arab_emirates",
        flag: '/components/img/svg/ae.svg',
        currency: 'AED',
        text: "There is no personal income tax in United Arab Emirates. Or, if you like, the tax rate on salary in UAE is 0% :)",
        disclaimer: "Please note that estimations provided above are indicative, because the exact tax rate and net income may depend on your personal circumstances. For precise pesonal income tax estimates you should consult with the <a href='https://www.mof.gov.ae/' target='_blank'>UAE's tax authority</a> or professional tax consultants.",
        regions: [],
        rates: {
            flat: true,
            rate: 0.0
        },
        title: "Net salary calculator - United Arab Emirates",
        description: "Simple personal income tax and net salary calculator for UAE"
    }
];