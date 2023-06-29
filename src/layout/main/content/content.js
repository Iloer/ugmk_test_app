import React from "react";
import style from './content.module.css'
import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';
import { ActualYear, FactoryNames } from "../../../constants/dataConstants";
import { useNavigate } from "react-router-dom";

const Content = ({data}) => {
  const navigate = useNavigate();
  const barClickHandler = (factory, month) => {
    const monthNum = (new Date(`1900 ${month} 1`)).getMonth() + 1
    navigate(`/details/${factory}/${monthNum}`)
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
          <XAxis dataKey="month"/>
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
                onClick={(e) => {barClickHandler(factory, e.month)}} 
              />  
            ))
          }
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Content;