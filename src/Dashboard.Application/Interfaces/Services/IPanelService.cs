﻿using System.Collections.Generic;
using System.Threading.Tasks;
using Dashboard.Core.Entities;

namespace Dashboard.Application.Interfaces.Services
{
    public interface IPanelService
    {
        Task<Panel> GetPanelByIdAsync(int id);
        Task<IEnumerable<Panel>> GetAllPanelsAsync();
        Task DeletePanelAsync(int id);
        Task<Panel> UpdatePanelAsync(Panel updatedPanel, int projectId);
        Task<Panel> CreatePanelAsync(Panel model, int projectId);

        /// <summary>
        /// Returns list of projects that are referenced by any panel
        /// </summary>
        /// <returns></returns>
        Task<IEnumerable<Project>> GetActiveProjects();

        Task<Panel> UpdatePanelPosition(int panelId, PanelPosition position);
    }
}
