import { ImageResponse } from 'next/og';
import React from 'react';
import ky from 'ky'
import { MetaTFTProfile } from '../../../../models/meta-tft.ts';
// App router includes @vercel/og.
// No need to install it.

export async function GET() {
  const data = await ky.get<MetaTFTProfile>('https://api.metatft.com/public/profile/lookup_by_riotid/EUW1/Mr72/EUW?source=full_profile&tft_set=TFTSet13').json()
  const match = data.matches[0]
  const getImgUrl = (character_id: string) => `https://cdn.metatft.com/cdn-cgi/image/width=48,height=48,format=auto/https://cdn.metatft.com/file/metatft/champions/${character_id.toLowerCase()}.png`
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 40,
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p>{match.placement}</p>
        {match.summary.units.map((unit) => <img key={unit.character_id} width="50" height="50" src={getImgUrl(unit.character_id)} />)}

      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}