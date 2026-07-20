import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Slide {
  bg: string;
  title: string;
  illu: string;
  p1: string;
  p2: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly volumeLabels = ['15,000', '50,000', '100,000', '250,000', '500,000', 'More'];
  readonly activeColors = ['#6A5AF9', '#A855F7', '#E874A8', '#181C32'];

  readonly slides: Slide[] = [
    {
      bg: '#6A5AF9',
      title: 'Guaranteed inbox delivery with Evoramail',
      illu: 'assets/img/slider_1_illu.png',
      p1: 'Your message may be exceptional, but if it never reaches its destination, it is worthless. At Evoramail, we make sure your emails get where they should. We manage your sender reputation and keep your messages out of the junk folder.',
      p2: 'Use our advanced deliverability tools, such as email verification and previews, to make sure your emails reach real recipients and display correctly in their inbox.',
    },
    {
      bg: '#A855F7',
      title: 'Experiment and optimize your messages with Evoramail',
      illu: 'assets/img/slider_2_illu.png',
      p1: 'Give your email campaigns a boost of certainty with Evoramail. Instead of guessing which content works best with your customers, test your messages efficiently.',
      p2: 'Run simultaneous A/B tests with up to ten different versions of the same email to discover which one drives the highest engagement and conversion rate. Gain valuable insights and always send the message that performs best.',
    },
    {
      bg: '#E874A8',
      title: 'Personalize your criteria successfully',
      illu: 'assets/img/slider_3_illu.png',
      p1: 'At Evoramail, we believe that your company success is unique and you define it. Set your own evaluation criteria for your email marketing campaigns. Select samples from your contact list and send up to ten different versions of your campaign.',
      p2: 'With the data from these tests, you can identify the alternatives that best connect with your recipients and generate the most engagement. This way, you can send the highest-impact campaign to all your contacts, knowing you are using the most effective email.',
    },
    {
      bg: '#181C32',
      title: 'Real-time tracking of deliveries and interactions',
      illu: 'assets/img/slider_4_illu.png',
      p1: 'Stay on top of things and analyze the effectiveness of your sends and the response of your recipients in real time. Our platform offers detailed statistics that let you make solid decisions in your campaign strategy.',
      p2: 'Explore click paths and use the campaign comparison tool to gain a deeper understanding of the behavior of your users.',
    },
  ];

  currentSlide = 0;
  volumeFrom = 1;
  volumeTo = 5;
  private timer: ReturnType<typeof setInterval> | null = null;

  get slide(): Slide {
    return this.slides[this.currentSlide];
  }

  get volumeCaption(): string {
    const lo = Math.min(this.volumeFrom, this.volumeTo);
    const hi = Math.max(this.volumeFrom, this.volumeTo);
    return `Volume: ${this.volumeLabels[lo]} — ${this.volumeLabels[hi]}`;
  }

  get rangeFillLeft(): string {
    const lo = Math.min(this.volumeFrom, this.volumeTo);
    return `${(lo / 5) * 100}%`;
  }

  get rangeFillWidth(): string {
    const lo = Math.min(this.volumeFrom, this.volumeTo);
    const hi = Math.max(this.volumeFrom, this.volumeTo);
    return `${((hi - lo) / 5) * 100}%`;
  }

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  goSlide(index: number): void {
    this.currentSlide = index;
    this.startAutoplay();
  }

  private nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  private startAutoplay(): void {
    this.stopAutoplay();
    this.timer = setInterval(() => this.nextSlide(), 6000);
  }

  private stopAutoplay(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}
