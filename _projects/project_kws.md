---
layout: page
title: Optimization of a Keyword Spotting System
description: Reducing computational costs of keyword spotting system inference using distillation, pruning, and quantization.
img:
importance: 3
category: University Projects
---

[Project GitHub](https://github.com/Blinorot/KWS_SPEED_UP). Year: 2022

The project aimed on the reproduction of [CRNN](https://arxiv.org/abs/1703.05390) keyword spotting system (KWS) and its optimization in terms of the inference speed and number of parameters. The code also includes code for running KWS locally in streaming mode with your own microphone. Optimization is achieved by:

-   Unstructured Pruning
-   Structured Pruning of Conv2d, Attention, Single-layer GRU (hidden pruning), GRU (input pruning)
-   Basic Distillation
-   Layer-wise Distillation with Constant\Learnable Projections (projection from student's to teacher's domain)
-   Layer-wise Distillation with Constant\Learnable\Pre-trained ([TED](https://arxiv.org/abs/2210.01351)-like) Projections (projection from teacher's to student's domain)
-   Quantization Aware Training (QAT) for Conv2d
-   Dynamic Quantization for GRU\Linear
-   DepthWise Separable Convolution instead of Conv2d

The final model has `speed_up_rate=9.315` and `compression_rate=10.262`. 

Originally developed for the [HSE DLA Course Homework](https://github.com/markovka17/dla/tree/2022/hw2_kws).