<template>
  <div>
    <ul>
        Menu:
        <li v-for ="foodItem in basketItems" v-bind:key="foodItem.name">
            {{foodItem[0]}} x {{foodItem[1]}}
        </li>
        <br>
        <button v-on:click="sendOrder()">Add Order</button>
    </ul>
    
        
  </div>
</template>

<script>
import db from '../firebase.js'

export default {
    name: 'Basket',
    data() {
        return {
            title:'Basket'
        }
    },
    props: {
        basketItems:Array
        
    },
    methods: {
        sendOrder: function() {
            var foodList = [
                {name:"Prawn omelette",quantity:0},
                {name:"Dry Beef Hor Fun",quantity:0},
                {name:"Sambal KangKung", quantity:0},
                {name:"Pork Fried Rice", quantity:0},
                {name:"Mapo Tofu", quantity:0},
                {name:"Cereal Prawn", quantity:0}
            ];
            var bkt, food;
            
            for (bkt=0;bkt<this.basketItems.length;bkt++) {
                for (food=0; food <foodList.length;food++) {
                    if (this.basketItems[bkt][0] == foodList[food].name) {
                        foodList[food].quantity = this.basketItems[bkt][1];
                    }
                }
            } 
            db.collection('orders').add(Object.assign({}, foodList)).then(() => location.reload());
        }
    },
    watch: {
        subtotal: function() {
            this.total = (this.subtotal *1.07).toFixed(2);
        }
    }
}
</script>

<style scoped>
ul {
    text-align: left;
}
button {
  width: 150px;
  height: 40px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
  font-size:20px;
}
</style>
