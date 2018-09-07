import React from 'react'
import Flag from './flag'
import ReactChartkick, { ColumnChart} from 'react-chartkick'
import Chart from 'chart.js'

const xTitle = "Age"
const yTitle = "% Mortalité"

ReactChartkick.addAdapter(Chart)
window.Chart = require('chart.js');
    
    const MortalityListItem = () => {
        return (
            <div>
                <Flag className="flag-medium" country="France"/>
                <ColumnChart xtitle={xTitle} ytitle={yTitle} data={[["Sun", 32], ["Mon", 46], ["Tue", 28], ["Mo", 4], ["o", 42]]} />
            </div>
        )
    }
    
export default MortalityListItem