import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HostDirective } from './../host.directive';
import { PanelManagerService } from "../../panel-manager/service/panel-manager.service";

@Component({ selector: 'app-static-host-panel', templateUrl: './static-host-panel.component.html', styleUrls: ['./static-host-panel.component.css'] })
export class StaticHostPanelComponent implements OnInit {

  @Input()
  adminMode: Boolean = true;

  @Input()
  panelId: number;

  @Input()
  tileTitle: String;

  @ViewChild(HostDirective)
  panelHost: HostDirective;

  constructor(private panelManagerService: PanelManagerService) { }

  ngOnInit() {
    this
      .panelManagerService
      .injectPanelComponent(this.panelHost, this.panelId);
  }

}
