import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realization',
  templateUrl: './realization.component.html',
  styleUrls: ['./realization.component.scss']
})
export class RealizationComponent implements OnInit {
  sliceMin = 0;
  sliceMax = 2;
  products = [
    {
      id: 'productId1',
      name: 'Chaise de table en noyer',
      price: 100,
      quantity: 1,
      image: 'assets/images/realization/realization_1.jpg',
      description: 'Chaise de table design en noyer, avec un design moderne et élégant.'
    },
    {
      id: 'productId2',
      name: 'Table en noyer chic !',
      price: 100,
      quantity: 1,
      image: 'assets/images/realization/realization_1.jpg',
      description: 'Chaise de table design en noyer, avec un design moderne et élégant.'
    },
    {
      id: 'productId3',
      name: 'Chaise de table en noyer',
      price: 100,
      quantity: 1,
      image: 'assets/images/realization/realization_1.jpg',
      description: 'Chaise de table design en noyer, avec un design moderne et élégant.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.previewProduct();
  }

  previewProduct = async (productId = 'productId1') => {
    $('#realizationPreviewDiv').css('display', 'none');
    let test = $('.productEl').attr('data-product-id');
    let test2 = $('.productEl').css('color');
    let test3 = $('.productEl');
    console.log("TEST:::",test);
    console.log("TEST2:::", test2);
    console.log("TEST3:::", test3);

    let divProductViewed = $('#'+productId).mouseenter(()=> {
      $('#'+productId).css('scale', '1.2');
      $('#realizationPreviewDiv').css('display', 'block');
    });
    let divProductViewedOut = $('#'+productId).mouseleave(()=> {
      $('#' + productId).css('scale', '1');
      $('#realizationPreviewDiv').css('display', 'none');
    });
  }
}
