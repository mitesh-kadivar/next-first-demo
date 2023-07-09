import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function Events({eventsList}: any) {

    const [events, setEvents] = useState(eventsList)
    const router = useRouter();

    const fetchSportsEvent = async () => {
        const response = await fetch("http://localhost:4000/events?category=sports")
        const data = await response.json()
        setEvents(data);
        router.push('/events?category=sports', undefined, {shallow: true})
    }

  return (
    <>
        <h1>Lists of events</h1>
        <button onClick={fetchSportsEvent}>Sports Category</button>
        {
            events.map((event: any) => {
                return (
                    <div key={event}>
                        <h2>{event.id} {event.title} {event.date} | {event.category}</h2>
                        <p>{event.description}</p>
                        <hr />
                    </div>
                )
            })
        }
    </>
  )
}

export async function getServerSideProps(context: any) {
    const { query } = context
    const { category } = query
    const queryString = category ? 'category=sports' : '';

    const response = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await response.json()

    return {
        props: {
            eventsList: data
        }
    }
}
