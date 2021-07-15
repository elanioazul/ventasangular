import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientedialogeditComponent } from './clientedialogedit.component';

describe('ClientedialogeditComponent', () => {
  let component: ClientedialogeditComponent;
  let fixture: ComponentFixture<ClientedialogeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientedialogeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientedialogeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
