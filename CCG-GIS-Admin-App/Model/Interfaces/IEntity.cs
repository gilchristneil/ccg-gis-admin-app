using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GISAdmin.Model.Interfaces
{
    public interface IDbObject
    {
    }
    public interface IEntity : IDbObject
    {
        Guid Id { get; set; }
    }

    public interface ICreatedTrackingEntity
    {
        string CreatedBy { get; set; }
        DateTime CreatedDate { get; set; }
    }

    public interface ITrackingEntity
    {
        string LastModifiedBy { get; set; }
        DateTime LastModifiedDate { get; set; }
    }

    public interface ICodeEntity : IEntity, IActiveFlag, IDescription, IName
    {
        string Code { get; set; }
    }

    public interface IActiveFlag
    {
        bool IsActive { get; set; }
    }

    public interface IDescription
    {
        string DescEn { get; set; }
        string DescFr { get; set; }
    }

    public interface IName
    {
        string NameEn { get; set; }
        string NameFr { get; set; }
    }
}
