import supabaseAdmin from "@/lib/supabaseAdmin";

export async function GET() {
    const {data, error} = await supabaseAdmin
        .from('education')
        .select('*, education_links(id, link, name)')
        .order('id', { ascending: false })
        .order('id', { ascending: false, foreignTable: 'education_links'});

    if(error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify(data), {status: 200})
}