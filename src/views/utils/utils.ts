export function getRandomInt(max = 4) {
  return Math.floor(Math.random() * max);
}

export function decodeQ(encoded: string) {
  return decodeURIComponent(encoded);
}

export const money = [
  { level: "1", amount: "100" },
  { level: "2", amount: "200" },
  { level: "3", amount: "300" },
  { level: "4", amount: "500" },
  { level: "5", amount: "1,000" },
  { level: "6", amount: "2,000" },
  { level: "7", amount: "4,000" },
  { level: "8", amount: "8,000" },
  { level: "9", amount: "16,000" },
  { level: "10", amount: "25,000" },
  { level: "11", amount: "50,000" },
  { level: "12", amount: "100,000" },
  { level: "13", amount: "250,000" },
  { level: "14", amount: "500,000" },
  { level: "15", amount: "1,000,000" },
];

export const backupQuestions = [
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science%3A%20Computers",
    question: "What%20does%20the%20Prt%20Sc%20button%20do%3F",
    correct_answer:
      "Captures%20what%27s%20on%20the%20screen%20and%20copies%20it%20to%20your%20clipboard",
    incorrect_answers: [
      "Nothing",
      "Saves%20a%20.png%20file%20of%20what%27s%20on%20the%20screen%20in%20your%20screenshots%20folder%20in%20photos",
      "Closes%20all%20windows",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science%3A%20Computers",
    question:
      "In%20any%20programming%20language%2C%20what%20is%20the%20most%20common%20way%20to%20iterate%20through%20an%20array%3F",
    correct_answer: "%27For%27%20loops",
    incorrect_answers: [
      "%27If%27%20Statements",
      "%27Do-while%27%20loops",
      "%27While%27%20loops",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science%3A%20Computers",
    question:
      "If%20you%20were%20to%20code%20software%20in%20this%20language%20you%27d%20only%20be%20able%20to%20type%200%27s%20and%201%27s.",
    correct_answer: "Binary",
    incorrect_answers: ["JavaScript", "C%2B%2B", "Python"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science%3A%20Computers",
    question:
      "Generally%2C%20which%20component%20of%20a%20computer%20draws%20the%20most%20power%3F",
    correct_answer: "Video%20Card",
    incorrect_answers: ["Hard%20Drive", "Processor", "Power%20Supply"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science%3A%20Computers",
    question:
      "Unix%20Time%20is%20defined%20as%20the%20number%20of%20seconds%20that%20have%20elapsed%20since%20when%3F",
    correct_answer: "Midnight%2C%20January%201%2C%201970",
    incorrect_answers: [
      "Midnight%2C%20July%204%2C%201976",
      "Midnight%20on%20the%20creator%20of%20Unix%27s%20birthday",
      "Midnight%2C%20July%204%2C%201980",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science%3A%20Computers",
    question:
      "Which%20of%20the%20following%20languages%20is%20used%20as%20a%20scripting%20language%20in%20the%20Unity%203D%20game%20engine%3F",
    correct_answer: "C%23",
    incorrect_answers: ["Java", "C%2B%2B", "Objective-C"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science%3A%20Computers",
    question:
      "The%20name%20of%20technology%20company%20HP%20stands%20for%20what%3F",
    correct_answer: "Hewlett-Packard",
    incorrect_answers: ["Howard%20Packmann", "Husker-Pollosk", "Hellman-Pohl"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science%3A%20Computers",
    question:
      "Which%20of%20these%20is%20not%20a%20key%20value%20of%20Agile%20software%20development%3F",
    correct_answer: "Comprehensive%20documentation",
    incorrect_answers: [
      "Individuals%20and%20interactions",
      "Customer%20collaboration",
      "Responding%20to%20change",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science%3A%20Computers",
    question: "What%20does%20%22LCD%22%20stand%20for%3F",
    correct_answer: "Liquid%20Crystal%20Display",
    incorrect_answers: [
      "Language%20Control%20Design",
      "Last%20Common%20Difference",
      "Long%20Continuous%20Design",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science%3A%20Computers",
    question:
      "Which%20programming%20language%20shares%20its%20name%20with%20an%20island%20in%20Indonesia%3F",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science%3A%20Computers",
    question:
      "According%20to%20the%20International%20System%20of%20Units%2C%20how%20many%20bytes%20are%20in%20a%20kilobyte%20of%20RAM%3F",
    correct_answer: "1000",
    incorrect_answers: ["512", "1024", "500"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science%3A%20Computers",
    question:
      "What%20was%20the%20name%20of%20the%20security%20vulnerability%20found%20in%20Bash%20in%202014%3F",
    correct_answer: "Shellshock",
    incorrect_answers: ["Heartbleed", "Bashbug", "Stagefright"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science%3A%20Computers",
    question:
      "What%20is%20the%20number%20of%20keys%20on%20a%20standard%20Windows%20Keyboard%3F",
    correct_answer: "104",
    incorrect_answers: ["64", "94", "76"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science%3A%20Computers",
    question:
      "What%20vulnerability%20ranked%20%231%20on%20the%20OWASP%20Top%2010%20in%202013%3F",
    correct_answer: "Injection%20",
    incorrect_answers: [
      "Broken%20Authentication",
      "Cross-Site%20Scripting",
      "Insecure%20Direct%20Object%20References",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science%3A%20Computers",
    question: "What%20was%20Bitcoin%27s%20block%20size%20limit%20in%202010%3F",
    correct_answer: "1%20MB",
    incorrect_answers: ["1GB", "1%20KB", "1%20TB"],
  },
]
  .map((q, i) => ({ ...q, ...money[i] }))
  .reverse();

export const music = {
  music: new Audio("/sounds/Round1.ogg"),
  init: function () {
    this.music.loop = true;
    this.music.play();
  },
  check: function (level: number) {
    if (level === 5) {
      this.music.pause();
      this.music = new Audio("/sounds/Round2.ogg");
      this.music.loop = true;
      this.music.play();
    } else if (level === 10) {
      this.music.pause();
      this.music = new Audio("/sounds/Round3.ogg");
      this.music.loop = true;
      this.music.play();
    }
  },
  correct: function () {
    const fx = new Audio("/sounds/RightAnswerShort.ogg");
    fx.play();
  },
  end: function () {
    const fx = new Audio("/sounds/WrongAnswer.ogg");
    this.music.pause();
    fx.play();
  },
};
