import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'



class EarningChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Net Profit',
                data: [44, 55, 100, 56, 61, 108, 163, 200, 66]
            },
            
         ],

            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '40%',
                        endingShape: 'rounded',
                        
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['1jan', '2jan', '3jan', '4jan', '5jan', '6jan', '7jan', '8jan', '9jan'],
                },
                yaxis: {
                    title: {
                        text: '$ (thousands) '
                    },
                   min:0,
                   max:250,
                   logBase:2,
                   tickAmount:5,
                   

                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$ " + val + " thousands"
                        }
                    }
                }
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>

        );
    }
}


export default EarningChart;