import { NextResponse } from 'next/server';
export const dynamic = 'force-static';
export function GET() {
 return NextResponse.json({service:'maxyron-learning-web',status:'interface-preview',schemaVersion:1,backendConnected:false,authenticationEnabled:false,persistenceEnabled:false},{headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
}
