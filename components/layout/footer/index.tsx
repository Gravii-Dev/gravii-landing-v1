import s from './footer.module.css'

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.brand}>
            <span className={s.logo}>Gravii</span>
            <p className={s.tagline}>Your Personal Concierge</p>
          </div>
          <div className={s.links}>
            {/* 추가 링크들이 여기에 들어갈 수 있습니다 */}
          </div>
        </div>
        <div className={s.copyright}>
          <p>© {new Date().getFullYear()} Gravii. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
