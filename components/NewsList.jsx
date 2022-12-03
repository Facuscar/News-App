import { Grid, Typography, Stack, Pagination } from '@mui/material';
import useNews from '../hooks/useNews';
import New from './New';

const NewsList = () => {
    const { news, totalNews } = useNews();

    const pages = Math.ceil(totalNews / 20);

    return (
        <>
            <Typography textAlign='center' marginY={5} variant='h3' component='h2'>
                Latest News.
            </Typography>
            <Grid container spacing={2}>
                {news.map( article => <New article={article} /> )}
            </Grid>
            <Stack spacing={2} justifyContent='center' alignItems='center'>
                <Pagination count={pages} color="primary">

                </Pagination>
            </Stack>
        </>
    )
}

export default NewsList;