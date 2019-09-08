import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { FormattedMessage } from "react-intl";
import {
    StyledWrapLatestNews,
} from '../../styles/components/LatestNews';
import Title from '../Common/title';
import BlockNews from './news';

const news = [
    {
        date: '12.02.2018',
        title: 'It is a long established fact',
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking',
        link: '/',
    },
    {
        date: '11.20.2018',
        title: 'There are many variations',
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking',
        link: '/',
    },
    {
        date: '10.30.2018',
        title: 'The standard chunk of Lorem',
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking',
        link: '/',
    }
]
const LatestNews = () => {
    return (
        <StyledWrapLatestNews>
            <Container>
                <Title title={<FormattedMessage id={'title.latestNews'}/>}/>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid container justify="center" spacing={8}>
                        {news.map((content, index) => (
                            <Grid key={index} item lg={4} md={6} xs={12}>
                                <BlockNews {...content} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </StyledWrapLatestNews>
    )
}

export default LatestNews;
