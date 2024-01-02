import React from 'react'
import { useParams } from 'react-router-dom';
const Dashboard = ({match}) => {
    const { name } = useParams();

  return (
    <div>Dashboard: {name}</div>
  )
}

export default Dashboard