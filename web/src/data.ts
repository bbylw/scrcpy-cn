const DOC_BASE = "https://github.com/Genymobile/scrcpy/blob/master/doc/";

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

export const docUrl = (file: string) => `${DOC_BASE}${file}`;
