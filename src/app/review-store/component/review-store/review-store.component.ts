import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';

interface FilterStatusItemDTO {
  name: string;
  value: TDSSafeAny,
  count?: number,
  disabled?: boolean,
}

@Component({
  selector: 'app-review-store',
  templateUrl: './review-store.component.html',
  styleUrls: ['./review-store.component.scss'],
  host: { class: 'h-full flex flex-col overflow-hidden ' },
})
export class ReviewStoreComponent implements OnInit {
  expandSet = new Set<number>();
  star = 0;
  value: number = 0;
  lstStar: Array<FilterStatusItemDTO> = [
    {
      name: 'Tất cả',
      value: 0,
      count: 100,
      disabled: false
    },
    {
      name: '1',
      value: 1,
      count: 20,
      disabled: false
    },
    {
      name: '2',
      value: 2,
      count: 60,
      disabled: false
    },
    {
      name: '3',
      value: 3,
      count: 20,
      disabled: false
    },
    {
      name: '4',
      value: 4,
      count: 20,
      disabled: false
    },

    {
      name: '5',
      value: 5,
      count: 20,
      disabled: true
    },
  ]
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
          Customer: "Sun Happy",
          Phone:"012312321",
          review: 5,
          img: {
            1:"../../../../assets/Rectangle 1671.png",
            2:"../../../../assets/Rectangle 1671.png",
          },
          content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
          Date:"30/08/2021",
          Status: 'Đã trả lời',
      },
      {
          id: 2,
          Customer: "Sun Happy",
          Phone:"012312321",
          img: {
            1:"../../../../assets/Rectangle 1671.png",
            2:"../../../../assets/Rectangle 1671.png",
          },
          review: 4,
          content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
          Date:"30/08/2021",
          Status: 'Đã ẩn',
      },
      {
          id: 3,
          Customer: "Sun Happy",
          Phone:"012312321",
          img: {
            
          },
          review: 3,
          content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ, nói chuyện rất dễ thương, rep tin nhắn nhanh nhẹn, Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ, Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ, Shop trả lời rất nhiệt tình, giải đáp thắc...',
          Date:"30/08/2021",
          Status: 'Chưa trả lời',
      },
      {
          id: 4,
          Customer: "Sun Happy",
          Phone:"012312321",
          img: {
            
          },
          review: 2,
          content: 'ẻ',
          Date:"30/08/2021",
          Status: 'Chưa trả lời',
      },
      {
          id: 5,
          Customer: "Sun Happy",
          Phone:"012312321",
          img: {
            
          },
          review: 1,
          content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
          Date:"30/08/2021",
          Status: 'Chưa trả lời',
      },
      {
          id: 6,
          Customer: "Sun Happy",
          Phone:"012312321",
          img: {
            
          },
          review: 5,
          content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
          Date:"30/08/2021",
          Status: 'Chưa trả lời',
      },
      {
          id: 7,
          Customer: "Sun Happy",
          Phone:"012312321",
          img: {
            
          },
          review: 5,
          content: '',
          Date:"30/08/2021",
          Status: 'Chưa trả lời',
      },
      {
        id: 8,
        Customer: "Sun Happy",
        Phone:"012312321",
        img: {
            
        },
        review: 4,
        content: '',
        Date:"30/08/2021",
        Status: 'Đã ẩn',
    },
    {
      id: 9,
      Customer: "Sun Happy",
      Phone:"012312321",
      img: {
            
      },
      review: 4,
      content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
      Date:"30/08/2021",
      Status: 'Đã ẩn',
  },
  {
    id: 10,
    Customer: "Sun Happy",
    Phone:"012312321",
    img: {
            
    },
    review: 4,
    content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
    Date:"30/08/2021",
    Status: 'Đã ẩn',
},
  {
    id: 11,
    Customer: "Sun Happy",
    Phone:"012312321",
    img: {
            
    },
    review: 4,
    content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ, nói chuyện rất dễ thương, rep tin nhắn nhanh nhẹn, Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ, Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ, Shop trả lời rất nhiệt tình, giải đáp thắc...',
    Date:"30/08/2021",
    Status: 'Đã ẩn',
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
  onSelectChange(value: TDSSafeAny) {
    
    console.log('selectChange',value)
  }
  onModelChange(value: TDSSafeAny) {

    console.log('ngModelChange', value)
  }
  onChange(e: any) {
    console.log(e);
  }
  onFocus(e: any){
      console.log("onFocus",e)
  }
  onBlur(e: any){
      console.log("onBlur",e)
  }
  onKeyDown(e: any){
      console.log("onKeyDown",e)
  }
  onItemHover(e: any){
      console.log("onItemHover",e)
  }
}
