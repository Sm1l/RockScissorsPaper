import { GameItemType } from "types/GameItem";
import { WinStatusType } from "types/WinStatus";

export const determiningTheWinner = (gameItem: GameItemType, compGameItem: GameItemType): WinStatusType => {
  switch (gameItem) {
    case "rock":
      switch (compGameItem) {
        case "rock":
          return "draw";
        case "scissors":
          return "win";
        case "paper":
          return "lose";
      }
      break;
    case "scissors":
      switch (compGameItem) {
        case "rock":
          return "lose";
        case "scissors":
          return "draw";
        case "paper":
          return "win";
      }
      break;
    case "paper":
      switch (compGameItem) {
        case "rock":
          return "win";
        case "scissors":
          return "lose";
        case "paper":
          return "draw";
      }
      break;
  }
};
