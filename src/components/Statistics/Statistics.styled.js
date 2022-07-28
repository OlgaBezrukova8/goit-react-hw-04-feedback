import css from 'styled-components';

export const Container = css.div`
width: 200px;
padding: 15px 10px;

font-size: 14px;
border-radius: 4px;

background-color: var(--button-background);
`;

export const AccentColor = css.span`
font-size: 16px;
font-weight: 600;

color: var(--title-accent-color)
`;
