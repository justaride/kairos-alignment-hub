import { useState } from 'react'
import { alignmentData } from '../data/alignment'

export function AlignmentTable() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <div className="page">
      <header className="page-header">
        <h1>Alignment-tabell</h1>
        <p className="page-lead">
          KAIROS-krav kartlagt mot NS-plattformer med bevisgrunnlag. Klikk på en rad for detaljer.
        </p>
      </header>

      <div className="table-wrapper">
        <table className="alignment-table">
          <thead>
            <tr>
              <th style={{ width: '25%' }}>KAIROS-krav</th>
              <th style={{ width: '20%' }}>NS-plattform(er)</th>
              <th>Bevisgrunnlag</th>
            </tr>
          </thead>
          <tbody>
            {alignmentData.map((row, i) => (
              <tr
                key={i}
                className={`clickable ${expanded === i ? 'expanded' : ''}`}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <td>
                  <strong>{row.requirement}</strong>
                </td>
                <td>
                  <div className="platform-tags">
                    {row.platforms.split(', ').map(p => (
                      <span key={p} className="tag">{p}</span>
                    ))}
                  </div>
                </td>
                <td>
                  <div className={`evidence ${expanded === i ? 'show' : ''}`}>
                    {row.evidence}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
