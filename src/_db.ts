let administrators = [
    {
        id: "1001",
        name: "Alice Johnson",
        institutions: ["2001"]
    },
    {
        id: "1002",
        name: "Bob Smith",
        institutions: ["2002"]
    }
];

let institutions = [
    {
        id: "2001",
        name: "Tech University",
        administrator: "1001",
        courses: ["3001", "3002"]
    },
    {
        id: "2002",
        name: "Science Academy",
        administrator: "1002",
        courses: ["3003", "3004"]
    }
];

let courses = [
    {
        id: "3001",
        name: "Computer Science 101",
        institution: "2001",
        quizes: ["4001"]
    },
    {
        id: "3002",
        name: "Mathematics 101",
        institution: "2001",
        quizes: []
    },
    {
        id: "3003",
        name: "Physics 101",
        institution: "2002",
        quizes: ["4002"]
    },
    {
        id: "3004",
        name: "Chemistry 101",
        institution: "2002",
        quizes: []
    }
];

let sourceMaterials = [
    {
        id: "5001",
        title: "Intro to Programming",
        content: "This is an introductory programming material.",
        courses: ["3001"],
        quizes: ["4001"]
    },
    {
        id: "5002",
        title: "Physics Basics",
        content: "This is an introductory physics material.",
        courses: ["3003"],
        quizes: ["4002"]
    },
    {
        id: "5003",
        title: "Advanced Chemistry",
        content: "This is an advanced chemistry material.",
        courses: ["3004"],
        quizes: []
    }
];

let quizes = [
    {
        id: "4001",
        name: "Programming Basics Quiz",
        course: "3001",
        author: "6001",
        students: ["7001", "7002"],
        sourceMaterial: "5001",
        questions: ["8001", "8002"]
    },
    {
        id: "4002",
        name: "Physics Basics Quiz",
        course: "3003",
        author: "6002",
        students: ["7003", "7004", "7005"],
        sourceMaterial: "5002",
        questions: ["8003", "8004", "8005", "8006", "8007"]
    }
];

let questions = [
    {
        id: "8001",
        author: "6001",
        text: "What is a variable?",
        correctAnswer: "A storage location for data.",
        quiz: "4001",
        answers: ["9001"]
    },
    {
        id: "8002",
        author: "6001",
        text: "What is a function?",
        correctAnswer: "A reusable block of code.",
        quiz: "4001",
        answers: ["9002"]
    },
    {
        id: "8003",
        author: "6002",
        text: "What is Newton's first law?",
        correctAnswer: "An object in motion stays in motion unless acted upon by an external force.",
        quiz: "4002",
        answers: ["9003"]
    },
    {
        id: "8004",
        author: "6002",
        text: "What is the speed of light?",
        correctAnswer: "Approximately 299,792 km/s.",
        quiz: "4002",
        answers: ["9004"]
    },
    {
        id: "8005",
        author: "6002",
        text: "What is the formula for force?",
        correctAnswer: "Force = Mass x Acceleration.",
        quiz: "4002",
        answers: ["9005"]
    },
    {
        id: "8006",
        author: "6002",
        text: "What is the unit of energy?",
        correctAnswer: "Joule.",
        quiz: "4002",
        answers: ["9006"]
    },
    {
        id: "8007",
        author: "6002",
        text: "What is the gravitational constant?",
        correctAnswer: "6.674 × 10^-11 N·m²/kg².",
        quiz: "4002",
        answers: ["9007"]
    }
];

let answers = [
    {
        id: "9001",
        student: "7001",
        value: "A storage location for data.",
        question: "8001",
        answeredCorrectly: true,
        quiz: "4001"
    },
    {
        id: "9002",
        student: "7002",
        value: "A reusable block of code.",
        question: "8002",
        answeredCorrectly: true,
        quiz: "4001"
    },
    {
        id: "9003",
        student: "7003",
        value: "An object in motion stays in motion unless acted upon by an external force.",
        question: "8003",
        answeredCorrectly: true,
        quiz: "4002"
    },
    {
        id: "9004",
        student: "7004",
        value: "Approximately 299,792 km/s.",
        question: "8004",
        answeredCorrectly: true,
        quiz: "4002"
    },
    {
        id: "9005",
        student: "7005",
        value: "Force = Mass x Acceleration.",
        question: "8005",
        answeredCorrectly: true,
        quiz: "4002"
    },
    {
        id: "9006",
        student: "7003",
        value: "Joule.",
        question: "8006",
        answeredCorrectly: true,
        quiz: "4002"
    },
    {
        id: "9007",
        student: "7004",
        value: "6.674 × 10^-11 N·m²/kg².",
        question: "8007",
        answeredCorrectly: true,
        quiz: "4002"
    }
];

let teachers = [
    {
        id: "6001",
        name: "Dr. Smith",
        courses: ["3001"],
        sourceMaterials: ["5001"],
        quizes: ["4001"]
    },
    {
        id: "6002",
        name: "Dr. Brown",
        courses: ["3003"],
        sourceMaterials: ["5002"],
        quizes: ["4002"]
    }
];

let students = [
    {
        id: "7001",
        name: "John Doe",
        courses: ["3001"],
        quizes: ["4001"]
    },
    {
        id: "7002",
        name: "Jane Doe",
        courses: ["3001"],
        quizes: ["4001"]
    },
    {
        id: "7003",
        name: "Alice Green",
        courses: ["3003"],
        quizes: ["4002"]
    },
    {
        id: "7004",
        name: "Bob White",
        courses: ["3003"],
        quizes: ["4002"]
    },
    {
        id: "7005",
        name: "Charlie Black",
        courses: ["3003"],
        quizes: ["4002"]
    }
];

export default  {
    administrators,
    institutions,
    courses,
    sourceMaterials,
    quizes,
    questions,
    answers,
    teachers,
    students
};
