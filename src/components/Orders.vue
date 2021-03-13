<template>
    <div>
        <ul>
            <li v-for="order in orders" :key="order.id">
                <contentLeft>
                    <p v-for="item in order[1]" :key="item.id"> 
                        {{item.name}}: {{item.quantity}}
                    </p>
                </contentLeft>
                <contentRight>
                <button v-bind:id="order[0]" v-on:click="deleteItem($event)">Delete</button>
                <button v-bind:id="order[0]" v-on:click="route($event)">Modify</button> 
                </contentRight>
            </li>
        </ul>
    </div>

</template>

<script>
import db from "../firebase.js"

export default {
    data() {
        return {
            title: "Orders",
            orders:[]
        }
    },
    methods: {
        fetchItems: function() {
            db.collection('orders').get().then((querySnapShot)=>{
                querySnapShot.forEach(doc=>{
                    this.orders.push([doc.id, doc.data()]) 
                })      
                console.log(this.orders);
            });
        },
        deleteItem:function(event) {
            let doc_id = event.target.getAttribute("id");
            db.collection('orders').doc(doc_id).delete().then(() => location.reload());
        },
        route: function(event) {
            let doc_id = event.target.getAttribute("id");
            this.$router.push({ name: 'Modify', params: {docId: doc_id } })
        }
    },
    created: function() {
        this.fetchItems();
    }
    
}
</script>

<style scoped>
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
  padding: 5px;
  border: 1px solid #222;
  margin: 10px;
}
contentLeft {
    float:left;
    width: 70%;
}

contentRight { 
    float:left;
    width:25%;
    padding: 10px;
}
button {
  width: 65px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}


::after {
    clear:both;
    display: table;
    content: "";
}
</style>