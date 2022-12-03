import { Grid, Typography } from '@mui/material';
import useNews from '../hooks/useNews';
import New from './New';

const NewsList = () => {
    const { news } = useNews();

    return (
        <>
            <Typography textAlign='center' marginY={5} variant='h3' component='h2'>
                Latest News.
            </Typography>
            <Grid container spacing={2}>
                {news.map( article => <New article={article} /> )}
            </Grid>
        </>
    )
}

export default NewsList;