import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { SuperHeroCard } from '../../components';

export default function SuperHeroPage() {
  const {id} = useParams();
  const [superHero, setSuperHero] = useState({image: {}, biography: {}})

  useEffect(() => {

    async function displaySuperHero() {
      const response = await fetch(`https://superheroapi.com/api/6483266068404733/${id}`);
      const rawData = await response.json();
      setSuperHero(rawData)
    }


    displaySuperHero();

  }, [] );

  return (
    <SuperHeroCard superHero={superHero}/>
  )
}

