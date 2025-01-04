---
layout: page
title: Audio-Visual Speech Separation and Recognition
description: The project aims on the development of an Audio-Visual Speech Separation and Recognition (AVSSR) system for edge devices.
img:
importance: 1
category: Courseworks
---

Supervisors: Dr. Jose Miranda ([ESL EPFL](https://www.epfl.ch/labs/esl/)), Mr. Cristian Cioflan ([IIS ETH Zurich](https://iis.ee.ethz.ch/)), Dr. Miguel de Prado ([VERSES](https://www.verses.ai/)), and Prof. David Atienza ([ESL EPFL](https://www.epfl.ch/labs/esl/))

Project GitHub: not publicly available. Year: 2024

While audio-only solutions for speech separation and speech recognition perform pretty well, their quality decreases in noisy conditions. Adding visual information, such as the movement of lips, can significantly improve performance. This also aligns with the way how brain processes data, it uses multiple modalities. However, current state-of-the-art audio-visual speech separation and recognition (AVSSR) systems typically apply separation and speech recognition models sequentially, training each independently. This project proposes a multi-task methodology that significantly reduces the number of parameters and multiply-accumulate operations (MACs) while preserving reasonable separation quality. Specifically, our system’s video feature extractor is 32 times smaller and requires 17 times fewer MACs than the video extractor used in state-of-the-art solutions. The source separation model reduces memory and computational costs by a factor of 3 in comparison to the smallest state-of-the-art model reported in the literature. Our automatic speech recognition model is streamlined to just 5.1 million parameters. By integrating multi-task learning and pretraining, we combine source separation and speech recognition models efficiently, resulting in only a slight decrease in separation quality. The Word Error Rate for our multi-task approach is relatively high. To mitigate this issue, we propose an alternative system, containing 13.8 million parameters, that successively applies separation and recognition models. The text annotation accuracy of this model is similar to that reported for the systems in the literature. Our multi-task model, however, uses only 5.7 million parameters and requires 5.5G MACs, making it well-suited for deployment on edge devices.

The project included optimization of state-of-the-art automatic speech recognitions systems ([Conformer](https://arxiv.org/abs/2005.08100)) and audio-visual speech separation systems ([CTCNet](https://arxiv.org/abs/2212.10744v2) and [RTFSNet](https://arxiv.org/abs/2309.17189)).