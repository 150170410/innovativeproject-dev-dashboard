﻿using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Dashboard.Core.Entities;
using Newtonsoft.Json.Linq;

namespace Dashboard.Application.Interfaces.Services
{
    public interface IProjectService
    {
        Task<Project> GetProjectByIdAsync(int id);
        Task<IEnumerable<Project>> GetAllProjectsAsync();
        Task DeleteProjectAsync(int id);
        Task<ServiceObjectResult<Project>> UpdateProjectAsync(Project updatedProject);
        Task<ServiceObjectResult<Project>> CreateProjectAsync(Project project);

        Task<IEnumerable<string>> SearchForBranchInProject(int projectId, string searchValue);
        Task UpdateCiDataForProjectAsync(int projectId);

        void FireProjectUpdate(string providerName, object body);
        Task WebhookFunction(string providerName, object body);

        Task<IEnumerable<Pipeline>> GetPipelinesForPanel(int panelID);
    }
}