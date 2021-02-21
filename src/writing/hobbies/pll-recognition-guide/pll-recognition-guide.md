---
title: "PLL Recognition Guide"
date: "2021-01-04"
lastupdated: "2021-01-07"
tags: ["cubing", "puzzles", "cfop", "pll", "rubiks-cube", "3x3"]
type: "hobby"
---

_This page is not optimized for mobile._

One overlooked aspect of teaching PLL to beginner CFOP solvers in many tutorials online is PLL Recognition. Unlike OLL cases that are generally easier to identify, have shorter algorithms and familiar triggers, PLL algorithms are longer and recognizing PLL cases takes a bit of effort. If you are a beginner CFOP learner who knows the basics (2-look PLL) and want to learn full PLL and find the task daunting, this guide will help you recognize, learn and practice PLL algs in no time.

**Note**: This written guide is inspired by [badmephisto's PLL Recognition Guide (2009)](https://www.youtube.com/watch?v=qBYycb7hR4Y/) with improved ordering, terminology and a nice summary at the end. If you prefer learning from video, check out the original guide or watch the video alongside reading this guide.

PLL cases are usually represented by drawing arrows showing which pieces need to swap places. They are named using English alphabets which are chosen to roughly resemble the pattern of these arrows. But that can sometimes be confusing. So to give a simpler and more efficient way, I will completely omit the arrows from visualizations and will go over some basics first.

Out of 21 cases, only 13 are distinct. Other PLLs are either mirrors or inverses. For e.g. Ua perm is the mirror of Ub, meaning if you apply Ua alg to Ub case but by mirroring your moves with the left hand, you'll be able to solve Ub.

The 13 distinct perms are:

- U (Ua, Ub) \*
- H \*
- Z \*
- T (Adjacent Corner Swap Alg in 2-look PLL) \*
- Y (Diagonal Corner Swap Alg in 2-look PLL) \*
- F
- E
- V
- A (Aa, Ab)
- J (Ja, Jb)
- R (Ra, Rb)
- N (Na, Nb)
- G (Ga, Gb, Gc, Gd)

_\* 2-look PLL algs_

To recognize the rest, we will look whether certain "features" are available. There are 5 main features that are easily noticeable in PLL cases:

#### 1. Headlights

If you see one or more face on the Last layer (LL) where two corner stickers have the same color and the middle one has either an adjacent or an opposite color, that's a headlight. 11 out of 21 PLLs have a headlights feature.

A "connected headlight" is when a 1x2 block is connected to a headlight. Depending on the case, there can be either 0, 1 or 2 connected headlights.

PLLs: **A**, **T**, **R**, **G** (+ **H**, **Z**)

| Name               | PLL                                                                                                                                                                                                                                                                                                         | Remarks                                                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| A (Aa, Ab)         | ![Aa](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Aa.svg) ![Ab](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Ab.svg)                                                                                                                                                       | <ul><li>Adjacent color between headlights</li><li>No connected headlights</li></ul>                                               |
| R (Ra, Rb)         | ![Ra](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Ra.svg) ![Rb](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Rb.svg)                                                                                                                                                       | <ul><li>Adjacent color between headlights</li><li>1 connected headlight</li></ul>                                                 |
| T                  | ![T](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/T.svg)                                                                                                                                                                                                                                    | <ul><li>Opposite color between headlights</li><li>2 connected headlight</li></ul>                                                 |
| G (Ga, Gb, Gc, Gd) | ![Ga](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Ga.svg) ![Gb](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Gb.svg) ![Gc](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Gc.svg) ![Gd](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Gd.svg) | <ul><li>Ga/Gc - Adjacent color between headlights, Gb/Gd - Opposite color between headlights</li><li>No connected headlights</li> |
| H                  | ![H](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/H.svg)                                                                                                                                                                                                                                    | <ul><li>Headlights on all sides</li><li>No connected headlights</li></ul>                                                         |
| Z                  | ![Z](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Z.svg)                                                                                                                                                                                                                                    | <ul><li>Headlights on all sides</li><li>No connected headlights</li></ul>                                                         |

#### 2. Full Bar

A full bar is a 1x3 block of solved pieces on the last layer. Only 5 out of 21 cases have a full bar.

PLLs: **J**, **F**, **U**

| Name       | PLL                                                                                                                                                   | Remarks                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| J (Ja, Jb) | ![Ja](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Ja.svg) ![Jb](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Jb.svg) | <ul><li>1 connected bar</li><li>Adjacent colors pair next to bar</li></ul>  |
| F          | ![F](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/F.svg)                                                                              | <ul><li>No connected bar</li><li>Opposite colors pair next to bar</li></ul> |
| U (Ua, Ub) | ![Ua](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Ua.svg) ![Ub](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Ub.svg) | Easy cases                                                                  |

#### 3. Half-Bars

Half-bar refers to a 1x2 block of solved pieces on the last layer. 10 PLLs have half-bars in them.

PLLs: **J**, **N**, **Y**, **G**

| Name               | PLL                                                                                                                                                                                                                                                                                                         | Remarks                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| J (Ja, Jb)         | ![Ja](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Ja.svg) ![Jb](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Jb.svg)                                                                                                                                                       | 3 half-bars (+1 full bar) |
| N (Na, Nb)         | ![Na](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Na.svg) ![Nb](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Nb.svg)                                                                                                                                                       | 4 distinct half-bars      |
| Y                  | ![Y](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Y.svg)                                                                                                                                                                                                                                    | 2 half-bars               |
| T                  | ![T](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/T.svg)                                                                                                                                                                                                                                    | 2 half-bars               |
| G (Ga, Gb, Gc, Gd) | ![Ga](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Ga.svg) ![Gb](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Gb.svg) ![Gc](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Gc.svg) ![Gd](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Gd.svg) | 1 half-bar                |

#### 4. 2x2 Square

This is just a solved 2x2 block on the top layer. 3 PLL cases have this feature.

PLLs: **A**, **V**

| Name       | PLL                                                                                                                                                   | Remarks                                                                          |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| A (Aa, Ab) | ![Aa](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Aa.svg) ![Ab](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Ab.svg) | <ul><li>Has headlights</li><li>Same color in the diagonal corners</li></ul>      |
| V          | ![V](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/V.svg)                                                                              | <ul><li>No headlights</li><li>Different colors in the diagonal corners</li></ul> |

#### 5. No Features

PLLs: **E**

![E](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/E.svg)

The main feature of the **E** perm is that it has no features. You can look around the last layer and see that there aren't any headlights, full bars, half-bars, or 2x2 squares.

### Summary

| Name | PLL                                                                        | Features                                                                                                                                        | Algorithms                                                                                                                                                  | Remarks                                                                                                                                                                                                               |
| ---- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aa   | ![Aa](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Aa.svg) | <ul><li>Headlights, Adjacent color between headlights, No connected headlights</li><li>2x2 square, same color in the diagonal corners</li></ul> | <ul><li>x (R' U R') D2 (R U' R') D2 R2</li><li>y x' R2 D2 R' U' R D2 R' U R' x</li><li>R' F R' B2 R F' R' B2 R2</li></ul>                                   |                                                                                                                                                                                                                       |
| Ab   | ![Ab](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Ab.svg) | <ul><li>Headlights, Adjacent color between headlights, No connected headlights</li><li>2x2 square, same color in the diagonal corners</li></ul> | <ul><li>x R2 D2 (R U R') D2 (R U' R)</li><li>y x' R U' R D2 R' U R D2 R2 x</li></ul>                                                                        |                                                                                                                                                                                                                       |
| Ra   | ![Ra](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Ra.svg) | <ul><li>Headlights, Adjacent color between headlights, 1 connected headlights</li></ul>                                                         | <ul><li>y (R U R' F') (R U2 R' U2) (R' F R U) (R U2 R')</li><li>y R U' R' U' R U R D R' U' R D' R' U2 R'</li><li>L U2 L' U2 L F' L' U' L U L F L2</li></ul> | Parity alg in Old Pochmann method (BLD).                                                                                                                                                                              |
| Rb   | ![Rb](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Rb.svg) | <ul><li>Headlights, Adjacent color between headlights, 1 connected headlights</li></ul>                                                         | <ul><li>(R' U2 R U2) R' F (R U R' U') R' F' R2</li><li>R' U2 R' D' R U' R' D R U R U' R' U' R</li></ul>                                                     |                                                                                                                                                                                                                       |
| T    | ![T](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/T.svg)   | <ul><li>Headlights, Opposite color between headlights, 2 connected headlights</li></ul>                                                         | <ul><li>(R U R' U') (R' F R2 U') R' U' (R U R' F')</li></ul>                                                                                                | <ul><li>The most commonly used adjacent corner swap algorithm in 2-look PLL.</li><li>Used in Old Pochmann method to solve the edges.</li></ul>                                                                        |
| Ga   | ![Ga](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Ga.svg) | <ul><li>Headlights, Adjacent color between headlights, No connected headlights</li><li>1 half-bar</li></ul>                                     | <ul><li>R2 U (R' U R' U') (R U' R2) D U' (R' U R D')</li><li>R2 u R' U R' U' R u' R2 y' R' U R</li></ul>                                                    |                                                                                                                                                                                                                       |
| Gb   | ![Gb](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Gb.svg) | <ul><li>Headlights, Opposite color between headlights, No connected headlights</li><li>1 half-bar</li></ul>                                     | <ul><li>y (F' U' F) (R2 u R' U) (R U' R u') R2</li></ul>                                                                                                    |                                                                                                                                                                                                                       |
| Gc   | ![Gc](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Gc.svg) | <ul><li>Headlights, Adjacent color between headlights, No connected headlights</li><li>1 half-bar</li></ul>                                     | <ul><li>y2 R2 F2 (R U2 R U2) R' F (R U R' U') R' F R2</li><li>R2 U' R U' R U R' U R2 D' U R U' R' D</li></ul>                                               |                                                                                                                                                                                                                       |
| Gd   | ![Gd](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Gd.svg) | <ul><li>Headlights, Opposite color between headlights, No connected headlights</li><li>1 half-bar</li></ul>                                     | <ul><li>D' (R U R' U') D (R2 U' R U') (R' U R' U) R2</li><li>R U R' y' R2 u' R U' R' U R' u R2</li></ul>                                                    |                                                                                                                                                                                                                       |
| Ja   | ![Ja](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Ja.svg) | <ul><li>Full bar, 1 connected bar, Adjacent colors pair next to bar</li><li>4 half-bars (including 1 full bar)</li></ul>                        | <ul><li>y (R' U L' U2) (R U' R' U2 R) L</li><li>L' U' L F L' U' L U L F' L2 U L</li></ul>                                                                   |                                                                                                                                                                                                                       |
| Jb   | ![Jb](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Jb.svg) | <ul><li>Full bar, 1 connected bar, Adjacent colors pair next to bar</li><li>4 half-bars (including 1 full bar)</li></ul>                        | <ul><li>(R U R' F') (R U R' U') R' F R2 U' R'</li></ul>                                                                                                     | Used in Old Pochmann method to solve the edges.                                                                                                                                                                       |
| F    | ![F](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/F.svg)   | <ul><li>Full bar, No connected bar, Opposite colors pair next to bar                                                                            | <ul><li>y (R' U' F') (R U R' U') (R' F R2 U') (R' U' R U) (R' U R)</li></ul>                                                                                |                                                                                                                                                                                                                       |
| Na   | ![Na](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Na.svg) | <ul><li>4 distinct half-bars</li></ul>                                                                                                          | <ul><li>(R U R' U) (R U R' F') (R U R' U') (R' F R2 U') R' U2 (R U' R')</li><li>z U R' D R2 U' R D' U R' D R2 U' R D' z'</li></ul>                          |                                                                                                                                                                                                                       |
| Nb   | ![Nb](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Nb.svg) | <ul><li>4 distinct half-bars</li></ul>                                                                                                          | <ul><li>(R' U L' U2 R U' L) (R' U L' U2 R U' L)</li><li>R' U R U' R' F' U' F R U R' F R' F' R U' R</li></ul>                                                |                                                                                                                                                                                                                       |
| Y    | ![Y](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Y.svg)   | <ul><li>2 half-bars, an unsolved corner in between</li></ul>                                                                                    | <ul><li>F (R U' R' U') (R U R' F') (R U R' U') (R' F R F')</li></ul>                                                                                        | <ul><li>The most commonly used diagonal corner swap algorithm in 2-look PLL.</li><li>Altered Y Perm (without the F moves at the beginning and the end) is used in Old Pochmann method to solve the corners.</li></ul> |
| V    | ![V](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/V.svg)   | <ul><li>2x2 square, different colors in the diagonal corners</li></ul>                                                                          | <ul><li>(R' U R' U') y (R' F' R2 U') (R' U R' F) R F</li></ul>                                                                                              |                                                                                                                                                                                                                       |
| E    | ![E](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/E.svg)   | <ul><li>No features</li></ul>                                                                                                                   | <ul><li>y x' (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') x</li></ul>                                                                                    |                                                                                                                                                                                                                       |
| Ua   | ![Ua](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Ua.svg) | <ul><li>3 headlights</li><li>1 full bar</li></ul>                                                                                               | <ul><li>y2 (R U' R U) R U (R U' R' U') R2</li></ul>                                                                                                         | Easy 2-look PLL case.                                                                                                                                                                                                 |
| Ub   | ![Ub](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Ub.svg) | <ul><li>3 headlights</li><li>1 full bar</li></ul>                                                                                               | <ul><li>y2 R2 U (R U R' U') R' U' (R' U R')</li></ul>                                                                                                       | Easy 2-look PLL case.                                                                                                                                                                                                 |
| H    | ![H](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/H.svg)   | <ul><li>4 headlights</li></ul>                                                                                                                  | <ul><li>(M2 U M2) U2 (M2 U M2)</li></ul>                                                                                                                    | Easy 2-look PLL case.                                                                                                                                                                                                 |
| Z    | ![Z](https://raw.githubusercontent.com/rsapkf/rupiks/main/pll/svg/Z.svg)   | <ul><li>4 headlights</li></ul>                                                                                                                  | <ul><li>(M2 U M2 U) (M' U2) (M2 U2 M')</li></ul>                                                                                                            | Easy 2-look PLL case.                                                                                                                                                                                                 |

This is just a beginner's guide to PLL recognition. There are advanced techniques that can help you recognize PLL by looking at just 2 sides of the last layer. Check out the links in Further Reading section to learn more.

#### Further reading and credits:

- [badmephisto - Recognizing the PLLs (2009)](https://www.youtube.com/watch?v=qBYycb7hR4Y/)
- [CubeSkills - PLL Algs](https://www.cubeskills.com/uploads/pdf/tutorials/pll-algorithms.pdf)
- [CubeSkills - PLL Recognition Trainer](https://www.cubeskills.com/tools/pll-recognition-trainer) - 2 side PLL recognition trainer.
- [AlgDb.net - PLL](http://algdb.net/puzzle/333/pll/)
- [JPerm.net - PLL Trainer](http://jperm.net/algs/pll)
- [Speedsolving Wiki - PLL](https://www.speedsolving.com/wiki/index.php/PLL/)
- [How I Recognize PLL Fast](https://www.youtube.com/watch?v=sdz5EjwwwwWShCg), [Advanced PLL Recognition](https://www.youtube.com/watch?v=_gIAQm_B170) - J Perm
- [VisualCube](http://cube.rider.biz/visualcube.php) - Generate custom Rubik's cube visualisations.

  _All visualizations in this guide were created using VisualCube. [Learn how](https://notes.rsapkf.xyz/blog/oll-pll-visualizations-visualcube)._
