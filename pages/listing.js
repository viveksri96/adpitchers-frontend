import {Grid, Card, CardActionArea, CardMedia, ThemeProvider} from '@material-ui/core'
import Header from './common/Header'
import { theme } from '../styles/theme'
import Head from 'next/head'


export default function Listing(){
  return (
    <div>
      <Grid container>
        <Card>
          <CardActionArea>
              <CardMedia 
                src="http://lorempixel.com/g/400/400/"
              />
          </CardActionArea>
        </Card>
      </Grid>
      This will be the listing page.
    </div>
  )
}