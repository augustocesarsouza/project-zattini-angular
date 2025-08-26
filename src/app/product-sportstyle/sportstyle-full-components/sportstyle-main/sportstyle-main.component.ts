import {
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  ProductService,
  ReturnGetProductList,
} from '../../../service/product-service/product.service';
import { Subject, takeUntil } from 'rxjs';
import { UserLocalStorage } from '../../../user-function/get-user-local-storage/user-local-storage';
import { Router } from '@angular/router';
import { TokenExpiration } from '../../../user-function/token-validation/token-validation';
import { User } from '../../../interface/user';
import { ProductDTO } from '../../../interface/dto/ProductDTO';

interface ProductMoveOver {
  idProduct: string;
  img: string;
}

@Component({
  selector: 'app-sportstyle-main',
  standalone: false,
  templateUrl: './sportstyle-main.component.html',
  styleUrl: './sportstyle-main.component.css',
})
export class SportstyleMainComponent implements OnInit, OnDestroy {
  title = 'Casacos, jaquetas e moletons a partir de 69,99';

  private destroy$ = new Subject<void>();
  user!: User;
  products!: ProductDTO[];
  rating: number = 1.5;

  constructor(
    private router: Router,
    private productService: ProductService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
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
    // testar isso aqui
    let category = '';

    if (this.title === 'Casacos, jaquetas e moletons a partir de 69,99') {
      category = 'Casacos, jaquetas e moletons';
      // tem que alterar isso deixar mais maleaveu tipo para outros products com outra category
    }

    this.productService
      .getProductsByCategory(category, user)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (success) => {
          const respSuccess = success as ReturnGetProductList;

          if (respSuccess.isSucess) {
            const data = respSuccess.data;

            this.products = data;
          }
        },
        error: (err) => console.error(err),
      });
  }

  @ViewChildren('containerStar') containerStars!: QueryList<ElementRef<HTMLDivElement>>;

  quantityStarRender = Array.from({ length: 5 }, (_, i) => i);
  quantityStarFull = 2;

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.getFlashSaleProductByProductFlashSaleId(this.quantityStarFull);

        // se precisar atualizar a tela depois:
        this.ngZone.run(() => {});
      }, 200);
    });
  }

  getFlashSaleProductByProductFlashSaleId = (productReviewsRate: number) => {
    const starWidths = [0, 0, 0, 0, 0];

    for (let i = 0; i < 5; i++) {
      const minValue = i;
      const maxValue = i + 1;

      if (productReviewsRate >= maxValue) {
        // estrela cheia
        starWidths[i] = 100;
      } else if (productReviewsRate > minValue && productReviewsRate < maxValue) {
        // estrela parcial
        const fractionalPart = productReviewsRate - minValue;
        starWidths[i] = Math.round(fractionalPart * 100);
      }
      // caso contrário, fica 0 (estrela vazia)
    }

    // aplicar no DOM
    this.containerStars.forEach((el, index) => {
      el.nativeElement.style.width = `${starWidths[index]}%`;
    });
  };

  getDiscountPriceProduct(el: ProductDTO) {
    const percentageDiscount = el.percentageDiscount ?? 0;
    const discountValue = el.price * (percentageDiscount / 100);
    const valueDiscount = el.price - discountValue;
    return valueDiscount.toFixed(2).toString().replace('.', ',');
  }

  whichImgMouseOver!: ProductMoveOver | null;
  imagemQueVaiAparecer = '';

  onMouseEnter(el: ProductDTO) {
    const imgs = el.productColorDTOs[0].imagens;
    if (imgs.length > 1) {
      this.whichImgMouseOver = {
        idProduct: el.id ?? '',
        img: imgs[1],
      };

      this.imagemQueVaiAparecer = imgs[1];
    }
  }

  onMouseLeave() {
    this.whichImgMouseOver = null;
  }

  onMouseEnterContainerMainProduct(headerTitleProduct: HTMLHeadingElement) {
    headerTitleProduct.style.textDecoration = 'underline';
  }

  onMouseLeaveContainerMainProduct(headerTitleProduct: HTMLHeadingElement) {
    headerTitleProduct.style.textDecoration = 'none';
  }

  ngOnDestroy(): void {
    // dispara para encerrar todos os observables com takeUntil
    this.destroy$.next();
    this.destroy$.complete();
  }
}
