// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "The description of the projects I&#39;ve done.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "GitHub repositories that I own and have contributed to.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Descriptions and materials for the courses I am giving. Description of the students&#39; projects that I am supervising.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-teaching",
              title: "teaching",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tabs/";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/typograms/";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/post-citation/";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/pseudocode/";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/code-diff/";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/advanced-images/";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/vega-lite/";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/geojson-map/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/chartjs/";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tikzjax/";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/post-bibliography/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/audios/";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/videos/";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tables/";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/table-of-contents/";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/giscus-comments/";
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/diagrams/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/distill/";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/twitter/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/disqus-comments/";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/math/";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/code/";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/images/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
      },
    },{id: "news-our-latest-paper-on-the-explainability-of-audio-deepfake-detection-systems-is-accepted-to-icassp-2025",
          title: 'Our latest paper on the explainability of Audio Deepfake Detection Systems is accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-on-data-driven-audio-deepfake-detectors-explainability-is-accepted-to-interspeech-2025",
          title: 'Our paper on data-driven audio deepfake detectors explainability is accepted to Interspeech 2025!...',
          description: "",
          section: "News",},{id: "news-our-latest-paper-on-the-audio-encryption-using-lensless-cameras-is-accepted-to-icassp-2026",
          title: 'Our latest paper on the audio encryption using lensless cameras is accepted to...',
          description: "",
          section: "News",},{id: "projects-lenslessmic",
          title: 'LenslessMic',
          description: "Audio Encryption and Authentication via Lensless Computational Imaging -- Official Demo Page.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/LenslessMic/";
            },},{id: "projects-audio-deepfake-detection-systems",
          title: 'Audio Deepfake Detection Systems',
          description: "Reproduction of state-of-the-art audio deepfake detection systems, including LCNN, RawNet2, and AASIST.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_add/";
            },},{id: "projects-automatic-speech-recognition",
          title: 'Automatic Speech Recognition',
          description: "Implementation of a LSTM-based automatic speech recognition system and DeepSpeech 2.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_asr/";
            },},{id: "projects-audiobot",
          title: 'AudioBot',
          description: "An intelligent voice assistant using ASR, LLM, and TTS systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_audiobot/";
            },},{id: "projects-audio-visual-speech-separation-and-recognition",
          title: 'Audio-Visual Speech Separation and Recognition',
          description: "The project aims on the development of an Audio-Visual Speech Separation and Recognition (AVSSR) system for edge devices.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_avss/";
            },},{id: "projects-fastspeech-2",
          title: 'Fastspeech 2',
          description: "Implementation of FastSpeech 2 Text-To-Speech System.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_fastspeech/";
            },},{id: "projects-hifi-gan",
          title: 'HiFi-GAN',
          description: "Implementation of HiFi-GAN vocoder.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_hifigan/";
            },},{id: "projects-hifi-vc",
          title: 'HiFi-VC',
          description: "Reproduction of a state-of-the-art voice conversion system.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_hifivc/";
            },},{id: "projects-optimization-of-a-keyword-spotting-system",
          title: 'Optimization of a Keyword Spotting System',
          description: "Reducing computational costs of keyword spotting system inference using distillation, pruning, and quantization.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_kws/";
            },},{id: "projects-pytorch-project-template",
          title: 'PyTorch Project Template',
          description: "A template for the development of production-level structured configurable code.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_template/";
            },},{id: "projects-unified-voice-biometric-system-against-spoofing-attacks",
          title: 'Unified Voice Biometric System Against Spoofing Attacks',
          description: "The project aims on the development of SASV system for all three types of attacks (imposter attack, synthesized speech, recorded speech).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/supervision_24_alina/";
            },},{id: "projects-modern-voice-authentication-systems",
          title: 'Modern Voice Authentication Systems',
          description: "The project aims on finding new ways to improve generalization of countermeasure systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/supervision_24_artem/";
            },},{id: "projects-synthesized-speech-detection-under-emotional-voice-conditions",
          title: 'Synthesized Speech Detection Under Emotional Voice Conditions',
          description: "The project aims on the development of a countermeasure system that can handle emotional speech input.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/supervision_25_anna/";
            },},{id: "projects-signature-forgery-detection-using-deep-learning",
          title: 'Signature Forgery Detection Using Deep Learning',
          description: "The project aims on the development of a signature forgery detection system.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/supervision_25_anya/";
            },},{id: "projects-tabular-data-synthesis-using-generative-models",
          title: 'Tabular Data Synthesis Using Generative Models',
          description: "The project aims on supporting research community by reproducing papers without open-source code.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/supervision_25_georgiy/";
            },},{id: "projects-multimodal-systems-for-deepfake-video-detection",
          title: 'Multimodal Systems for Deepfake Video Detection',
          description: "The project aims on the development of an audio-visual deepfake detection system.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/supervision_25_ilya/";
            },},{id: "projects-creation-of-audio-effects-using-deep-learning",
          title: 'Creation of Audio Effects Using Deep Learning',
          description: "The project explores the creation of audio effects using deep learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/supervision_25_ivan/";
            },},{id: "projects-reproducibility-of-synthetic-speech-detection-systems",
          title: 'Reproducibility of Synthetic Speech Detection Systems',
          description: "The project aims on supporting research community by reproducing ADD papers without open-source code.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/supervision_25_lev/";
            },},{id: "projects-speaker-verification-system-for-emotional-voice",
          title: 'Speaker Verification System for Emotional Voice',
          description: "The project aims on the development of a speaker verification system that can handle emotional speech input.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/supervision_25_maria/";
            },},{id: "projects-the-impact-of-language-on-automatic-speaker-verification-systems",
          title: 'The Impact of Language on Automatic Speaker Verification Systems',
          description: "The project explores how language changes the performance of a speaker verification system and aims to develop a system for non-English language.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/supervision_25_stepan/";
            },},{id: "projects-alignment-of-music-recordings-with-their-scores",
          title: 'Alignment of Music Recordings With Their Scores',
          description: "The project aims on the development of a forced alignment algorithm for music recordings and their scores.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/supervision_25_vyacheslav/";
            },},{id: "projects-deep-learning-bootcamp",
          title: 'Deep Learning Bootcamp',
          description: "Bootcamp covering introductory and advanced topics of Deep Learning. Twice per year (Summer and Winter).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teaching_bootcamp/";
            },},{id: "projects-deep-learning-for-audio",
          title: 'Deep Learning for Audio',
          description: "The course covers various applications of Deep Learning for Audio and MLOps basics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teaching_dla/";
            },},{id: "projects-workshops",
          title: 'Workshops',
          description: "Workshops covering different Computer Science topics. During Fall and Spring semesters.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teaching_workshops/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%65%74%72.%67%72%69%6E%62%65%72%67@%65%70%66%6C.%63%68", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Blinorot", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/petr-grinberg", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=agHlP1EAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
