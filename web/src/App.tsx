import Examples from "./components/Examples";
import MirrorVisual from "./components/MirrorVisual";
import { Reveal } from "./components/Reveal";
import { CAPABILITIES, DOCS, docUrl, LINKS } from "./data";

function Logo() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="4" y="8" width="30" height="48" rx="6" fill="none" stroke="var(--accent)" strokeWidth="4" />
      <rect x="26" y="4" width="34" height="26" rx="4" fill="none" stroke="var(--muted)" strokeWidth="4" />
      <circle cx="19" cy="48" r="3" fill="var(--green)" />
    </svg>
  );
}

const NAV = [
  ["特性", "#traits"],
  ["能力", "#capabilities"],
  ["前提条件", "#prerequisites"],
  ["必知技巧", "#tips"],
  ["示例", "#examples"],
  ["文档", "#docs"],
  ["社区", "#community"],
] as const;

const LICENSE = "Copyright (C) 2018 Genymobile · Copyright (C) 2018-2026 Romain Vimont · Apache License 2.0";

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="logo" href="#top" aria-label="scrcpy 首页">
            <Logo />
            scrcpy<span className="ver">v4.1</span>
          </a>
          <nav className="nav-links" aria-label="主导航">
            {NAV.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
            <a className="nav-cta" href="#download">
              获取应用
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ============ HERO ============ */}
        <section className="hero" id="download">
          <div className="wrap hero-grid">
            <div>
              <div className="kicker">
                <span className="dot" />
                免费 · 开源 · 无广告 · 无需联网
              </div>
              <h1>
                一秒把安卓<em>镜像</em>
                <br />
                到你的电脑
              </h1>
              <p className="hero-sub">
                scrcpy（发音为 “<b>scr</b>een <b>c</b>o
                <b>py</b>”，屏幕复制）通过 USB 或{" "}
                <a className="link-blue" href={LINKS.tcpip}>
                  TCP/IP
                </a>{" "}
                镜像安卓设备的画面和声音，并允许用电脑的键盘和鼠标控制设备。 不需要 <code>root</code>{" "}
                权限，也不需要在设备上安装任何应用。支持 Linux、Windows 和 macOS。
              </p>
              <div className="dl-row">
                <a className="btn btn-primary" href={docUrl("linux.md")}>
                  Linux 下载
                </a>
                <a className="btn btn-ghost" href={docUrl("windows.md")}>
                  Windows 下载
                </a>
                <a className="btn btn-ghost" href={docUrl("macos.md")}>
                  macOS 下载
                </a>
              </div>
              <p className="hero-note">
                唯一官方来源：
                <a href={LINKS.repo} target="_blank" rel="noreferrer">
                  github.com/Genymobile/scrcpy
                </a>
                ；Windows 用户请阅读{" "}
                <a href={LINKS.windowsRun}>如何运行</a>。
              </p>
              <div className="safety">
                <span className="warn-icon">[!]</span>
                <span>
                  <b>请勿从随意的小网站下载发行版</b>
                  ，即使其名称中包含 scrcpy。发行版签名可在官方文档中
                  <a className="link-blue" href={LINKS.verifyRelease}>
                    校验方法
                  </a>
                  。
                </span>
              </div>
            </div>
            <Reveal delay={0.15}>
              <MirrorVisual />
            </Reveal>
          </div>
        </section>

        {/* ============ BENTO TRAITS ============ */}
        <section className="block" id="traits">
          <div className="wrap">
            <Reveal>
              <div className="sec-head">
                <p className="sec-eyebrow">Design Goals</p>
                <h2 className="sec-title">它专注于八件事</h2>
                <p className="sec-desc">一个原生应用，只做一件事，并把它做到极致。</p>
              </div>
            </Reveal>
            <div className="bento">
              <Reveal className="cw cw-fps">
                <div className="cell cell-fps">
                  <div>
                    <span className="num">
                      30–120<small>fps</small>
                    </span>
                    <h3>高性能</h3>
                    <p>帧率取决于设备，流畅到几乎感觉不到中间隔着一根线。</p>
                  </div>
                  <div className="fps-meter" aria-hidden="true">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <i key={i} style={{ height: `${38 + ((i * 23) % 46)}%`, animationDelay: `${i * 0.16}s` }} />
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal className="cw cw-s2" delay={0.05}>
                <div className="cell">
                  <a className="num link-accent" href={LINKS.latencyPr}>
                    35–70<small>ms</small>
                  </a>
                  <h3>低延迟</h3>
                  <p>从触摸到画面更新，指尖几乎察觉不到等待。</p>
                </div>
              </Reveal>
              <Reveal className="cw cw-s2" delay={0.1}>
                <div className="cell">
                  <span className="num">
                    1920×1080<small>+</small>
                  </span>
                  <h3>高质量</h3>
                  <p>全高清或更高的镜像分辨率，画质可配置。</p>
                </div>
              </Reveal>
              <Reveal className="cw cw-s2" delay={0.15}>
                <div className="cell">
                  <span className="num">
                    ~1<small>秒</small>
                  </span>
                  <h3>启动快</h3>
                  <p>约 1 秒即可显示第一帧画面。</p>
                </div>
              </Reveal>
              <Reveal className="cw cw-s2" delay={0.2}>
                <div className="cell cell-cmd">
                  <h3>轻量 · 无侵入</h3>
                  <p>原生应用，仅显示设备屏幕，不会在安卓设备上残留任何内容。</p>
                  <code>$ scrcpy</code>
                </div>
              </Reveal>
              <Reveal className="cw cw-s3" delay={0.25}>
                <div className="cell">
                  <h3>用户友好</h3>
                  <p>无需账号，无广告，无需联网。</p>
                </div>
              </Reveal>
              <Reveal className="cw cw-s3" delay={0.3}>
                <div className="cell">
                  <h3>自由</h3>
                  <p>
                    免费且开源（Apache-2.0），
                    <a className="link-accent" href={LINKS.repo}>
                      源码公开可审计
                    </a>
                    。
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ CAPABILITIES ============ */}
        <section className="block" id="capabilities">
          <div className="wrap">
            <Reveal>
              <div className="sec-head">
                <p className="sec-eyebrow">Capabilities</p>
                <h2 className="sec-title">不止是投屏</h2>
                <p className="sec-desc">从音频转发到虚拟显示屏，一台安卓设备变成电脑的外设池。</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="caps">
                {CAPABILITIES.map(({ name, note, file }, i) =>
                  file ? (
                    <a key={name} href={docUrl(file)}>
                      <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                      <span className="name">{name}</span>
                      <span className="note">{note}</span>
                    </a>
                  ) : (
                    <span key={name} className="caps-plain">
                      <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                      <span className="name">{name}</span>
                      <span className="note">{note}</span>
                    </span>
                  ),
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ PREREQUISITES ============ */}
        <section className="block" id="prerequisites">
          <div className="wrap">
            <Reveal>
              <div className="sec-head">
                <p className="sec-eyebrow">Prerequisites</p>
                <h2 className="sec-title">三步开始</h2>
              </div>
            </Reveal>
            <Reveal>
              <div className="pre-steps">
                <div className="step">
                  <span className="n">01 / 系统版本</span>
                  <h3>Android 5.0 及以上</h3>
                  <p>
                    设备至少需要 API 21；<code>root</code> 权限与设备安装应用均不需要。
                  </p>
                </div>
                <div className="step">
                  <span className="n">02 / 音频</span>
                  <h3>音频转发需 Android 11+</h3>
                  <p>画面镜像 Android 5.0 即可用；音频转发需要 API ≥ 30。</p>
                </div>
                <div className="step">
                  <span className="n">03 / 开发者选项</span>
                  <h3>开启 USB 调试</h3>
                  <p>
                    请确保已在你的设备上
                    <a className="link-blue" href={LINKS.enableAdb}>
                      开启了 USB 调试
                    </a>
                    。OTG 模式则完全无需开启 USB 调试。
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="callout">
                <span className="icon">!</span>
                <div>
                  <p>
                    部分设备（尤其是小米）可能报错：
                    <code>Injecting input events requires … INJECT_EVENTS permission.</code>
                  </p>
                  <p>
                    此时需额外开启另一选项 <b>「USB 调试（安全设置）」</b>
                    （它与「USB 调试」是两个不同的条目），才能使用键盘和鼠标控制设备；设置后需要重启设备。详见
                    <a className="link-blue" href={LINKS.injectEvents}>
                      修复说明
                    </a>
                    。
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ TIPS ============ */}
        <section className="block" id="tips">
          <div className="wrap">
            <Reveal>
              <div className="sec-head">
                <p className="sec-eyebrow">Must-know Tricks</p>
                <h2 className="sec-title">必知技巧</h2>
                <p className="sec-desc">
                  四条记住就回本，另有
                  <a className="link-accent" href={LINKS.shortcuts}>
                    大量快捷键
                  </a>
                  等你挖掘。
                </p>
              </div>
            </Reveal>
            <div className="tips">
              <Reveal className="tip">
                <kbd>scrcpy -m1024</kbd>
                <b>
                  <a className="link-accent" href={LINKS.videoSize}>
                    降低分辨率
                  </a>
                </b>
                <p>大幅提升性能，观感几乎无损。</p>
              </Reveal>
              <Reveal className="tip" delay={0.06}>
                <kbd>右键点击</kbd>
                <b>
                  <a className="link-accent" href={LINKS.mouseBindings}>
                    触发 BACK
                  </a>
                </b>
                <p>鼠标右键 = 安卓返回键。</p>
              </Reveal>
              <Reveal className="tip" delay={0.12}>
                <kbd>中键点击</kbd>
                <b>
                  <a className="link-accent" href={LINKS.mouseBindings}>
                    触发 HOME
                  </a>
                </b>
                <p>鼠标中键 = 回到主屏。</p>
              </Reveal>
              <Reveal className="tip" delay={0.18}>
                <kbd>Alt</kbd> + <kbd>f</kbd>
                <b>
                  <a className="link-accent" href={LINKS.fullscreen}>
                    切换全屏
                  </a>
                </b>
                <p>一键进入沉浸镜像模式。</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ EXAMPLES ============ */}
        <section className="block" id="examples">
          <div className="wrap">
            <Reveal>
              <div className="sec-head">
                <p className="sec-eyebrow">Recipes</p>
                <h2 className="sec-title">常用命令示例</h2>
                <p className="sec-desc">选项非常多，分别记录在用户文档各页面中，这里只列常用配方。</p>
              </div>
            </Reveal>
            <Reveal>
              <Examples />
            </Reveal>
          </div>
        </section>

        {/* ============ DOCS ============ */}
        <section className="block" id="docs">
          <div className="wrap">
            <Reveal>
              <div className="sec-head">
                <p className="sec-eyebrow">User Manual</p>
                <h2 className="sec-title">用户文档 · 16 个主题</h2>
                <p className="sec-desc">本应用提供了大量功能和配置选项，全部记录在以下页面中（GitHub）。</p>
              </div>
            </Reveal>
            <div className="docs">
              {DOCS.map((d, i) => (
                <Reveal key={d.file} delay={Math.min(i * 0.03, 0.3)}>
                  <a className="doc-card" href={docUrl(d.file)}>
                    <span>{d.name}</span>
                    <span className="file">{d.file}</span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ COMMUNITY ============ */}
        <section className="block" id="community">
          <div className="wrap">
            <Reveal>
              <div className="sec-head">
                <p className="sec-eyebrow">Resources &amp; Community</p>
                <h2 className="sec-title">资源与社区</h2>
              </div>
            </Reveal>
            <Reveal>
              <div className="res-cols">
                <div className="res-col">
                  <h3>资源</h3>
                  <p>翻译文档内容不一定及时更新。</p>
                  <ul>
                    <li>
                      <a href={LINKS.faq}>常见问题 FAQ</a>
                    </li>
                    <li>
                      <a href={LINKS.wiki}>翻译文档（Wiki）</a>
                    </li>
                    <li>
                      <a href={docUrl("build.md")}>构建指南</a>
                    </li>
                    <li>
                      <a href={docUrl("develop.md")}>开发者文档</a>
                    </li>
                    <li>
                      <a href={LINKS.verifyRelease}>校验发行版签名</a>
                    </li>
                  </ul>
                </div>
                <div className="res-col">
                  <h3>文章</h3>
                  <p>来自作者与 Genymotion 的官方博客。</p>
                  <ul>
                    <li>
                      <a href="https://blog.rom1v.com/2018/03/introducing-scrcpy/">scrcpy 介绍</a>
                    </li>
                    <li>
                      <a href="https://www.genymotion.com/blog/open-source-project-scrcpy-now-works-wirelessly/">
                        Scrcpy 现已支持无线连接
                      </a>
                    </li>
                    <li>
                      <a href="https://blog.rom1v.com/2023/03/scrcpy-2-0-with-audio/">Scrcpy 2.0，加入音频功能</a>
                    </li>
                  </ul>
                </div>
                <div className="res-col">
                  <h3>联系方式</h3>
                  <p>报告 Bug 前请先阅读 FAQ，可能会立即找到解决方案。</p>
                  <ul>
                    <li>
                      <a href={LINKS.issues}>GitHub Issues（Bug / 新功能 / 提问）</a>
                    </li>
                    <li>
                      <a href="https://www.reddit.com/r/scrcpy">Reddit · r/scrcpy</a>
                    </li>
                    <li>
                      <a href="https://bsky.app/profile/scrcpy.bsky.social">BlueSky · @scrcpy.bsky.social</a>
                    </li>
                    <li>
                      <a href="https://twitter.com/scrcpy_app">Twitter · @scrcpy_app</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="donate-box">
                <div>
                  <h3>支持 scrcpy</h3>
                  <p>
                    我是{" "}
                    <a className="link-accent" href={LINKS.rom1v}>
                      @rom1v
                    </a>
                    ，scrcpy 的作者和维护者。如果你喜欢这款应用，可以
                    <a className="link-accent" href={LINKS.donateBlog}>
                      支持我的开源工作
                    </a>
                    ：
                  </p>
                </div>
                <div className="dl-row" style={{ margin: 0 }}>
                  <a className="btn btn-primary" href="https://github.com/sponsors/rom1v">
                    GitHub Sponsors
                  </a>
                  <a className="btn btn-ghost" href="https://liberapay.com/rom1v/">
                    Liberapay
                  </a>
                  <a className="btn btn-ghost" href="https://paypal.me/rom2v">
                    PayPal
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer>
        <div className="wrap foot-grid">
          <p className="foot-copy">{LICENSE}</p>
          <div className="foot-links">
            <a href={LINKS.repo}>GitHub</a>
            <a href={LINKS.faq}>FAQ</a>
            <a href={LINKS.license}>Apache-2.0</a>
            <a href="#top">回到顶部 ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
