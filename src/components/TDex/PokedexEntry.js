import {
  Alert,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
  Container,
  Button
} from '@mui/material'
import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'

import DexEntry from './DexEntry'
import classes from './PokedexEntry.module.css'

function PokedexEntry() {
  const [error, setError] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [entries, setEntries] = useState([])
  const [type, setType] = useState('')
  const [secondType, setSecondType] = useState('')
  const [dex, setDex] = useState('')

  //https://bigsondev.com/blog/how-to-fetch-data-in-react-using-pokeapi/
  useEffect(() => {
    const url = window.location.hash.substring(window.location.hash.lastIndexOf('/') + 1)
    let isMounted = true
    const fetchData = async () => {
      try {
        //GET request for pokemon data
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${url}`,
        )
        const data = await response.json()

        if (isMounted) {
          setEntries(data)
          setType(data.types[0].type.name)
        }
        if (data.types[1] === undefined) {
          setSecondType('')
        } else {
          setSecondType(data.types[1].type.name)
        }
      } catch (e) {
        setError(e.message || 'Something went wrong')
      }
    }

    const fetchDex = async () => {
      try {
        //GET request for Pokedex data
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${url}`,
        )
        const data = await res.json()

        setDex(data.flavor_text_entries[2].flavor_text)
      } catch (e) {
        setError(e.message || 'Something went wrong')
      }

      setLoading(false)
    }
    fetchData()
    fetchDex()
    
   
    return () => {
      isMounted = false
    }
  }, []);

  if (error) {
    return <Alert severity="error">{error}</Alert>
  }

  if (loading) {
    return (
      <Grid container justify="center">
        <CircularProgress />
      </Grid>
    )
  }


  return (
    <Container fixed align="center" sx={{ pt: '1em', pb: '10em' }}>
      <DexEntry entries={entries} type={type} secondType={secondType} dex={dex} realName={entries.name} />
    <Button component={Link} to='/t-dex' variant="outlined" color='error' size="large" className={classes.back}>PokeDex</Button>
    </Container>
  )
}


export default PokedexEntry;

