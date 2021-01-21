import Link from 'next/link'

import styles from './nav.module.css'

function Navigation() {
  return (
    <nav>
      <Link href="/">
        {/* Component bazlı, module css yazma yöntemi */}
        <a className={styles.link}>ANASAYFA</a>
      </Link>
      <Link href="/about">
        {/* Başka bir stil tanımlama yöntemi */}
        <a style={{ color: 'brown' }}>HAKKIMDA</a>
      </Link>
    </nav>
  )
}

export default Navigation
