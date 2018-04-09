import {Component, OnInit, ViewChild, ElementRef, NgZone} from '@angular/core';
import {Project, SupportedProviders} from '../../projects-manager/project';
import {ProjectsApiService} from '../../projects-manager/api/projects-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-panel-projects',
  templateUrl: './panel-projects.component.html',
  styleUrls: ['./panel-projects.component.css', './../panel.shared.css']
})
export class PanelProjectsComponent implements OnInit {

  project = new Project('', '', '', '', undefined);
  dataProviderNames = new SupportedProviders(undefined);

  constructor(private projectApiService : ProjectsApiService, private router : Router, private zone : NgZone,) {
  }

  ngOnInit() {
   this.getProviderForProject();
  }
  
  addProject() {
    console.log('XD');
    console.log(this.project);
    if (!this.project) {
      return;
    }
    this
      .projectApiService
      .addProject(this.project)
      .subscribe(project => {
        this.project = project;
      }, err => {
        console.error('Error msg: ', err);
      }, () => {
        this
          .zone
          .run(() => this.router.navigate(['/admin/listOfProjects']))

      });
  }
  private getProviderForProject(){
   this.projectApiService.getSupportedProvidersForProjects().subscribe(res =>{
   
    this.dataProviderNames.data = res;
    console.log(this.dataProviderNames.data);
    }  );
    
  }
}