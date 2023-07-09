import React, { useState, useEffect } from 'react'

export default function Dashboard() {

    const [isLoading, setLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState<any>(null);

    useEffect(() => {

        const fetchDashboardData = async () => {
            const response = await fetch("http://localhost:4000/dashboard")
            const data = await response.json()
            setDashboardData(data)
            setLoading(false)
        } 
        fetchDashboardData();
    }, [])

    console.log(dashboardData)

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <h1>Dashboard details</h1>
            <h2>Posts - {dashboardData?.posts}</h2>
            <h2>Likes - {dashboardData?.likes}</h2>
            <h2>Followers - {dashboardData?.followers}</h2>
            <h2>Following - {dashboardData?.following}</h2>
        </>
    )
}
