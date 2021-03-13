<template>
    <div>
        <div v-for="(order, index) in dataPacket[0]" :key="index">
           
            <label>{{order.name}}: {{order.quantity}}</label>
            <br>
            <input v-bind:id="index" placeholder =0 type="number" and min="0">
            <br><br>
            
        </div>
        <br>
        <div>
            <button v-on:click="updateOrder()">Update Order</button>
        </div>
    </div>
    
</template>

<script>
import db from '../firebase.js'

export default {
    data() {
        return {
            dataPacket: []
        }
    },
    methods: {
        fetchItems: function() {
            db.collection('orders').get(this.$route.params.docId).then((querySnapShot) => {
                let item={}
                querySnapShot.forEach(doc=>{
                    item=doc.data()
                    this.dataPacket.push(item)      
                }) 
            });
        },
        updateOrder: function() {
            var copy = Object.assign(this.dataPacket[0]);
            var i;
            for (i=0; i <Object.keys(copy).length;i++) {
                var newValue = document.getElementById(i).value;
                copy[i].quantity = parseInt(newValue);
            }
            db.collection('orders').doc(this.$route.params.docId).set(copy).then(() => this.$router.push({path:'/Orders'}))
        }
    },
    created: function() {
        this.fetchItems();
        
    }
}
</script>

<style scoped>
div {
    text-align: left;
}
label {
    padding: 5px;
}
input {
    padding: 5px;
    width:200px;
    height:20px;
}

button {
  width: 200px;
  height: 50px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
  font-size:25px;
}
</style>