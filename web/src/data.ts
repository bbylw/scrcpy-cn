const DOC_BASE = "https://github.com/Genymobile/scrcpy/blob/master/doc/";
const REPO = "https://github.com/Genymobile/scrcpy";

export const docUrl = (file: string) => `${DOC_BASE}${file}`;

export const LINKS = {
  repo: REPO,
  faq: `${REPO}/blob/master/FAQ.md`,
  wiki: `${REPO}/wiki`,
  issues: `${REPO}/issues`,
  verifyRelease: docUrl("verify-release.md"),
  tcpip: docUrl("connection.md#tcpip-wireless"),
  latencyPr: `${REPO}/pull/646`,
  injectEvents: `${REPO}/issues/70#issuecomment-373286323`,
  enableAdb: "https://developer.android.com/studio/debug/dev-options#enable",
  videoSize: docUrl("video.md#size"),
  mouseBindings: docUrl("mouse.md#mouse-bindings"),
  fullscreen: docUrl("window.md#fullscreen"),
  windowsRun: docUrl("windows.md#run"),
  shortcuts: docUrl("shortcuts.md"),
  rom1v: "https://github.com/rom1v",
  donateBlog: "https://blog.rom1v.com/about/#support-my-open-source-work",
  license: "http://www.apache.org/licenses/LICENSE-2.0",
} as const;

export const DOCS: { name: string; file: string }[] = [
  { name: "连接", file: "connection.md" },
  { name: "视频", file: "video.md" },
  { name: "音频", file: "audio.md" },
  { name: "控制", file: "control.md" },
  { name: "键盘", file: "keyboard.md" },
  { name: "鼠标", file: "mouse.md" },
  { name: "游戏手柄", file: "gamepad.md" },
  { name: "设备", file: "device.md" },
  { name: "窗口", file: "window.md" },
  { name: "录制", file: "recording.md" },
  { name: "虚拟显示屏", file: "virtual-display.md" },
  { name: "隧道", file: "tunnels.md" },
  { name: "OTG", file: "otg.md" },
  { name: "摄像头", file: "camera.md" },
  { name: "Video4Linux", file: "v4l2.md" },
  { name: "快捷键", file: "shortcuts.md" },
];

export type Capability = { name: string; note: string; file?: string };

export const CAPABILITIES: Capability[] = [
  { name: "音频转发", note: "将设备声音同步传到电脑，Android 11+ 支持", file: "audio.md" },
  { name: "录制", note: "录制设备的画面与声音", file: "recording.md" },
  { name: "虚拟显示屏", note: "在独立的新显示屏中启动应用", file: "virtual-display.md" },
  { name: "关闭设备屏幕", note: "镜像时熄屏省电，电脑端照常显示", file: "device.md#turn-screen-off" },
  { name: "双向复制粘贴", note: "电脑与设备剪贴板互转", file: "control.md#copy-paste" },
  { name: "可配置画质", note: "分辨率、码率、帧率、编码器任意组合", file: "video.md" },
  { name: "硬件解码", note: "v5.0 起默认由电脑硬件解码，CPU 占用降低约 10 倍", file: "video.md#hardware-decoding" },
  { name: "摄像头镜像", note: "把设备摄像头画面投到电脑，Android 12+", file: "camera.md" },
  { name: "作为网络摄像头", note: "通过 V4L2 暴露给电脑应用（仅限 Linux）", file: "v4l2.md" },
  { name: "物理键盘与鼠标模拟", note: "以 HID 方式模拟物理键盘和鼠标", file: "keyboard.md#physical-keyboard-simulation" },
  { name: "游戏手柄支持", note: "把电脑手柄映射给设备", file: "gamepad.md" },
  { name: "OTG 模式", note: "无需 USB 调试，纯硬件级控制", file: "otg.md" },
  { name: "以及更多……", note: "详见用户文档各页面" },
];

export type Highlight = { tag: string; title: string; note: string; cmd?: string; file?: string };

export const WHATS_NEW: Highlight[] = [
  {
    tag: "核心",
    title: "电脑端硬件解码",
    note: "视频流改由电脑硬件解码（默认启用）：解码更快，CPU 占用降低约 10 倍，功耗更低。可显式选择解码器，或强制软件解码。",
    cmd: "scrcpy --hwdec=auto  # 亦可用 disabled / vaapi / d3d11va / videotoolbox",
    file: "video.md#hardware-decoding",
  },
  {
    tag: "改进",
    title: "视频缓冲改进",
    note: "优化视频缓冲策略，网络抖动时播放更平滑。",
    file: "video.md#buffering",
  },
  {
    tag: "改进",
    title: "音频播放捕获",
    note: "播放捕获模式下捕获设备上全部音频 usage。",
    file: "audio.md",
  },
  {
    tag: "构建",
    title: "Windows ARM64 发行包",
    note: "新增 Windows ARM64 官方构建，在 ARM 设备上原生运行。",
  },
  {
    tag: "改进",
    title: "OTG 设备选择",
    note: "OTG 模式支持通过 ANDROID_SERIAL 指定目标设备。",
    file: "otg.md",
  },
  {
    tag: "修复",
    title: "键鼠与输入修复",
    note: "修复部分键盘布局下的 UHID 丢键、AltGr 转发，以及 --time-limit 数据竞争。",
  },
  {
    tag: "修复",
    title: "画面与 mipmap 修复",
    note: "修复 --no-mipmaps，为所有 YV12 平面生成 mipmap，停止时不再报摄像头捕获失败。",
  },
  {
    tag: "依赖",
    title: "依赖升级",
    note: "platform-tools (adb) 37.0.1、FFmpeg 9.0.2、SDL 3.4.18、dav1d 1.5.4。",
  },
];
