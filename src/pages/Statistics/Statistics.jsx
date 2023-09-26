
import { PieChart, Pie, Cell,Tooltip } from 'recharts';
let donation = 0;
let totalDonation = 100;
const Statistics = () => {
   
     const totalDonations = JSON.parse(localStorage.getItem("donations"));
    
      if(totalDonations){
        donation=parseFloat( ((totalDonations.length/12)*100).toFixed(2));
        totalDonation= 100 - (donation)
        // totalDonation = totalDonation -donation
        // console.log("shapla");
      }else{
        donation = 0;
        totalDonation = 100;
      }
   
    const data = [
        { name: 'Group A', value:totalDonation},
        { name: 'Group B', value: donation},
       
      ];

const COLORS = ['#FF444A', '#00C49F'];

const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);


//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };
    return (
        <div className="w-10/12  m-auto text-center">
           <div className='flex justify-center'>
           <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#FF444A"
            label
            
          >{data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          </Pie>
          <Tooltip />
        </PieChart>
           {/* <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
           </PieChart> */}
           </div>
           <div>
               <div className='flex gap-2 justify-center items-center'>
                  <p className='font-normal text-lg text-black'>Your Donation:</p>
                   <p>{donation}% </p>
                  <div className='bg-[#00C49F] w-24 h-3 rounded-sm'></div>
               </div>
               <div className='flex gap-2 justify-center items-center mt-2'>
                  <p className='font-normal text-lg text-black'>Total Donation:</p>
                  <p>{totalDonation}% </p>
                <div className='bg-[#FF444A] w-24 h-3 rounded-sm'></div>
            </div>
            </div>
        </div>
    );
};

export default Statistics;