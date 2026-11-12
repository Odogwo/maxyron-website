import {handleLearningRequest} from '@/app/learn/server/learning-api';
export const dynamic='force-dynamic';
export const runtime='nodejs';
export async function GET(request:Request){return handleLearningRequest('me','GET',request);}
