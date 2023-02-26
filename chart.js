const ctx = document.getElementById('myChart');
const earning = document.getElementById('earning');

new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ['Facebook', 'Youtube', 'Whatsapp'],
    datasets: [{
      label: 'Traffic Source',
      data: [1200, 1900, 3000],
    //   borderWidth: 1
    }]
  },
  options: {
    // scales: {
    //   y: {
    //     beginAtZero: true
    //   }
    // }
    responsive:true
  }
});


new Chart(earning, {
  type: 'bar',
  data: {
    labels: ['January', 'Febrauary', 'March', 'April', 'May', 'June', 'July','August','September', 'October', 'November', 'December' ],
    datasets: [{
      label: 'Earnings',
      data: [120, 1900, 3000, 500, 2000, 3000,120, 900, 300, 5000, 200, 300],
    //   borderWidth: 1
    }]
  },
  options: {
    // scales: {
    //   y: {
    //     beginAtZero: true
    //   }
    // }
    responsive:true
  }
});