function componentInit() {

    //注册组件
    Vue.component('shape', {
        props: ['shape'],
        data: function () {

            var shape = this.shape;


            var mappers = {
                numbers: ['left', 'top', 'width', 'height', 'borderWidth', 'fontSize'],
                strings: ['active', 'borderColor', 'borderStyle', 'fontColor', 'fontStyle']
            }
            var alias = {
                fontColor: 'color'
            };

            return {
                data: shape,
                style() {

                    var json = {};
                    for (var key in shape) {
                        var value = shape[key];

                        var isNumber = mappers.numbers.indexOf(key) != -1;
                        var isString = mappers.strings.indexOf(key) != -1;

                        //不在样式表范围内的字段不处理
                        if (isNumber || isString) {
                            if (isNumber) {
                                value = value + 'px';
                            }

                            key = alias[key] || key;
                            json[key] = value;
                        }
                    }
                    return json;
                }
            }
        },
        watch: {

        },
        methods: {},
        computed: {},
        template: `<div :class="{shape:true,active:data.active}" :style="style()"><div class="text" type="text">{{data.value}}</div></div>`
    });
}