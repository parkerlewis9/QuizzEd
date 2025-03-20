import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// server setup

import db from "./_db.ts";
import { typeDefs } from "./schema.ts";

const resolvers = {
  Query: {
    administrators: () => db.administrators,
    administrator: (_, { id }) => db.administrators.find(admin => admin.id === id),
    institutions: () => db.institutions,
    institution: (_, { id }) => db.institutions.find(inst => inst.id === id),
    courses: () => db.courses,
    course: (_, { id }) => db.courses.find(course => course.id === id),
    sourceMaterials: () => db.sourceMaterials,
    sourceMaterial: (_, { id }) => db.sourceMaterials.find(sm => sm.id === id),
    quizzes: () => db.quizes,
    quiz: (_, { id }) => db.quizes.find(quiz => quiz.id === id),
    questions: () => db.questions,
    question: (_, { id }) => db.questions.find(question => question.id === id),
    answers: () => db.answers,
    answer: (_, { id }) => db.answers.find(answer => answer.id === id),
    teachers: () => db.teachers,
    teacher: (_, { id }) => db.teachers.find(teacher => teacher.id === id),
    students: () => db.students,
    student: (_, { id }) => db.students.find(student => student.id === id),
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);
