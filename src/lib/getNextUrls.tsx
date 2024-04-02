import { NextApiRequest, NextApiResponse } from 'next';
import cookies from 'cookies';

let ownerCounter = 0; // Este contador debe ser global y persistente
let urlCounters: number[] = []; // Un contador por cada dueño

interface Owner {
  id: string;
  urls: string[];
}

// Supongamos que tienes una lista de dueños
const owners: Owner[] = [/* tus dueños aquí */];

// Inicializa los contadores de las URLs
owners.forEach(() => urlCounters.push(0));

function getNextUrl(owners: Owner[], ownerId: string): string {
  const owner = owners.find(owner => owner.id === ownerId);
  const url = owner.urls[urlCounters[owners.indexOf(owner)] % owner.urls.length];
  urlCounters[owners.indexOf(owner)]++;
  return url;
}

const handleRequest = (req: NextApiRequest, res: NextApiResponse) => {
  const Cookies = new cookies(req, res);
  let ownerId = Cookies.get('ownerId');
  if (!ownerId) {
    ownerId = owners[ownerCounter % owners.length].id;
    Cookies.set('ownerId', ownerId);
    ownerCounter++;
  }
  const url = getNextUrl(owners, ownerId);
  res.json({ url });
};
export default handleRequest;