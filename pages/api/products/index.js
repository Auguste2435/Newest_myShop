// import data from '../../../data/data.json';

// export function getProducts() {
//   return data;
// }

// export default function handler(req, res) {
//   if (req.method !== 'GET') {
//     res.setHeader('Allow', ['GET']);
//     res.status(405).json({ message: `Method ${req.method} is not allowed` });
//   } else {
//     const events = getProducts();
//     res.status(200).json(events);
//   }
// }