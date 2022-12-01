import { Container, Grid, Typography} from '@mui/material';
import Form from '../components/Form';
import NewsProvider from '../context/NewsProvider';

function App() {

  return (
    <NewsProvider>
      <Container>
        <header>
          <Typography align='center' marginY={5} component='h1' variant='h3'>
            News API
          </Typography>
        </header>
        <Grid
          container
          direction="row"
          justifyContent="center"
        >
          <Grid item md={6} xs={12}>
            <Form />
          </Grid>
          
        </Grid>
      </Container>
    </NewsProvider>
  )
}

export default App
