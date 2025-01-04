---
layout: page
title: HiFi-VC
description: Reproduction of a state-of-the-art voice conversion system.
img:
importance: 2
category: Work
---

[Project GitHub](https://github.com/Blinorot/HiFiVC). Year: 2023

The project aimed on the reproduction of [HiFi-VC](https://arxiv.org/abs/2203.16937) voice conversion system. Due to absence of open-source code for the model, the missing details were recovered using backward engineering of the TorchScript authors' checkpoint.

Authors of HiFi-VC [released the scripted version](https://github.com/tinkoff-ai/hifi_vc) of their model that is suitable only for system inference. In the [DLA Course Seminar](https://github.com/markovka17/dla/blob/2023/week09/vc_seminar.ipynb), this checkpoint was analyzed using its `.graph`, `.code`, and `.parameters` variables to restore model's workflow and hyperparameters.

After obtaining the missing details, the model reproduction was straightforward.