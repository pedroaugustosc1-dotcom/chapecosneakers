import { ImageResponse } from 'next/og'

export const alt = 'Chapeco Sneakers'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#e8e4dc',
          color: '#121212',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 76px',
          fontFamily: 'Arial',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, letterSpacing: 5 }}>
          CHAPECO
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'flex', fontSize: 88, fontWeight: 700, letterSpacing: -3 }}>
            SNEAKERS
          </div>
          <div style={{ display: 'flex', fontSize: 28, letterSpacing: 1 }}>
            Ande diferente.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, letterSpacing: 2 }}>
          <span>CURADORIA DE SNEAKERS</span>
          <span>CHAPECO / 2026</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
