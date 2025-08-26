import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../interface/user';
import { Router } from '@angular/router';
import {
  ProductService,
  ReturnGetProductList,
} from '../../../service/product-service/product.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-filter-sidebar',
  standalone: false,
  templateUrl: './filter-sidebar.component.html',
  styleUrl: './filter-sidebar.component.css',
})
export class FilterSidebarComponent implements OnInit, AfterViewInit {
  @Input() title!: string;
  @Input() user!: User;
  private destroy$ = new Subject<void>();

  arrayBrandsToFilter: unknown[] = [];
  arraySizesProduct: string[] = [];
  arrayColorsProduct: string[] = ['Azul', 'Branco', 'Vermelho', 'Verde', 'Amarelo', 'Laranja'];
  arrayColorsProductFilter: string[] | null = null;

  wasClickedMark = false;

  constructor(
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    if (typeof window === 'undefined' || !window.localStorage || !this.user) return;
    // testar isso aqui
    let category = '';

    if (this.title === 'Casacos, jaquetas e moletons a partir de 69,99') {
      category = 'Casacos, jaquetas e moletons';
    }

    this.productService
      .getProductsByCategoryToFilter(category, this.user)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (success) => {
          const respSuccess = success as ReturnGetProductList;

          if (respSuccess.isSucess) {
            const data = respSuccess.data;

            data.forEach((el) => {
              const element = el.additionalInformation['Marca'];
              this.arrayBrandsToFilter.push(element);

              const arrayElementsSizes = el.sizesAvailable;
              arrayElementsSizes.forEach((size) => {
                this.arraySizesProduct.push(size);
              });

              const productColorDTOs = el.productColorDTOs;
              productColorDTOs.forEach((objColor) => {
                const colorInner = objColor.title;
                this.arrayColorsProduct.push(colorInner);
              });
            });

            // transforma em único (sem repetição)
            this.arrayBrandsToFilter = [...new Set(this.arrayBrandsToFilter)];
            this.arraySizesProduct = [...new Set(this.arraySizesProduct)];
            this.arrayColorsProduct = [...new Set(this.arrayColorsProduct)];
          }
        },
        error: (err) => console.error(err),
      });
  }

  ngAfterViewInit(): void {
    // ---
  }

  @ViewChild('containerColorMain') containerColorMain!: ElementRef<HTMLDivElement>;
  clickedWasOneTime = true;

  onClickMark() {
    this.wasClickedMark = !this.wasClickedMark;
  }

  onClickContainerColorMain(
    containerColorMain: HTMLDivElement,
    minusColorMain: HTMLSpanElement,
    moreColorMain: HTMLSpanElement,
    inputTypingColors: HTMLInputElement,
    containerMainColor: HTMLDivElement
  ) {
    if (this.clickedWasOneTime) {
      containerColorMain.style.height = '190px';
      minusColorMain.style.display = 'flex';
      moreColorMain.style.display = 'none';

      this.clickedWasOneTime = false;
      containerMainColor.style.marginBottom = '7px';
    } else {
      containerColorMain.style.height = '0px';
      minusColorMain.style.display = 'none';
      moreColorMain.style.display = 'flex';

      this.clickedWasOneTime = true;
      this.arrayColorsProductFilter = null;
      inputTypingColors.value = '';
      containerMainColor.style.marginBottom = '0px';
    }
  }

  onTyping(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    const colors = this.arrayColorsProduct.filter((el) =>
      el.toLowerCase().includes(value.toLowerCase())
    );

    this.arrayColorsProductFilter = colors;

    if (colors.length <= 0) {
      this.containerColorMain.nativeElement.style.height = '60px';
    } else {
      this.containerColorMain.nativeElement.style.height = 'auto';
    }
  }
}
