using GISAdmin.Model.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;

namespace GISAdmin.Model.Tables.Types
{
    public class RequestFormActionType : ICodeEntity, ITrackingEntity, ICreatedTrackingEntity
    {
        public Guid Id { get; set; }
        public string Code { get; set; }
        public string NameEn { get; set; }
        public string NameFr { get; set; }
        public string DescEn { get; set; }
        public string DescFr { get; set; }
        public bool IsActive { get; set; }
        public string LastModifiedBy { get; set; }
        public DateTime LastModifiedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
    }

    public class ActionTypeConfiguration : IEntityTypeConfiguration<RequestFormActionType>
    {
       public void Configure(EntityTypeBuilder<RequestFormActionType> builder)
        {
            builder.HasKey(x => x.Id);

            builder.HasData(
                new RequestFormActionType() {
                    Id = Guid.NewGuid(),
                    Code = "Add",
                    NameEn = "Add",
                    NameFr = "Add(FR)",
                    DescEn = "Add Action",
                    DescFr = "Add Action (FR)",
                    IsActive = true,
                    CreatedBy = "InitialSystemAdd",
                    LastModifiedBy = "InitialSystemAdd"
                },
                new RequestFormActionType()
                {
                    Id = Guid.NewGuid(),
                    Code = "Remove",
                    NameEn = "Remove",
                    NameFr = "Remove(FR)",
                    DescEn = "Remove Action",
                    DescFr = "Remove Action (FR)",
                    IsActive = true,
                    CreatedBy = "InitialSystemAdd",
                    LastModifiedBy = "InitialSystemAdd"
                });
        }
    }


}
