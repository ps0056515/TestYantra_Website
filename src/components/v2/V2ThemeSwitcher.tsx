export function V2ThemeSwitcher() {
  return (
    <div className="theme-switcher" id="themeSwitcher">
      <span className="theme-label">Theme</span>
      <div className="theme-dots">
        <div className="theme-dot td-midnight" data-t="midnight" title="Midnight" />
        <div className="theme-dot td-slate" data-t="slate" title="Slate" />
        <div className="theme-dot td-forest" data-t="forest" title="Forest" />
        <div className="theme-dot td-navy" data-t="navy" title="Navy" />
        <div className="theme-dot td-charcoal" data-t="charcoal" title="Charcoal" />
        <div className="theme-dot td-light active" data-t="light" title="Light" />
      </div>
    </div>
  );
}
