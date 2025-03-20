export const typeDefs = `#graphql
    type Institution {
        administrator: Administrator!
        courses: [Course]!
        id: ID!
        name: String!
    }

    type Course {
        id: ID!
        institution: Institution!
        name: String!
        quizes: [Quiz]!
    }

    type SourceMaterial {
        content: String!
        courses: [Course!]!
        id: ID!
        quizes: [Quiz!]!
        title: String!
    }

    type Quiz {
        author: Teacher!
        course: Course!
        id: ID!
        name: String!
        questions: [Question]!
        sourceMaterial: SourceMaterial!
        students: [Student]!
    }

    type Question {
        answers: [Answer]!
        author: Teacher!
        correctAnswer: String!
        id: ID!
        quiz: Quiz!
        text: String!
    }

    type Answer {
        answeredCorrectly: Boolean!
        id: ID!
        question: Question!
        quiz: Quiz!
        student: Student!
        value: String!
    }

    type Administrator {
        id: ID!
        institutions: [Institution]!
        name: String!
    }

    type Teacher {
        courses: [Course]
        id: ID!
        name: String!
        quizes: [Quiz]
        sourceMaterials: [SourceMaterial]
    }

    type Student {
        courses: [Course]
        id: ID!
        name: String!
        quizes: [Quiz]
    }

    type Query {
        administrator(id: ID!): Administrator
        administrators: [Administrator]
        answer(id: ID!): Answer
        answers: [Answer]
        course(id: ID!): Course
        courses: [Course]
        institution(id: ID!): Institution
        institutions: [Institution]
        question(id: ID!): Question
        questions: [Question]
        quiz(id: ID!): Quiz
        quizzes: [Quiz]
        sourceMaterial(id: ID!): SourceMaterial
        sourceMaterials: [SourceMaterial]
        student(id: ID!): Student
        students: [Student]
        teacher(id: ID!): Teacher
        teachers: [Teacher]
    }
`