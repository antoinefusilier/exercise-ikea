import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realization',
  templateUrl: './realization.component.html',
  styleUrls: ['./realization.component.scss']
})
export class RealizationComponent implements OnInit {

  productExample = {
    name: 'Chaise de table en noyer',
    price: 100,
    quantity: 1,
    image: 'assets/images/realization/realization_1.jpg',
    description: 'Chaise de table design en noyer, avec un design moderne et élégant.'
  }
  constructor() { }

  ngOnInit(): void {
    this.previewProduct();
  }

  previewProduct = async (productId = 'productId1') => {
    $('#realizationPreviewDiv').css('display', 'none');
    let divProductViewed = $('#'+productId).mouseenter(()=> {
      $('#'+productId).css('width', '100%');
      $('#realizationPreviewDiv').css('display', 'block');
    });
    let divProductViewedOut = $('#'+productId).mouseleave(()=> {
      $('#' + productId).css('width', '80%');
      $('#realizationPreviewDiv').css('display', 'none');
    });
  }
}
