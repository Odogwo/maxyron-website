import { NextResponse } from 'next/server';
import { learningAreas } from '../../../learn/areas';
export const dynamic = 'force-static';
export function GET() {
 return NextResponse.json({schemaVersion:1,kind:'architecture-catalog',status:'preview',areas:learningAreas.map(({slug,title,subtitle,description,sections})=>({slug,title,subtitle,description,sections})),capabilities:{authentication:false,persistence:false,assessments:false,execution:false,credentials:false}}, {headers:{'Cache-Control':'public, max-age=300','X-Content-Type-Options':'nosniff'}});
}
