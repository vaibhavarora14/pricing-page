import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import PriceCard from './price-card';

const data = {
    planName: 'random',
    qualifiedLeadsPerMonth: 100,
    pricePerLiveTransfer: '$1',
    totalQualifiedLeadPrice: '$1000',
    totalPlatformPrice: '$100',
    finalPackagePrice: '$5000'
};

describe('price card component tests', () => {
    test('data is displayed in price-card component', async () => {
        render(<PriceCard data={data} />);

        await waitFor(() => screen.getByTestId('price-card'));

        expect(screen.getByTestId('plan-name')).toHaveTextContent(data.planName);
        expect(screen.getByTestId('qualified-leads-per-month')).toHaveTextContent(data.qualifiedLeadsPerMonth);
        expect(screen.getByTestId('price-per-live-transfer')).toHaveTextContent(data.pricePerLiveTransfer);
        expect(screen.getByTestId('total-qualified-lead-price')).toHaveTextContent(data.totalQualifiedLeadPrice);
        expect(screen.getByTestId('total-platform-price')).toHaveTextContent(data.totalPlatformPrice);
        expect(screen.getByTestId('final-package-price')).toHaveTextContent(data.finalPackagePrice);
    });
})
