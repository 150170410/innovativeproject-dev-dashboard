import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatCardModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HelloWorldService} from './hello-world/hello-world.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardAdminComponent} from './dashboard-admin/dashboard-admin.component';
import {PanelConfigurationComponent} from './panel-configuration/panel-configuration.component';
import {PanelCreateComponent} from './panel-create/panel-create.component';
import {HostDirective} from "./panel-host/host.directive";
import {StaticHostPanelComponent} from './panel-host/static-host-panel/static-host-panel.component';
import {DynamicHostPanelComponent} from './panel-host/dynamic-host-panel/dynamic-host-panel.component';
import {PanelManagerService} from "./panel-manager/service/panel-manager.service";

const appRoutes : Routes = [
  {
    path: '',
    component: DashboardComponent
  }, {
    path: 'admin',
    component: DashboardAdminComponent
  }, {
    path: 'admin/create',
    component: PanelCreateComponent
  }, {
    path: 'admin/:id',
    component: PanelConfigurationComponent
  }, {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardAdminComponent,
    PanelConfigurationComponent,
    PanelCreateComponent,
    HostDirective,
    StaticHostPanelComponent,
    DynamicHostPanelComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    HelloWorldService, PanelManagerService
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}