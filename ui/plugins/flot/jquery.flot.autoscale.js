(function ($) {
    function init(plot) {

        plot.autoFromZeroScale = function () {
            var opts = plot.getYAxes()[0].options;
            var data = plot.getData();
            var max = 0;

            $.each(data, function (index, s) {
                max = Math.max(max, autoScale(plot, s, s.data, s.datapoints));
            });

            opts.min = 0;
            opts.max = max;

            plot.setupGrid();
            plot.draw();

            return {
                min: opts.min,
                max: opts.max
            };
        }

        plot.autoScale = function () {
            var opts = plot.getYAxes()[0].options;
            var data = plot.getData();
            var min = Number.POSITIVE_INFINITY;
            var max = Number.NEGATIVE_INFINITY;

            $.each(data, function (index, s) {
                min = Math.min(min, autoScaleMin(plot, s, s.data, s.datapoints));
                max = Math.max(max, autoScaleMax(plot, s, s.data, s.datapoints));
            });

            opts.min = min;
            opts.max = max;

            plot.setupGrid();
            plot.draw();

            return {
                min: opts.min,
                max: opts.max
            };
        }
        
        function autoScaleMin(plot, series, data, datapoints) {
            var _min = Number.POSITIVE_INFINITY;
            var options = plot.getOptions();

            // limit to visible serie
            if (series.lines.show || series.points.show) {
                var min = Number.POSITIVE_INFINITY;

                var xaxis = plot.getAxes().xaxis;
                for (var i = 0; i < data.length; i++) {
                    if (data[i][0] >= xaxis.options.max && data[i][0] <= xaxis.options.min) {
                        min = Math.min(min, data[i][1]);
                    }
                }

                min += min * options.yaxis.autoscaleMargin * 10;
                return Math.min(_min, min);
            } else {
                return 0;
            }
        }
                
        function autoScaleMax(plot, series, data, datapoints) {
            var _max = Number.NEGATIVE_INFINITY;
            var options = plot.getOptions();

            // limit to visible serie
            if (series.lines.show || series.points.show) {
                var max = Number.NEGATIVE_INFINITY;

                var xaxis = plot.getAxes().xaxis;
                for (var i = 0; i < data.length; i++) {
                    if (data[i][0] >= xaxis.options.min && data[i][0] <= xaxis.options.max) {
                        max = Math.max(max, data[i][1]);
                    }
                }

                max += max * options.yaxis.autoscaleMargin * 10;
                return Math.max(_max, max);
            } else {
                return 0;
            }
        }
    }

    $.plot.plugins.push({
        init: init,
        name: "autoscalemode",
        version: "0.6"
    });
})(jQuery);