# ⚡ MicroLab Prep — CSE 4326 Study Guide

Comprehensive study guide and hardware wiring reference for UIU's **CSE 4326: Microprocessors and Microcontrollers Lab Final Exam**. Designed with premium dark mode aesthetics, interactive quizzes, checklist managers, and high-readability interactive diagram zoom capabilities.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com)

---

## 🚀 Key Features

- **Responsive Multi-Device Layout**: Fully optimized for desktops, tablets, and mobile devices (down to 320px). Supports mobile collapsible Table of Contents headers.
- **Dynamic Image Lightbox**: Zoomable and interactive diagrams (Arduino, ESP32, Raspberry Pi pinouts) that expand on click/tap, ensuring readability of small pin labels on any device.
- **Reference Checklist**: Tap to check off physical materials needed for standard hardware configurations (Experiment 1 & 2 scope).
- **Interactive Quizzes**: Multiple-choice study questions with immediate feedback for core concepts.
- **Vercel Optimized**: Configured with `vercel.json` for clean URLs and security response headers.

---

## 📂 Project Structure

```text
├── index.html           # Main Dashboard / Exam tips / Board Comparison
├── ex_1.html            # Exp 1: Arduino + MQ-2 Gas Sensor + OLED
├── ex_2.html            # Exp 2: ESP32 + DHT11 Sensor + XAMPP Server
├── ex_3.html            # Exp 3: Raspberry Pi 5 Introduction & GPIO
├── ex_4.html            # Exp 4: Pi Camera Module + TensorFlow Lite
├── hardware.html        # Comprehensive wiring guide for Hardware Tasks (Exp 1 & 2)
├── style.css            # Global CSS styles (dark mode palette, custom scrollbars, animations)
├── nav.js               # Shared JS functionality (hamburger, lightbox, accordions, quizzes)
├── vercel.json          # Deployment routing & security headers config
├── LICENSE              # MIT License
├── CONTRIBUTING.md      # Guidelines for contributing
├── SECURITY.md          # Security policy details
├── images/              # High-quality block diagram assets
└── pdf/                 # Laboratory sheets and study materials
```

---

## 📖 Syllabus Overview

### 🤖 Experiment 1: Arduino Uno & OLED Interfacing
- Board configuration (ATmega328P, 16MHz clock speed, 2KB RAM, 32KB Flash).
- MQ-2 Metal Oxide Gas Sensor wiring and pin explanation (AO on `A0` for ppm readings, DO on `D2` for digital alerts, 10K pull-up resistor).
- SSD1306 128×64 OLED display using I2C communications (`SDA` to `A4`, `SCL` to `A5`, default I2C address `0x3C`).

### 📡 Experiment 2: ESP32 & IoT Server
- System-on-Chip (SoC) details (Xtensa LX6 dual-core, 240MHz, 520KB RAM, built-in WiFi + Bluetooth).
- DHT11 Temperature & Humidity sensor interfacing (DATA on `GPIO19` with a 10K pull-up).
- XAMPP server database integrations using PHP server script receives HTTP POST queries from ESP32 clients.

### 🍓 Experiment 3: Raspberry Pi 5 Basics
- Single Board Computer (SBC) hardware specs (BCM2712 Quad-core ARM CPU @ 2.4GHz, 4-8GB RAM, Raspberry Pi OS).
- 40-pin GPIO headers (`HIGH` = 3.3V, `LOW` = 0V) and `gpiozero` Python module controls (`led.on()`, `led.off()`, `led.toggle()`, `button.is_pressed`).

### 📷 Experiment 4: Camera & Machine Learning
- CSI ribbon port configurations (contacts facing away from USB ports on most boards).
- Command line camera capture (`raspistill`, `raspivid` parameters) and Python `picamera` implementations.
- Object detection deployment on Raspberry Pi using OpenCV and TensorFlow Lite for real-time inference (SSDLite-MobileNet-v2).

---

## 🛠️ Local Development

To run the study guide locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/Atik203/Micro-Final-Prep.git
   ```
2. Simply double click `index.html` in your file system, or start a local server using node/npm:
   ```bash
   npx serve .
   ```
3. Open `http://localhost:3000` (or the printed port) in your browser.

---

## 🚢 Deploying to Vercel

This repository is ready to deploy on Vercel:

1. Push your changes to your GitHub repository.
2. Go to the [Vercel Dashboard](https://vercel.com/) and click **Add New Project**.
3. Import the `Micro-Final-Prep` repository.
4. Keep default build configuration and click **Deploy**.
5. Vercel will process the static HTML files and apply the routing rules defined in `vercel.json` (such as clean URLs).

---

## 🤝 Contributions

Students and lab partners are welcome to submit pull requests for typo corrections or code fixes. Please check [CONTRIBUTING.md](file:///d:/MICRO%20LAB/Micro-Final-Prep/CONTRIBUTING.md) for detailed guidelines.

---

## 📄 License

Distributed under the MIT License. See [LICENSE](file:///d:/MICRO%20LAB/Micro-Final-Prep/LICENSE) for more information.
