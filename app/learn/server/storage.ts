import type {LearnerNoteInput,LearningEventInput} from '../data-contracts';
import type {VerifiedLearner} from './identity';
/** Contract only. Database-backed implementation must bind owner to verified session. */
export type StoredLearnerNote = Readonly<{id:string;resourceRef:string;content:string;version:number;updatedAt:string}>;
export type StoredLearningEvent = Readonly<{id:string;resourceRef:string;eventType:string;occurredAt:string}>;
export interface LearnerStorage {
 listNotes(learner:VerifiedLearner,resourceRef?:string):Promise<StoredLearnerNote[]>;
 saveNote(learner:VerifiedLearner,input:LearnerNoteInput):Promise<StoredLearnerNote>;
 recordEvent(learner:VerifiedLearner,input:LearningEventInput):Promise<StoredLearningEvent>;
}
export class LearnerStorageUnavailableError extends Error {
 constructor(){super('Learner storage is not configured');this.name='LearnerStorageUnavailableError';}
}
export const disabledLearnerStorage:LearnerStorage = {
 async listNotes(){throw new LearnerStorageUnavailableError();},
 async saveNote(){throw new LearnerStorageUnavailableError();},
 async recordEvent(){throw new LearnerStorageUnavailableError();}
};
