import React, { useState } from 'react';
import Button from '../button/button';
import PriceCardModal from '../price-card-modal/price-card-modal';
import { bottom, head, largeFont, mediumFont, popularPriceCard, separator, smallFont } from './price-card.style';

const defaultProps = {
    data: {
        planName: '',
        qualifiedLeadsPerMonth: 0,
        pricePerLiveTransfer: '',
        totalQualifiedLeadPrice: '',
        totalPlatformPrice: '',
        finalPackagePrice: '',
        popular: false
    }
}

const PriceCard = (incomingProps) => {
    const props = {
        ...defaultProps,
        ...incomingProps
    };

    const [showModal, setModalState] = useState(false);

    const getPopularCardStyle = (isPopular) => {
        let style = { ...popularPriceCard };
        if (!isPopular) {
            style = { ...style, visibility: 'hidden' };
        }
        return style;
    }

    return (
        <div style={props.style}>
            <div style={getPopularCardStyle(props.data.popular)}>Most Popular!</div>
            <div style={head} data-testid="plan-name">{props.data.planName}</div>
            <center>
                <div style={largeFont} data-testid="price-per-live-transfer">
                    {props.data.pricePerLiveTransfer}
                </div>
                <div style={smallFont}>Per Qualified lead</div>

                <div style={separator}></div>

                <div style={smallFont}>Qualified Leads Per Month</div>
                <div
                    style={mediumFont}
                    data-testid="qualified-leads-per-month"
                >{props.data.qualifiedLeadsPerMonth}</div>

                <div style={separator}></div>

                <div style={smallFont}>Platform Fee Per Month</div>
                <div
                    style={{ ...mediumFont, marginBottom: '1rem' }}
                    data-testid="total-platform-price"
                >{props.data.totalPlatformPrice}</div>

                <div
                    style={{ ...bottom, ...mediumFont, fontWeight: 600 }}
                    data-testid="final-package-price"
                >{props.data.finalPackagePrice}/mo</div>

                <Button click={() => setModalState(!showModal)}> Start Your Trial </Button>
            </center>
            <PriceCardModal planName={props.data.planName} show={showModal} onClose={() => setModalState(false)} />
        </div>

    );
}

export default PriceCard;