import { Bar } from 'vue-chartjs'
import db from '../../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        retrieveData: [],
        datacollection: {
            labels: ["Prawn omelette", "Dry Beef Hor Fun", "Sambal KangKung", "Pork Fried Rice", "Mapo Tofu", "Cereal Prawn"],
            datasets: [{
                label: "Number of orders for item",
                backgroundColor: ['lightblue', 'lightskyblue', 'Cornflowerblue', 'darkcyan', 'cadetblue', 'turquoise'],
                data: [0, 0, 0, 0, 0, 0]
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total number of each dish'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true,
                    min: 0
                  }    
                }]
            }
        }
    }
  },
  methods: {
    fetchItems: function () {
        db.collection('orders').get().then(querySnapShot => {
            querySnapShot.forEach(doc => { 
                this.retrieveData.push(doc.data())
            })
            this.retrieveData.forEach((food) => {
                var index;
                for(index = 0; index < Object.keys(food).length; index++) {
                    this.datacollection.datasets[0].data[index] += (food[index].quantity);
                }
                
            })
            this.renderChart(this.datacollection, this.options)
        })
        
        
    }
  },
  created () {
    this.fetchItems()
  }
  
}