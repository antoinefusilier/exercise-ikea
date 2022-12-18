import { Component, OnInit } from '@angular/core';
import { Realization } from './realization.model';
// Ressources :
//  https://stackblitz.com/edit/angular-product-list?file=app%2Fproduct-list%2Fproduct-list.component.ts


@Component({
  selector: 'app-realization',
  templateUrl: './realization.component.html',
  styleUrls: ['./realization.component.scss']
})
export class RealizationComponent implements OnInit {
  realizations: Realization[];
  sliceMin = 0;
  sliceMax = 3;
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

  constructor() {
    this.realizations = [
      new Realization(
        'productId3',
        'Chaise de table en noyer',
        100,
        1,
        'assets/images/realization/realization_1.jpg',
        'Chaise de table design en noyer, avec un design moderne et élégant.'
      )
    ]

  }

  ngOnInit(): void {
    this.previewProduct();
  }

  realizationWasSelected(halo: Realization): void {
    console.log('Product clicked: ', halo);
  }


  previewProduct = async (productId = 'productId1') => {
    $('#realizationPreviewDiv').css('display', 'none');
    let test = $('.productEl').data('product-id', 'productId1');
    let test2 = $('.productEl').css('color');
    let test3 = $('.productEl');
    console.log("TEST:::",test);
    console.log("TEST2:::", test2);
    console.log("TEST3:::", test3);
    // console.log(event.target.dataset.product-id);
    this.products.forEach(element => {
       $('#'+element.id).mouseenter(()=>{
         $('.productEl').data('product-id', element.id);
        console.log("HELPP::", element.id);
      })
      $('#' + element.id).mouseleave(() => {
        let id = $('.productEl').data('product-id');
        console.log("HELPPLeave::", id);
      })
    });

    // let divProductViewed = $('#'+productId).mouseenter(()=> {
    //   $('#'+productId).css('scale', '1.2');
    //   $('#realizationPreviewDiv').css('display', 'block');
    // });
    let divProductViewedOut = $('#'+productId).mouseleave(()=> {
      $('#' + productId).css('scale', '1');
      $('#realizationPreviewDiv').css('display', 'none');
    });
  }
}
