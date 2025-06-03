using SeatingChart.Models;
using SeatingChart.Data;
using Microsoft.AspNetCore.Mvc;

namespace SeatingChart.Data
{
    public static class DbInitializer
    {
        public static void Initialize(ChartContext context)
        {
            // Look for any students.
            if (!context.Students.Any())
            {
                var students = new Student[]
                {
                    new Student{FirstName="Carson",MiddleName="Alexander",LastName="Buckingham"},
                    new Student{FirstName="Noah", MiddleName="Clay", LastName="Chaffin"},
                    new Student{FirstName="Ian", MiddleName="Rohan", LastName="Walker"},
                    new Student{FirstName="Colten", MiddleName="J", LastName="Berry"},
                    new Student{FirstName="Natalie", MiddleName="Belle", LastName="Aikman"},
                    new Student{FirstName="Daniel", MiddleName="G", LastName="Barret"},
                    new Student{FirstName="Tanner", MiddleName="G", LastName="Barret"},
                    new Student{FirstName="Joseph", MiddleName="Stanley", LastName="Beard"},
                    new Student{FirstName="Cody", MiddleName="Gail", LastName="Beckett"},
                    new Student{FirstName="Jayson", MiddleName="L", LastName="Gibson"},
                    new Student{FirstName="Madison", MiddleName="Ragon", LastName="Connaway"},
                    new Student{FirstName="Brandon", MiddleName="Issac", LastName="Kutris"}
                };
                context.Students.AddRange(students);
                context.SaveChanges();
            }

            if (!context.Configurations.Any())
            {
                var config = new Configuration[] {
                    new Configuration{NumberofColumns = 5}
                };
                context.Configurations.AddRange(config);
                context.SaveChanges();
            }

        }
    }
}
