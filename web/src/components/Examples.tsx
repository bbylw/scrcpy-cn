import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE } from "../motion";

type Example = {
  tab: string;
  title: string;
  desc: React.ReactNode;
  lines: { cmd: string; comment?: string }[];
};

const EXAMPLES: Example[] = [
  {
    tab: "高性能画质",
    title: "H.265 高清低帧配置",
    desc: (
      <>
        以 <b>H.265</b> 编码采集画面（画质更好），限制大小为 1920、帧率为 60fps，禁用音频，并通过模拟物理键盘控制设备：
      </>
    ),
    lines: [
      { cmd: "scrcpy --video-codec=h265 --max-size=1920 --max-fps=60 --no-audio --keyboard=uhid" },
      { cmd: "scrcpy --video-codec=h265 -m1920 --max-fps=60 --no-audio -K", comment: "简写形式" },
    ],
  },
  {
    tab: "虚拟显示屏",
    title: "在新虚拟显示屏启动应用",
    desc: (
      <>
        在新的虚拟显示屏中启动 VLC（<b>与设备屏幕相互独立</b>）：
      </>
    ),
    lines: [
      { cmd: "scrcpy --new-display=1920x1080 --start-app=org.videolan.vlc" },
    ],
  },
  {
    tab: "Flex 显示屏",
    title: "Flex 虚拟显示屏 + 常亮",
    desc: (
      <>
        在新的 <b>flex</b> 虚拟显示屏中启动 VLC，使用 H.265 编码、码率 16 Mbps，并保持屏幕常亮不熄灭：
      </>
    ),
    lines: [
      { cmd: "scrcpy --new-display -x --keep-active --start-app=org.videolan.vlc --video-codec=h265 -b16M" },
    ],
  },
  {
    tab: "摄像头录制",
    title: "录制摄像头画面到 MP4",
    desc: (
      <>
        以 H.265、1920×1080 录制设备<b>摄像头</b>画面（含麦克风）到 MP4 文件：
      </>
    ),
    lines: [
      { cmd: "scrcpy --video-source=camera --video-codec=h265 --camera-size=1920x1080 --record=file.mp4" },
    ],
  },
  {
    tab: "网络摄像头",
    title: "作为电脑网络摄像头（Linux）",
    desc: (
      <>
        采集设备<b>前置摄像头</b>，并将其作为电脑上的网络摄像头暴露出去（仅限 Linux）：
      </>
    ),
    lines: [
      { cmd: "scrcpy --video-source=camera --camera-size=1920x1080 --camera-facing=front --v4l2-sink=/dev/video2 --no-playback" },
    ],
  },
  {
    tab: "OTG 控制",
    title: "纯控制模式，无需 USB 调试",
    desc: (
      <>
        不镜像画面，仅通过模拟物理键盘和鼠标控制设备（<b>无需 USB 调试</b>）：
      </>
    ),
    lines: [{ cmd: "scrcpy --otg" }],
  },
  {
    tab: "游戏手柄",
    title: "用游戏手柄控制设备",
    desc: (
      <>
        使用插在电脑上的<b>游戏手柄</b>控制设备：
      </>
    ),
    lines: [
      { cmd: "scrcpy --gamepad=uhid" },
      { cmd: "scrcpy -G", comment: "简写形式" },
    ],
  },
];

function Cmd({ cmd }: { cmd: string }) {
  const parts = cmd.split(/(\s)/);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("--") || (p.startsWith("-") && p.length > 1 && !/\s/.test(p)) ? (
          <span className="flag" key={i}>
            {p}
          </span>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

export default function Examples() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const timer = useRef<0 | ReturnType<typeof setTimeout>>(0);
  const reduced = useReducedMotion();
  const ex = EXAMPLES[active];

  async function copy() {
    try {
      await navigator.clipboard.writeText(ex.lines.map((l) => l.cmd).join("\n"));
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="term">
      <div className="term-tabs" role="tablist" aria-label="使用示例">
        {EXAMPLES.map((e, i) => (
          <button
            key={e.tab}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
          >
            {e.tab}
          </button>
        ))}
      </div>
      <div className="term-body" role="tabpanel" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [...EASE] }}
          >
            <p className="term-desc">{ex.desc}</p>
            {ex.lines.map((l) => (
              <div className="term-line" key={l.cmd}>
                <span className="prompt">$</span>
                <span className="cmd">
                  <Cmd cmd={l.cmd} />
                  {l.comment && <span className="comment">  # {l.comment}</span>}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="term-foot">
        <span>bash · {ex.title}</span>
        <button className="copy-btn" onClick={copy} data-copied={copied}>
          {copied ? "已复制" : "复制命令"}
        </button>
      </div>
    </div>
  );
}
