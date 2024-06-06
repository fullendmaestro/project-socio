"use server";

// import Question from "@/database/question.model";
// import Tag from "@/database/tag.model";
// import { connectToDatabase } from "../mongoose";
// import {
//   CreateQuestionParams,
//   DeleteQuestionParams,
//   EditQuestionParams,
//   GetQuestionByIdParams,
//   GetQuestionsParams,
//   QuestionVoteParams,
//   RecommendedParams,
// } from "./shared.types";
// import User from "@/database/user.model";
import { revalidatePath } from "next/cache";
// import Answer from "@/database/answer.model";
// import Interaction from "@/database/interaction.model";
// import { FilterQuery } from "mongoose";

export async function createProject(params: CreateQuestionParams) {
  try {
    // // connectToDatabase();

    const { title, content, tags, author, path } = params;

    // Create the question
    const question = await Question.create({
      title,
      content,
      author,
    });

    // // const tagDocuments = [];

    // Create the tags or get them if they already exist
    // // for (const tag of tags) {
    // //   const existingTag = await Tag.findOneAndUpdate(
    // //     { name: { $regex: new RegExp(`^${tag}$`, "i") } },
    // //     { $setOnInsert: { name: tag }, $push: { questions: question._id } },
    // //     { upsert: true, new: true }
    // //   );

    // //   tagDocuments.push(existingTag._id);
    // // }

    // // await Question.findByIdAndUpdate(question._id, {
    // //   $push: { tags: { $each: tagDocuments } },
    // // });

    // Create an interaction record for the user's ask_question action
    // // await Interaction.create({
    // //   user: author,
    // //   action: "ask_question",
    // //   question: question._id,
    // //   tags: tagDocuments,
    // // });

    // Increment author's reputation by +5 for creating a question
    // // await User.findByIdAndUpdate(author, { $inc: { reputation: 5 } });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}

export async function editProject(params: EditQuestionParams) {
  try {
    connectToDatabase();

    const { questionId, title, content, path } = params;

    const question = await Question.findById(questionId).populate("tags");

    if (!question) {
      throw new Error("Question not found");
    }

    question.title = title;
    question.content = content;

    await question.save();

    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}
