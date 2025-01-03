---
layout: page
title: Modern Voice Authentication Systems
description: The project aims on finding new ways to improve generalization of countermeasure systems.
img:
importance: 2
category: Supervision
---

[Project GitHub](https://github.com/Torrentov/ASVspoof_AMTL).

The project was done by my 4th year student, [Bekian Artem](https://github.com/Torrentov/), at HSE (Bachelor's thesis) in 23/24 academic year. 

The quality of generated speech is increasing, as generative technologies evolve. However, collecting data for all new spoofing algorithms is complicated or even impossible due to lack of open-source solutions. Therefore, improving generalization capabilities, given slightly outdated data, is of the first importance for countermeasure (CM) systems. One way to improve generalization is the usage of self-supervised (SSL) features and data augmentation techniques. In this project, another methodology inspired by [multi-task learning](https://ieeexplore.ieee.org/document/9746059) is explored.

The original paper focuses on the CMs operating in the time-frequency domain, however, the SSL backbones (such as commonly-utilized [Wav2Vec2](https://arxiv.org/abs/2006.11477)) mostly work directly in the time domain. The project extends the multi-task idea and applies it on raw-waveforms, showing improvement in the generalization capabilities for [RawNet2](https://arxiv.org/abs/2011.01108).