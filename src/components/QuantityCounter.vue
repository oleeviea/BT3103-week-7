<template>
  <div>
    <button id="buttonCount" v-on:click="decrement"> - </button>
    {{number}}
    <button id="buttonCount" v-on:click="increment"> + </button>

  </div>
</template>

<script>

export default {
    name: 'QuantityCounter',
    data() {
        return {
            title:'The Quantity Counter',
            number:0
        }
    },
    props: {
        selectedItems: {
            type: Object
        }
    },
    methods: {
        increment:function() {
            if (this.number >=10) {
                alert("You cannot buy more than 10 items.");
            } else {
                this.number++;
                this.$emit('counter', this.selectedItems, this.number);
            }
            
        },
        decrement: function() {
            if (this.number > 0) {
                this.number--;
                this.$emit('counter', this.selectedItems, this.number);
            }
            
        }
    }
}
</script>

<style scoped>
    #buttonCount {
        text-align:center;
        background-color:pink;
        font-size:10px;
        padding:10px;
        border-radius:10px;
        display: inline-block;
    }
</style>
