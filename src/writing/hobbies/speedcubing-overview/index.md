---
title: An Overview of Speedcubing (+Awesome Learning Resources)
date: 2020-08-02
lastUpdated: 2020-08-07
tags: ["cubing", "puzzles", "cfop", "speedsolving", "rubiks-cube", "3x3"]
type: hobbies
slug: speedcubing-overview
---

When I first learned to solve the Rubik's cube back in 2014, it took me less than 2 hours to learn the beginner's solution. But I quickly got bored - I was pulled into the deep rabbithole of speedcubing - an exercise where people try to solve the cube in the fastest time possible. The current world record average is 5.53 seconds held by Australian speedcuber **Feliks Zemdegs** set in 2019.

This guide won't give you the algorithms but a thorough introduction to what speedcubing is and a collection of the best resources online that you can use to achieve a sub 30 result in the fastest time possible.

If you are already familiar with speedsolving techniques, this guide probably has nothing for you. But read on, as you might discover something you didn't already know.

The method I suggest you study is called [CFOP](https://en.wikipedia.org/wiki/CFOP_method), popularized by Czech mathematician [Jessica Fridrich](http://www.ws.binghamton.edu/fridrich/system.html) in 1997. This is the most popular speedsolving method used by cubers today, among others like **ZZ**, **Roux** and **Petrus**.

## Introduction to CFOP

There are 4 steps in this method:

- Cross
- F2L (First 2 Layers)
- OLL (Orientation of Last Layer)
- PLL (Permutation of Last Layer)

---

## 1. Cross

![Cross](https://www.speedsolving.com/wiki/images/thumb/3/3f/Cross_2.jpg/120px-Cross_2.jpg)

The first step involves making a cross on one side by solving all edges of a given face and aligning the edges with the second-layer centers. Most speedcubers usually solve the cross on the bottom to avoid cube rotations and to get an overall better view of the important pieces needed for the next step. This is called '**Lookahead**'. In speedcubing competitions, cubers take their 15 second inspection time to plan required moves for a cross (in many cases, the first F2L pair as well!) to save time. In all cases, the cross can be done in less than 8 moves. Most speedcubers are color-neutral, meaning they can start with any colored face without slowing down.

## 2. F2L

![F2L](https://www.speedsolving.com/wiki/images/f/f9/Fridrich_method.gif)

In F2L, corner and edge pieces are paired up using the free top layer and later moved to their correct location. The four **slots** between the cross pieces are filled in, one slot at a time, by inserting a corner and its corresponding edge simultaneously. Most of the 42 distinct cases have reasonable intuitive solutions. So, no algorithms are required for this case unless you want to achieve sub 25 or better results. The completion of this step leaves one with just the last layer, typically placed on top.

## 3. OLL

![OLL](https://www.speedsolving.com/wiki/images/thumb/3/37/OLLinfo.png/120px-OLLinfo.png)

This stage involves manipulating the top layer so that all the pieces therein have the same colour on top, at the expense of incorrect colours on other sides. This stage involves a total of 57 cases. Remember, multiple algorithms (in some case, 10+) can be used to solve a single OLL case. You just need to remember the easiest one.

A simpler version, called "**2-look**" OLL orients edges first and corners afterwards. It uses 10 algorithms, 3 for edge orientation and 7 for corner orientation.

## 4. PLL

![PLL](https://www.speedsolving.com/wiki/images/thumb/7/75/PLLinfo.jpg/120px-PLLinfo.jpg)

The final stage involves moving the pieces of the top layer while preserving their orientation. There is a total of 21 cases for this stage.

Just like 2-look OLL, "**2-look**" PLL solves the corners first and edges separately. It uses 6 algorithms, 2 for corner permutation and 4 for edge permutation.

---

### Terminologies

There are some very common moves and terms in speedcubing that you should know.

- [Notation](https://www.speedsolving.com/wiki/index.php/NxNxN_Notation)

- Triggers

  These are 3 or 4 move sequences that commonly appear in multiple algorithms making them easier to memorise.

  - Sexy: `R U R' U'`
  - Sledgehammer: `R' F R F'`
  - HedgeSlammer / Reverse Sledgehammer: `F R' F' R`
  - Sune / Anti-chair: `R U R' U R U2 R'` and [variants](https://www.speedsolving.com/wiki/index.php/Sune#Variants).
  - Antisune / Chair: `R U2 R' U' R U' R'`

  For example: In [T OLLs](https://www.speedsolving.com/wiki/index.php/OLL#.22T.22_shapes), instead of saying the full alg like `F (R U R' U') F'`, you could memorise it like `F Sexy F'` or instead of memorising `(R U R' U') (R' F R F')`, you could just remember the alg as `Sexy Sledgehammer`.

- [Acronyms](https://www.speedsolving.com/wiki/index.php/Category:Acronyms)
  - TPS - Turns Per Second
  - AUF - Adjust U Face

---

### Recommendations:

- Learn to use the inspection time in practice solves.
- Learn fingertricks as early as possible.
  - [Finger Tricks - JPerm](https://www.youtube.com/watch?v=wLuVF9Dk3AQ)
  - [OLL Algs and Fingertricks - Feliks Zemdegs](https://www.youtube.com/watch?v=IasVqtCHoj0)
  - [PLL Algs and Fingertricks - Feliks Zemdegs](https://www.youtube.com/watch?v=HWIQdX8vHcE)
- Attempt to complete the cross in less than 8 moves. Plan out the entire cross during inspection.

  - [Advanced Cross Playlist - JPerm](https://www.youtube.com/playlist?list=PLI24ciRbl8BWbmb42GW5BDinKfKVq79WD).

  Look into [X-Cross](https://www.youtube.com/watch?v=P9POsBAaKd0) (Extended Cross). This means solving the cross plus 1 F2L pair simultaneously.

- Learn F2L intuitively. With enough practice, your muscle memory will make learning the algorithms obsolete.
  - [Advanced F2L Playlist - JPerm](https://www.youtube.com/playlist?list=PLI24ciRbl8BUTnnzmJIIn3Ts_6-mKMBP7).
- Learn 2-look OLL first **along** with other easier OLL cases.
  - Print out [this](https://www.cubeskills.com/tutorials/oll-algorithms) set of OLL algs from [Feliks Zemdegs' CubeSkills site](https://cubeskills.com/).
  - [2-look OLL - JPerm](https://www.youtube.com/watch?v=GhmYBgLoQQg).
  - [2-look OLL - More intuitive algorithms that I personally use](https://notes.rsapkf.xyz/docs/mathematics/rubiks-cube#2-look-oll).
- Learn 2-look PLL first. It is recommended to learn the entire PLL as soon as possible since there are only 21 algs on the set.

  - Print out [this](https://www.cubeskills.com/tutorials/pll-algorithms) set of PLL algs from CubeSkills.
  - [2-look PLL - JPerm](https://www.youtube.com/watch?v=f_Yor-ydZjs).
  - [2-look PLL - More intuitive algorithms that I personally use](https://notes.rsapkf.xyz/docs/mathematics/rubiks-cube#2-look-pll).

- Practice Color Neutrality right away. In beginning stages, OLL and PLL may seem to be overwhelming but as you learn the algorithms, that will get easier. But once you settle on a color, for e.g. white on bottom, it will be significantly harder to develop color neutrality afterwards because your brain will be wired to filter out the white sticker during solves. Consequently, improving your Cross and F2L will be much harder. Color Neutrality cannot be developed through algorithms like the Last Layer.

---

### Becoming sub 20

Intuitive F2L, 2-look OLL and 2-look PLL can get you to sub 30 but full OLL and full PLL can definitely help you achieve better results. You will need to practice your cross and F2L so that your muscle memory can solve F2L cases without thinking about the current pair and look ahead to the next pair while inserting the current one. Advanced F2L techniques may be required.

---

### Becoming sub 10 or better

The key here is to reduce cube rotations as much as you can, increasing your TPS, reducing regrips, advanced fingertricks, advanced lookahead and developing color neutrality. Learning new sets of algorithms(COLL/OLLCP, Winter Variation, BLE, etc) to be able to recognize cases where OLL/PLL can be skipped or that lead to an easier PLL will also help. You should probably also learn multiple algorithms for the same case in order to be able to solve a case from other angles saving you a turn, the AUF or a cube rotation. Many speedcubers also use advanced techniques like [Keyhole](https://www.youtube.com/watch?v=mXEOPX42FJg), [Pseudoslotting](https://www.youtube.com/watch?v=TWffMVBqj1w), [Multislotting](https://www.youtube.com/watch?v=IjDYoNxDa6U) and [Double/Triple X-Cross](https://www.youtube.com/watch?v=pTUy0oi4Nco).

---

### Advanced Algorithms

Getting even better times requires learning a few new sets of algorithms. These sets are often used in other speedsolving methods and can be used in combination with CFOP to get faster times. You don't need to learn every algorithm in these sets to be able to use them since there are thousands - just the more common ones. Here are some of the most popular algorithms sets:

- #### COLL (Corners of Last Layer)

If the last edges after F2L are already oriented, you can use a different set of 42 algorithms called COLL that solve all corners of the top layer to get either **U**(8/12 chance), **H**(2/12 chance) or **Z**(1/12 chance) perms which are relatively easier to do or a PLL skip. COLL increases your chances of getting a PLL skip from 1/72 to 1/12 which greatly helps reduce the overall time during your solves.

- #### OLLCP (Orientation of Last Layer and Corner Permutation)

OLLCP is the superset of COLL with 300+ algorithms than can solve the corners with a single algorithm even if not all the last edges are solved after F2L.

- #### OLS (Orientation of the Last Slot)

OLS is a last slot method used to skip any OLL case while simultaneously solving the last F2L pair. OLS is mainly split into two groups: **VLS (Valk Last Slot)** and **HLS (Hessler Last Slot)**. These two groups are split into 8 subsets, each, that are based on edge misorientation. The most significent subsets under these groups are **WV (Winter Variation)** and **SV (Summer Variation)** respectively. Each of these subsets has 54 algorithms, including mirrors. It is usually recommended to first learn WV, then SV, followed by the rest of VLS, and finally the rest of HLS.

This technique has a very high algorithm count, however - there are a total of at least 864 algorithms, including mirrors. That means, if one learned 2 algs per day, it would take them more than a year to learn all of them!

- #### ZBLS (Zborowski-Bruchem Last Slot) and ZBLL (Zborowski-Bruchem Last Layer)

After solving the F2L minus one corner-edge pair, ZBLS (a.k.a. ZBF2L) can be used to finish F2L while simultaneously orienting the edges of the last layer, and ZBLL, to finish the last layer in one algorithm. These sets have a total of 795 (302+493) algorithms. Many speedcubers learn a small subset of ZBLL and ZBLS is rarely used.

---

### Recommended Resources and Further Reading

- [Feliks Zemdegs](https://www.youtube.com/channel/UCQ7ASM-o1ELUbScXCKYwovA) ([CubeSkills](https://cubeskills.com/) | [YouTube](https://www.youtube.com/channel/UCPftX98kFgj-fPk3pombPIg)): CubeSkills has an extremely organized library of speedsolving tutorials and example walkthroughs from Feliks.
- [J Perm](https://www.youtube.com/channel/UCqTVfT9JQqhA6_Hi_h_h97Q) (See [featured channels](https://www.youtube.com/c/JPerm/channels))
- [badmephisto](https://www.youtube.com/channel/UCqgMq1Um_xnD45wTLPlvW7A)
- [Lucas Garron](https://garron.net/)
- [Andy Klise's Rubik's Cube Guides](http://www.kungfoomanchu.com/)
- [Speedsolving Wiki](https://www.speedsolving.com/wiki/index.php/Main_Page)
- [Ruwix - Twisty Puzzle Wiki](https://ruwix.com/)
- [Speedcubing - Wikipedia](https://en.wikipedia.org/wiki/Speedcubing)
- [The Speed Cubers - Netflix Documentary](https://www.netflix.com/title/81092143)
- [Why We Cube - A Speedcubing Documentary](https://www.youtube.com/watch?v=1oZY2e25VUw)
- [Cracking the Cube: Going Slow to Go Fast and Other Unexpected Turns in the World of Competitive Rubik's Cube Solving](https://www.goodreads.com/book/show/29430754-cracking-the-cube) - Ian Scheffler
- [r/Cubers Wiki](https://www.reddit.com/r/Cubers/wiki/index)
- [csTimer - Professional Rubik's Cube Speedsolving/Training Timer](https://cstimer.net/) [Source](https://github.com/cs0x7f/cstimer))

I have compiled my favorite **_YouCubers_** and resources for algorithms, walkthroughs and tutorials on Rubik's Cube and other puzzles [here](https://links.rsapkf.xyz/docs/cubing-puzzles-and-magic.html).

If you are more curious to learn about the mathematics of the Rubik's Cube, here are some resources that you might find interesting:

- [Mathematics of the Rubik’s cube - 1996 - W. D. Joyner](http://www.permutationpuzzles.org/rubik/webnotes/rubik.pdf)
- [The Mathematics of the Rubik's Cube: Introduction to Group Theory and Permutation Puzzles - 2009 - MIT](https://web.mit.edu/sp.268/www/rubik.pdf)
- [The Mathematics of the Rubik's Cube - 2011 - UC Berkeley](https://math.berkeley.edu/~hutching/rubik.pdf)
- [Optimal solutions for Rubik's Cube](https://en.wikipedia.org/wiki/Optimal_solutions_for_Rubik%27s_Cube)
- [God's Algorithm](https://en.wikipedia.org/wiki/God%27s_algorithm) ([God's Number - Ruwix](https://ruwix.com/the-rubiks-cube/gods-number/))

Have fun and let me know if you have more ideas to make this guide better!
