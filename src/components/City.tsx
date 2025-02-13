import React from 'react'
import { useEffect, useState } from 'react'
type CityProps = {
    city: string,
    forecast: string
}
const City: React.FC<CityProps> = ({city, forecast}) => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [err, setErr] = useState(false);
  
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
          const response = await fetch(`https://meteoapi.vercel.app/v1/places/`+ city + `/forecasts/` + forecast);
          const resData = await response.json();
          setData(resData)
          } catch (err) {
            setErr(true);
          } finally {
            setLoading(false)
          };
          
          
        }
        fetchData()
        }, []
    )
  
    if (isLoading) {
        return (
         <div className="loading">Loading..</div>
        )
      }
    
      if (err) {
        return (
          <div>Error</div>
        )
      }

  return (
    <div>
        <h1>{data && data.place.name}</h1>
  

    </div>
  )
}

export default City