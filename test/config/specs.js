module.exports = {
    smoke: ['functional-e2e/spec/smoke/*.js'],
    regression: ['functional-e2e/spec/**.js', 'functional-e2e/spec/smoke/*.js'],
    login: ['functional-e2e/spec/smoke/login.*.js', 'functional-e2e/spec/smoke/create.*.js',
        'functional-e2e/spec/create.*.js'
    ],
    create: ['functional-e2e/spec/smoke/create.*.js', 'functional-e2e/spec/create.*.js'],
    hotel: ['functional-e2e/spec/smoke/hotel.*.js',
        'functional-e2e/spec/hotel.**.js'
    ],
    flight: ['functional-e2e/spec/smoke/flight.*.js', 'functional-e2e/spec/flight.*.js'],
    others: ['functional-e2e/spec/smoke/car.*.js', 'functional-e2e/spec/smoke/insurance.*.js',
        'functional-e2e/spec/car.*.js', 'functional-e2e/spec/insurance.*.js'
    ],
    marketing: ['functional-e2e/spec/marketing.*.js'],
    random: [
        // 'functional-e2e/spec/smoke/flight.listing.booking.spec.js',
        'functional-e2e/spec/smoke/login.czech.retiree.spec.js',
        'functional-e2e/spec/smoke/marketing.registration.spec.js'
        // 'functional-e2e/spec/smoke/insurance.booking.spec.js',
        // 'functional-e2e/spec/smoke/login.saml.spec.js'
    ],
    listing: [
        'functional-e2e/spec/smoke/flight.listing.result.spec.js',
        'functional-e2e/spec/flight.listing.search.non-partner.spec.js',
        'functional-e2e/spec/flight.listing.search.partner.spec.js',
        'functional-e2e/spec/flight.listing.trips.past.spec.js',
        'functional-e2e/spec/flight.listing.trips.upcoming.spec.js',
        'functional-e2e/spec/smoke/flight.listing.booking.spec.js'
    ],
    ticketing: ['functional-e2e/spec/smoke/flight.ticketing.booking.spec.js', 
    'functional-e2e/spec/smoke/flight.ticketing.result.spec.js'
    ]
}