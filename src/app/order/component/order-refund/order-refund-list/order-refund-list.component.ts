import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tmt-tang-ui';

@Component({
  selector: 'app-order-refund-list',
  templateUrl: './order-refund-list.component.html',
  styleUrls: ['./order-refund-list.component.scss'],
  host: { class: 'h-full w-full flex flex-col bg-white' },
})
export class OrderRefundListComponent implements OnInit {

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
    
   
    
  ]
  listOfData = [
      {
          id: 1,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"30/08/2021",
          RDate:"07/09/2021",
          Pdate:"Đã giao hàng",
          StatusRefund:"Đã hoàn tiền",
          Stranfort:"Kiện hàng đã giao cho bưu cục",
        
      },
      {
          id: 2,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"Đã giao hàng",
          RDate:"07/09/2021",
          Pdate:"Đã giao hàng",
          StatusRefund:"Chưa xử lý",
          Stranfort:"Kiện hàng đã giao cho bưu cục",

      },
      {
          id: 3,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"30/08/2021",
          RDate:"Đã giao hàng",
          Pdate:"Đã giao hàng",
          StatusRefund:"Từ chối",
          Stranfort:"Kiện hàng đã giao cho bưu cục",

      },
      {
          id: 4,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"30/08/2021",
          RDate:"Đã giao hàng",
          Pdate:"Đã giao hàng",
          StatusRefund:"Đang xử lý",
          Stranfort:"Kiện hàng đã giao cho bưu cục",

      },
      {
          id: 4,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"30/08/2021",
          RDate:"Đã giao hàng",
          Pdate:"Đã giao hàng",
          StatusRefund:"Đang xử lý",
          Stranfort:"Kiện hàng đã giao cho bưu cục",

      },
      {
          id: 4,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"30/08/2021",
          RDate:"Đã giao hàng",
          Pdate:"Đã giao hàng",
          StatusRefund:"Đang xử lý",
          Stranfort:"Kiện hàng đã giao cho bưu cục",

      },
      {
          id: 4,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"30/08/2021",
          RDate:"Đã giao hàng",
          Pdate:"Đã giao hàng",
          StatusRefund:"Đang xử lý",
          Stranfort:"Kiện hàng đã giao cho bưu cục",

      },
      {
          id: 4,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"30/08/2021",
          RDate:"Đã giao hàng",
          Pdate:"Đã giao hàng",
          StatusRefund:"Đang xử lý",
          Stranfort:"Kiện hàng đã giao cho bưu cục",

      },
      {
          id: 4,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"30/08/2021",
          RDate:"Đã giao hàng",
          Pdate:"Đã giao hàng",
          StatusRefund:"Đang xử lý",
          Stranfort:"Kiện hàng đã giao cho bưu cục",

      },
      {
          id: 4,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"30/08/2021",
          RDate:"Đã giao hàng",
          Pdate:"Đã giao hàng",
          StatusRefund:"Đang xử lý",
          Stranfort:"Kiện hàng đã giao cho bưu cục",

      },
      {
          id: 4,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"30/08/2021",
          RDate:"Đã giao hàng",
          Pdate:"Đã giao hàng",
          StatusRefund:"Đang xử lý",
          Stranfort:"Kiện hàng đã giao cho bưu cục",

      },
      {
          id: 4,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"30/08/2021",
          RDate:"Đã giao hàng",
          Pdate:"Đã giao hàng",
          StatusRefund:"Đang xử lý",
          Stranfort:"Kiện hàng đã giao cho bưu cục",

      },
      {
          id: 4,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"30/08/2021",
          RDate:"Đã giao hàng",
          Pdate:"Đã giao hàng",
          StatusRefund:"Đang xử lý",
          Stranfort:"Kiện hàng đã giao cho bưu cục",

      },

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
