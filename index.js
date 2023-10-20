// The provided course information.
const courseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const assignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const learnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

///////////////////////////////////////

function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
 
    if (courseInfo.id !== assignmentGroup.course_id){
      throw new Error('Miss Matching Course ID')
    }
  
    let assignments = assignmentGroup.assignments;
    let result = [];

    for (let learner of learnerSubmissions) {
      let learner_result = { id: learner.learner_id, avg: 0 };
      let submission_result = { id: learner.learner_id, assignment_id:learner.assignment_id, avg: 0 };

      let max_total = 0;

      for (let i = 0; i < assignments.length; i++) {
        const assignment = assignments[i];

        // if (assignment.id === learner.assignment_id) {
        //   submission_result["avg"] += learner.submission.score;

        if (assignment.id === 3 && submission_result.assignment_id === assignment.id) {
         console.warn("Submission found for future assignment: Code the World");
        } else if (assignment.id === learner.assignment_id) {
          submission_result["avg"] += learner.submission.score;
        


          learner_result[assignment.id] =
            learner.submission.score / assignment.points_possible;
          max_total += assignment.points_possible;
          break;
        }
      }
      submission_result["avg"] /= max_total;

     
      result.push(submission_result);
    }

    return(result);
  

  } 

  const result = getLearnerData(courseInfo,assignmentGroup,learnerSubmissions);
  
  console.table(result);
  
  
  //Table might not work in google-chrome..//
  console.log(result);

// function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {

// for(let i = 0; i < assignmentGroup.assignments.length; i++) {
//           const current_ass = assignmentGroup.assignments[i];
//           const current_Id = 'id:'+ current_ass.id;
//           const current_name = 'name:' +current_ass.name;
//           let P_P = current_ass.points_possible;
//           console.log(P_P);
// }
  
  
//     //   for(const learner_id of learnerSubmissions){
//     // console.log(learnerSubmissions);
      
    
//     for (let submission of learnerSubmissions) {
//     console.log(submission.submission.score);
// }



// }


    




// const result = getLearnerData(courseInfo,assignmentGroup,learnerSubmissions   );
