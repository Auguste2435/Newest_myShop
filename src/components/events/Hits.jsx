import { connectHits } from 'react-instantsearch-dom';

const Hits = ({ hits }) => (
  <ol>
    {hits.map(hit => (
      <li key={hit.objectID}>{hit.name}</li>
    ))}
  </ol>
);

 connectHits(Hits);