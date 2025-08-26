import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  NgZone,
  OnInit,
  PLATFORM_ID,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { UserLocalStorage } from '../../user-function/get-user-local-storage/user-local-storage';
import { Router } from '@angular/router';
import { TokenExpiration } from '../../user-function/token-validation/token-validation';
import { User } from '../../interface/user';
import { isPlatformBrowser } from '@angular/common';

interface objImgsMainPage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  user: User | null = null;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private cd: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: any,
    private ngZone: NgZone
  ) {}

  arrayObjImgsMainPage: objImgsMainPage[] = [];

  ngOnInit(): void {
    this.verifyUser();
  }

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;
    // this.activeScrollRightLeft();
    this.initArrayObjImgsMainPage();
  }

  private initArrayObjImgsMainPage() {
    this.arrayObjImgsMainPage = [
      {
        src: 'https://static.zattini.com.br/bnn/l_zattini/2025-08-07/4617_1922x500_sportstyleagos.png',
        alt: 'Sportstyle com até 60% off',
      },
      {
        src: 'https://static.zattini.com.br/bnn/l_zattini/2025-08-06/680_1922x500_topinfantilagos.jpg',
        alt: 'Top Marcas Infantil a partir de R$ 59,99',
      },
      {
        src: 'https://static.zattini.com.br/bnn/l_zattini/2025-07-15/7817_1922x500_espacolaser.jpg',
        alt: 'Espaço Laser',
      },
    ];

    this.putSetIntervalToPassImgBall();

    this.cd.detectChanges();
  }

  verifyUser(): void {
    if (typeof window === 'undefined' || !window.localStorage) return;

    const objUser = UserLocalStorage();

    if (objUser.isNullUserLocalStorage || objUser.user === null) {
      localStorage.removeItem('user');
      this.router.navigate(['/auth/login']);
      return;
    }

    const user = objUser.user;
    const token = user.token;

    if (token && TokenExpiration(token)) {
      localStorage.removeItem('user');
      this.router.navigate(['/auth/login']);
      return;
    }

    this.user = user;
  }

  @ViewChild('containerOverflowImgsRef') containerOverflowImgsRef!: ElementRef<HTMLDivElement>;
  @ViewChildren('containerAllBallRef') containerAllBallRef!: QueryList<ElementRef<HTMLDivElement>>;

  lastValueIndexRef = 0;
  timeoutRef: any = null;
  isAnimatingRef = false;
  isAnimatingBallRef = false;

  private putSetIntervalToPassImgBall() {
    if (!isPlatformBrowser(this.platformId)) return; // Evita rodar no SSR

    this.ngZone.runOutsideAngular(() => {
      this.timeoutRef = setInterval(async () => {
        let value = this.lastValueIndexRef + 1;
        if (value >= this.arrayObjImgsMainPage.length) value = 0;

        this.ngZone.run(() => this.onClickContainerBall(value));
      }, 5000);
    });
  }

  async onClickContainerBall(i: number) {
    if (this.isAnimatingBallRef) return;
    if (this.timeoutRef) clearInterval(this.timeoutRef);
    this.putSetIntervalToPassImgBall();

    this.isAnimatingBallRef = true;
    const scrollElement = this.containerOverflowImgsRef.nativeElement;
    const array = this.containerAllBallRef.toArray();

    array.forEach((el) => {
      this.renderer.setStyle(el.nativeElement, 'background-color', '#999');
      this.renderer.setStyle(el.nativeElement, 'width', '9px');
      this.renderer.setStyle(el.nativeElement, 'height', '9px');
    });
    const obj = array[i];

    if (obj) {
      this.renderer.setStyle(obj.nativeElement, 'background-color', 'black');
      this.renderer.setStyle(obj.nativeElement, 'width', '12px');
      this.renderer.setStyle(obj.nativeElement, 'height', '12px');
    }

    const value = Math.abs(i - this.lastValueIndexRef);
    const valueQuantityWidth = scrollElement.clientWidth * value;

    if (i > this.lastValueIndexRef) {
      await this.animateScrollBy(scrollElement, valueQuantityWidth, 404);
    } else {
      await this.animateScrollBy(scrollElement, -valueQuantityWidth, 404);
    }

    this.lastValueIndexRef = i;
    this.isAnimatingBallRef = false;
  }

  private animateScrollBy(
    element: HTMLDivElement,
    deltaX: number,
    duration: number = 500
  ): Promise<void> {
    return new Promise((resolve) => {
      const start = element.scrollLeft;
      const startTime = performance.now();
      const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        element.scrollLeft = start + deltaX * easeInOutQuad(progress);

        if (progress < 1) requestAnimationFrame(animate);
        else resolve();
      };

      requestAnimationFrame(animate);
    });
  }

  onClickImgSportsyle() {
    this.router.navigate(['/sportstyle']);
  }
}
