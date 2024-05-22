import React, {useEffect} from 'react'
import './main.css'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CiMedicalClipboard } from "react-icons/ci";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc:img1,
    destTitle: 'Taj Mahal',
    location: 'India',
    fees: '$500',
    description: "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage."
  },

  {
    id:2,
    imgSrc:img2,
    destTitle: 'Dubai',
    location: 'UAE',
    fees: '$500',
    description: "Dubai is a city of skyscrapers, ports, and beaches, where big business takes place alongside sun-seeking tourism. Because of its large expatriate population, it feels like a Middle Eastern melting pot, and the atmosphere is generally tolerant."
  },
  {
    id:3,
    imgSrc:img3,
    destTitle: 'Paris',
    location: 'France',
    fees: '$1000',
    description: "Paris has a long history of being associated with love and romance. The city has been the backdrop for countless romantic novels, films, and songs, solidifying its reputation as a destination for lovers. And let's not forget about the iconic Eiffel Tower, which has become a symbol of love and romance around the world."
  },
  {
    id:4,
    imgSrc:img4,
    destTitle: 'London',
    location: 'United Kingdom',
    fees: '$900',
    description: "London is one of the most iconic cities in the world, renowned for its rich history, vibrant culture, and world-class attractions. From its royal palaces and ancient monuments to its bustling markets and trendy neighbourhoods, there's something for everyone to enjoy in the British capital."
  },
  {
    id:5,
    imgSrc:img5,
    destTitle: 'Mumbai',
    location: 'India',
    fees: '$1000',
    description: "Mumbai (formerly known as Bombay), India, is famous for its chaotic streets. For bargains and people-watching, outdoor bazaars top the list of attractions. Popular waterfront destinations are Marine Drive, where visitors go to watch the sun set over the Arabian Sea, and the carnival-like Juhu Beach. More sightseeing options are the Gandhi Museum, in the leader's former home, and the cave temples of Elephanta Island. For tranquillity, Mumbai has many religious sites, lakes and parks."
  },
  {
    id:6,
    imgSrc:img6,
    destTitle: 'New York',
    location: 'USA',
    fees: '$1200',
    description: "New York City is famous for its cultural significance, iconic landmarks, diverse neighborhoods, and status as a global financial and business center. New York's history of immigration and its role in popular culture have also contributed to its fame"
  },
]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        
        {
          Data.map(({id,imgSrc,destTitle,location,fees,description})=>{
              return(
                <div key={id} data-aos="fade-up" className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                      < HiOutlineLocationMarker className='icon'/>
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className="btn flex">
                      DETAILS <CiMedicalClipboard className='icon'/>
                    </button>

                  </div>
                </div>
              )
          })
        }

      </div>

    </section>
  )
}

export default Main
