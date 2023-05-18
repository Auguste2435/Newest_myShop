// import data from '../../../data/data.json';

// export function getProductsByCategory(category) {
//   const events = data.filter((ev) => ev.category === category);
//   return events;
// }

// export default function handler(req, res) {
//   if (req.method !== 'GET') {
//     res.setHeader('Allow', ['GET']);
//     res.status(405).json({ message: `Method ${req.method} is not allowed` });
//   } else {
//     const events = getProductsByCategory(req.query.category);
//     res.status(200).json(titles);
//   }
// }