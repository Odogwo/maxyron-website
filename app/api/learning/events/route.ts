import {handleLearningRequest} from '@/app/learn/server/learning-api';
export const dynamic='force-dynamic';
export const runtime='nodejs';
export async function POST(request:Request){return handleLearningRequest('events','POST',request);}
