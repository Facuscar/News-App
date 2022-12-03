import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from '@mui/material'

const New = ({article}) => {
    const { urlToImage, url, title, description, source } = article;

    return (
        <Grid item md={6} lg={4}>
            <Card>
                {urlToImage && <CardMedia component="img" alt={title} image={urlToImage} height={250} /> }
                <CardContent>
                    <Typography variant='body1' color='error'>
                        {source.name}
                    </Typography>
                    <Typography variant='h5' component='div'>
                        {title}
                    </Typography>
                    <Typography variant='body2'>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href={url} target="_blank" variant='button' width={100} textAlign="center">Read new</Link>
                </CardActions>
            </Card>
        </Grid>
        
    );
}

export default New;