export function V2ThemeSwitcher() {
  return (
    <div className="theme-switcher" id="themeSwitcher">
      <div className="theme-icon">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </div>
      <div className="theme-menu">
        <span className="theme-label">Theme</span>
        <div className="theme-dots">
          <div className="theme-dot td-midnight active" data-t="midnight" title="Midnight" />
          <div className="theme-dot td-slate" data-t="slate" title="Slate" />
          <div className="theme-dot td-forest" data-t="forest" title="Forest" />
          <div className="theme-dot td-navy" data-t="navy" title="Navy" />
          <div className="theme-dot td-charcoal" data-t="charcoal" title="Charcoal" />
          <div className="theme-dot td-light" data-t="light" title="Light" />
        </div>
      </div>
    </div>
  );
}
