﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Dashboard.Core.Entities
{
    public abstract class Panel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public PanelPosition Position { get; set; } = new PanelPosition();

        public abstract string Discriminator { get; }

        public int? ProjectId { get; set; }
        public Project Project { get; set; }


        public bool ShouldSerializeProject()
        {
            return false;
        }
    }

    public class MemePanel : Panel
    {
        public override string Discriminator => nameof(MemePanel);

        public string MemeApiToken { get; set; }
    }

    public class StaticBranchPanel : Panel
    {
        public override string Discriminator => nameof(StaticBranchPanel);

        public string StaticBranchName { get; set; }
    }

    public class DynamicPipelinesPanel : Panel
    {
        public override string Discriminator => nameof(DynamicPipelinesPanel);

        public int HowManyLastPipelinesToRead { get; set; }
    }

    public class PanelPosition
    {
        public int Column { get; set; }
        public int Row { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
    }
}
