import React from "react";
import style from './details.module.css';
import { useParams } from "react-router-dom";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import mapModelToDetailContent from "../../mapper/mapModelToDetailContent";
import { FactoryNames } from "../../constants/dataConstants";
import { GetMonthName } from "../../utils/dataUtils";

const COLORS = ['#228B22', '#FFA500'];

const Details = ({data}) => {
  let params = useParams();

  const detailData = mapModelToDetailContent(data, params.f, params.m)
  
  return (
    <div className={style.details}> 
      <label className={style.label}>
        Статистика по продукции фабрики {FactoryNames[params.f].name} за {GetMonthName(params.m)}
      </label>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={730} height={250}>
          <Pie className={style.pie} data={detailData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={200} label labelLine={false}>
          {
            detailData.map((entry, index) => (
              <Cell key={`cell-${entry.name}`} fill={COLORS[index]}/>
            ))
          }
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Details;