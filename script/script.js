var vm = new Vue({
    el: '#cryptoInfoApp',
    data: {
        json: null,
        activeClass: 'active',
        selected: null,
        currentElem: 0
    },
    created: function () {
        fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
            .then(r => r.json())
            .then(json => {
                this.json = json;
            });
    },
    methods: {
        setActiveClass: function(n, event){
            var btns = document.getElementsByClassName('button');
            
            for(i=0; i< btns.length; i++){

                btns[i].classList.remove('active');
            }
            
            event.path[0].classList.add('active');
            
            for(i=0; i< btns.length; i++){
                if(btns[i].classList.contains('active')){
                this.currentElem = i;
                }
            }
        }
    }
});