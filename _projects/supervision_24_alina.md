---
layout: page
title: Unified Voice Biometric System Against Spoofing Attacks
description: The project aims on the development of SASV system for all three types of attacks (imposter attack, synthesized speech, recorded speech).
img:
importance: 1
category: Supervision
---

[Project GitHub](https://github.com/alinaaugust/Unified-Voice-Biometric-System).

The project was done by my 3rd year student, [Avgustyonok Alina](https://github.com/alinaaugust/), at HSE (Coursework) in 23/24 academic year. 

Biometric systems are split into Automatic Speaker Verification (ASV) and Countermeasure (CM) systems that handle different types of attacks. The ASV aims to distinguish between owner of the system and another **real** person (imposter attack), whereas CM has to discriminate between real and synthesized speech (i.e. TTS and VC) or real and recorded speech (a.k.a. replay attack). Usually, there exist three separate systems for all three types of attacks (imposter, synthesized, recorded), but a complete authentication system must handle all of them. Hence, the development of Spoofing-Aware Speaker Verification (SASV) system gained popularity recently. 

However, in literature, such SASV systems mostly focus only on the joined detection of imposter attacks and synthesized speech. A unified system that also considers recorded speech attack is necessary. The project aims on the development of such a system and provides some initial insights by developing the SASV system that combines an ASV and replay-attack CM.

[LFCC-LCNN](https://arxiv.org/abs/2103.11326) is taken as a CM system and [ECAPA-TDNN](https://arxiv.org/abs/2005.07143) as an ASV one. By taking the methodology from imposter/synthesized speech SASV systems, the four version of impost/replay attack SASV systems are created:

1. Simple sum of scores (with/without pre-normalization), as in the baseline of [SASV Challenge 2022](https://arxiv.org/abs/2203.14732).
2. [Probabilistic fusion](https://arxiv.org/abs/2202.05253).
3. [FiLM-based fusion](https://www.isca-archive.org/interspeech_2022/choi22b_interspeech.html).
4. [Cascade](https://arxiv.org/abs/2207.07510) approach.

The experimental results highlight that the behavior of joining approaches is similar between synthesized speech and recorded speech cases: cascade obtains the best performance, the FiLM is the second-best, and probabilistic fusion is better than vanilla sum.