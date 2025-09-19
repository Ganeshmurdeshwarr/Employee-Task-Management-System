const employees = [
  {
    "id": 1,
    "name": "Amit Sharma",
    "email": "emp1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Sales Report",
        "description": "Compile the monthly sales figures into a report.",
        "date": "2025-09-15",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Follow-up",
        "description": "Call clients for feedback on last week’s delivery.",
        "date": "2025-09-16",
        "category": "Communication",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Inventory Update",
        "description": "Update inventory details in the ERP system.",
        "date": "2025-09-18",
        "category": "Operations",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "email": "emp2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "UI Bug Fixing",
        "description": "Fix navbar alignment issue on dashboard.",
        "date": "2025-09-15",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review pull requests from teammates.",
        "date": "2025-09-17",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Database Backup",
        "description": "Ensure weekly database backup is completed.",
        "date": "2025-09-19",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Team Meeting",
        "description": "Join weekly sync-up meeting with the manager.",
        "date": "2025-09-20",
        "category": "Meetings",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "name": "Rohit Patil",
    "email": "emp3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Market Research",
        "description": "Collect data on competitor products.",
        "date": "2025-09-14",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Social Media Post",
        "description": "Schedule posts for the company’s LinkedIn.",
        "date": "2025-09-16",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Email Campaign",
        "description": "Draft and send promotional emails.",
        "date": "2025-09-18",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "name": "Sneha Iyer",
    "email": "emp4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Data Entry",
        "description": "Enter details of 50 new customers.",
        "date": "2025-09-15",
        "category": "Administration",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Support Ticket Resolution",
        "description": "Resolve pending support tickets from clients.",
        "date": "2025-09-16",
        "category": "Support",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Hardware Check",
        "description": "Inspect office desktops and laptops.",
        "date": "2025-09-19",
        "category": "IT",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Training Session",
        "description": "Conduct onboarding for new employees.",
        "date": "2025-09-20",
        "category": "HR",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 5,
    "name": "Karan Gupta",
    "email": "emp5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Audit Preparation",
        "description": "Prepare financial documents for audit.",
        "date": "2025-09-15",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Budget Analysis",
        "description": "Analyze Q3 spending and prepare a report.",
        "date": "2025-09-17",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Payroll Processing",
        "description": "Process payroll for September.",
        "date": "2025-09-20",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];


const admin =[{
  "id": 101,
  "name": "Anita Deshmukh",
  "email": "admin@example.com",
  "password": "123"
}]



export const  setLocalStorage =()=> {
    localStorage.setItem("employees",JSON.stringify(employees) )
    localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage=()=>{
   const employees=JSON.parse( localStorage.getItem("employees"))
   const admin=JSON.parse( localStorage.getItem("admin"))

return {employees,admin};
}