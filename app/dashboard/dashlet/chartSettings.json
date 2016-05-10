{
    chart: {
        renderTo: 'chart-container',
        // backgroundColor: '#f7f7f7',
        type: 'spline',
        zoomType: 'x'
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e.%b',
            year: '%b'
        },
        title: {
            text: null
        }
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            formatter: function(){
                return this.value + '°';
            }
        }
    },
    // tooltip: {
    //     headerFormat: '<b>{series.name}</b><br>',
    //     pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
    // },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                enabled: false
            }
        }
    },
    credits: {
        enabled: false
    }
}