import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { HeaderMainComponent } from '../header-full-components/header-main/header-main.component';
import { AlreadyClientComponent } from '../already-client/already-client.component';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { SocialAuthButtonsComponent } from '../footer-components/social-auth-buttons/social-auth-buttons.component';
import { MethodPaymentComponent } from '../footer-components/method-payment/method-payment.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        HeaderMainComponent,
        AlreadyClientComponent,
        CreateAccountComponent,
        SocialAuthButtonsComponent,
        MethodPaymentComponent,
      ],
      imports: [AllSvgModule],
      // providers: [CategoriesService, provideHttpClient(withInterceptorsFromDi())],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render span Copyright', () => {
    const span: HTMLSpanElement = fixture.nativeElement.querySelector('.span-copyright');
    expect(span).toBeTruthy();
    expect(span.textContent?.trim()).toBe(
      'Copyright © 2000 - 2025 www.zattini.com.br, TODOS OS DIREITOS RESERVADOS. Todo o conteúdo do site, todas as fotos, imagens, logotipos, marcas, dizeres, som, software, conjunto imagem, layout, trade dress, aqui veiculados são de propriedade exclusiva da NS2.COM Internet S.A. ou de seus parceiros. É vedada qualquer reprodução, total ou parcial, de qualquer elemento de identidade, sem expressa autorização. A violação de qualquer direito mencionado implicará na responsabilização cível e criminal nos termos da Lei. NS2.Com Internet S/A - CNPJ: 09.339.936/0001-16 - R MARIA PRESTES MAIA nº 300 - 2º Andar CEP: 02047-901 - CARANDIRU - SAO PAULO - SP - A inclusão no carrinho não garante o preço e/ou a disponibilidade do produto. Caso os produtos apresentem divergências de valores, o preço válido é o exibido na tela de pagamento. Vendas sujeitas a análise e disponibilidade de estoque. Fale conosco: https://atendimento.zattini.com.br'
    );
  });
});
