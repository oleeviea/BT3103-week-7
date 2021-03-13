<template>
  <div>
    <ul id="itemsList">
        <li v-for ="item in items" :key="item.id">
            <p id="itemName">{{item.name}}</p>
            <br>
            <img v-bind:src="item.imageURL">
            <br> 
            <p id="price"> ${{item.price}}</p>
            <QuantityCounter v-bind:selectedItems=item v-on:counter="onCounter"></QuantityCounter>
        </li>
    </ul>
    <div>
    <Basket id="shoppingBasket" v-bind:basketItems="itemsSelected"></Basket>
    </div>
  </div>
  
</template>

<script>
import QuantityCounter from './QuantityCounter.vue'
import Basket from './Basket.vue'
import db from '../firebase.js'

export default {
    name: 'PageContent',
    data() {
        return {
            title:'PageContent',
            itemsSelected: [],
            items: []
        }
    },
    components: {
        'QuantityCounter': QuantityCounter,
        'Basket': Basket
    },
    methods: {
        onCounter: function (item, count) {
            
            if (this.itemsSelected.length === 0 && count > 0) {
                //If there is nothing in items selected, push the ORDER in
                this.itemsSelected.push([item.name, count, item.price]);
                
            } else {

                // Loop through everything to check what is not in the basket
                for (let i = 0; i < this.itemsSelected.length; i++) {
                    const curr_item = this.itemsSelected[i];
                    const item_name = curr_item[0];

                    // if item_name is the same as item.name and the count is more than 0, update this.itemsSelected
                    if (item_name==item.name && count > 0) {
                        this.itemsSelected.splice(i, 1);
                        this.itemsSelected.push([item.name, count, item.price]);
                        break;
                    }
                    // Next, item_name is the same as item.name and the count is 0, remove it from itemsSelected.
                    else if (item_name==item.name && count == 0) {
                        this.itemsSelected.splice(i, 1);
                        break;
                    }
                    // otherwise, if the item is not in itemsSelected, add it to itemsSelected by pushing the ORDER in.
                    else if (i == this.itemsSelected.length-1 && item.name!=item_name){
                        this.itemsSelected.push([item.name, count, item.price]);
                        break;
                    }
                }
            }
        },

        fetchItems: function() {
            db.collection('menu').get().then(snapshot => {
                snapshot.docs.forEach(doc => {
                console.log(doc.data());
                this.items.push(doc.data());
                });
            });         
        }
    },

    created: function() {
        this.fetchItems();
    }

}
</script>

<style scoped>
    #itemsList {
        width: 100%;
        max-width: 70%;
        margin: 0px;
        padding: 0 5px;
        box-sizing: border-box;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }
    li {
        flex-grow: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 10px;
        border: 1px solid #222;
        margin: 10px;
    }
    img {
        width: 135px;
        height: 135px;
    }

    #price {
        font-size: 30px;
    }

    #itemName {
        font-size: 30px;
    }

    #shoppingBasket {
        position: absolute;
        top: 35%;
        left: 78%;
    }

</style>
