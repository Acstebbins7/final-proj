import {SciChartSurface} from "scichart/charting/Visuals/SciChartSurface";
import {NumericAxis} from "scichart/charting/Visuals/Axis/NumericAxis";
import {FastLineRenderableSeries} from "scichart/charting/visuals/RenderableSeries/FastLineRenderableSeries";
import {XyDataSeries} from "scichart/charting/Model/XyDataSeries";

SciChartSurface.setRuntimeLicenseKey("1dJ6u3lNQKYqzmUi5jtoYEktD02oxDKX1aMgaoPdg6UyDMmrV71RQQ+WxkjEm1fryKvpxHDsvms7yfOS9MyXZ8xGqC+Cz5zZAEDNlOv6McIlGZI20O3JDH+6+1vaLbRtSaFrWMDNVDhbblRJp1SjlXhaHL5kAiUbnOrOgf61vm5k3ah121zIs7FwZM49zKDD1SLC7UyHd79nUUXmOPChVNH8YdFHqaEg1pLIRB23VSFVjTT8WmC+1LD0sIi06SNPrb0pBt51ATFcTpH3q58TkP9kIZu6YEEYk+oCWwS6YbyhhQ/03R+P8DqmKgZhZScdwbkmID5hC9ZvDhuTDGu6wis+JuQZYhl7HjgQ5YucuV273HUZge/KBCzKUHa1/kkuZfGqweMFd9yIuvRtsg1oPa4lzkQOfiKqXFiJ9eJt2Kqvn2QSD7yl1p1uDg+aj/3p0iwugxnHjI54nXeCil1OjwP18ajxvVU7cBLC4LELYSLRID065LuJRHw2NUMz96eHLaVfqMhDtZmZ8RtK3KaeoXBwlNbEL+7I3pWvbUs0dnos9WELFCTegkb4Hefwgg=");

async function initSciChart() {
    // Create the SciChartSurface in the div 'scichart-root'
    // The SciChartSurface, and webassembly context 'wasmContext' are paired. This wasmContext
    // instance must be passed to other types that exist on the same surface.
    const {sciChartSurface, wasmContext} = await SciChartSurface.create("scichart-root");
    // Create an X,Y Axis and add to the chart
    const xAxis = new NumericAxis(wasmContext);
    const yAxis = new NumericAxis(wasmContext);
    sciChartSurface.xAxes.add(xAxis);
    sciChartSurface.yAxes.add(yAxis);

    // Declare a DataSeries
    const xyDataSeries = new XyDataSeries(wasmContext);
    xyDataSeries.append(1, 2);
    xyDataSeries.append(3,4);
    // Add a line series to the SciChartSurface
    const lineSeries = new FastLineRenderableSeries(wasmContext);
    lineSeries.strokeThickness = 2;
    lineSeries.stroke = "rgba(255,0,0,1)";
    lineSeries.dataSeries = xyDataSeries;

    sciChartSurface.renderableSeries.add(lineSeries);

    // zoom to fit
    sciChartSurface.zoomExtents();
}
initSciChart();