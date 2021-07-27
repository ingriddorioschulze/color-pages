import Head from 'next/head'
import Link from 'next/link'

import colors from '../data/colors.json'

export default function Home() {
  return (
    <ul>
      <h1>Pantone Colors</h1>
      {colors.map((color) => (
        <li key={color.name}>
          <Link href={`/${color.name}`} passHref>
            <h2>{color.name}</h2>
          </Link>
        </li>
      ))}
    </ul>
  )
}
