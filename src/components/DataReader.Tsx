import { promises as fs } from 'fs';

export default async function DataReader() {
  const file = await fs.readFile(process.cwd() + '/public/db.json', 'utf8');
  const data = JSON.stringify(file);
  var Product = JSON.parse(data);

  return (
    Product
  )

};
