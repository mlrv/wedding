import { Option } from "fp-ts/Option"
import { Party } from "../http/models"

export type RSVPState =
	| { type: 'initial' }
	| { type: 'asked', value: Option<Party> }