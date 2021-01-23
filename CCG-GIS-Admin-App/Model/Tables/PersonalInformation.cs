using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GISAdmin.Model
{
    public class PersonalInformation
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleInitial { get; set; }
        public LanguagePrefence Language { get; set; }
        public string Department { get; set; }
        public string Email { get; set; }
        public long PhoneNumber { get; set; }
        public bool IsActive { get; set; }
        public string LastModifiedBy { get; set; }
        public DateTime LastModifiedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }

    }

    public enum LanguagePrefence
    {
        English,
        French
    }
}
