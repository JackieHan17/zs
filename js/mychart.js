var ctx = document.getElementById("myChart").getContext('2d');

var original = Chart.defaults.global.legend.onClick;
Chart.defaults.global.legend.onClick = function(e, legendItem) {
  update_caption(legendItem);
  original.call(this, e, legendItem);
};

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015","2016"],
    datasets: [{
      label: '年出隊次數',
      backgroundColor: "#ffffff",
      data: [5,10,21,30,35,40,66,99],
    },]
  }
});

var labels = {
  "apples": false,

};

var caption = document.getElementById("caption");

var update_caption = function(legend) {
  labels[legend.text] = legend.hidden;

  var selected = Object.keys(labels).filter(function(key) {
    return labels[key];
  });

  var text = selected.length ? selected.join(" & ") : "nothing";

};
