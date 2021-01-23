using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GISAdmin.Model
{
    public class Layer
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string URL { get; set; }
        public bool IsActive { get; set; }
        public string LastModifiedBy { get; set; }
        public DateTime LastModifiedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }

    }
}
