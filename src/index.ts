import axios from "axios";
import { User } from "../models/User";

const user = new User({});

user.events.on("click", () => console.log("it worked"));
user.events.trigger("click");
