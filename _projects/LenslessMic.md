---
layout: page
title: LenslessMic
description: Audio Encryption and Authentication via Lensless Computational Imaging -- Official Demo Page.
img:
importance: 1
category: Demo Pages
pretty_table: true
toc:
  sidebar: left
---

<div class="authors mb-3">
  <strong>Petr Grinberg</strong>,
  Eric Bezzam,
  Paolo Prandoni,
  Martin Vetterli
</div>

<div class="affiliations mb-2">
  Audiovisual Communications Laboratory, EPFL, Switzerland
</div>

<div class="emails mb-4">
  ✉ <a href="mailto:petr.grinberg@epfl.ch">petr.grinberg@epfl.ch</a>
</div>


<div class="d-flex flex-wrap gap-2 my-3">

  <!-- GitHub -->
  <a class="btn btn-dark" href="https://github.com/Blinorot/LenslessMic" target="_blank" rel="noopener">
    <i class="fab fa-github"></i> Code
  </a>

  <!-- arXiv -->
  <a class="btn btn-danger" href="https://arxiv.org/abs/XXXX.XXXXX" target="_blank" rel="noopener">
    <i class="ai ai-arxiv"></i> arXiv
  </a>

  <!-- Hugging Face (custom) -->
  <a class="btn btn-outline-warning d-inline-flex align-items-center"
     href="https://huggingface.co/collections/Blinorot/lenslessmic-68caf4f8ff7fa56c2dac8540" target="_blank" rel="noopener">
    <img src="https://huggingface.co/front/assets/huggingface_logo.svg" alt="HF" style="height:1em; width:auto; margin-right:0.4em;">
    Hugging Face Collection
  </a>

</div>

> With society’s increasing reliance on digital data sharing, the protection of sensitive information has become critical. Encryption serves as one of the privacy-preserving methods; however, its realization in the audio domain predominantly relies on signal processing or software methods embedded into hardware. In this paper, we introduce LenslessMic, a hybrid optical hardware-based encryption method that utilizes a lensless camera as a physical layer of security applicable to multiple types of audio. We show that LenslessMic enables (1) robust authentication of audio recordings and (2) encryption strength that can rival the search space of 256-bit digital standards, while maintaining high-quality signals and minimal loss of content information. The approach is validated with a low-cost Raspberry Pi prototype and is open-sourced together with datasets to facilitate research in the area.

## Hardware Setup

Our setup is based on [DigiCam](https://arxiv.org/abs/2502.01102). We adapt it to show neural audio codec latent representation. During capture process, we cover the system with a black cloth to prevent external illumination.

<div class="row mt-3">
  <!-- Left column: single image, vertically centered -->
  <div class="col-md-6 d-flex align-items-center justify-content-center">
    {% include figure.liquid loading="eager"
       path="assets/LenslessMic/images/DigiCam_LenslessMic_setup.png"
       class="img-fluid rounded z-depth-1" %}
  </div>

  <!-- Right column: tall image -->
  <div class="col-md-6">
    {% include figure.liquid loading="eager"
       path="assets/LenslessMic/images/DigiCam_LenslessMic.jpg"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
    <em>LenslessMic</em> hardware setup. Latent representation is reshaped and resized into a large square with super-pixels.
</div>

## Demo Samples

Below we show example audio from the collected [Librispeech](https://www.openslr.org/12) and [SongDescriber](https://github.com/mulab-mir/song-describer-dataset) datasets for different models: *Learned* (with different $$g, r$$ variations), *R-Learned*, *NoPSF*, and *ADMM-100*. 

All models and train/test datasets are published on [Huggingface Collection](https://huggingface.co/collections/Blinorot/lenslessmic-68caf4f8ff7fa56c2dac8540).

* *Learned*: a trainable reconstruction algorithm based on [Unrolled ADMM](https://arxiv.org/abs/1908.11502). Uses [DRUNet](https://arxiv.org/abs/2008.13751)-based pre/post processors (3.9/4.1M parameters) and psf corrector (128K parameters) to account for noise and model mismatch (8.1M parameters total). Trained on *train-clean* set.
* *R-Learned*: the same as *Learned* but trained on *train-random*.
* *NoPSF*: a trainable reconstruction algorithm that uses only (codec representation, lensless measurement) pairs for training and **does not use PSF in any way**. Based on DRUNet with 8.1M parameters. Trained on *train-clean* set.
* *ADMM-100*: vanilla reconstruction algorithm that uses [Alternating Direction Method of Multipliers](https://arxiv.org/abs/1710.02134) with 100 iterations.

### Audio Reconstruction
<script>
// Renders a compact audio player; returns HTML for each cell
function audioFormatter(value, row, index) {
  if (!value) return '<span class="text-muted">—</span>';
  // Use a small, consistent size; preload=none keeps the page light
  return `
    <audio controls preload="none" style="width:160px;">
      <source src="${value}" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>`;
}
</script>

<link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.22.3/dist/bootstrap-table.min.css">
<script src="https://unpkg.com/bootstrap-table@1.22.3/dist/bootstrap-table.min.js"></script>

Below we provide recordings from *test-clean* set of Librispeech. **<u>We recommend listening to the ground-truth and codec versions only after listening to the reconstructions to avoid phonetic-restoration effect</u>**, i.e. unintelligible audio may become meaningful after you know what is the actual content of the speech. Methods with $$g \ge 2$$ increase *LenslessMic* robustness to ensure that this effect will not allow hearing speech content from *NoPSF* reconstructions.

<table
  id="audio-table"
  data-toggle="table"
  data-search="false"
  data-pagination="true"
  data-url="{{ '/assets/json/LenslessMic/test_clean_all.json' | relative_url }}"
  data-height="700">
  <thead>
    <tr>
      <th data-field="method" data-sortable="true">Method</th>
      <!-- Each method column uses a formatter to render the audio UI -->
      <th data-field="237-126133-0018"  data-formatter="audioFormatter" data-halign="center" data-align="center">237-126133-0018</th>
      <th data-field="4446-2273-0026"  data-formatter="audioFormatter" data-halign="center" data-align="center">4446-2273-0026</th>
      <th data-field="5105-28241-0013"  data-formatter="audioFormatter" data-halign="center" data-align="center">5105-28241-0013</th>
      <th data-field="5142-33396-0062"  data-formatter="audioFormatter" data-halign="center" data-align="center">5142-33396-0062</th>
      <th data-field="7127-75947-0032"  data-formatter="audioFormatter" data-halign="center" data-align="center">7127-75947-0032</th>
      <th data-field="8455-210777-0042"  data-formatter="audioFormatter" data-halign="center" data-align="center">8455-210777-0042</th>
    </tr>
  </thead>
</table>

*Learned* and *Codec* recordings sound very similar, showcasing high quality reconstruction abilities of *LenslessMic*. Since it may be possible to understand some part of the speech content for *NoPSF*, we provide *LenslessMic* variants with improved robustness that operate on grouped frames. The examples are provided below. $$g=3$$ case provides the best balance between security robustness and reconstruction quality.

<table
  id="audio-table"
  data-toggle="table"
  data-search="false"
  data-pagination="true"
  data-url="{{ '/assets/json/LenslessMic/test_clean_all_group.json' | relative_url }}"
  data-height="760">
  <thead>
    <tr>
      <th data-field="method" data-sortable="true">Method</th>
      <!-- Each method column uses a formatter to render the audio UI -->
      <th data-field="237-126133-0018"  data-formatter="audioFormatter" data-halign="center" data-align="center">237-126133-0018</th>
      <th data-field="4446-2273-0026"  data-formatter="audioFormatter" data-halign="center" data-align="center">4446-2273-0026</th>
      <th data-field="5105-28241-0013"  data-formatter="audioFormatter" data-halign="center" data-align="center">5105-28241-0013</th>
      <th data-field="5142-33396-0062"  data-formatter="audioFormatter" data-halign="center" data-align="center">5142-33396-0062</th>
      <th data-field="7127-75947-0032"  data-formatter="audioFormatter" data-halign="center" data-align="center">7127-75947-0032</th>
      <th data-field="8455-210777-0042"  data-formatter="audioFormatter" data-halign="center" data-align="center">8455-210777-0042</th>
    </tr>
  </thead>
</table>

We test whether *LenslessMic* is applicable to other neural audio codecs and collect a dataset with X-codec instead of DAC. The results are presented below. While some utterances sound almost as good as DAC-ones, there are several recordings that have severe reverberation-like or filtering-like effect that decreases intelligibility. In general, *LenslessMic* is applicable on other codecs and even in cross-codec scenario, however, training on the actual data is required for high-quality reconstruction. *R-Learned* achieves better quality because it is trained on *test-random* data and is not overfitted towards any single codec.

<table
  id="audio-table"
  data-toggle="table"
  data-search="false"
  data-pagination="true"
  data-url="{{ '/assets/json/LenslessMic/test_clean_all_xcodec.json' | relative_url }}"
  data-height="430">
  <thead>
    <tr>
      <th data-field="method" data-sortable="true">Method</th>
      <!-- Each method column uses a formatter to render the audio UI -->
      <th data-field="237-126133-0018"  data-formatter="audioFormatter" data-halign="center" data-align="center">237-126133-0018</th>
      <th data-field="4446-2273-0026"  data-formatter="audioFormatter" data-halign="center" data-align="center">4446-2273-0026</th>
      <th data-field="5105-28241-0013"  data-formatter="audioFormatter" data-halign="center" data-align="center">5105-28241-0013</th>
      <th data-field="5142-33396-0062"  data-formatter="audioFormatter" data-halign="center" data-align="center">5142-33396-0062</th>
      <th data-field="7127-75947-0032"  data-formatter="audioFormatter" data-halign="center" data-align="center">7127-75947-0032</th>
      <th data-field="8455-210777-0042"  data-formatter="audioFormatter" data-halign="center" data-align="center">8455-210777-0042</th>
    </tr>
  </thead>
</table>

Besides, *LenslessMic* works on music data too (we downsampled dataset to 16kHz, so some instruments are a bit distorted):
<table
  id="audio-table"
  data-toggle="table"
  data-search="false"
  data-pagination="true"
  data-url="{{ '/assets/json/LenslessMic/test_clean_all_music.json' | relative_url }}"
  data-height="430">
  <thead>
    <tr>
      <th data-field="method" data-sortable="true">Method</th>
      <!-- Each method column uses a formatter to render the audio UI -->
      <th data-field="27.599227.6s"  data-formatter="audioFormatter" data-halign="center" data-align="center">27.599227.6s</th>
      <th data-field="33.1336433.6s"  data-formatter="audioFormatter" data-halign="center" data-align="center">33.1336433.6s </th>
      <th data-field="43.175043.6s"  data-formatter="audioFormatter" data-halign="center" data-align="center">43.175043.6s</th>
      <th data-field="46.5346.6s"  data-formatter="audioFormatter" data-halign="center" data-align="center">46.5346.6s</th>
      <th data-field="56.76656.6s"  data-formatter="audioFormatter" data-halign="center" data-align="center">56.76656.6s</th>
    </tr>
  </thead>
</table>


### Audio Encryption and Authentication

<div class="row mt-3">
  <div class="align-items-center justify-content-center">
    {% include figure.liquid loading="eager"
       path="assets/LenslessMic/images/Pipeline.png"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
    Overview of the <em>LenslessMic</em> pipeline. Encryption depends on the PSF and reconstruction algorithm cannot recover original recording without knowing the correct PSF.
</div>

*LenslessMic* reconstruction results in noise if provided PSF is wrong. This is a core property behind *LenslessMic* authentication robustness and accuracy. Below you can find examples:

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include audio.liquid path="/assets/LenslessMic/librispeech/test-clean/reconstructed/test_auth_0/32x32_librispeech_mse_ssim_raw_ssim_PSF_Unet4M_U5_Unet4M/audio/237-126133-0018.wav" controls=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include audio.liquid path="/assets/LenslessMic/librispeech/test-clean/reconstructed/test/32x32_librispeech_mse_ssim_raw_ssim_PSF_Unet4M_U5_Unet4M/audio/237-126133-0018.wav" controls=true %}
    </div>
</div>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include audio.liquid path="/assets/LenslessMic/librispeech/test-clean/reconstructed/test_auth_0/32x32_librispeech_mse_ssim_raw_ssim_PSF_Unet4M_U5_Unet4M/audio/8455-210777-0042.wav" controls=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include audio.liquid path="/assets/LenslessMic/librispeech/test-clean/reconstructed/test/32x32_librispeech_mse_ssim_raw_ssim_PSF_Unet4M_U5_Unet4M/audio/8455-210777-0042.wav" controls=true %}
    </div>
</div>
<div class="caption">
    The same audio with wrong (left) and correct (right) PSF. <strong>We use the same <em>Learned</em> algorithm here.</strong>
</div>

Let $$W \in (0, 1]$$ be the ratio of correctly determined pixels of the PSF. If the minimum $$W$$ required to get an intelligible audio is $$W \ge \frac{K \log_b 2}{N}$$, where $$N$$ is the number of pixels in the PSF and $$b$$ is the bit-depth, then the *LenslessMic* system has an encryption strength with a search space equivalent to a secret key of size $$K$$.
Below we provide audio samples for different $$W$$. $$W=7\%$$ and $$W=4\%$$ correspond to AES-256 and AES-128 search space, respectively (We rounded $$W$$ to the next integer, so actually $$W=7$$ has even bigger search space of $$K=272$$).

Results for $$g=3$$:
<table
  id="audio-table"
  data-toggle="table"
  data-search="false"
  data-pagination="true"
  data-url="{{ '/assets/json/LenslessMic/test_clean_all_psf_error_g_3.json' | relative_url }}"
  data-height="430">
  <thead>
    <tr>
      <th data-field="method" data-sortable="true">Method</th>
      <!-- Each method column uses a formatter to render the audio UI -->
      <th data-field="237-126133-0018"  data-formatter="audioFormatter" data-halign="center" data-align="center">237-126133-0018</th>
      <th data-field="4446-2273-0026"  data-formatter="audioFormatter" data-halign="center" data-align="center">4446-2273-0026</th>
      <th data-field="5105-28241-0013"  data-formatter="audioFormatter" data-halign="center" data-align="center">5105-28241-0013</th>
      <th data-field="5142-33396-0062"  data-formatter="audioFormatter" data-halign="center" data-align="center">5142-33396-0062</th>
      <th data-field="7127-75947-0032"  data-formatter="audioFormatter" data-halign="center" data-align="center">7127-75947-0032</th>
      <th data-field="8455-210777-0042"  data-formatter="audioFormatter" data-halign="center" data-align="center">8455-210777-0042</th>
    </tr>
  </thead>
</table>

Results for $$g=2$$:
<table
  id="audio-table"
  data-toggle="table"
  data-search="false"
  data-pagination="true"
  data-url="{{ '/assets/json/LenslessMic/test_clean_all_psf_error_g_2.json' | relative_url }}"
  data-height="430">
  <thead>
    <tr>
      <th data-field="method" data-sortable="true">Method</th>
      <!-- Each method column uses a formatter to render the audio UI -->
      <th data-field="237-126133-0018"  data-formatter="audioFormatter" data-halign="center" data-align="center">237-126133-0018</th>
      <th data-field="4446-2273-0026"  data-formatter="audioFormatter" data-halign="center" data-align="center">4446-2273-0026</th>
      <th data-field="5105-28241-0013"  data-formatter="audioFormatter" data-halign="center" data-align="center">5105-28241-0013</th>
      <th data-field="5142-33396-0062"  data-formatter="audioFormatter" data-halign="center" data-align="center">5142-33396-0062</th>
      <th data-field="7127-75947-0032"  data-formatter="audioFormatter" data-halign="center" data-align="center">7127-75947-0032</th>
      <th data-field="8455-210777-0042"  data-formatter="audioFormatter" data-halign="center" data-align="center">8455-210777-0042</th>
    </tr>
  </thead>
</table>

Results for $$g=1$$ (i.e. standard *Learned*):
<table
  id="audio-table"
  data-toggle="table"
  data-search="false"
  data-pagination="true"
  data-url="{{ '/assets/json/LenslessMic/test_clean_all_psf_error_g_1.json' | relative_url }}"
  data-height="430">
  <thead>
    <tr>
      <th data-field="method" data-sortable="true">Method</th>
      <!-- Each method column uses a formatter to render the audio UI -->
      <th data-field="237-126133-0018"  data-formatter="audioFormatter" data-halign="center" data-align="center">237-126133-0018</th>
      <th data-field="4446-2273-0026"  data-formatter="audioFormatter" data-halign="center" data-align="center">4446-2273-0026</th>
      <th data-field="5105-28241-0013"  data-formatter="audioFormatter" data-halign="center" data-align="center">5105-28241-0013</th>
      <th data-field="5142-33396-0062"  data-formatter="audioFormatter" data-halign="center" data-align="center">5142-33396-0062</th>
      <th data-field="7127-75947-0032"  data-formatter="audioFormatter" data-halign="center" data-align="center">7127-75947-0032</th>
      <th data-field="8455-210777-0042"  data-formatter="audioFormatter" data-halign="center" data-align="center">8455-210777-0042</th>
    </tr>
  </thead>
</table>

We hear that recovering speech content (without phonetic-restoration effect) and speaker identity with $$W=7\%$$ is not possible for $$g=1$$ too. Besides, the audio still resembles noise. Therefore, the intruder cannot hack the authentication algorithm presented above via a brute-force attack.

$$g=3$$ is more robust, however, leads to slightly worse reconstruction quality. Below we show the visualization of how the $$g=3$$ reconstruction changes with $$W$$ going from $$0\%$$ to $$100\%$$.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/LenslessMic/video/audio_psferror_237-126133-0018.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
        <div class="caption">
            237-126133-0018
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/LenslessMic/video/audio_psferror_8455-210777-0042.mp4" class="img-fluid rounded z-depth-1" controls=true %}
        <div class="caption">
            8455-210777-0042
        </div>
    </div>
</div>

### Captured Video Representation

Below we provide the examples of a video representation of audio obtained using DAC, its lensless measurement, and different reconstructions. Original framerate is $$20$$ ms for each frame. To see details better, we slow video down to $$100$$ ms per frame.

<div class="alert alert-warning" role="alert">
  ⚠️ <strong>Content warning:</strong> The following video contains rapid flashing/blinking.
  It may trigger seizures for people with photosensitive epilepsy. 
  <em>Viewer discretion is advised.</em>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/LenslessMic/video/lensed.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
        <div class="caption">
            Lensed
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/LenslessMic/video/lensless.mp4" class="img-fluid rounded z-depth-1" controls=true %}
        <div class="caption">
            Lensless Measurement
        </div>
    </div>
</div>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/LenslessMic/video/learned.mp4" class="img-fluid rounded z-depth-1" controls=true %}
        <div class="caption">
            Reconstruction (<em>Learned</em>)
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/LenslessMic/video/rlearned.mp4" class="img-fluid rounded z-depth-1" controls=true %}
        <div class="caption">
            Reconstruction (<em>R-Learned</em>)
        </div>
    </div>
</div>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/LenslessMic/video/nopsf.mp4" class="img-fluid rounded z-depth-1" controls=true %}
        <div class="caption">
            Reconstruction (<em>NoPSF</em>)
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/LenslessMic/video/admm100.mp4" class="img-fluid rounded z-depth-1" controls=true %}
        <div class="caption">
            Reconstruction (<em>ADMM-100</em>)
        </div>
    </div>
</div>
<div class="caption">
    Example of a lensed video (audio-to-video conversion), a corresponding lensless measurement, and its reconstruction. Audio track: 237-126133-0018.
</div>

We note that *NoPSF* often provides smoother frames than *Learned* and *R-Learned* that are more sharp. This means that *NoPSF* is not able to fully recover image from the multiplexing effect of lensless camera. *ADMM-100* completely fails recover frames.

The video below shows how reconstruction of the same frame enhances from $$W=0\%$$ to $$W=100\%$$. More specifically, we plot $$l_2$$-difference $$(\hat{x}-x)^2$$ between the reconstructed and codec frames.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/LenslessMic/video/psferror.mp4" class="img-fluid rounded z-depth-1" controls=true %}
        <div class="caption">
            Difference between reconstructed and codec frames vs W. The more dark is the image, the less different are the frames.
        </div>
    </div>
</div>


## Extra Experiments

We provide two additional experiments:

1. In the paper, we noted that the search space for brute-force attack can also be restricted by the RVQ of the codec. With $$C=12$$ codebooks of size $$1024$$ this leads to $$2^{120}$$ possible codebook outputs. This is not an issue because the intruder will need to do it for all $$T_E$$ frames, which leads to a search space of $$2^{120T_E}$$. However, to be sure, one may fine-tune/train a neural audio codec to have a larger search space. We [fine-tuned](https://github.com/Blinorot/descript-audio-codec/blob/main/conf/custom/16x16_130_16khz.yml) DAC on the full Librispeech corpus with $$C=13$$ codebooks of size $$1024$$ (i.e. search space of $$2^{130}$$) and $$16\times16$$ latent representation. The decreased size of the latent representation allows to get even higher quality of reconstruction. We collected *train-clean* and *test-clean* variants for this codec.

2. We showed that the method is applicable on different types of audio. However, it is also important to generalize to different environments and conditions. Even though DAC itself works on both clean and noisy speech, training only on *train-clean* can overfit the reconstruction algorithm on clean data. To account for this, we collected a small subset of $$150$$ audio files from Librispeech *train-other* (see Tab 1. in the paper). We fine-tuned *Learned* ($$g=1$$) system on a mix of *train-other* and *train-clean* datasets with constant learning rate of $$2\cdot 10^{-5}$$ for $$15$$ K steps. We refer to this system as *FT-Learned*. (Remark: fine-tuning only on *train-other* leads to drop in performance on clean data, i.e., catastrophic forgetting phenomenon, so we use a mixture).

The results are provided below.

<table
  id="audio-table"
  data-toggle="table"
  data-search="false"
  data-pagination="true"
  data-url="{{ '/assets/json/LenslessMic/extra_exps.json' | relative_url }}"
  data-height="630">
  <thead>
    <tr>
      <th data-field="method" data-sortable="true">Method</th>
      <th data-field="test_set" data-sortable="true">Test Set</th>
      <th data-field="g_r" data-sortable="true">g/r</th>
      <th data-field="psnr" data-sortable="true">PSNR</th>
      <th data-field="ssim" data-sortable="true">SSIM</th>
      <th data-field="mse" data-sortable="true">MSE</th>
      <th data-field="visqol" data-sortable="true">ViSQOL</th>
      <th data-field="sisdr" data-sortable="true">SI-SDR</th>
      <th data-field="mel" data-sortable="true">Mel</th>
      <th data-field="stoi" data-sortable="true">STOI</th>
      <th data-field="wer" data-sortable="true">WER</th>
      <th data-field="sma" data-sortable="true">SMA</th>
      <th data-field="qm" data-sortable="true">QM-1/2</th>
    </tr>
  </thead>
</table>

We see that dicreased representation size ($$16\times 16$$) allows to improve reconstruction quality in comparison to *Learned* ($$32\times32$$) on *test-clean*, while also having a benefit of a bigger search space. For the *test-other*, we see that both *train-clean* or *train-random* are not enough for the reconstruction algorithm to perform on noisy data well. However, adding only small number of *train-other* samples into the training data enabled *FT-Learned* to achieve high reconstruction quality on both clean and noisy test sets. Hence, *LenslessMic* is applicable on noisy data too. 

Audio examples for $$16\times16$$:

<table
  id="audio-table"
  data-toggle="table"
  data-search="false"
  data-pagination="true"
  data-url="{{ '/assets/json/LenslessMic/test_clean_all_16x16.json' | relative_url }}"
  data-height="350">
  <thead>
    <tr>
      <th data-field="method" data-sortable="true">Method</th>
      <!-- Each method column uses a formatter to render the audio UI -->
      <th data-field="237-126133-0018"  data-formatter="audioFormatter" data-halign="center" data-align="center">237-126133-0018</th>
      <th data-field="4446-2273-0026"  data-formatter="audioFormatter" data-halign="center" data-align="center">4446-2273-0026</th>
      <th data-field="5105-28241-0013"  data-formatter="audioFormatter" data-halign="center" data-align="center">5105-28241-0013</th>
      <th data-field="5142-33396-0062"  data-formatter="audioFormatter" data-halign="center" data-align="center">5142-33396-0062</th>
      <th data-field="7127-75947-0032"  data-formatter="audioFormatter" data-halign="center" data-align="center">7127-75947-0032</th>
      <th data-field="8455-210777-0042"  data-formatter="audioFormatter" data-halign="center" data-align="center">8455-210777-0042</th>
    </tr>
  </thead>
</table>

Audio examples for *test-other*:

<table
  id="audio-table"
  data-toggle="table"
  data-search="false"
  data-pagination="true"
  data-url="{{ '/assets/json/LenslessMic/test_clean_all_other.json' | relative_url }}"
  data-height="550">
  <thead>
    <tr>
      <th data-field="method" data-sortable="true">Method</th>
      <!-- Each method column uses a formatter to render the audio UI -->
      <th data-field="2414-159411-0027"  data-formatter="audioFormatter" data-halign="center" data-align="center">2414-159411-0027</th>
      <th data-field="3005-163389-0011"  data-formatter="audioFormatter" data-halign="center" data-align="center">3005-163389-0011</th>
      <th data-field="3528-168669-0015"  data-formatter="audioFormatter" data-halign="center" data-align="center">3528-168669-0015</th>
      <th data-field="3764-168670-0006"  data-formatter="audioFormatter" data-halign="center" data-align="center">3764-168670-0006</th>
      <th data-field="4350-9170-0022"  data-formatter="audioFormatter" data-halign="center" data-align="center">4350-9170-0022</th>
      <th data-field="7902-96595-0024"  data-formatter="audioFormatter" data-halign="center" data-align="center">7902-96595-0024</th>
    </tr>
  </thead>
</table>

Finnaly, we show that *FT-Learned* performs well on *test-clean* too:

<table
  id="audio-table"
  data-toggle="table"
  data-search="false"
  data-pagination="true"
  data-url="{{ '/assets/json/LenslessMic/test_clean_all_with_other.json' | relative_url }}"
  data-height="450">
  <thead>
    <tr>
      <th data-field="method" data-sortable="true">Method</th>
      <!-- Each method column uses a formatter to render the audio UI -->
      <th data-field="237-126133-0018"  data-formatter="audioFormatter" data-halign="center" data-align="center">237-126133-0018</th>
      <th data-field="4446-2273-0026"  data-formatter="audioFormatter" data-halign="center" data-align="center">4446-2273-0026</th>
      <th data-field="5105-28241-0013"  data-formatter="audioFormatter" data-halign="center" data-align="center">5105-28241-0013</th>
      <th data-field="5142-33396-0062"  data-formatter="audioFormatter" data-halign="center" data-align="center">5142-33396-0062</th>
      <th data-field="7127-75947-0032"  data-formatter="audioFormatter" data-halign="center" data-align="center">7127-75947-0032</th>
      <th data-field="8455-210777-0042"  data-formatter="audioFormatter" data-halign="center" data-align="center">8455-210777-0042</th>
    </tr>
  </thead>
</table>