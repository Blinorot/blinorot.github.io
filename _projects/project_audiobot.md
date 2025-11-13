---
layout: page
title: AudioBot
description: An intelligent voice assistant using ASR, LLM, and TTS systems.
img:
importance: 2
category: Work
---

[Project GitHub](https://github.com/Blinorot/AudioBot). Year: 2024. [Slides](https://docs.google.com/presentation/d/1r0vdgrl7nbSjNQcszLk_A12jlArDUiuESHsYh40yaDo/edit?usp=sharing).

[LauzHack Workshop with project discussion](https://youtu.be/rK4I-F8Y6pw). 

The project presents a lightweight audio LLM (an intelligent voice assistant) created using a combination of ASR, text LLM, and TTS systems. The model listens to the speaker in real-time and answers the responses when the keyword "Sheila" is pronounced (like "Hey Siri" for Apple, e.g.).

The assistant is activated using a Keyword-Spotting system (KWS) with sheila as a target word. Then, the user says the query, and an ASR model converts the speech query into text. The text query is given as input to an LLM, and its response is converted back to audio using a TTS system. After the audio playback is finished, the user can continue the dialogue. The LLM preserves the history of the chat.

The version with default choice of models works fast even on CPU! For better transcription quality, consider using a different ASR model from HuggingFace (e.g. `openai/whisper-large-v2` with a GPU instead of CPU to make it work fast enough).

