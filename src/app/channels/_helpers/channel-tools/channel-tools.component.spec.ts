import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelToolsComponent } from './channel-tools.component';

describe('ChannelToolsComponent', () => {
  let component: ChannelToolsComponent;
  let fixture: ComponentFixture<ChannelToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
