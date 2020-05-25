import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  styles: [''],
  template: `
    <carousel>
    <slide>
      <img src="../../../../assets/images/carousel/1.jpg" alt="first slide" style="display: block; width: 100%;">
      <div class="carousel-caption d-none d-md-block">
        <h3>Bolsas</h3>
        <p>Bolsas D'Crochê Modelo 1</p>
      </div>
    </slide>
    <slide>
      <img src="../../../../assets/images/carousel/2.jpg" alt="second slide" style="display: block; width: 100%;">
      <div class="carousel-caption d-none d-md-block">
        <h3>Bolsas</h3>
        <p>Bolsas D'Crochê Modelo 2</p>
      </div>
    </slide>
    <slide>
      <img src="../../../../assets/images/carousel/3.jpg" alt="third slide" style="display: block; width: 100%;">
      <div class="carousel-caption d-none d-md-block">
        <h3>Brincos</h3>
        <p>Brincos D'Crochê Modelo 1</p>
      </div>
    </slide>
    <slide>
      <img src="../../../../assets/images/carousel/4.jpg" alt="third slide" style="display: block; width: 100%;">
      <div class="carousel-caption d-none d-md-block">
        <h3>Moda Casa</h3>
        <p>Capa de Bancos D'Crochê</p>
      </div>
    </slide>
    <slide>
      <img src="../../../../assets/images/carousel/5.jpg" alt="third slide" style="display: block; width: 100%;">
      <div class="carousel-caption d-none d-md-block">
        <h3>Calçado Infantil</h3>
        <p>Calçado Infantil Modelo 1</p>
      </div>
    </slide>
  </carousel>
  `,
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
