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
     href="https://huggingface.co/USER/MODEL" target="_blank" rel="noopener">
    <img src="https://huggingface.co/front/assets/huggingface_logo.svg" alt="HF" style="height:1em; width:auto; margin-right:0.4em;">
    Hugging Face Collection
  </a>

</div>

> With society’s increasing reliance on digital data sharing, the protection of sensitive information has become critical. Encryption serves as one of the privacy-preserving methods; however, its realization in the audio domain predominantly relies on signal processing or software methods embedded into hardware. In this paper, we introduce LenslessMic, a hybrid optical hardware-based encryption method that utilizes a lensless camera as a physical layer of security applicable to multiple types of audio. We show that LenslessMic enables robust authentication of audio recordings and encryption strength greater than or equal to that of AES-256 with high-quality signals and minimal loss of content information. The approach is validated with a low-cost Raspberry Pi prototype and is open sourced together with datasets to facilitate research in the area.

## Demo Samples

Below we show example audio from the collected Librispeech and SongDescriber datasets for different models: *Learned* (with different $$g, r$$ variations), *R-Learned*, *No-PSF*, and *ADMM-100*. 

All models and train/test datasets are published on [Huggingface Collection](TODO).

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

Below we provide recordings from *test-clean* set of Librispeech. We recommend listening to the ground-truth and codec versions only after listening to the reconstructions to avoid phonetic-restoration effect, i.e. unintelligible audio may become meaningful after you know what is the actual content of the speech. Methods with $$g \ge 2$$ increase *LenslessMic* robustness to ensure that this effect will not allow hearing speech content from *No-PSF* reconstructions.

<table
  id="audio-table"
  data-toggle="table"
  data-search="false"
  data-pagination="true"
  data-url="{{ '/assets/json/LenslessMic/test_clean_all.json' | relative_url }}"
  data-height="600">
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

*Learned* and *Codec* recordings sound identical, showcasing high quality reconstruction abilities of *LenslessMic*. Since it may be possible to understand some part of the speech content for *No-PSF*, we provide *LenslessMic* variants with improved robustness that operate on group frames. The examples are provided below. $$g=3$$ case provides the best balance between security robustness and reconstruction quality.

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

*LenslessMic* reconstruction results in noise if PSF is wrong. This is a core property behind *LenslessMic* authentication robustness and accuracy. Below you can find examples:

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
    The same audio with wrong (left) and correct (right) PSF.
</div>

*LenslessMic* encryption strength is greater than or equal to that of AES-256. Below we provide audio samples for different $$W$$, i.e., the ratio of correctly determined pixels in the PSF. $$W=7\%$$ and $$W=4\%$$ correspond to AES-256 and AES-128 strength, respectively.

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

$$g=3$$ is more robust, however, leads to slightly worse reconstruction quality.


### Captured Video Representation

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/pexels-engin-akyurt-6069112-960x540-30fps.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
        <div class="caption">
            Lensed
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/pexels-engin-akyurt-6069112-960x540-30fps.mp4" class="img-fluid rounded z-depth-1" controls=true %}
        <div class="caption">
            Lensless Measurement
        </div>
    </div>
</div>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/pexels-engin-akyurt-6069112-960x540-30fps.mp4" class="img-fluid rounded z-depth-1" controls=true %}
        <div class="caption">
            Reconstruction (<em>Learned</em>)
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/pexels-engin-akyurt-6069112-960x540-30fps.mp4" class="img-fluid rounded z-depth-1" controls=true %}
        <div class="caption">
            Reconstruction (<em>No-PSF</em>)
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/pexels-engin-akyurt-6069112-960x540-30fps.mp4" class="img-fluid rounded z-depth-1" controls=true %}
        <div class="caption">
            Reconstruction (<em>ADMM-100</em>)
        </div>
    </div>
</div>
<div class="caption">
    Example of a lensed video (audio-to-video conversion), a corresponding lensless measurement, and its reconstruction
</div>

The video below shows how reconstruction of the same frame enhances from $$W=0\%$$ to $$W=100\%$$:

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/pexels-engin-akyurt-6069112-960x540-30fps.mp4" class="img-fluid rounded z-depth-1" controls=true %}
        <div class="caption">
            Reconstruction (<em>Learned</em>)
        </div>
    </div>
</div>


## Extra Experiments