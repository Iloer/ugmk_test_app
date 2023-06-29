import React from "react";
import style from './content.module.css'
import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';
import { ActualYear, FactoryNames } from "../../../constants/dataConstants";
import { useNavigate } from "react-router-dom";

const Content = ({data}) => {
  const navigate = useNavigate();

  const barClickHandler = (e, index) => {
    const factory = Object.keys(e.payload).find(f => e.payload[f] === e.value)
    navigate(`/details/${factory}/${e.month}`)
  }

  return (
    <div className={style.content}> 
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          className={style.barChart}
          width={500}
          height={300}
          data={data.filter(r => r.year === ActualYear)}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="monthName"/>
          <YAxis />
          <Legend />
          {
            Object.keys(FactoryNames).map((factory) => (
              <Bar 
                key={factory}
                name={`Фабрика ${FactoryNames[factory].name}`}
                dataKey={factory}
                fill={FactoryNames[factory].color}
                cursor="pointer"
                onClick={barClickHandler} 
              />  
            ))
          }
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Content;