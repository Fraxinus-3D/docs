---
title: マイクロ3Dプリンタ
meta_title: ""
description: 本ページではFraxinusプロジェクトのマイクロ3Dプリンタについて紹介します。
draft: false
slug: micro-printers
author: "Fraxinus Project"
summary: Fraxinusのマイクロ3Dプリンタ系列を紹介するページです。Fraxinus000系・00系・0w系など、小型CoreXYモデルの特徴や仕様を一覧できます。
image: /images/Fraxinus_micro_All_11.jpg
keywords:
  - Fraxinus
  - マイクロ3Dプリンタ
  - Fraxinus000w4
  - Fraxinus00
  - Fraxinus00w4
  - Fraxinus0w
  - CoreXY
categories:
  - Fraxinus紹介
tags:
  - Fraxinus000w4
  - Fraxinus00
  - Fraxinus00w
  - Fraxinus00w2
  - Fraxinus00w3
  - Fraxinus00w4
  - Fraxinus0w
  - Fraxinus0w3
date: 2024-11-10T14:01:52+09:00
lastmod: 2026-11-09T00:00:00+09:00
---

Fraxinusシリーズはアクリルフレームを用いた、コンパクトで出先でのデモや機能紹介に好適なCoreXY構造のマイクロ3Dプリンタです。コミュニティ由来の派生機は[コミュニティ](/docs/community/)も参照してください。

現在9種類（000w4, 00, 00w, 00w2, 00w3, 00w3 (mold), 00w4, 0w, 0w3）あります。

* [Fraxinus000w4](#fraxinus000w4)
* [Fraxinus00](#fraxinus00)
* [Fraxinus00w](#fraxinus00w)
* [Fraxinus00w2](#fraxinus00w2)
* [Fraxinus00w3](#fraxinus00w3)
* [Fraxinus00w3 (mold)](#fraxinus00w3-mold)
* [Fraxinus00w4](#fraxinus00w4)
* [Fraxinus0w](#fraxinus0w)
* [Fraxinus0w3](#fraxinus0w3)

そのほかにも[コミュニティメンバーが設計製作したプリンタ](../community)もあります。

| モデル | 本体サイズ (mm) | 造形サイズ | 電源 | 特徴 |
|--------|---------------|-----------|------|------|
| 000w4 | 95×117×95 | 50mm角 | USB-PD / モバイルバッテリー（外部） | シリーズ最小、タッチスクリーン搭載 |
| 00 | 160×157×194 | 70mm角 | USB-PD / モバイルバッテリー（内蔵可） | 初代モデル |
| 00w | 153×152×176 | 70mm角 | USB-PD / モバイルバッテリー（内蔵可） | バッテリー内蔵で完全自立動作可 |
| 00w2 | 147×152×162 | 66mm角 | USB-PD / モバイルバッテリー（外部） | タッチスクリーン搭載、小型化 |
| 00w3 | 147×160×147 | 66mm角 | USB-PD / モバイルバッテリー（外部） | 高さをさらに短縮、ガントリー再設計 |
| 00w3 (mold) | 147×160×147 | 66mm角 | USB-PD / モバイルバッテリー（外部） | 00w3の3Dプリントバージョン |
| 00w4 | 125×137×125 | 80mm角 | USB-PD / モバイルバッテリー（外部） | 00系最大の造形サイズ、タッチスクリーン搭載 |
| 0w | 203×215×203 | 120mm角 | USB-PD / モバイルバッテリー（内蔵可） | 造形サイズ拡大モデル |
| 0w3 | 197×215×198 | 116mm角 | USB-PD / モバイルバッテリー（外部） | 00w3派生の造形サイズ拡大モデル |

![Fraxinusマイクロ3Dプリンタ系列のサイズ比較図。左からFraxinus 00tw（本体163x183x235mm、印刷□70mm）、Fermion（105x104x108mm、□25mm）、Fraxinus 000w4（95x117x95mm、□50mm）、Fraxinus 00w4（125x137x125mm、□80mm）、Fraxinus 00w3（147x160x147mm、□66mm）、Fraxinus 0w3（197x215x198mm、□116mm）を正面から並べている](/images/Fraxinus_micro_All_11.jpg)

<!-- Fraxinus00w3 -->
<div style="width: 100%; aspect-ratio: 1.33;">
  <iframe
    style="width: 100%; height: 100%;"
    src="https://gmail5004514.autodesk360.com/g/shares/SH30dd5QT870c25f12fc8c6182020235e4ef?mode=embed"
    allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0">
  </iframe>
</div>


**3Dモデルのライセンスについて**  
下記のライセンスのモデルを含みます。

* [Hummingbird Extruder](https://github.com/nhchiu/VoronMods/tree/main/Extruders/Hummingbird)
  * [@nhchiu](https://www.printables.com/@nhchiu)
  * [GPL-3.0](https://github.com/nhchiu/VoronMods/blob/main/LICENSE)


## Fraxinus000w4

50mm四方の印刷サイズを持ちUSB-PD電源で動作可能な、コンパクトで出先での紹介に好適なCoreXY構造の3Dプリンターです。本体サイズは95×117×95mm（突起部除く）で、シリーズ最小のモデルです。外部のモバイルバッテリーでも動作し、前面にタッチスクリーンを搭載しています。（[Xでの紹介ポスト](https://x.com/fukumay1/status/2069808983955964148)）

![Fraxinus000w4を斜め後方から見たレンダリング画像。印刷サイズ50x50x50mm、本体サイズ95x117x95mmの仕様テキスト付き](/images/Fraxinus000w4-01.jpg)

![Fraxinus000w4を正面から見たレンダリング画像。前面にタッチスクリーンを搭載](/images/Fraxinus000w4-02.jpg)

![Fraxinus000w4の実機を横から撮影した写真。隣のフィラメントスプールより小さい](/images/Fraxinus000w4-03.jpg)

![Fraxinus000w4の実機を正面から撮影した写真。タッチスクリーンが点灯し、左にフィラメントスプールがある](/images/Fraxinus000w4-04.jpg)

## Fraxinus00

シリーズの原型となるモデルです。70mm角の造形サイズを持ち、USB-PD電源やモバイルバッテリーで駆動できます。

![Fraxinus00の外観レンダリング画像](/images/Fraxinus00.jpg)

![Fraxinus00の実機写真 1](/images/Fraxinus00-photo-1.jpg)

![Fraxinus00の実機写真 2](/images/Fraxinus00-photo-2.jpg)

## Fraxinus00w

モバイルバッテリーを本体内部に収納でき、電源ケーブルなしで完全に自立動作できるモデルです。そのぶん本体はやや大きくなりますが、造形サイズは00と同じ70mm角を維持しています。

![Fraxinus00wの外観画像](/images/Fraxinus00w.jpg)

![Fraxinus00wの実機写真](/images/Fraxinus00w-photo-1.jpg)

## Fraxinus00w2

内蔵バッテリーを廃止し、外部USB-PD電源に一本化することで本体をさらに小型化しました。タッチスクリーンを搭載し操作性が向上しています。造形サイズは66mm角とわずかに小さくなっています。

![Fraxinus00w2の外観画像](/images/Fraxinus00w2.jpg)

![Fraxinus00w2の実機写真](/images/Fraxinus00w2-photo-1.jpg)

![Fraxinus00w2の比較画像](/images/Fraxinus00w2-compare.jpg)

## Fraxinus00w3

00w2と同じ66mm角の造形サイズを維持しつつ、本体高さをさらに短縮（162mm→147mm）しました。ガントリー構造を再設計し、よりコンパクトな筐体を実現しています。

![Fraxinus00w3の外観画像 1](/images/Fraxinus00w3-1.jpg)

![Fraxinus00w3の外観画像 2](/images/Fraxinus00w3-2.jpg)

![Fraxinus00w3の実機写真](/images/Fraxinus00w3-photo-1.jpg)

## Fraxinus00w3 (mold)

00w2と同じ66mm角の造形サイズを維持しつつ、本体高さをさらに短縮（162mm→147mm）しました。ガントリー構造を再設計し、よりコンパクトな筐体を実現しています。00w3の3Dプリントバージョンです。

![Fraxinus00w3-moldの外観画像 1](/images/Fraxinus00w3-mold-1.jpg)

![Fraxinus00w3-moldの外観画像 2](/images/Fraxinus00w3-mold-2.jpg)

![Fraxinus00w3-moldの実機写真](/images/Fraxinus00w3-mold-photo-1.jpg)

![Fraxinus00w3-moldの実機写真](/images/Fraxinus00w3-mold-photo-2.jpg)

## Fraxinus00w4

80mm四方の印刷サイズを持ちUSB-PD電源で動作可能な、コンパクトで出先での紹介に好適なCoreXY構造の3Dプリンターです。本体サイズは125×137×125mm（突起部除く）で、00系では最大の造形サイズです。外部のモバイルバッテリーでも動作し、前面にタッチスクリーンを搭載しています。

![Fraxinus00w4を斜め後方から見たレンダリング画像。印刷サイズ80x80x80mm、本体サイズ125x137x125mmの仕様テキスト付き](/images/Fraxinus00w4-01.jpg)

![Fraxinus00w4を正面から見たレンダリング画像。前面にタッチスクリーンを搭載](/images/Fraxinus00w4-02.jpg)

## Fraxinus0w

120mm角の造形サイズを持つ、シリーズ最大のマイクロプリンタです。VORON v0.2と同等の造形エリアを、ひと回り小さな本体に収めています。

![Fraxinus0w rev1の外観画像](/images/Fraxinus0w-rev1.jpg)

![Fraxinus0w rev2の外観画像](/images/Fraxinus0w-rev2.jpg)

## Fraxinus0w3

00w3の派生で116mm角の造形サイズを持つ、シリーズ最大級のマイクロプリンタです。VORON v0.2とほぼ同等の造形エリアを、ひと回り小さな本体に収めています。

![Fraxinus0w3の外観画像](/images/Fraxinus0w3-1.jpg)

![Fraxinus0w3の外観画像](/images/Fraxinus0w3-2.jpg)

![Fraxinus0w3の比較画像](/images/Fraxinus0w3-compare-front-view.jpg)

![Fraxinus0w3の比較画像](/images/Fraxinus0w3-compare-top-view.jpg)
