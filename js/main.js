var Event = new Vue();

new Vue({
    el: '#app',
    data: {
        active: 'HOME',
        searchtext: false,
        content: '点我，并编辑内容',
        gride: false,
    },
    methods: {
        makeActive: function (item) {
            this.active = item.toUpperCase();
        },
        show: function () {
            this.searchtext = !this.searchtext;
        },
        changegride: function () {
            this.gride = !this.gride;
            Event.$emit("change-gride", this.gride);
        }


    }
});

Vue.filter('currency', function (val) {
    return '$' + val.toFixed(2);
})

var vm = new Vue({
        el: '#content',
        data: {
            gride1: false,
            sd: 1,
            show: true,
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
            ],
            services1: [
                {
                    name: 'Development',
                    price: 100.00,
                    active: false,
                },
                {
                    name: 'Design',
                    price: 200.00,
                    active: false,
                },
                {
                    name: 'Integration',
                    price: 300.00,
                    active: false,
                },
                {
                    name: 'Training',
                    price: 400.00,
                    active: false,
                }
            ]
        },
        methods: {
            toggle: function (s) {
                s.active = !s.active;
                console.log('s', s.active);
            },
            chan: function () {
                this.show = !this.show;
            },
            total: function () {
                var total = 0;
                if (this.gride1) {
                    this.services.forEach(function (value) {
                        if (value.active) {
                            total += value.price;
                        }
                    });
                } else {
                    this.services1.forEach(function (value) {
                        if (value.active) {
                            total += value.price;
                        }
                    });
                }
                return total;
            }
        },
        watch: {
            sd: function (data) {
                this.sd = this.sd++;
            }
        }
        ,
        mounted: function () {
            var me = this;
            Event.$on('change-gride', function (data) {
                me.gride1 = data;
                console.log(me.gride1);
            })
        }
    })
;
vm.$watch('sd', function (ndata, odata) {
    document.getElementById('da').innerHTML = "修改前为: " + odata + "，修改后为: " + ndata;
});
