import { render } from '@testing-library/react';
import React from 'react';
import PriceCard from './price-card';

const data = {
    planName: 'random',
    qualifiedLeadsPerMonth: 100,
    pricePerLiveTransfer: '$1',
    totalPlatformPrice: '$100',
    finalPackagePrice: '$5000'
};

describe('price card component tests', () => {
    test('data is displayed in price-card component', async () => {
        const { getByTestId } = render(<PriceCard data={data} />);

        expect(getByTestId('plan-name')).toHaveTextContent(data.planName);
        expect(getByTestId('qualified-leads-per-month')).toHaveTextContent(data.qualifiedLeadsPerMonth);
        expect(getByTestId('price-per-live-transfer')).toHaveTextContent(data.pricePerLiveTransfer);
        expect(getByTestId('total-platform-price')).toHaveTextContent(data.totalPlatformPrice);
        expect(getByTestId('final-package-price')).toHaveTextContent(data.finalPackagePrice);
    });
})
