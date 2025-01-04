---
layout: page
title: PyTorch Project Template
description: A template for the development of production-level structured configurable code.
img:
importance: 1
category: Work
---

[Project GitHub](https://github.com/Blinorot/pytorch_project_template). Year: 2024

The template was originally developed as a part of [HSE DLA Course](https://github.com/markovka17/dla/). Currently, it is also the official recommended template for the projects in the Prof. [Martin Jaggi](https://scholar.google.com/citations?user=r1TJBr8AAAAJ)'s and Prof. [Nicolas Flammarion](https://scholar.google.com/citations?user=7nVGYfgAAAAJ)'s [ML CS-433](https://www.epfl.ch/labs/mlo/machine-learning-cs-433/) course at EPFL. 

This template utilizes experiment tracking techniques, such as [WandB](https://docs.wandb.ai/) and [Comet ML](https://www.comet.com/docs/v2/), and [Hydra](https://hydra.cc/docs/intro/) for the configuration. It also automatically reformats code and conducts several checks via [pre-commit](https://pre-commit.com/). It comes with many tutorials in Russian and English,covering the core techniques:

- [Python Dev Tips](https://github.com/ebezzam/python-dev-tips): information about [Git](https://git-scm.com/doc), [pre-commit](https://pre-commit.com/), [Hydra](https://hydra.cc/docs/intro/), and other stuff for better Python code development. The YouTube recording of the workshop is available [here](https://youtu.be/okxaTuBdDuY).

- [Seminar on R&D Coding](https://youtu.be/sEA-Js5ZHxU): Seminar from the [LauzHack Deep Learning Bootcamp](https://github.com/LauzHack/deep-learning-bootcamp/) with template discussion and reasoning. It also explains how to work with [WandB](https://docs.wandb.ai/). The seminar materials can be found [here](https://github.com/LauzHack/deep-learning-bootcamp/blob/main/day03/Seminar_WandB_and_Coding.ipynb).

- [HSE DLA Course Introduction Week](https://github.com/markovka17/dla/tree/2024/week01): combines the two seminars above into one with some updates, including an extra example for [Comet ML](https://www.comet.com/docs/v2/).

- [PyTorch Basics](https://github.com/markovka17/dla/tree/2024/week01/intro_to_pytorch): several notebooks with [PyTorch](https://pytorch.org/docs/stable/index.html) basics and corresponding seminar recordings from the [LauzHack Deep Learning Bootcamp](https://github.com/LauzHack/deep-learning-bootcamp/).

The template is supplemented with example branches showing the application of the template in different tasks. The goal of the template is to enable controllable and clean code development that can be done for any deep-learning task. By understanding the template once, it can be easily applied anywhere. The template is tested by more than 40 students of HSE DLA Course.

It also comes with the [guidelines](https://github.com/Blinorot/pytorch_project_template/tree/report) on how to write scientific papers for applied deep learning research.