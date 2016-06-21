{
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: true,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '<b>{point.y}</b> bytov'
        // pointFormat: '<b>{point.percentage:.1f} </b>bytov'
    },
    plotOptions: {
        pie: {
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    colors: ['#50B432', '#ED561B'],
    series: [{
        name: 'Podiel',
        colorByPoint: true
    }],
    credits: {
        enabled: false
    }
}