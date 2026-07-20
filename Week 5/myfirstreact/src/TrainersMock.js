import Trainer from './trainer';

const trainers = [
  new Trainer(
    1,
    "Elissa",
    "elissa@cognizant.com",
    "9876543210",
    "Java",
    ["Core Java", "Spring Boot", "Hibernate"]
  ),
  new Trainer(
    2,
    "John",
    "john@cognizant.com",
    "9876543211",
    "React",
    ["ReactJS", "Redux", "JavaScript"]
  ),
  new Trainer(
    3,
    "Mark",
    "mark@cognizant.com",
    "9876543212",
    "Python",
    ["Python", "Django", "Machine Learning"]
  )
];

export default trainers;
export { trainers };
