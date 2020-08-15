import React from 'react';
import { head, largeFont, separator, mediumFont, smallFont, bottom } from './price-card.style';

const defaultProps = {
    data: {
        planName: '',
        qualifiedLeadsPerMonth: 0,
        pricePerLiveTransfer: '',
        totalQualifiedLeadPrice: '',
        totalPlatformPrice: '',
        finalPackagePrice: ''
    }
}

const PriceCard = (incomingProps) => {
    const props = {
        ...defaultProps,
        ...incomingProps
    };

    return (
        <div style={props.style}>
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

                {/* Button - Start your trial */}
            </center>
        </div>
    );
}

export default PriceCard;