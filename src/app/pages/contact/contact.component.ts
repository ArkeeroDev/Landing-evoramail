import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    volume: [''],
    message: [''],
    ageConfirm: [false, Validators.requiredTrue],
    acceptTerms: [false, Validators.requiredTrue],
    marketingOptIn: [false],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const from = this.route.snapshot.queryParamMap.get('volume_from');
    const to = this.route.snapshot.queryParamMap.get('volume_to');
    if (from || to) {
      this.form.patchValue({
        volume: [from, to].filter(Boolean).join(' — '),
      });
    }
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.router.navigate(['/gracias']);
  }
}
