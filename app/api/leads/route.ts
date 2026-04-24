import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      name,
      phone,
      email,
      serviceType,
      serviceCategory,
      area,
      address,
      message,
      sourcePage
    } = body

    // Validate required fields
    if (!name || !phone || !serviceType || !serviceCategory) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate phone format (Indian phone number)
    const phoneRegex = /^[6-9]\d{9}$/
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    const { data, error } = await supabase
      .from('leads')
      .insert({
        name,
        phone: phone.replace(/\D/g, ''),
        email: email || null,
        service_type: serviceType,
        service_category: serviceCategory,
        area: area || null,
        address: address || null,
        message: message || null,
        source_page: sourcePage || null,
        status: 'new'
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to submit lead' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Lead submitted successfully', id: data.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
