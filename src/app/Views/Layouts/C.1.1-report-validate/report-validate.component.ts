import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderSesionComponent } from '../../Components/Header/Header-sesion/header-sesion.component';
import { ModalReport } from "../../Components/Modals/ModalReport/modal-report";
import { ModalPhoto } from "../../Components/Modals/ModalPhoto/modal-photo";

@Component({
  selector: 'app-report-validate',
  imports: [HeaderSesionComponent, ModalReport, ModalPhoto],
  templateUrl: './report-validate.component.html',
  styleUrl: './report-validate.component.css'
})
export class ReportValidateComponent implements OnInit {

  @ViewChild(ModalPhoto) modalPhoto!: ModalPhoto;
  @ViewChild(ModalReport) modalReport!: ModalReport;

  valid = false;


  ngOnInit(): void {

  }

  Photo() {
    this.modalPhoto.open();
  }

  Arreglado() {
    this.modalReport.open();
  }

  SigueAhi() {
    this.modalReport.open();
  }

}
