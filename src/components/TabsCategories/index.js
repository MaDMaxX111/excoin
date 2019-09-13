import React, { useState } from 'react';
import PropTypes from "prop-types";
import { FormattedMessage, injectIntl } from "react-intl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faAndroid, faWindows } from "@fortawesome/free-brands-svg-icons";
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {
    StyledWrapCategories,
    // StyledWrapBanner,
    // StyledWrapDownloadForm,
} from '../../styles/components/TabsCategories';
import Title from '../Common/title';
import walletsApp from '../../images/walletsapp.svg';
import { LinkButton } from "../../styles/components/Common";

const brands = [{
        label: 'iPhone',
        icon: <FontAwesomeIcon icon={faApple}/>,
        href: 'iphone',
    },
    {
        label: 'Android',
        icon: <FontAwesomeIcon icon={faAndroid}/>,
        href: 'android',
    },
    {
        label: 'Windows',
        icon: <FontAwesomeIcon icon={faWindows}/>,
        href: 'windows',
    },
    {
        label: 'iMac',
        icon: <FontAwesomeIcon icon={faApple}/>,
        href: 'imac',
    }
]
const TabsCategories = ({intl}) => {

    // const [selectedBrandHref, setBrand] = useState(null);
    //
    // const handleSelectBrand = (event) => {
    //     const { target } = event;
    //     target && setBrand(target.value);
    // }

    return (
        <StyledWrapCategories>
            <Container>
                <h3><FormattedMessage id={'title.categoriesOfWallets'}/></h3>
                <p><FormattedMessage id={'text.descriptionCategory'}/></p>
                {/*<StyledWrapBanner>*/}
                {/*    <img src={walletsApp} alt={intl.formatMessage({id: 'text.selectDownload'})}*/}
                {/*         title={intl.formatMessage({id: 'text.selectDownload'})}/>*/}
                {/*    <p><FormattedMessage id={'text.compatibleWallets'}/></p>*/}
                {/*    <p><FormattedMessage id={'text.selectDownload'}/></p>*/}
                {/*</StyledWrapBanner>*/}
                {/*<StyledWrapDownloadForm>*/}
                {/*    <RadioGroup aria-label="brands" value={selectedBrandHref || ''} onChange={handleSelectBrand}>*/}
                {/*        {brands.map((brand, index) =>*/}
                {/*            <FormControlLabel key={index} value={brand.href}*/}
                {/*                              control={<Radio icon={brand.icon} checkedIcon={brand.icon}/>}*/}
                {/*                              label={brand.label}/>*/}
                {/*        )}*/}
                {/*    </RadioGroup>*/}
                {/*    <LinkButton href={selectedBrandHref} disabled={!!selectedBrandHref ? false : true}><FormattedMessage id={'text.downloadNow'}/></LinkButton>*/}
                {/*</StyledWrapDownloadForm>*/}
            </Container>
        </StyledWrapCategories>
    )
}

TabsCategories.propTypes = {
    intl: PropTypes.object,
};

export default injectIntl(TabsCategories);
