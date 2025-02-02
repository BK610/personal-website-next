// pages/api/party.js - PartyKit API Route for Next.js Pages Router
// import { NextApiRequest, NextApiResponse } from "next";
// import { Server } from "partykit/server";

// const flowers = [];

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "GET") {
//     // Clean up old flowers (older than 24 hours)
//     const now = Date.now();
//     while (flowers.length && now - flowers[0].createdAt > 86400000) {
//       flowers.shift();
//     }
//     res.status(200).json({ flowers });
//   } else if (req.method === "POST") {
//     const newFlower = {
//       id: Date.now(),
//       createdAt: Date.now(),
//       color: getRandomColor(),
//     };
//     flowers.push(newFlower);
//     res.status(201).json(newFlower);
//   } else {
//     res.setHeader("Allow", ["GET", "POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// function getRandomColor(): string {
//   const colors = ["#FF69B4", "#FFD700", "#8A2BE2", "#FF4500", "#00FF7F"];
//   return colors[Math.floor(Math.random() * colors.length)];
// }
