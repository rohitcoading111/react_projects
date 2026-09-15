import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const outputDirectory = path.join(scriptDirectory, '..', 'data', 'questions');
const requestedTotal = Math.max(Number.parseInt(process.env.QUESTION_COUNT || '100000', 10), 1);

const templates = [
  'Which statement is correct about',
  'Which option best describes',
  'What is the primary purpose of',
  'Which behavior is associated with',
  'In normal usage, what does',
];

const categoryFacts = {
  javascript: [
    ['let declarations', 'create block-scoped variables that can be reassigned'],
    ['const declarations', 'create block-scoped bindings that cannot be reassigned'],
    ['Array.map()', 'returns a new array containing transformed values'],
    ['Array.filter()', 'returns a new array containing values that pass a predicate'],
    ['Promises', 'represent the eventual completion or failure of an asynchronous operation'],
    ['async functions', 'always return a Promise'],
    ['the spread syntax', 'expands iterable values or object properties into a new expression'],
    ['strict equality', 'compares values without performing type coercion'],
    ['closures', 'allow a function to retain access to variables from its lexical scope'],
    ['JSON.parse()', 'converts a JSON string into a JavaScript value'],
  ],
  react: [
    ['components', 'are reusable units that return user interface elements'],
    ['props', 'are read-only inputs passed from a parent component'],
    ['useState', 'provides state and a setter for a function component'],
    ['useEffect', 'runs side effects after React commits a render'],
    ['keys in lists', 'help React identify which list items changed'],
    ['controlled inputs', 'derive their current value from React state'],
    ['lifting state up', 'moves shared state to the nearest common parent'],
    ['fragments', 'group elements without adding an extra DOM node'],
    ['the virtual DOM', 'helps React calculate efficient user interface updates'],
    ['context', 'provides values to descendants without passing props at every level'],
  ],
  python: [
    ['list comprehensions', 'create lists from an iterable using a compact expression'],
    ['dictionaries', 'store key-value pairs'],
    ['tuples', 'are ordered immutable sequences'],
    ['generators', 'produce values lazily during iteration'],
    ['decorators', 'wrap a function or class to extend its behavior'],
    ['the with statement', 'manages setup and cleanup around a context manager'],
    ['is versus ==', 'checks object identity versus value equality'],
    ['virtual environments', 'isolate project dependencies'],
    ['try and except', 'handle selected exceptions'],
    ['pip', 'installs and manages Python packages'],
  ],
  java: [
    ['classes', 'define the structure and behavior of objects'],
    ['interfaces', 'declare a contract that implementing classes can fulfill'],
    ['the JVM', 'executes Java bytecode'],
    ['method overloading', 'uses the same method name with different parameter lists'],
    ['method overriding', 'allows a subclass to provide a specific implementation'],
    ['final variables', 'can be assigned only once'],
    ['ArrayList', 'provides a resizable array implementation'],
    ['HashMap', 'stores key-value associations'],
    ['checked exceptions', 'must be caught or declared by the method'],
    ['garbage collection', 'automatically reclaims unreachable objects'],
  ],
  sql: [
    ['SELECT', 'retrieves rows from one or more tables'],
    ['WHERE', 'filters rows before grouping'],
    ['GROUP BY', 'creates groups for aggregate calculations'],
    ['HAVING', 'filters grouped results'],
    ['INNER JOIN', 'returns rows with matching values in both tables'],
    ['PRIMARY KEY', 'uniquely identifies a row in a table'],
    ['FOREIGN KEY', 'references a key in another table'],
    ['CREATE INDEX', 'creates an index that can speed up lookups'],
    ['transactions', 'group operations into a unit of work'],
    ['normalization', 'reduces unnecessary data duplication'],
  ],
  nodejs: [
    ['Node.js', 'runs JavaScript outside the browser using the V8 engine'],
    ['npm', 'manages JavaScript packages and project scripts'],
    ['the event loop', 'coordinates non-blocking asynchronous callbacks'],
    ['process.env', 'provides access to environment variables'],
    ['streams', 'process data incrementally instead of loading it all at once'],
    ['Buffer', 'represents a sequence of bytes'],
    ['Express middleware', 'can inspect or modify a request before the next handler'],
    ['module exports', 'expose values from a Node.js module'],
    ['Promise.all', 'waits for multiple promises and rejects if one rejects'],
    ['HTTP status 404', 'indicates that a requested resource was not found'],
  ],
  mongodb: [
    ['documents', 'store data as BSON objects with flexible fields'],
    ['collections', 'group related MongoDB documents'],
    ['$match', 'filters documents in an aggregation pipeline'],
    ['$group', 'combines documents by a specified expression'],
    ['$lookup', 'combines documents from another collection'],
    ['indexes', 'help MongoDB find matching documents efficiently'],
    ['ObjectId', 'is a common unique identifier type for MongoDB documents'],
    ['insertMany', 'inserts multiple documents in one operation'],
    ['projections', 'control which fields are returned'],
    ['replica sets', 'provide redundancy and failover for MongoDB deployments'],
  ],
  git: [
    ['git clone', 'copies a remote repository to a local directory'],
    ['git status', 'shows the working tree and staging area state'],
    ['git add', 'places changes into the staging area'],
    ['git commit', 'records staged changes in repository history'],
    ['git pull', 'fetches remote changes and integrates them locally'],
    ['git push', 'uploads local commits to a remote repository'],
    ['branches', 'allow independent lines of development'],
    ['git merge', 'combines changes from another branch'],
    ['git rebase', 'replays commits onto a new base commit'],
    ['.gitignore', 'specifies files Git should not track'],
  ],
  css: [
    ['the box model', 'describes content, padding, border, and margin'],
    ['display: flex', 'creates a flexible one-dimensional layout'],
    ['display: grid', 'creates a two-dimensional grid layout'],
    ['position: fixed', 'positions an element relative to the viewport'],
    ['media queries', 'apply styles based on conditions such as viewport width'],
    ['CSS variables', 'store reusable custom property values'],
    ['z-index', 'controls stacking order for positioned elements'],
    ['rem units', 'are relative to the root element font size'],
    ['pseudo-classes', 'style elements in a particular state'],
    ['specificity', 'helps determine which competing declaration wins'],
  ],
  dsa: [
    ['a stack', 'follows last-in, first-out ordering'],
    ['a queue', 'follows first-in, first-out ordering'],
    ['binary search', 'searches a sorted range by repeatedly halving it'],
    ['merge sort', 'has O(n log n) time complexity in its usual form'],
    ['a hash table', 'provides average constant-time key lookup'],
    ['depth-first search', 'explores a path deeply before backtracking'],
    ['breadth-first search', 'explores neighboring levels before deeper levels'],
    ['a linked list', 'stores nodes connected by references'],
    ['Big O notation', 'describes how resource usage grows with input size'],
    ['dynamic programming', 'solves problems by reusing overlapping subproblem results'],
  ],
};

function createQuestion(category, facts, index, categoryCount) {
  const factIndex = index % facts.length;
  const [concept, correctText] = facts[factIndex];
  const correctAnswerId = (index % 4) + 1;
  const answers = [{ id: correctAnswerId, text: correctText, isCorrect: true }];

  for (let offset = 1; answers.length < 4; offset += 1) {
    const distractor = facts[(factIndex + offset) % facts.length][1];
    if (distractor !== correctText) {
      const distractorId = [1, 2, 3, 4].find((id) => !answers.some((answer) => answer.id === id));
      answers.push({ id: distractorId, text: distractor, isCorrect: false });
    }
  }

  answers.sort((left, right) => left.id - right.id);
  const difficulty = index % 3 === 0 ? 'easy' : index % 3 === 1 ? 'medium' : 'hard';
  const template = templates[index % templates.length];
  const questionNumber = index + 1;

  return {
    text: `${template} ${concept}? (Question ${questionNumber} of ${categoryCount})`,
    type: 'multiple-choice',
    difficulty,
    category,
    answers,
    explanation: `${concept} ${correctText}.`,
  };
}

async function generateQuestions() {
  await mkdir(outputDirectory, { recursive: true });
  const categories = Object.entries(categoryFacts);
  const baseCount = Math.floor(requestedTotal / categories.length);
  const remainder = requestedTotal % categories.length;
  let generated = 0;

  for (const [categoryIndex, [category, facts]] of categories.entries()) {
    const categoryCount = baseCount + (categoryIndex < remainder ? 1 : 0);
    const questions = Array.from({ length: categoryCount }, (_, index) =>
      createQuestion(category[0].toUpperCase() + category.slice(1), facts, index, categoryCount),
    );
    const outputPath = path.join(outputDirectory, `${category}.json`);
    await writeFile(outputPath, `${JSON.stringify(questions)}\n`, 'utf8');
    generated += categoryCount;
    console.log(`Generated ${categoryCount} questions for ${category}`);
  }

  console.log(`Generated ${generated} questions in ${outputDirectory}`);
}

await generateQuestions();
