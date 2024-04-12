import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng2-pdf-viewer';
  pdfSrc: string =
    'https://www.uhcprovider.com/content/dam/provider/docs/public/policies/signaturevalue-bip/cardiac-rehabilitation-services-outpatient-ca.pdf';
}
