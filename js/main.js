new Vue({
    el: '#app',
    data: {
        active: 'HOME',
        searchtext: false,
        content: '点我，并编辑内容',
    },
    methods: {
        makeActive: function (item) {
            this.active = item.toUpperCase();
        },
        show: function () {
            this.searchtext = !this.searchtext;
        },

    }
});

Vue.filter('currency', function (val) {
    return '$' + val.toFixed(2);
})

new Vue({
    el: '#content',
    data: {
        services: [
            {
                name: 'Development',
                price: 300.00,
                active: false,
            },
            {
                name: 'Design',
                price: 400.00,
                active: false,
            },
            {
                name: 'Integration',
                price: 250.00,
                active: false,
            },
            {
                name: 'Training',
                price: 220.00,
                active: false,
            }
        ]
    },
    methods: {
        toggle: function (s) {
            s.active = !s.active;
            console.log('s', s.active);
        },
        total: function () {
            var total=0;
            this.services.forEach(function (value) {
                if (value.active) {
                    total += value.price;
                }
            });
            return total;
        }
    }
})