import {Card, ranks, suits} from "./cards";
import {decksFunction} from "../gameLogic/decksFunction";

export const cardsDeckTexasHoldEm: Card[] = decksFunction(suits, ranks);

