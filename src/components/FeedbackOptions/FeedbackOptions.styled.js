import css from 'styled-components';

export const Button = css.button`
width: 65px;
height: 25px;

cursor: pointer;

border: none;
border-radius: 4px;

background-color: var(--button-background);
color: var(--title-accent-color);

transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:not(:last-child) {
    margin-right: 10px;
}

&:hover, &:focus {
    transform: scale(1.1);
}
`;
