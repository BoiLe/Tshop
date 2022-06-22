import { Component, OnInit } from '@angular/core';
import { TDSModalService } from 'tds-ui/modal';
import { TDSTabsCanDeactivateFn } from 'tds-ui/tabs';
import { Observable } from 'rxjs';
import { TDSSafeAny } from 'tds-ui/shared/utility';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  host: { class: 'h-full flex flex-col overflow-hidden ' },
})
export class ProductListComponent implements OnInit {
  expandSet = new Set<number>();
    productData = [
      {
          id: 1,
          IdOrder: 'T1261964561',
          img: 'DH 023165',
          NameProduct: "Giày thể thao hiphop đen trắng",
          IdProduct:"0910232",
          Price: '1.500.000',
          SL:"1",
          total:"1.500.000",
         

      },
      
      {
          id: 2,
          IdOrder: 'T1261964561',
          img: 'DH 023165',
          NameProduct: "Giày thể thao hiphop đen trắng",
          IdProduct:"0910232",
          Price: '1.500.000',
          SL:"1",
          total:"1.500.000",
         

      },
      
      {
          id: 3,
          IdOrder: 'T1261964561',
          img: 'DH 023165',
          NameProduct: "Giày thể thao hiphop đen trắng",
          IdProduct:"0910232",
          Price: '1.500.000',
          SL:"1",
          total:"1.500.000",
         

      },
      
    ]
    listOfData = [
        {
            id: 1,
            IdOrder: 'DH 023165',
            Customer: "Sun Happy",
            Phone:"012312321",
            Total: '1.500.000',
            StatusOrder: 'Đã giao hàng',
            StatusCount: 'Đã thanh toán',
            Trading:"Giao hàng tiết kiệm",
            Date:"30/08/2021",
            Multilation:"In hóa đơn",

        },
        {
            id: 2,
            IdOrder: 'DH 023165',
            Customer: "Sun Happy",
            Phone:"012312321",
            Total: '1.500.000',
            StatusOrder: 'Đã giao hàng',
            StatusCount: 'Đã thanh toán',
            Trading:"Giao hàng tiết kiệm",
            Date:"30/08/2021",
            Multilation:"In hóa đơn",

        },
        {
            id: 3,
            IdOrder: 'DH 023165',
            Customer: "Sun Happy",
            Phone:"012312321",
            Total: '1.500.000',
            StatusOrder: 'Đã giao hàng',
            StatusCount: 'Đã thanh toán',
            Trading:"Giao hàng tiết kiệm",
            Date:"30/08/2021",
            Multilation:"In hóa đơn",

        },
        {
            id: 4,
            IdOrder: 'DH 023165',
            Customer: "Sun Happy",
            Phone:"012312321",
            Total: '1.500.000',
            StatusOrder: 'Đã giao hàng',
            StatusCount: 'Đã thanh toán',
            Trading:"Giao hàng tiết kiệm",
            Date:"30/08/2021",
            Multilation:"In hóa đơn",

        },
        {
            id: 5,
            IdOrder: 'DH 023165',
            Customer: "Sun Happy",
            Phone:"012312321",
            Total: '1.500.000',
            StatusOrder: 'Đã giao hàng',
            StatusCount: 'Đã thanh toán',
            Trading:"Giao hàng tiết kiệm",
            Date:"30/08/2021",
            Multilation:"In hóa đơn",

        },
        {
            id: 6,
            IdOrder: 'DH 023165',
            Customer: "Sun Happy",
            Phone:"012312321",
            Total: '1.500.000',
            StatusOrder: 'Đã giao hàng',
            StatusCount: 'Đã thanh toán',
            Trading:"Giao hàng tiết kiệm",
            Date:"30/08/2021",
            Multilation:"In hóa đơn",

        },
        {
            id: 7,
            IdOrder: 'DH 023165',
            Customer: "Sun Happy",
            Phone:"012312321",
            Total: '1.500.000',
            StatusOrder: 'Đã giao hàng',
            StatusCount: 'Đã thanh toán',
            Trading:"Giao hàng tiết kiệm",
            Date:"30/08/2021",
            Multilation:"In hóa đơn",

        }
    ];
    tabsIcon2 = [
      {
        name: 'Tất cả',
        count: 99,
        content: "Content of Tab Pane 1"
      },
      {
        name: 'Chờ xác nhận',
        count: 85,
        content: "Content of Tab Pane 2"
      },
      {
        name: 'Chờ lấy hàng',
        count: 80,
        content: "Content of Tab Pane 3"
      },
      {
        name: 'Đang giao',
        count: 99,
        content: "Content of Tab Pane 1"
      },
      {
        name: 'Đã giao',
        count: 85,
        content: "Content of Tab Pane 2"
      },
      {
        name: 'Đã hủy',
        count: 80,
        content: "Content of Tab Pane 3"
      }
    ];
  

  constructor() { }

  ngOnInit(): void {
  }
  onSelectChange(value:TDSSafeAny){
    console.log(value);
  }
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
        this.expandSet.add(id);
    } else {
        this.expandSet.delete(id);
    }
}
}
