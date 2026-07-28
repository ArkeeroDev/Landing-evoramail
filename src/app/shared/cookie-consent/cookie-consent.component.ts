import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface CookiePrefs {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  ts: number;
}

const STORAGE_KEY = 'evoramail_cookie_consent';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './cookie-consent.component.html',
  styleUrl: './cookie-consent.component.scss',
})
export class CookieConsentComponent implements OnInit {
  /** Whether the banner is shown (no decision stored yet). */
  visible = false;
  /** Whether the detailed preferences panel is open. */
  showConfig = false;

  /** Non-necessary categories: unchecked by default. */
  analytics = false;
  marketing = false;

  ngOnInit(): void {
    this.visible = this.read() === null;
  }

  openConfig(): void {
    this.showConfig = true;
  }

  acceptAll(): void {
    this.persist({ necessary: true, analytics: true, marketing: true });
  }

  rejectAll(): void {
    this.persist({ necessary: true, analytics: false, marketing: false });
  }

  savePreferences(): void {
    this.persist({
      necessary: true,
      analytics: this.analytics,
      marketing: this.marketing,
    });
  }

  private read(): CookiePrefs | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CookiePrefs) : null;
    } catch {
      return null;
    }
  }

  private persist(prefs: Omit<CookiePrefs, 'ts'>): void {
    const data: CookiePrefs = { ...prefs, ts: Date.now() };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      /* localStorage unavailable (private mode); banner simply closes for this session. */
    }
    this.visible = false;
    this.showConfig = false;
  }
}
