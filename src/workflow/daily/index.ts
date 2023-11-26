/*
   1日に1回実行されるファイル
 */
import dotenv from "dotenv";
import { announceForStudySupport } from "./announce-for-study-support.js";
import { dayTest } from "./day-test.js";

// 開発環境での動作確認用に環境変数を読み込む
dotenv.config();

// 学習報告の参加者募集
announceForStudySupport();

// 正常に実行されているかテスト
dayTest();
