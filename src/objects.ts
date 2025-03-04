import { Question, QuestionType } from "./interfaces/question";

/**
 * Creates a blank question with the given id, name, and type
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType,
): Question {
    return {
        id,
        name,
        body: "",
        type,
        options: [],
        expected: "",
        points: 1,
        published: false,
    };
}

/**
 * Determines whether the given answer text is correct for the given question.
 * The answer is correct if it exactly matches the expected answer (ignoring case,
 * leading/trailing whitespace, and line endings).
 */
export function isCorrect(question: Question, answerText: string): boolean {
    // Normalize both strings by trimming whitespace and converting to lowercase
    const normalizedAnswer = answerText.trim().toLowerCase();
    const normalizedExpected = question.expected.trim().toLowerCase();
    return normalizedAnswer === normalizedExpected;
}

/**
 * Determines whether the given answer text is valid for the given question.
 * An answer is valid if it is not empty (after trimming).
 * For multiple choice questions, the answer must also be one of the options.
 */
export function isValid(question: Question, answerText: string): boolean {
    // Check for non-empty answer (ignoring whitespace)
    if (answerText.trim() === "") {
        return false;
    }

    // For multiple choice questions, the answer must exactly match one of the options
    if (question.type === "multiple_choice_question") {
        return question.options.includes(answerText);
    }

    return true;
}
/**
 * Returns a short form representation of the question, combining the id and name.
 * Format: "{id}: {name}"
 * If the name is longer than 10 characters, truncate it to 10 characters.
 */
export function toShortForm(question: Question): string {
    const truncatedName =
        question.name.length > 10 ?
            question.name.substring(0, 10)
        :   question.name;

    return `${question.id}: ${truncatedName}`;
}

/**
 * Returns a markdown representation of the question.
 * Format:
 * # {name}
 * {body}
 * - {option1}
 * - {option2}
 * ...
 */
export function toMarkdown(question: Question): string {
    let markdown = `# ${question.name}\n${question.body}`;

    // Add bullet points for options if they exist
    if (question.options.length > 0) {
        for (const option of question.options) {
            markdown += `\n- ${option}`;
        }
    }

    return markdown;
}

/**
 * Returns a new question that is identical to the given question, but with the name
 * changed to the given new name.
 */
export function renameQuestion(question: Question, newName: string): Question {
    return {
        ...question,
        name: newName,
    };
}

/**
 * Returns a new question that is identical to the given question, but with published
 * set to the opposite of its current value.
 */
export function publishQuestion(question: Question): Question {
    return {
        ...question,
        published: !question.published,
    };
}

/**
 * Creates a duplicate of the given question with a new ID.
 * The duplicate should have the same properties as the original, except:
 * - The ID should be the given newId
 * - The name should be "Copy of {original name}"
 * - The duplicate should not be published
 */
export function duplicateQuestion(newId: number, original: Question): Question {
    return {
        ...original,
        id: newId,
        name: `Copy of ${original.name}`,
        published: false,
    };
}

/**
 * Adds the given option to the question's options array if it's a multiple choice question.
 * Returns a new question with the updated options.
 * If it's not a multiple choice question, returns the original question.
 */
export function addOption(question: Question, newOption: string): Question {
    if (question.type !== "multiple_choice_question") {
        return question;
    }

    return {
        ...question,
        options: [...question.options, newOption],
    };
}

/**
 * Creates a new question by merging properties from multiple questions.
 * The new question takes:
 * - id, name, and published status from the first question parameter
 * - body, type, and expected answer from the second question parameter
 * - options from the third question parameter
 * - points from the fourth question parameter
 */
export function mergeQuestion(
    first: Question, // Contains body, type, and expected
    second: Question, // Contains id, name, and published
    third: Question, // Contains options
    fourth: Question, // Contains points
): Question {
    return {
        id: second.id,
        name: second.name,
        published: second.published,
        body: first.body,
        type: first.type,
        expected: first.expected,
        options: third.options,
        points: fourth.points,
    };
}
