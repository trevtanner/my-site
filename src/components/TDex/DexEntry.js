import {
    Card,
    CardContent,
    Grid,
    Typography,
  } from '@mui/material'
  import classes from './PokedexEntry.module.css'

function DexEntry(props) {
    function fixNames(entries) {
      if (entries.name === 'nidoran-f') {
        return (entries.name = 'Nidoran')
      }
      if (entries.name === 'nidoran-m') {
        return (entries.name = 'Nidoran')
      } 
      if (entries.name === 'mr-mime') {
        return (entries.name = 'Mr. Mime')
      } 
      if (entries.name === 'farfetchd') {
        return (entries.name = 'Farfetch\'d')
      } 
      else {
        return entries.name.charAt(0).toUpperCase() + entries.name.slice(1)
      }
    } 
    
  
    function fixHeight(entries) {
      var inches = (entries.height * 10 * 0.393700787).toFixed(0)
      var ft = Math.floor(inches / 12)
      inches %= 12
      return `${ft}' ${inches}"`
    }
    
    function fixWeight(entries) {
          const weight = ((entries.weight / 10) * 2.20462).toFixed(1)
      return weight
      } 
    
  
    function fixID(entries) {
        var id = ('00' + entries.id).slice(-3)
      return id
    }

    function fixTypes(type, secondType) {
      if (!secondType) {
        const fixedType = type.charAt(0).toUpperCase() + type.slice(1)
        return fixedType
      } else {
        const fixedType =
          type.charAt(0).toUpperCase() +
          type.slice(1) +
          '/' +
          secondType.charAt(0).toUpperCase() +
          secondType.slice(1)
        return fixedType
      }
    }

const Name = fixNames(props.entries)
const Height = fixHeight(props.entries)
const Weight = fixWeight(props.entries)
const ID = fixID(props.entries)
const Types = fixTypes(props.type, props.secondType)

    return (
<Card variant="outlined" sx={{ maxWidth: '500px', mb: '2em' }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{}} align="center">
            <img
              src={`https://img.pokemondb.net/sprites/home/normal/${props.realName}.png`}
              alt={props.entries.name}
              className={classes.image}
            />
          </Grid>
          <Grid item xs={6} align="center">
            <Typography variant="h3">{Name}</Typography>
            <Typography variant="h5">#{ID}</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography variant="h6" sx={{ textDecoration: 'underline' }}>
              DATA
            </Typography>
            <Grid item xs={12} align="center">
            <Typography variant="p">
              Type: {Types}
            </Typography>
            </Grid>
            <Grid item xs={12} align="center">
            <Typography variant="p">
              Height: {Height}
            </Typography>
            </Grid>
            <Grid item xs={12} align="center">
            <Typography variant="p">
              Weight: {Weight} lbs.
            </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} align="center">
            <Typography variant="p">
              <b>PokeDex Entry:</b> {props.dex.replace('', ' ').replace('POKéMON', 'pokémon')}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    )
}

export default DexEntry;