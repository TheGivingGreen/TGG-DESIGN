The scorecard: the brand's signature component. Use it for anything that reads as a rules table.

```jsx
<Scorecard rows={[
  { label: 'Skip a bar entirely', strokes: '+2', tone: 'penalty' },
  { label: 'Visit a bar', strokes: '+0' },
  { label: 'Order any drink', note: 'mocktails count too', strokes: '-1', tone: 'good' },
  { label: 'Play a sponsored mini-game or challenge', strokes: '-1', tone: 'good' },
  { label: "Order the hole's official sponsored drink", strokes: '-2', tone: 'best' }
]} />
```

- Stroke figures are Anton, right-aligned, with the sign written out.
- `tone="best"` is Flag red and marks the single best move. One per card.
- The layout never winks. Keep row copy plain and let the golf language do the work.
