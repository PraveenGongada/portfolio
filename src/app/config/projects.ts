/*
 * Copyright 2025 Praveen Kumar
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Project } from '../types/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Shortly',
    description:
      'A comprehensive, modern URL shortener featuring user accounts, link management, and an analytics dashboard.',
    tags: ['Go', 'PostgreSQL'],
    githubLink: 'https://github.com/PraveenGongada/Shortly',
    liveLink: 'https://shortly.work/',
    type: 'Backend',
    thumbnail:
      'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/home.png',
    carouselImages: [
      'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/dashboard.png',
      'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/qr.png',
      'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/register.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
  {
    id: 2,
    title: 'Catalyst',
    description:
      'Elegant TUI tool for triggering GitHub Actions workflows with matrix configurations for mobile app deployments.',
    tags: ['Go', 'Charm.sh'],
    githubLink: 'https://github.com/PraveenGongada/Catalyst',
    liveLink: '',
    type: 'CLI',
    thumbnail:
      'https://raw.githubusercontent.com/PraveenGongada/Catalyst/refs/heads/main/docs/images/deployment-summary.png',
    gifUrl:
      'https://raw.githubusercontent.com/PraveenGongada/Catalyst/refs/heads/main/docs/images/catalyst-demo.gif',
  },
  {
    id: 3,
    title: 'MovieDB',
    description:
      'A cinema app featuring intuitive browsing and comprehensive movie details with seamless user experience.',
    tags: ['Flutter', 'Dart'],
    githubLink: 'https://github.com/PraveenGongada/MovieDB',
    type: 'App',
    thumbnail:
      'https://raw.githubusercontent.com/PraveenGongada/MovieDB/refs/heads/main/docs/images/thumbnail.png',
    carouselImages: [
      'https://raw.githubusercontent.com/PraveenGongada/MovieDB/refs/heads/main/docs/images/home.png',
      'https://raw.githubusercontent.com/PraveenGongada/MovieDB/refs/heads/main/docs/images/movie.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
];
