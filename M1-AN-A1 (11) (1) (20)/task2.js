/*Given	the	marks	of	4 subjects	Maths,	English, Computers and	Science	as	input.	
On	the	console	print	the	marks	in	each	subject	along	with	its	grade. Grades	are	
defined	as	>=80	is	A,	<80	and	>=60	is	B	and	<60 and	>=40	is	C	and	<40	is	D.
Also	print	the	subject	in	which	the	highest	was	scored. */


function calculateGrade(marks) {
  let grade = "";

  if (marks >= 80) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 40) {
    grade = "C";
  } else {
    grade = "D";
  }

  return grade;
}
function student(maths, english, computers, science) {
  let highestMarks = 0;
  let highestSubject = "";

  // Maths
  let gradeMaths = calculateGrade(maths);
  console.log("Maths : " + maths + " : " + gradeMaths);

  if (maths > highestMarks) {
    highestMarks = maths;
    highestSubject = "Maths";
  }

  // English
  let gradeEnglish = calculateGrade(english);
  console.log("English : " + english + " : " + gradeEnglish);

  if (english > highestMarks) {
    highestMarks = english;
    highestSubject = "English";
  }

  // Computers
  let gradeComputers = calculateGrade(computers);
  console.log("Computers : " + computers + " : " + gradeComputers);

  if (computers > highestMarks) {
    highestMarks = computers;
    highestSubject = "Computers";
  }

  // Science
  let gradeScience = calculateGrade(science);
  console.log("Science : " + science + " : " + gradeScience);

  if (science > highestMarks) {
    highestMarks = science;
    highestSubject = "Science";
  }

  console.log("Highest marks: " + highestSubject);
}


// Example usage:
student(82, 70, 66, 84);
student(55, 58, 71, 62);
student(37, 33, 32, 36);
student(71, 85, 53, 39);
student(80, 60, 40, 50);
