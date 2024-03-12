import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsnblogComponent } from './productsnblog.component';

describe('ProductsnblogComponent', () => {
  let component: ProductsnblogComponent;
  let fixture: ComponentFixture<ProductsnblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsnblogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsnblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
