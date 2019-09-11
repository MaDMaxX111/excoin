import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { FormattedMessage, injectIntl } from "react-intl";
import {
    StyledWrapOurWallets,
    StyledWrapBanner,
    StyledWrapDownloadForm,
} from '../../styles/components/OurWallets';
import Title from '../Common/title';
import walletsApp from '../../images/walletsapp.svg';
import PropTypes from "prop-types";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faApple, faAndroid, faWindows } from "@fortawesome/free-brands-svg-icons";
import { faStar as faStarOpen, faStar } from '@fortawesome/free-regular-svg-icons';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import TableCell from "@material-ui/core/TableCell";
import {JOIN_US_URL} from "../../constants/route";
import {LinkButton} from "../../styles/components/Common";

const brands = [{
    label: 'iPhone',
    icon: <FontAwesomeIcon icon={faApple}/>,
    value: 'iphone',
},
    {
        label: 'Android',
        icon: <FontAwesomeIcon icon={faAndroid}/>,
        value: 'android',
    },
    {
        label: 'Windows',
        icon: <FontAwesomeIcon icon={faWindows}/>,
        value: 'windows',
    },
    {
        label: 'iMac',
        icon: <FontAwesomeIcon icon={faApple}/>,
        value: 'imac',
    }
]
const OurWallets = ({intl}) => {

    const [selectedBrand, setBrand] = useState(null);

    const handleSelectBrand = (value) => {
        setBrand(value);
    }

    return (
        <StyledWrapOurWallets>
            <Container>
                <Title title={<FormattedMessage id={'title.ourWallets'}/>}/>
                <StyledWrapBanner>
                    <img src={walletsApp} alt={intl.formatMessage({id: 'text.selectDownload'})}
                         title={intl.formatMessage({id: 'text.selectDownload'})}/>
                    <p><FormattedMessage id={'text.compatibleWallets'}/></p>
                    <p><FormattedMessage id={'text.selectDownload'}/></p>
                </StyledWrapBanner>
                <StyledWrapDownloadForm>
                    <RadioGroup aria-label="brands" value={selectedBrand} onChange={handleSelectBrand}>
                        {brands.map((brand, index) =>
                            <FormControlLabel key={index} value={brand.value} control={<Radio icon={brand.icon} checkedIcon={brand.icon} />} label={brand.label}/>
                        )}
                    </RadioGroup>
                    <LinkButton to={JOIN_US_URL}><FormattedMessage id={'link.CreateAccount'} /></LinkButton>
                </StyledWrapDownloadForm>
            </Container>
        </StyledWrapOurWallets>
    )
}

OurWallets.propTypes = {
    intl: PropTypes.object,
};

export default injectIntl(OurWallets);
