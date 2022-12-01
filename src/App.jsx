import { Container, Grid, Typography} from '@mui/material';
import Form from '../components/Form';

function App() {

  return (
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
  )
}

export default App
