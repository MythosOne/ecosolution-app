import axios from 'axios';

export async function apiServiceData() {
  const resp = await axios.get(`https://mythosone.github.io/ecosolution-app/`);

  return resp.data;
}
