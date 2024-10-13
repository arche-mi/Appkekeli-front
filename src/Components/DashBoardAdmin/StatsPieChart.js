import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({data}) => {
 

  return (
    <div style={{width: '20rem'}}>
      <h2>Nombre de vehicule et de logement</h2>
      <Pie data={data} />
    </div>
  )
}

export default PieChart