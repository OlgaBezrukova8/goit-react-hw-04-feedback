import React from 'react';

export const Statistics = ({ title, good, neutral, bad }) => (
  <>
    <title>{title}</title>

    <ul>
      <li>Good: {good}</li>
      <li>Netral: {neutral}</li>
      <li>Bad: {bad}</li>
    </ul>
  </>
);
