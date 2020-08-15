import { ORANGE } from '../../colors';

export const head = {
    backgroundColor: '#5A6F90',
    padding: '1rem',
    color: 'white',
    textTransform: 'capitalize',
    marginBottom: '0.5rem',
    display: 'flex',
    justifyContent: 'center'
}

export const bottom = { ...head }

export const largeFont = {
    fontSize: '2.3rem',
    fontWeight: '600',
    letterSpacing: '1px'
}

export const mediumFont = {
    fontSize: '1.2rem',
    fontWeight: '500',
}

export const smallFont = {
    fontSize: '0.9rem'
}

export const separator = {
    borderBottom: '2px dashed lightgrey',
    margin: '1rem 3rem'
};

export const popularPriceCard = {
    backgroundColor: ORANGE,
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem'
}