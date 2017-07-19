console.clear();
//06-7-17
//need to add remaining questions
//need to add uncle sam logo
//need to add 30 second timer for each question
//need to add a share button at the end of the results
// yourArray.sort(function(a, b){return 0.5 - Math.random()});
// Array.prototype.shuffle = function(){ .. }
// yourArray.shuffle()

const classes = {
  correctMSG: ["Aye Captain", "Indubitably", "OK", "Sure", "Oh Yeah", "Yay"],
  incorrectMSG: ["Uh-uh", "Nope", "Stop", "No Siree", "Strike", "Negative"]
};

//get random key message work
Array.prototype.randomMSG = function() {
  return this[Math.floor(Math.random() * this.length)];
};

let quizAppQuestions = [

  //question1:
  {
    question: "What is the supreme law of the land?",
    answers: [
      "the Constitution",
      "the American Flag",
      "the Supreme Court",
      "the Bill of Rights"
    ],
    correctAnswerString: "the Constitution",
    correctAnswer: 0,
    userAnswer: null
  },
  //question2:
  {
    question: "What does the Constitution do?",
    answers: [
      "defines the government", //sets up the government, protects basic rights of Americans
      "protects the President",
      "defines the National Anthem",
      "defines the American Religion"
    ],
    correctAnswerString: "defines the government",
    correctAnswer: 0,
    userAnswer: null
  },
  //question3:
  {
    question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
    answers: [
      "We the People",
      "We the Americans",
      "Our Supreme Court",
      "The Supreme Law"
    ],
    correctAnswerString: "We the People",
    correctAnswer: 0,
    userAnswer: null
  },
  //question4:
  {
    question: "What is an amendment?",
    answers: [
      "a change (to the Constitution)", // an addition (to the Constitution)
      "a change (to the American People)",
      "a change (to our laws)",
      "a change (to our President)"
    ],
    correctAnswerString: "a change (to the Constitution)",
    correctAnswer: 0,
    userAnswer: null
  },
  //question5:
  {
    question: "What do we call the first ten amendments to the Constitution?",
    answers: [
      "the Bill of Rights",
      "the Bill of Laws",
      "the Bill of Life",
      "the Bill of Congress"
    ],
    correctAnswerString: "the Bill of Rights",
    correctAnswer: 0,
    userAnswer: null
  },
  //question6:
  {
    question: "What is one right or freedom from the First Amendment?",
    answers: [
      "speech", //religion, assembly, press, petition the government
      "alcohol",
      "firearm",
      "citizenship"
    ],
    correctAnswerString: "speech",
    correctAnswer: 0,
    userAnswer: null
  },
  //question7:
  {
    question: "How many amendments does the Constitution have?",
    answers: [
      "26",
      "27",
      "28",
      "29"
    ],
    correctAnswerString: "27",
    correctAnswer: 1,
    userAnswer: null
  },
  //question8:
  {
    question: "What did the Declaration of Independence do?",
    answers: [
      "declared our independence (from Great Britain)", //announced our independence (from Great Britain), said that the United States is free (from Great Britain)
      "declared our independence (from South)",
      "declared our independence (from France)",
      "declared our independence (from the Natives)"
    ],
    correctAnswerString: "declared our independence (from Great Britain)",
    correctAnswer: 0,
    userAnswer: null
  },
  //question9:
  {
    question: "What are two rights in the Declaration of Independence?",
    answers: [
      "life & liberty",
      "life & land",
      "liberty & freedom",
      "pursuit of happiness & land"
    ],
    correctAnswerString: "life & liberty",
    correctAnswer: 0,
    userAnswer: null
  },
  //question10:
  {
    question: "What is freedom of religion?",
    answers: [
      "You can practice any religion, or not practice a religion.",
      "You can practice one religion, and only one religion.",
      "You can practice Christianism, or other Christian religion.",
      "You can practice Atheism, or not practice a religion."
    ],
    correctAnswerString: "You can practice any religion, or not practice a religion.",
    correctAnswer: 0,
    userAnswer: null
  }
  //question11:
  // {
  //   question: "What is the economic system in the United States?*",
  //   answers: [
  //     "Capitalist economy", //market economy
  //     "Socialist economy",
  //     "Digital economy",
  //     "Virtual economy"
  //   ],
  //   correctAnswerString: "Capitalist economy",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question12:
  // {
  //   question: "What is the “rule of law”?",
  //   answers: [
  //     "No one is above the law.", //Everyone must follow the law. Leaders must obey the law. Government must obey the law.
  //     "Only the goverment is above the law.",
  //     "The President is above the law.",
  //     "Politician are above the law."
  //   ],
  //   correctAnswerString: "No one is above the law.",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question13:
  // {
  //   question: "Name one branch or part of the government.*",
  //   answers: [
  //     "executive", //Congress, legislative, President, the courts, judicial
  //     "republicans",
  //     "democrats",
  //     "Senate"
  //   ],
  //   correctAnswerString: "executive",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question14:
  // {
  //   question: "What stops one branch of government from becoming too powerful?",
  //   answers: [
  //     "separation of powers", //checks and balances
  //     "FBI",
  //     "CIA",
  //     "NSA"
  //   ],
  //   correctAnswerString: "separation of powers",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question15:
  // {
  //   question: "Who is in charge of the executive branch?",
  //   answers: [
  //     "the Secretary of the Treasury",
  //     "the President",
  //     "the Supreme Court",
  //     "the Secretary of State"
  //   ],
  //   correctAnswerString: "the President",
  //   correctAnswer: 1,
  //   userAnswer: null
  // },
  // //question16:
  // {
  //   question: "Who makes federal laws?",
  //   answers: [
  //     "the Congress", //Senate and House (of Representatives), (U.S. or national) legislature
  //     "the President",
  //     "the Supreme Court",
  //     "the Vice President"
  //   ],
  //   correctAnswerString: "the Congress",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question17:
  // {
  //   question: "What are the two parts of the U.S. Congress?*",
  //   answers: [
  //     "the Senate and House (of Representatives)",
  //     "the Democrats and the Republicans",
  //     "the President and the Vice President",
  //     "the Speaker and the House"
  //   ],
  //   correctAnswerString: "the Senate and House (of Representatives)",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question18:
  // {
  //   question: "How many U.S. Senators are there?",
  //   answers: [
  //     "fifty (50)",
  //     "twenty five (25)",
  //     "one hundred (100)",
  //     "one hundred twenty five (125)"
  //   ],
  //   correctAnswerString: "one hundred (100)",
  //   correctAnswer: 2,
  //   userAnswer: null
  // },
  // //question19:
  // {
  //   question: "We elect a U.S. Senator for how many years?",
  //   answers: [
  //     "ten (10)",
  //     "two (2)",
  //     "six (6)",
  //     "eight (8)"
  //   ],
  //   correctAnswerString: "six (6)",
  //   correctAnswer: 2,
  //   userAnswer: null
  // },
  // //question20:
  // //Who is one of your state’s U.S. Senators now?*
  // //question21:
  // {
  //   question: "The House of Representatives has how many voting members?",
  //   answers: [
  //     "four hundred thirty-five (435)",
  //     "four hundred thirty-four (434)",
  //     "four hundred thirty-six (436)",
  //     "four hundred thirty-three (433)"
  //   ],
  //   correctAnswerString: "four hundred thirty-five (435)",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question22:
  // {
  //   question: "We elect a U.S. Representative for how many years?",
  //   answers: [
  //     "two (2)",
  //     "six (6)",
  //     "eight (8)",
  //     "four (4)"
  //   ],
  //   correctAnswerString: "two (2)",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question23:
  // //Name your U.S. Representative.
  // //question24:
  // {
  //   question: "Who does a U.S. Senator represent?",
  //   answers: [
  //     "all people of the state",
  //     "all people of the city",
  //     "all people of the counties",
  //     "all people of the capital"
  //   ],
  //   correctAnswerString: "all people of the state",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question25:
  // {
  //   question: "Why do some states have more Representatives than other states?",
  //   answers: [
  //     "(because of) the state’s population", //(because) they have more people, (because) some states have more people
  //     "(because of) the country population",
  //     "(because of) the city’s population",
  //     "(because of) the counties’s population"
  //   ],
  //   correctAnswerString: "(because of) the state’s population",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question26:
  // {
  //   question: "We elect a President for how many years?",
  //   answers: [
  //     "four (4)",
  //     "six (6)",
  //     "eight (8)",
  //     "ten (10)"
  //   ],
  //   correctAnswerString: "four (4)",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question27:
  // {
  //   question: "In what month do we vote for President?*",
  //   answers: [
  //     "November",
  //     "December",
  //     "October",
  //     "September"
  //   ],
  //   correctAnswerString: "November",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question28:
  // //What is the name of the President of the United States now?*
  // //question29:
  // //What is the name of the Vice President of the United States now?
  // //question30:
  // {
  //   question: "If the President can no longer serve, who becomes President?",
  //   answers: [
  //     "the Vice President",
  //     "the National Security Advisor",
  //     "the Secretary of State",
  //     "the Speaker of the House"
  //   ],
  //   correctAnswerString: "the Vice President",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question31:
  // {
  //   question: "If both the President and the Vice President can no longer serve, who becomes President?",
  //   answers: [
  //     "the Vice President",
  //     "the National Security Advisor",
  //     "the Secretary of State",
  //     "the Speaker of the House"
  //   ],
  //   correctAnswerString: "the Vice President",
  //   correctAnswer: 3,
  //   userAnswer: null
  // },
  // //question32:
  // {
  //   question: "Who is the Commander in Chief of the military?",
  //   answers: [
  //     "the Vice President",
  //     "the President",
  //     "the Secretary of State",
  //     "the Speaker of the House"
  //   ],
  //   correctAnswerString: "the President",
  //   correctAnswer: 1,
  //   userAnswer: null
  // },
  // //question33:
  // {
  //   question: "Who signs bills to become laws?",
  //   answers: [
  //     "the Vice President",
  //     "the President",
  //     "the Secretary of State",
  //     "the Speaker of the House"
  //   ],
  //   correctAnswerString: "the President",
  //   correctAnswer: 1,
  //   userAnswer: null
  // },
  // //question34:
  // {
  //   question: "Who vetoes bills?",
  //   answers: [
  //     "the Vice President",
  //     "the President",
  //     "the Secretary of State",
  //     "the Speaker of the House"
  //   ],
  //   correctAnswerString: "the President",
  //   correctAnswer: 1,
  //   userAnswer: null
  // },
  // //question35:
  // {
  //   question: "What does the President’s Cabinet do?",
  //   answers: [
  //     "advises the President",
  //     "advises the Congress",
  //     "advises the Vice President",
  //     "advises the Senate"
  //   ],
  //   correctAnswerString: "advises the President",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question36:
  // {
  //   question: "What are two Cabinet-level positions?",
  //   answers: [
  //     "Secretary of State & Secretary of Education",
  //     "Secretary of Agriculture & Secretary of Media",
  //     "Secretary of Commerce & Secretary of Veterinary",
  //     "Secretary of Defense & Secretary of Guns"
  //   ],
  //   correctAnswerString: "Secretary of State & Secretary of Education",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question37:
  // {
  //   question: "What does the judicial branch do?",
  //   answers: [
  //     "reviews laws", //explains laws, resolves disputes (disagreements), decides if a law goes against the Constitution
  //     "judge criminals",
  //     "jail criminals",
  //     "sentence criminals"
  //   ],
  //   correctAnswerString: "reviews laws",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question38:
  // {
  //   question: "What is the highest court in the United States?",
  //   answers: [
  //     "the Supreme Court",
  //     "the Supreme Law",
  //     "the Supreme Judge",
  //     "the Supreme Coil"
  //   ],
  //   correctAnswerString: "the Supreme Court",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question39:
  // {
  //   question: "How many justices are on the Supreme Court?",
  //   answers: [
  //     "nine (9)",
  //     "ten (10)",
  //     "eleven (11)",
  //     "eight (8)"
  //   ],
  //   correctAnswerString: "nine (9)",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question40:
  // {
  //   question: "Who is the Chief Justice of the United States now?",
  //   answers: [
  //     "John Roberts", //(John G. Roberts, Jr.)
  //     "Sonia Sotomayor",
  //     "Ruth Bader Ginsburg",
  //     "Anthony Kennedy"
  //   ],
  //   correctAnswerString: "John Roberts",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question41:
  // {
  //   question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
  //   answers: [
  //     "to print money", // to declare war, to create an army, to make treaties
  //     "to print license",
  //     "to print books",
  //     "to print passports"
  //   ],
  //   correctAnswerString: "to print money",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question42:
  // {
  //   question: "Under our Constitution, some powers belong to the states. What is one power of the states?",
  //   answers: [
  //     "provide schooling and education", //provide protection (police), provide safety (fire departments), give a driver’s license, approve zoning and land use
  //     "provide alcohol",
  //     "provide tobacco",
  //     "provide schooling with bicycles"
  //   ],
  //   correctAnswerString: "provide schooling and education",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question43:
  // // {
  // //   question: "Who is the Governor of your state now?",
  // //   answers: [
  // //     "",
  // //     "",
  // //     "",
  // //     ""
  // //   ],
  // //   correctAnswerString: "",
  // //   correctAnswer: 0,
  // //   userAnswer: null
  // // },
  // //question44:
  // // {
  // //   question: "What is the capital of your state?*",
  // //   answers: [
  // //     "",
  // //     "",
  // //     "",
  // //     ""
  // //   ],
  // //   correctAnswerString: "",
  // //   correctAnswer: 0,
  // //   userAnswer: null
  // // },
  // //question45:
  // {
  //   question: "What are the two major political parties in the United States?*",
  //   answers: [
  //     "Democratic & Republican",
  //     "Democratic & Socialist",
  //     "Green & Independets",
  //     "Socialist & Libertarian"
  //   ],
  //   correctAnswerString: "Democratic & Republican",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question46:
  // {
  //   question: "What is the political party of the President now?",
  //   answers: [
  //     "Republican (Party)",
  //     "Democratic (Party)",
  //     "Libertarian (Party)",
  //     "Green (Party)"
  //   ],
  //   correctAnswerString: "Republican (Party)",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question47:
  // // {
  // //   question: "What is the name of the Speaker of the House of Representatives now?",
  // //   answers: [
  // //     "",
  // //     "",
  // //     "",
  // //     ""
  // //   ],
  // //   correctAnswerString: "",
  // //   correctAnswer: 0,
  // //   userAnswer: null
  // // },
  // //question48:
  // {
  //   question: "There are four amendments to the Constitution about who can vote. Describe one of them.",
  //   answers: [
  //     "Citizens eighteen (18) and older (can vote).", //You don’t have to pay (a poll tax) to vote., Any citizen can vote. (Women and men can vote.), A male citizen of any race (can vote).
  //     "Citizens seventeen (17) and older (can vote).",
  //     "Citizens nineteen (19) and older (can vote).",
  //     "Citizens twenty one (21) and older (can vote)."
  //   ],
  //   correctAnswerString: "Citizens eighteen (18) and older (can vote).",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question49:
  // // {
  // //   question: "",
  // //   answers: [
  // //     "",
  // //     "",
  // //     "",
  // //     ""
  // //   ],
  // //   correctAnswerString: "",
  // //   correctAnswer: 0,
  // //   userAnswer: null
  // // },
  // //question50:
  // // {
  // //   question: "",
  // //   answers: [
  // //     "",
  // //     "",
  // //     "",
  // //     ""
  // //   ],
  // //   correctAnswerString: "",
  // //   correctAnswer: 0,
  // //   userAnswer: null
  // // },
  // //question51:
  // // {
  // //   question: "",
  // //   answers: [
  // //     "",
  // //     "",
  // //     "",
  // //     ""
  // //   ],
  // //   correctAnswerString: "",
  // //   correctAnswer: 0,
  // //   userAnswer: null
  // // },
  // //question52:
  // // {
  // //   question: "",
  // //   answers: [
  // //     "",
  // //     "",
  // //     "",
  // //     ""
  // //   ],
  // //   correctAnswerString: "",
  // //   correctAnswer: 0,
  // //   userAnswer: null
  // // },
  // //question53:
  // // {
  // //   question: "",
  // //   answers: [
  // //     "",
  // //     "",
  // //     "",
  // //     ""
  // //   ],
  // //   correctAnswerString: "",
  // //   correctAnswer: 0,
  // //   userAnswer: null
  // // },
  // // //question54:
  // // {
  // //   question: "",
  // //   answers: [
  // //     "",
  // //     "",
  // //     "",
  // //     ""
  // //   ],
  // //   correctAnswerString: "",
  // //   correctAnswer: 0,
  // //   userAnswer: null
  // // },
  // //question55:
  // // {
  // //   question: "",
  // //   answers: [
  // //     "",
  // //     "",
  // //     "",
  // //     ""
  // //   ],
  // //   correctAnswerString: "",
  // //   correctAnswer: 0,
  // //   userAnswer: null
  // // },
  // //question56:
  // {
  //   question: "When is the last day you can send in federal income tax forms?",
  //   answers: [
  //     "May 15",
  //     "July 15",
  //     "March 15",
  //     "April 15"
  //   ],
  //   correctAnswerString: "April 15",
  //   correctAnswer: 3,
  //   userAnswer: null
  // },
  // //question57:
  // //question58:
  // //question59:
  // //question60:
  // //question61:
  // //question62:
  // {
  //   question: "Who wrote the Declaration of Independence?",
  //   answers: [
  //     "Franklin Roosevelt",
  //     "George Washington",
  //     "Benjamin Franklin",
  //     "Thomas Jefferson"
  //   ],
  //   correctAnswerString: "Thomas Jefferson",
  //   correctAnswer: 3,
  //   userAnswer: null
  // },
  // //question63:
  // //question64:
  // //question65:
  // //question66:
  // {
  //   question: "When was the Constitution written?",
  //   answers: [
  //     "1877",
  //     "1787",
  //     "1767",
  //     "1897"
  //   ],
  //   correctAnswerString: "1787",
  //   correctAnswer: 1,
  //   userAnswer: null
  // },
  // //question67:
  // //question68:
  // //question69:
  // //question70:
  // {
  //   question: "Who was the first President?",
  //   answers: [
  //     "Abraham Lincoln",
  //     "George Washington",
  //     "John Adams",
  //     "Thomas Jefferson"
  //   ],
  //   correctAnswerString: "George Washington",
  //   correctAnswer: 1,
  //   userAnswer: null
  // },
  // //question71:
  // //question72:
  // //question73:
  // //question74:
  // //question75:
  // //question76:
  // //question77:
  // //question78:
  // //question79:
  // {
  //   question: "Who was President during World War I?",
  //   answers: [
  //     "Franklin Roosevelt",
  //     "George Washington",
  //     "James Madison",
  //     "Woodrow Wilson"
  //   ],
  //   correctAnswerString: "Woodrow Wilson",
  //   correctAnswer: 3,
  //   userAnswer: null
  // },
  // //question80:
  // //question81:
  // {
  //   question: "Who did the United States fight in World War II?",
  //   answers: [
  //     "Japan, Germany, and Italy",
  //     "Germany, Russia, and France",
  //     "Japan, Russia, and Germany",
  //     "Japan, Spain, and Germany"
  //   ],
  //   correctAnswerString: "Japan, Germany, and Italy",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question82:
  // //question83:
  // //question84:
  // //question85:
  // //question86:
  // //question87:
  // {
  //   question: "Name one American Indian tribe in the United States.",
  //   answers: [
  //     "Indians",
  //     "RedSkins",
  //     "Blackhawks",
  //     "Cherokee"
  //   ],
  //   correctAnswerString: "Cherokee",
  //   correctAnswer: 3,
  //   userAnswer: null
  // },
  // //question88:
  // //question89:
  // //question90:
  // //question91:
  // //question92:
  // {
  //   question: "Name one state that borders Canada.",
  //   answers: [
  //     "Iowa",
  //     "South Dakota",
  //     "Montana",
  //     "Massachusetts"
  //   ],
  //   correctAnswerString: "Montana",
  //   correctAnswer: 2,
  //   userAnswer: null
  // },
  // //question93:
  // {
  //   question: "Name one state that borders Mexico.",
  //   answers: [
  //     "Florida",
  //     "Arizona",
  //     "Louisiana",
  //     "Nevada"
  //   ],
  //   correctAnswerString: "Arizona",
  //   correctAnswer: 1,
  //   userAnswer: null
  // },
  // //question94:
  // {
  //   question: "What is the capital of the United States?",
  //   answers: [
  //     "Washington, D.C.",
  //     "New York, NY",
  //     "Los Angeles, CA",
  //     "Boston, MA"
  //   ],
  //   correctAnswerString: "Washington, D.C.",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question95:
  // {
  //   question: "Where is the Statue of Liberty?",
  //   answers: [
  //     "Liberty Island",
  //     "Manhattan",
  //     "Long Island",
  //     "Brooklyn"
  //   ],
  //   correctAnswerString: "Liberty Island",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question96:
  // {
  //   question: "Why does the flag have 13 stripes?",
  //   answers: [
  //     "because there were 13 original colonies",
  //     "because there were 13 original cities",
  //     "because there were 13 original counties",
  //     "because there were 13 original roads"
  //   ],
  //   correctAnswerString: "because there were 13 original colonies",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question97:
  // {
  //   question: "Why does the flag have 50 stars?",
  //   answers: [
  //     "because there is one star for each state",
  //     "because there is one star for each colonies",
  //     "because there is one star for each street",
  //     "because there is one star for each senator"
  //   ],
  //   correctAnswerString: "because there is one star for each state",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question98:
  // {
  //   question: "What is the name of the national anthem?",
  //   answers: [
  //     "The Star-Spangled Banner",
  //     "The Stair-Spangled Banner",
  //     "The Star-Span Banner",
  //     "The Start-Spangled Banner"
  //   ],
  //   correctAnswerString: "The Star-Spangled Banner",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },
  // //question99:
  // {
  //   question: "When do we celebrate Independence Day?",
  //   answers: [
  //     "May 4",
  //     "June 4",
  //     "July 4",
  //     "September 4"
  //   ],
  //   correctAnswerString: "July 4",
  //   correctAnswer: 1,
  //   userAnswer: null
  // },
  // //question100:
  // {
  //   question: "Name two national U.S. holidays.",
  //   answers: [
  //     "Memorial Day & Independence Day",
  //     "Labor Day & Black Friday",
  //     "Columbus Day & Easter",
  //     "Thanksgiving & Halloween"
  //   ],
  //   correctAnswerString: "Memorial Day & Independence Day",
  //   correctAnswer: 0,
  //   userAnswer: null
  // },

];


const getCorrectAnswerIndex = (answers, correctAnswer) => {
  if (!correctAnswer) {
    return null;
  }

  return answers.indexOf(correctAnswer);
};

const getQuizAppQuestions = questions => {
  return questions.map(question => {
    const shuffledAnswers = _.shuffle(question.answers);

    return {
      question: question.question,
      answers: shuffledAnswers,
      correctAnswerString: question.correctAnswerString,
      correctAnswer: getCorrectAnswerIndex(
        shuffledAnswers,
        question.correctAnswerString
      ) !== null ? getCorrectAnswerIndex(shuffledAnswers, question.correctAnswerString) : question.correctAnswer,
      userAnswer: null
    };
  });
};


function getNumberOfCorrectAnswers() {
  let numberOfCorrectAnswers = 0;

  quizAppData.forEach(function(ele) {
    if (ele.userAnswer === ele.correctAnswer) {
      numberOfCorrectAnswers++
    }
  });
  return numberOfCorrectAnswers;
}

let quizAppData = getQuizAppQuestions(_.shuffle(quizAppQuestions));
let currentQuestion = 0;
let numOfQuestion = 10;

let deleteUserAnswers = () => {
  quizAppData.forEach(function(ele) {
    ele.userAnswer = null;
  })
};


let questionDisplay = () => {
  //console.log(quizAppData);
  $("#question").text(quizAppData[currentQuestion].question);

  $("#answers").empty();

  let numberOfAnswers = quizAppData[currentQuestion].answers.length;

  for (let i = 0; i < numberOfAnswers; i++) {
    let answersHTML = `<label class='answers'><input type='radio' class='option' name='option' value='${i}'> ${quizAppData[currentQuestion].answers[i]} </label><br>`;
    $("#answers").append(answersHTML);
  }

  if (currentQuestion === 0) {
    $("#back-button").prop("disabled", true);
  } else {
    $("#back-button").prop("disabled", false);
  }

  const numOfCorrectAnswers = getNumberOfCorrectAnswers();

  $(".status").text("Question: " + (currentQuestion + 1) + "/" + numOfQuestion);
  $(".score").text("Score: " + numOfCorrectAnswers + "/" + numOfQuestion);
  console.log('numOfCorrectAnswers: ' + numOfCorrectAnswers);
};

let resultsDisplay = () => {
  $(".result-msg").empty();

  for (let i = 0; i < numOfQuestion; i++) {
    let userAnswer = quizAppData[i].userAnswer;
    let correctAnswer = quizAppData[i].correctAnswer;

    if (userAnswer !== correctAnswer) {
      let resultsHTML = `
<div class="ansIncorrect">
<h4>${quizAppData[i].question}</h4>
<div class="ansStute"></div>
<div>
<p class='answers'><strong>Your Answer: </strong>${quizAppData[i].answers[quizAppData[i].userAnswer]}</p>
<p class='answers'><strong>Correct Answer: </strong>${quizAppData[i].correctAnswerString}</p>
</div>
</div>`;

      $(".result-msg").append(resultsHTML);
    } else {
      let resultsHTML = `
<div class="ansCorrect">
<h4>${quizAppData[i].question}</h4>
<div class="ansStute"></div>
<div>
<p class='answers'><strong>Correct Answer: </strong>${quizAppData[i].answers[quizAppData[i].userAnswer]}</p>
</div>
</div>`;

      $(".result-msg").append(resultsHTML);
    }
  }

  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "content"
  });
};

let getAnswers = () => {
  let userAnswer = Number($("input[class='option']:checked").val());
  let correctAnswer = quizAppData[currentQuestion].correctAnswer;

  return {
    userAnswer,
    correctAnswer
  };

};

let handleAnswersValidation = () => {
  const {
    correctAnswer,
    userAnswer
  } = getAnswers();

  if (isNaN(userAnswer)) {

  } else {
    $(".option").prop("disabled", !this.checked);

    if (userAnswer !== correctAnswer) {
      $("input[class='option']:checked")
        .parent()
        .css("border", "2px solid #BF0A30")
        .addClass("item-incorrect");

      $("input.option")
        .filter(function() {
          return Number($(this).val()) === correctAnswer;
        })
        .parent()
        .css("border", "2px solid #007fbe")
        .addClass("item-correct");
    } else {
      //numOfCorrectAnswers++
      $("input.option")
        .filter(function() {
          return Number($(this).val()) === correctAnswer;
        })
        .parent()
        .css("border", "2px solid #007fbe")
        .addClass("item-correct");
    }
    quizAppData[currentQuestion].userAnswer = userAnswer;
  }
};

let handleClickNext = () => {
  const {
    correctAnswer,
    userAnswer
  } = getAnswers();
  const numOfCorrectAnswers = getNumberOfCorrectAnswers();
  if (isNaN(userAnswer)) {

    $("#next-button").popover({
      html: true,
      title: "Error:",
      animation: true,
      //       'trigger': 'hover',
      placement: "right",
      content: "Please select an answer."
    });
  } else {
    $("next-button").popover("destroy");
    // console.log('numOfQuestion: ', numOfQuestion);
    // console.log(currentQuestion);
    if (currentQuestion + 1 === numOfQuestion) {
      if (numOfCorrectAnswers === 10) {
        $('.txt-results').text(`Excellent, you pass! You are a true Patriot!!!`).parent().addClass('passContainer'); //
      } else if (numOfCorrectAnswers >= 6 && numOfCorrectAnswers < 10) {
        $('.txt-results').text(`${classes.correctMSG.randomMSG()}, you pass!!!`).parent().addClass('passContainer'); //
      } else if (numOfCorrectAnswers >= 2 && numOfCorrectAnswers < 6) {
        $('.txt-results').text(`${classes.incorrectMSG.randomMSG()}, you failed! Please try again.`).parent().addClass('failContainer'); //
      } else {
        $('.txt-results').text(`FAILED! Where are you from again?`).parent().addClass('failContainer'); //
      }


      $(".final-score").text(
        "Your Final Score is: " + numOfCorrectAnswers + "/" + numOfQuestion
      );
      resultsDisplay();

      $(".quiz-section").hide();
      $(".start-section").hide();
      $(".result-section").show();
    } else {
      currentQuestion++;
    }

    questionDisplay();
  }
};

let handleClickBack = () => {
  if (currentQuestion !== 0) {
    currentQuestion--;
    questionDisplay();
  } else {
    handleClickTryAgain();
  }
};

let handleClickTryAgain = () => {
  $(".start-section").show();
  $(".quiz-section").hide();
  $(".result-section").hide();
  currentQuestion = 0;
  numOfCorrectAnswers = 0;

  deleteUserAnswers();
  quizAppData = getQuizAppQuestions(_.shuffle(quizAppQuestions));
};

let handleClickStart = () => {
  $(".result-section").hide();
  $(".start-section").hide();
  $(".quiz-section").show();

  questionDisplay();
};

let createEventListeners = () => {
  $("#startBtn").on("click", () => {
    handleClickStart();
  });

  $(".nav-button").on("click", "#back-button", () => {
    handleClickBack();
  });

  $(".result-section").on("click", "#try-again", () => {
    handleClickTryAgain();
  });

  $(".radio").on("click", () => {
    handleAnswersValidation();
  });

  $(".nav-button").on("click", "#next-button", () => {
    handleClickNext();
  });
};

const renderQuiz = () => {
  $(".quiz-section").hide();
  $(".result-section").hide();

  createEventListeners();
};

$(renderQuiz);