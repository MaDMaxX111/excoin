import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {
    StyledWrapFeatures,
} from '../../styles/components/Features';
import FeatureItem from './featureitem';

const features = [
    {
        image: require('../../images/feature1.png'),
        title: 'Safe and secure',
        description:'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable therefore always',
    },
    {
        image: require('../../images/feature2.png'),
        title: 'High Exchange Limits',
        description:'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable therefore always',
    },
    {
        image: require('../../images/feature3.png'),
        title: '24/7 Live Support',
        description:'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable therefore always',
    },
    {
        image: require('../../images/feature4.png'),
        title: 'Fast and Reliable',
        description:'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable therefore always',
    },
]
const Features = () => {
    return (
        <StyledWrapFeatures>
            <Container>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid container justify="center" spacing={6}>
                        {features.map((content, index) => (
                            <Grid key={index} item lg={6} xs={12}>
                                <FeatureItem {...content} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </StyledWrapFeatures>
    )
}

export default Features;
