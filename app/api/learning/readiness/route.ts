import {NextResponse} from 'next/server';
import {inspectLearningReadiness} from '@/app/learn/server/learning-readiness';
export const runtime='nodejs';
export const dynamic='force-dynamic';
export async function GET(){
 const state=inspectLearningReadiness();
 return NextResponse.json({ready:state.ready,checks:state.checks},{status:state.ready?200:503,headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
}
