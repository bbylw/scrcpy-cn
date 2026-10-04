const TILE_COLORS = [
  ["#d97757", "42%"],
  ["#6a9bcc", "58%"],
  ["#788c5d", "34%"],
  ["#e0b15c", "64%"],
  ["#b06a8f", "46%"],
  ["#5fa8a0", "52%"],
] as const;

function AppStream() {
  return (
    <div className="stream" aria-hidden="true">
      {[0, 1].map((rep) =>
        TILE_COLORS.map(([c, w], i) => (
          <div className="tile" key={`${rep}-${i}`}>
            <b style={{ background: c }} />
            <span className="bar" style={{ background: "rgba(250,249,245,.16)", maxWidth: w }} />
            <span className="bar" style={{ background: "rgba(250,249,245,.08)" }} />
          </div>
        )),
      )}
    </div>
  );
}

export default function MirrorVisual() {
  return (
    <div className="mirror">
      <div className="phone">
        <div className="screen-viewport">
          <AppStream />
        </div>
      </div>
      <div className="desktop">
        <div className="desktop-bar">
          <i />
          <i />
          <i />
          <span>scrcpy</span>
        </div>
        <div className="screen-viewport">
          <AppStream />
        </div>
        <div className="latency-chip">35~70ms 延迟</div>
      </div>
      <div className="mirror-caption">手机画面 · 实时镜像到电脑窗口</div>
    </div>
  );
}
