import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientedialogdeleteComponent } from './clientedialogdelete.component';

describe('ClientedialogdeleteComponent', () => {
  let component: ClientedialogdeleteComponent;
  let fixture: ComponentFixture<ClientedialogdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientedialogdeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientedialogdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
