import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SlideshowComponent } from '../slideshow/slideshow.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, SlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain Lorem impum dolor', () => {

    var compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Lorem impum dolor');
  });
});
