import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EnvironmentService } from '../environment.service';
import { MaterialModule } from '../material.module';

import { ResponsiveToolbarComponent } from './responsive-toolbar.component';

describe('ResponsiveToolbarComponent', () => {
  let component: ResponsiveToolbarComponent;
  let fixture: ComponentFixture<ResponsiveToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveToolbarComponent ],
      imports: [
        MaterialModule,
        RouterTestingModule
      ],
      providers: [
        EnvironmentService        
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
