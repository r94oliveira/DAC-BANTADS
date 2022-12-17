import { Component, OnInit } from '@angular/core';
import { GerenteDashDto } from '../dto/gerente-dash-dto';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.scss'],
})
export class AdminDashComponent implements OnInit {

  page = 1;
  pageSize = 15;
  data!: GerenteDashDto[];
  collectionSize = 1;

  constructor(private service: AdminService) {}

  ngOnInit() {
		this.refreshData();
  }

	refreshData() {
		this.service.listarGerentes().subscribe(res => {
      this.data = res
      this.collectionSize = this.data.length
    })
	}

}
