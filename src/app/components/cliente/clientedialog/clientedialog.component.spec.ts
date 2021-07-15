import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientedialogComponent } from './clientedialog.component';

describe('ClientedialogComponent', () => {
  let component: ClientedialogComponent;
  let fixture: ComponentFixture<ClientedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientedialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
