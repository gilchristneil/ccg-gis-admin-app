using System;
using System.Collections.Generic;
using GISAdmin.Model.Interfaces;
using GISAdmin.Model.Tables.Types;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Linq;
using System.Threading.Tasks;

namespace GISAdmin.Model
{
    public class RequestForm : IEntity, ITrackingEntity, ICreatedTrackingEntity
    {
        public Guid Id { get; set; }
        public virtual PersonalInformation RequesterInformation {get; set;}
        public virtual PersonalInformation SupervisorInformation { get; set; }
        public DateTime RequestSubmitDate { get; set; }
        public DateTime RequestResolutionDate { get; set; }
        public ICollection<Layer> LayersRequested { get; set; }
        public virtual RequestFormActionType RequestAction { get; set; }
        public string ReasonForRequest { get; set; }
        public bool IsActive { get; set; }
        public string LastModifiedBy { get; set; }
        public DateTime LastModifiedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }

    }

    public class RequestFormsConfiguation : IEntityTypeConfiguration<RequestForm>
    {
        public void Configure(EntityTypeBuilder<RequestForm> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.RequesterInformation)
                .IsRequired();

            builder.Property(x => x.SupervisorInformation)
                .IsRequired();

            builder.Property(x => x.LayersRequested)
                .IsRequired();

            builder.Property(x => x.RequestAction)
                .IsRequired();

            builder.Property(x => x.ReasonForRequest)
                .IsRequired();
        }
    }
}
