> [!WARNING]
> **本 GitHub 仓库（<https://github.com/Genymobile/scrcpy>）是本项目的唯一
官方来源。请勿从随意的小网站下载发行版，即使其名称中包含 `scrcpy`。**

# scrcpy（v5.0）

<img src="https://raw.githubusercontent.com/Genymobile/scrcpy/master/app/data/scrcpy.svg" width="128" height="128" alt="scrcpy" align="right" />

_发音为 "**scr**een **c**o**py**"（屏幕复制）_

本应用通过 USB 或 [TCP/IP](https://github.com/Genymobile/scrcpy/blob/master/doc/connection.md#tcpip-wireless) 镜像安卓设备
的画面和声音，并允许使用电脑的键盘和鼠标进行控制。它不需要设备获取 _root_
权限，也不需要在设备上安装任何应用。支持 _Linux_、_Windows_ 和 _macOS_。

[![Linux](https://img.shields.io/badge/Linux-下载-orange?style=for-the-badge&logo=linux)](https://github.com/Genymobile/scrcpy/blob/master/doc/linux.md)&nbsp;
[![Windows](https://img.shields.io/badge/Windows-下载-blue?style=for-the-badge&logo=windows)](https://github.com/Genymobile/scrcpy/blob/master/doc/windows.md)&nbsp;
[![macOS](https://img.shields.io/badge/macOS-下载-brightgreen?style=for-the-badge&logo=apple)](https://github.com/Genymobile/scrcpy/blob/master/doc/macos.md)&nbsp;

![截图](https://raw.githubusercontent.com/Genymobile/scrcpy/master/assets/screenshot-debian-600.jpg)

它专注于：

 - **轻量**：原生应用，仅显示设备屏幕
 - **高性能**：30~120fps，取决于设备
 - **高质量**：1920×1080 或更高
 - **低延迟**：[35~70ms][lowlatency]
 - **启动快**：约 1 秒即可显示第一帧画面
 - **无侵入**：不会在安卓设备上残留任何内容
 - **用户友好**：无需账号，无广告，无需联网
 - **自由**：免费且开源的软件

[lowlatency]: https://github.com/Genymobile/scrcpy/pull/646

它的特性包括：
 - [音频转发](https://github.com/Genymobile/scrcpy/blob/master/doc/audio.md)（Android 11+）
 - [录制](https://github.com/Genymobile/scrcpy/blob/master/doc/recording.md)
 - [虚拟显示屏](https://github.com/Genymobile/scrcpy/blob/master/doc/virtual-display.md)
 - 镜像时[关闭设备屏幕](https://github.com/Genymobile/scrcpy/blob/master/doc/device.md#turn-screen-off)
 - 双向[复制粘贴](https://github.com/Genymobile/scrcpy/blob/master/doc/control.md#copy-paste)
 - [可配置画质](https://github.com/Genymobile/scrcpy/blob/master/doc/video.md)
 - 电脑端[硬件解码](https://github.com/Genymobile/scrcpy/blob/master/doc/video.md#hardware-decoding)（默认启用，CPU 占用大幅降低）
 - [摄像头镜像](https://github.com/Genymobile/scrcpy/blob/master/doc/camera.md)（Android 12+）
 - [作为网络摄像头使用（V4L2）](https://github.com/Genymobile/scrcpy/blob/master/doc/v4l2.md)（仅限 Linux）
 - 物理 [键盘][hid-keyboard] 和 [鼠标][hid-mouse] 模拟（HID）
 - [游戏手柄](https://github.com/Genymobile/scrcpy/blob/master/doc/gamepad.md) 支持
 - [OTG 模式](https://github.com/Genymobile/scrcpy/blob/master/doc/otg.md)
 - 以及更多……

[hid-keyboard]: https://github.com/Genymobile/scrcpy/blob/master/doc/keyboard.md#physical-keyboard-simulation
[hid-mouse]: https://github.com/Genymobile/scrcpy/blob/master/doc/mouse.md#physical-mouse-simulation

## 前提条件

安卓设备至少需要 API 21（Android 5.0）。

[音频转发](https://github.com/Genymobile/scrcpy/blob/master/doc/audio.md) 支持 API >= 30（Android 11+）。

请确保已在你的设备上[开启了 USB 调试][enable-adb]。

[enable-adb]: https://developer.android.com/studio/debug/dev-options#enable

在部分设备上（尤其是小米），你可能会遇到以下错误：

```
Injecting input events requires the caller (or the source of the instrumentation, if any) to have the INJECT_EVENTS permission.
```

这种情况下，你需要额外开启[另一选项][control]`USB 调试（安全设置）`（它与
`USB 调试`是两个不同的条目），才能使用键盘和鼠标控制设备。设置该选项后需要
重启设备。

[control]: https://github.com/Genymobile/scrcpy/issues/70#issuecomment-373286323

注意：以 [OTG 模式](https://github.com/Genymobile/scrcpy/blob/master/doc/otg.md) 运行 scrcpy 时无需开启 USB 调试。


## 获取应用

 - [Linux](https://github.com/Genymobile/scrcpy/blob/master/doc/linux.md)
 - [Windows](https://github.com/Genymobile/scrcpy/blob/master/doc/windows.md)（阅读[如何运行](https://github.com/Genymobile/scrcpy/blob/master/doc/windows.md#run)）
 - [macOS](https://github.com/Genymobile/scrcpy/blob/master/doc/macos.md)


## 必知技巧

 - [降低分辨率](https://github.com/Genymobile/scrcpy/blob/master/doc/video.md#size) 可大幅提升性能
   （`scrcpy -m1024`）
 - [_右键点击_](https://github.com/Genymobile/scrcpy/blob/master/doc/mouse.md#mouse-bindings) 触发 `BACK`（返回）
 - [_中键点击_](https://github.com/Genymobile/scrcpy/blob/master/doc/mouse.md#mouse-bindings) 触发 `HOME`（主屏）
 - <kbd>Alt</kbd>+<kbd>f</kbd> 切换[全屏](https://github.com/Genymobile/scrcpy/blob/master/doc/window.md#fullscreen)
 - 还有大量其他[快捷键](https://github.com/Genymobile/scrcpy/blob/master/doc/shortcuts.md)


## 使用示例

选项非常多，分别记录在[用户文档](#用户文档)的各页面中。
这里只列出一些常用示例。

 - 以 H.265 编码采集画面（画质更好），限制大小为 1920，限制帧率为 60fps，
   禁用音频，并通过模拟物理键盘控制设备：

    ```bash
    scrcpy --video-codec=h265 --max-size=1920 --max-fps=60 --no-audio --keyboard=uhid
    scrcpy --video-codec=h265 -m1920 --max-fps=60 --no-audio -K  # 简写形式
    ```

 - 使用电脑端硬件解码（v5.0 起默认启用），或显式选择解码器：

    ```bash
    scrcpy --hwdec=auto      # 能用硬件解码就用，否则回退软件解码（默认）
    scrcpy --hwdec=disabled  # 强制软件解码
    scrcpy --hwdec=vaapi     # 指定解码器：VA-API（仅限 Linux）
    ```

 - 在新的虚拟显示屏中启动 VLC（与设备屏幕相互独立）：

    ```bash
    scrcpy --new-display=1920x1080 --start-app=org.videolan.vlc
    ```

 - 在新的 _flex_ 虚拟显示屏中启动 VLC，使用 H.265 编码、码率 16 Mbps，
   并保持屏幕常亮不熄灭：

    ```bash
    scrcpy --new-display -x --keep-active --start-app=org.videolan.vlc --video-codec=h265 -b16M
    ```

 - 以 H.265、1920x1080 录制设备摄像头画面（含麦克风）到 MP4 文件：

    ```bash
    scrcpy --video-source=camera --video-codec=h265 --camera-size=1920x1080 --record=file.mp4
    ```

 - 采集设备前置摄像头，并将其作为电脑上的网络摄像头暴露出去（仅限
   Linux）：

    ```bash
    scrcpy --video-source=camera --camera-size=1920x1080 --camera-facing=front --v4l2-sink=/dev/video2 --no-playback
    ```

 - 不镜像画面，仅通过模拟物理键盘和鼠标控制设备（无需 USB 调试）：

    ```bash
    scrcpy --otg
    ```

 - 使用插在电脑上的游戏手柄控制设备：

    ```bash
    scrcpy --gamepad=uhid
    scrcpy -G  # 简写形式
    ```

## 用户文档

本应用提供了大量功能和配置选项，记录在以下页面中：

 - [连接](https://github.com/Genymobile/scrcpy/blob/master/doc/connection.md)
 - [视频](https://github.com/Genymobile/scrcpy/blob/master/doc/video.md)
 - [音频](https://github.com/Genymobile/scrcpy/blob/master/doc/audio.md)
 - [控制](https://github.com/Genymobile/scrcpy/blob/master/doc/control.md)
 - [键盘](https://github.com/Genymobile/scrcpy/blob/master/doc/keyboard.md)
 - [鼠标](https://github.com/Genymobile/scrcpy/blob/master/doc/mouse.md)
 - [游戏手柄](https://github.com/Genymobile/scrcpy/blob/master/doc/gamepad.md)
 - [设备](https://github.com/Genymobile/scrcpy/blob/master/doc/device.md)
 - [窗口](https://github.com/Genymobile/scrcpy/blob/master/doc/window.md)
 - [录制](https://github.com/Genymobile/scrcpy/blob/master/doc/recording.md)
 - [虚拟显示屏](https://github.com/Genymobile/scrcpy/blob/master/doc/virtual-display.md)
 - [隧道](https://github.com/Genymobile/scrcpy/blob/master/doc/tunnels.md)
 - [OTG](https://github.com/Genymobile/scrcpy/blob/master/doc/otg.md)
 - [摄像头](https://github.com/Genymobile/scrcpy/blob/master/doc/camera.md)
 - [Video4Linux](https://github.com/Genymobile/scrcpy/blob/master/doc/v4l2.md)
 - [快捷键](https://github.com/Genymobile/scrcpy/blob/master/doc/shortcuts.md)


## 资源

 - [常见问题 FAQ](https://github.com/Genymobile/scrcpy/blob/master/FAQ.md)
 - [翻译文档][wiki]（内容不一定及时更新）
 - [构建指南](https://github.com/Genymobile/scrcpy/blob/master/doc/build.md)
 - [开发者文档](https://github.com/Genymobile/scrcpy/blob/master/doc/develop.md)
 - [校验发行版签名](https://github.com/Genymobile/scrcpy/blob/master/doc/verify-release.md)

[wiki]: https://github.com/Genymobile/scrcpy/wiki


## 文章

- [scrcpy 介绍][article-intro]
- [Scrcpy 现已支持无线连接][article-tcpip]
- [Scrcpy 2.0，加入音频功能][article-scrcpy2]

[article-intro]: https://blog.rom1v.com/2018/03/introducing-scrcpy/
[article-tcpip]: https://www.genymotion.com/blog/open-source-project-scrcpy-now-works-wirelessly/
[article-scrcpy2]: https://blog.rom1v.com/2023/03/scrcpy-2-0-with-audio/

## 联系方式

你可以提交 [issue](https://github.com/Genymobile/scrcpy/issues) 来报告 Bug、
请求新功能或提出一般性问题。

报告 Bug 前，请先阅读[常见问题 FAQ](https://github.com/Genymobile/scrcpy/blob/master/FAQ.md)，
你可能会立即找到问题的解决方案。

你也可以使用：

 - Reddit：[`r/scrcpy`](https://www.reddit.com/r/scrcpy)
 - BlueSky：[`@scrcpy.bsky.social`](https://bsky.app/profile/scrcpy.bsky.social)
 - Twitter：[`@scrcpy_app`](https://twitter.com/scrcpy_app)


## 捐赠

我是 [@rom1v](https://github.com/rom1v)，_scrcpy_ 的作者和维护者。

如果你喜欢这款应用，可以[支持我的开源工作][donate]：
 - [GitHub Sponsors](https://github.com/sponsors/rom1v)
 - [Liberapay](https://liberapay.com/rom1v/)
 - [PayPal](https://paypal.me/rom2v)

[donate]: https://blog.rom1v.com/about/#support-my-open-source-work

## 许可证

    Copyright (C) 2018 Genymobile
    Copyright (C) 2018-2026 Romain Vimont

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
