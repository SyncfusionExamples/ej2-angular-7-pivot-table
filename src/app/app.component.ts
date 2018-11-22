import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public data: DataManager;
  public dataSource: IDataOptions;
  public width: string;
  public button: Button;

  @ViewChild('pivotview')
  public pivotGridObj: PivotView;

  ngOnInit() {
    this.data = new DataManager({
      url: 'https://bi.syncfusion.com/northwindservice/api/orders',
      adaptor: new WebApiAdaptor,
      crossDomain: true
  });


this.dataSource = {
      data: this.data,
      expandAll: false,
      rows: [{ name: 'ProductName', caption: 'Product Name' }],
      columns: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
      formatSettings: [{ name: 'UnitPrice', format: 'C2', currency: 'EUR' }, {name: 'Total Price', format: 'C0'}],
      values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }],
      filters: [],
      conditionalFormatSettings: [
        {
          value1: 30,
          value2: 50,
          conditions: 'Between',
          style: {
            backgroundColor: '#80cbc4',
            color: 'black',
            fontFamily: 'Tahoma',
            fontSize: '12px'

          }
        }
        ,
        {
          value1: 20,
          value2: 25,
          conditions: 'Between',
          style: {
            backgroundColor: '#f48fb1',
            color: 'black',
            fontFamily: 'Tahoma',
            fontSize: '12px'

          }
        }
      ]
    };
    this.width = '800';
    this.button = new Button({ isPrimary: true });
    this.button.appendTo('#export');

    this.button.element.onclick = (): void => {
        this.pivotGridObj.excelExport();
    };
  }
}
